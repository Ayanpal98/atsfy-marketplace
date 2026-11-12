// Private quote-floor evaluator. Runs only on Vercel's server; never expose floor data.
const SUPABASE_URL = process.env.SUPABASE_URL || 'https://ogkhaomdfrmyqxmhutkd.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = process.env.SUPABASE_PUBLISHABLE_KEY || 'sb_publishable_UlT0jgbh9PtA4wLfRN1yWA_t4yngpmk';
const ORIGIN = 'https://atsfymarketplace.atsfy.tech';

function reply(res, status, body) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store, max-age=0');
  res.setHeader('Vary', 'Origin');
  return res.status(status).json(body);
}
module.exports = async function handler(req, res) {
  const origin = req.headers.origin;
  if (origin && origin !== ORIGIN) return reply(res, 403, { error: 'Origin not allowed.' });
  res.setHeader('Access-Control-Allow-Origin', ORIGIN);
  res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return reply(res, 405, { error: 'Method not allowed.' });

  const auth = String(req.headers.authorization || '');
  if (!auth.startsWith('Bearer ')) return reply(res, 401, { error: 'Admin sign-in required.' });
  try {
    const userResponse = await fetch(SUPABASE_URL + '/auth/v1/user', {
      headers: { apikey: SUPABASE_PUBLISHABLE_KEY, Authorization: auth }
    });
    if (!userResponse.ok) return reply(res, 401, { error: 'Session is invalid or expired.' });
    const user = await userResponse.json();
    if (user?.app_metadata?.role !== 'admin') return reply(res, 403, { error: 'Admin role required.' });

    if (!process.env.ATSFY_PRICE_FLOORS_JSON) {
      return reply(res, 503, { error: 'Private price floors are not configured. No quote can be approved yet.', code: 'FLOORS_NOT_CONFIGURED' });
    }
    let floors;
    try { floors = JSON.parse(process.env.ATSFY_PRICE_FLOORS_JSON); }
    catch { return reply(res, 503, { error: 'Private price-floor configuration is invalid. Ask the system administrator to correct it.' }); }

    const { floorKey, proposedPrice } = req.body || {};
    if (typeof floorKey !== 'string' || !/^[a-z0-9][a-z0-9._:-]{1,119}$/i.test(floorKey)) return reply(res, 400, { error: 'Choose a valid catalogue item and tier.' });
    const amount = Number(proposedPrice);
    if (!Number.isFinite(amount) || amount <= 0 || amount > 100000000) return reply(res, 400, { error: 'Enter a valid proposed amount in INR.' });
    const rule = floors[floorKey];
    if (!rule || rule.active === false || !Number.isFinite(Number(rule.listPrice)) || !Number.isFinite(Number(rule.minimumPrice))) {
      return reply(res, 422, { error: 'No approved floor exists for this item and tier. Keep it as a custom quote and request management approval.', code: 'FLOOR_MISSING' });
    }
    const listPrice = Number(rule.listPrice);
    const minimum = Math.max(Number(rule.minimumPrice), Number(rule.deliveryCost || 0) + Number(rule.thirdPartyCost || 0));
    if (amount > listPrice) return reply(res, 422, { approved: false, code: 'ABOVE_LIST', message: 'The proposed amount is above the published list price. Confirm a custom scope or issue a revised proposal.' });
    if (amount < minimum) return reply(res, 200, { approved: false, code: 'BELOW_FLOOR', message: 'This amount is below the approved delivery threshold. Offer a smaller scope, phased delivery, or a lower package instead.' });
    return reply(res, 200, { approved: true, code: 'WITHIN_FLOOR', message: 'Price is within the approved range. Final scope, taxes and third-party charges still require written confirmation.', listPrice, proposedPrice: amount, discountPercent: Math.round((1 - amount / listPrice) * 10000) / 100 });
  } catch (error) {
    return reply(res, 500, { error: 'Quote check could not be completed. Try again or escalate to the administrator.' });
  }
};
