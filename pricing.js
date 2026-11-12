/* ATSFY Marketplace public pricing catalogue.
 * Customer-facing list prices only. Never place confidential negotiation floors,
 * internal costs, or margin thresholds in this public file.
 */
(function(){
 const DATA={
  "version": "2026-11-12",
  "currency": "INR",
  "taxNote": "All displayed prices are indicative, exclusive of applicable GST. A written scope and final quotation govern each engagement.",
  "negotiationNote": "Tell us your budget and priority outcome. We can tailor the scope, phase delivery or propose a smaller starting package. We do not reduce a fixed scope below the price needed to deliver it responsibly.",
  "disclaimer": "Indicative catalogue pricing, not a binding offer. Confirm current availability, usage limits, exact deliverables, timeline, taxes and third-party costs in a written proposal before payment.",
  "marketBasis": [
    {
      "category": "Websites",
      "range": "₹25,000–₹1,50,000 for custom business sites; e-commerce commonly ₹50,000–₹3,00,000",
      "source": "https://digitalarka.com/website-development-cost-india/"
    },
    {
      "category": "WhatsApp chatbot",
      "range": "₹45,000–₹2,00,000 build, plus message, model and hosting costs",
      "source": "https://www.lacewingtech.in/blog/whatsapp-chatbot-cost-india"
    },
    {
      "category": "SEO and digital marketing",
      "range": "Monthly rates vary by scope; Q4 2026 published-price index reports SEO median ₹20,000 and social media median ₹15,000",
      "source": "https://veridiancode.com/guides/india-digital-marketing-price-index"
    },
    {
      "category": "Mobile applications",
      "range": "Agency MVPs often ₹2,00,000–₹5,00,000 depending on features",
      "source": "https://www.approids.com/blog/mobile-app-cost-india-2026/"
    }
  ],
  "services": {
    "whatsapp-automation": {
      "name": "WhatsApp Automation System",
      "packages": [
        {
          "tier": "Starter",
          "price": 25000,
          "billing": "One-time",
          "includes": [
            "Business flow mapping",
            "Click-to-chat and enquiry capture",
            "Lead routing and handover",
            "Testing and staff walkthrough"
          ],
          "breakdown": [
            {
              "label": "Discovery & planning",
              "percent": 15
            },
            {
              "label": "Design & configuration",
              "percent": 25
            },
            {
              "label": "Build & delivery",
              "percent": 35
            },
            {
              "label": "Integration & QA",
              "percent": 15
            },
            {
              "label": "Handover & support setup",
              "percent": 10
            }
          ],
          "note": "Meta/BSP, template and per-message charges are separate."
        },
        {
          "tier": "AI assistant",
          "price": 75000,
          "billing": "One-time",
          "includes": [
            "Conversation design",
            "FAQ knowledge setup",
            "WhatsApp API integration",
            "Human handoff and QA"
          ],
          "breakdown": [
            {
              "label": "Discovery & planning",
              "percent": 15
            },
            {
              "label": "Design & configuration",
              "percent": 25
            },
            {
              "label": "Build & delivery",
              "percent": 35
            },
            {
              "label": "Integration & QA",
              "percent": 15
            },
            {
              "label": "Handover & support setup",
              "percent": 10
            }
          ],
          "note": "Meta/BSP, model usage, hosting and messaging charges are separate."
        },
        {
          "tier": "CRM-connected",
          "price": 150000,
          "billing": "One-time",
          "includes": [
            "Discovery and architecture",
            "AI workflow build",
            "CRM/API integration",
            "Approval controls, QA and handover"
          ],
          "breakdown": [
            {
              "label": "Discovery & planning",
              "percent": 15
            },
            {
              "label": "Design & configuration",
              "percent": 25
            },
            {
              "label": "Build & delivery",
              "percent": 35
            },
            {
              "label": "Integration & QA",
              "percent": 15
            },
            {
              "label": "Handover & support setup",
              "percent": 10
            }
          ],
          "note": "No unsolicited outbound messaging; approved templates and consent rules apply."
        }
      ]
    },
    "website-development": {
      "name": "Website Development",
      "packages": [
        {
          "tier": "Landing page",
          "price": 25000,
          "billing": "One-time",
          "includes": [
            "UX and visual design",
            "Responsive page build",
            "Enquiry forms and integrations",
            "SEO basics, performance and QA"
          ],
          "breakdown": [
            {
              "label": "Discovery & planning",
              "percent": 15
            },
            {
              "label": "Design & configuration",
              "percent": 25
            },
            {
              "label": "Build & delivery",
              "percent": 35
            },
            {
              "label": "Integration & QA",
              "percent": 15
            },
            {
              "label": "Handover & support setup",
              "percent": 10
            }
          ],
          "note": "Domain, hosting, premium plugins, copywriting and photography are extra unless written into scope."
        },
        {
          "tier": "Business website",
          "price": 55000,
          "billing": "One-time",
          "includes": [
            "UX/UI and design system",
            "Up to 8 responsive pages",
            "CMS and enquiry forms",
            "On-page SEO, analytics and QA"
          ],
          "breakdown": [
            {
              "label": "Discovery & planning",
              "percent": 15
            },
            {
              "label": "Design & configuration",
              "percent": 25
            },
            {
              "label": "Build & delivery",
              "percent": 35
            },
            {
              "label": "Integration & QA",
              "percent": 15
            },
            {
              "label": "Handover & support setup",
              "percent": 10
            }
          ],
          "note": "Page count, content migration, languages and integrations affect final quote."
        },
        {
          "tier": "E-commerce",
          "price": 125000,
          "billing": "One-time",
          "includes": [
            "Storefront UX/UI",
            "Product catalogue and cart",
            "Checkout and payment integration",
            "Order workflows, QA and handover"
          ],
          "breakdown": [
            {
              "label": "Discovery & planning",
              "percent": 15
            },
            {
              "label": "Design & configuration",
              "percent": 25
            },
            {
              "label": "Build & delivery",
              "percent": 35
            },
            {
              "label": "Integration & QA",
              "percent": 15
            },
            {
              "label": "Handover & support setup",
              "percent": 10
            }
          ],
          "note": "Gateway, shipping, platform and SKU/content-entry fees are separate."
        }
      ]
    },
    "branding-logo-design": {
      "name": "Branding & Logo Design",
      "packages": [
        {
          "tier": "Logo starter",
          "price": 15000,
          "billing": "One-time",
          "includes": [
            "Discovery and brief",
            "Two concept directions",
            "Refinement and final logo",
            "Export files and handover"
          ],
          "breakdown": [
            {
              "label": "Discovery & planning",
              "percent": 15
            },
            {
              "label": "Design & configuration",
              "percent": 25
            },
            {
              "label": "Build & delivery",
              "percent": 35
            },
            {
              "label": "Integration & QA",
              "percent": 15
            },
            {
              "label": "Handover & support setup",
              "percent": 10
            }
          ],
          "note": "Trademark search/filing, naming and extensive illustration are excluded."
        },
        {
          "tier": "Brand identity",
          "price": 35000,
          "billing": "One-time",
          "includes": [
            "Brand discovery",
            "Logo suite and visual system",
            "Colour, type and voice guide",
            "Social and stationery assets"
          ],
          "breakdown": [
            {
              "label": "Discovery & planning",
              "percent": 15
            },
            {
              "label": "Design & configuration",
              "percent": 25
            },
            {
              "label": "Build & delivery",
              "percent": 35
            },
            {
              "label": "Integration & QA",
              "percent": 15
            },
            {
              "label": "Handover & support setup",
              "percent": 10
            }
          ],
          "note": "Print production and paid stock assets are extra."
        },
        {
          "tier": "Complete brand system",
          "price": 65000,
          "billing": "One-time",
          "includes": [
            "Brand strategy",
            "Full identity system",
            "Detailed brand guidelines",
            "Collateral templates and handover"
          ],
          "breakdown": [
            {
              "label": "Discovery & planning",
              "percent": 15
            },
            {
              "label": "Design & configuration",
              "percent": 25
            },
            {
              "label": "Build & delivery",
              "percent": 35
            },
            {
              "label": "Integration & QA",
              "percent": 15
            },
            {
              "label": "Handover & support setup",
              "percent": 10
            }
          ],
          "note": "Ongoing content and campaign production are separate."
        }
      ]
    },
    "social-media-management": {
      "name": "Social Media Management",
      "packages": [
        {
          "tier": "Essential",
          "price": 18000,
          "billing": "Monthly",
          "includes": [
            "Monthly strategy and calendar",
            "8–12 static posts",
            "Captions and scheduling",
            "Monthly performance summary"
          ],
          "breakdown": [
            {
              "label": "Discovery & planning",
              "percent": 15
            },
            {
              "label": "Design & configuration",
              "percent": 25
            },
            {
              "label": "Build & delivery",
              "percent": 35
            },
            {
              "label": "Integration & QA",
              "percent": 15
            },
            {
              "label": "Handover & support setup",
              "percent": 10
            }
          ],
          "note": "Ad spend, shoots, creator fees and full-time inbox management excluded."
        },
        {
          "tier": "Growth",
          "price": 40000,
          "billing": "Monthly",
          "includes": [
            "Multi-platform content plan",
            "12–16 posts",
            "Up to 4 short edits from supplied footage",
            "Publishing and reporting"
          ],
          "breakdown": [
            {
              "label": "Discovery & planning",
              "percent": 15
            },
            {
              "label": "Design & configuration",
              "percent": 25
            },
            {
              "label": "Build & delivery",
              "percent": 35
            },
            {
              "label": "Integration & QA",
              "percent": 15
            },
            {
              "label": "Handover & support setup",
              "percent": 10
            }
          ],
          "note": "Ad spend, shoots and creator fees excluded."
        },
        {
          "tier": "Premium",
          "price": 75000,
          "billing": "Monthly",
          "includes": [
            "Campaign strategy",
            "20+ content assets",
            "Up to 8 short edits from supplied footage",
            "Publishing, community scope and reporting"
          ],
          "breakdown": [
            {
              "label": "Discovery & planning",
              "percent": 15
            },
            {
              "label": "Design & configuration",
              "percent": 25
            },
            {
              "label": "Build & delivery",
              "percent": 35
            },
            {
              "label": "Integration & QA",
              "percent": 15
            },
            {
              "label": "Handover & support setup",
              "percent": 10
            }
          ],
          "note": "On-location production and ad spend separately quoted."
        }
      ]
    },
    "ai-chatbots": {
      "name": "AI Chatbots",
      "packages": [
        {
          "tier": "Website FAQ assistant",
          "price": 60000,
          "billing": "One-time",
          "includes": [
            "Conversation design",
            "FAQ and knowledge setup",
            "Website widget integration",
            "Testing and human handoff"
          ],
          "breakdown": [
            {
              "label": "Discovery & planning",
              "percent": 15
            },
            {
              "label": "Design & configuration",
              "percent": 25
            },
            {
              "label": "Build & delivery",
              "percent": 35
            },
            {
              "label": "Integration & QA",
              "percent": 15
            },
            {
              "label": "Handover & support setup",
              "percent": 10
            }
          ],
          "note": "Model usage, hosting and ongoing maintenance are recurring extras."
        },
        {
          "tier": "RAG knowledge assistant",
          "price": 150000,
          "billing": "One-time",
          "includes": [
            "Source data review",
            "Document preparation",
            "Retrieval and answer pipeline",
            "Citations, evaluation and admin handover"
          ],
          "breakdown": [
            {
              "label": "Discovery & planning",
              "percent": 15
            },
            {
              "label": "Design & configuration",
              "percent": 25
            },
            {
              "label": "Build & delivery",
              "percent": 35
            },
            {
              "label": "Integration & QA",
              "percent": 15
            },
            {
              "label": "Handover & support setup",
              "percent": 10
            }
          ],
          "note": "Large-scale data cleaning, hosting and model usage are extra."
        },
        {
          "tier": "Integrated action assistant",
          "price": 350000,
          "billing": "One-time",
          "includes": [
            "Solution architecture",
            "Agent and workflow engineering",
            "Approved API integrations",
            "Audit controls, evaluation and QA"
          ],
          "breakdown": [
            {
              "label": "Discovery & planning",
              "percent": 15
            },
            {
              "label": "Design & configuration",
              "percent": 25
            },
            {
              "label": "Build & delivery",
              "percent": 35
            },
            {
              "label": "Integration & QA",
              "percent": 15
            },
            {
              "label": "Handover & support setup",
              "percent": 10
            }
          ],
          "note": "Actions with external impact require scoped approvals; third-party costs extra."
        }
      ]
    },
    "marketing-automation": {
      "name": "Marketing Automation",
      "packages": [
        {
          "tier": "Single funnel",
          "price": 45000,
          "billing": "One-time",
          "includes": [
            "Customer journey mapping",
            "One lead funnel",
            "Up to 3 automation steps",
            "Integration, QA and handover"
          ],
          "breakdown": [
            {
              "label": "Discovery & planning",
              "percent": 15
            },
            {
              "label": "Design & configuration",
              "percent": 25
            },
            {
              "label": "Build & delivery",
              "percent": 35
            },
            {
              "label": "Integration & QA",
              "percent": 15
            },
            {
              "label": "Handover & support setup",
              "percent": 10
            }
          ],
          "note": "Email/SMS/WhatsApp provider subscriptions and message credits excluded."
        },
        {
          "tier": "CRM and nurture",
          "price": 90000,
          "billing": "One-time",
          "includes": [
            "CRM pipeline setup",
            "Lead scoring rules",
            "Up to 2 nurture journeys",
            "Integrations, reporting and training"
          ],
          "breakdown": [
            {
              "label": "Discovery & planning",
              "percent": 15
            },
            {
              "label": "Design & configuration",
              "percent": 25
            },
            {
              "label": "Build & delivery",
              "percent": 35
            },
            {
              "label": "Integration & QA",
              "percent": 15
            },
            {
              "label": "Handover & support setup",
              "percent": 10
            }
          ],
          "note": "No outbound communication without appropriate consent and approval."
        },
        {
          "tier": "Lifecycle automation",
          "price": 180000,
          "billing": "One-time",
          "includes": [
            "Lifecycle architecture",
            "Segmentation and event triggers",
            "Multi-journey automation",
            "Integrations, QA and reporting"
          ],
          "breakdown": [
            {
              "label": "Discovery & planning",
              "percent": 15
            },
            {
              "label": "Design & configuration",
              "percent": 25
            },
            {
              "label": "Build & delivery",
              "percent": 35
            },
            {
              "label": "Integration & QA",
              "percent": 15
            },
            {
              "label": "Handover & support setup",
              "percent": 10
            }
          ],
          "note": "Third-party licences and message charges are separate."
        }
      ]
    },
    "local-seo": {
      "name": "Local SEO",
      "packages": [
        {
          "tier": "Local foundation",
          "price": 15000,
          "billing": "Monthly",
          "includes": [
            "Local search audit",
            "Google Business Profile optimisation",
            "Local keyword and on-page fixes",
            "Citation and review plan"
          ],
          "breakdown": [
            {
              "label": "Discovery & planning",
              "percent": 15
            },
            {
              "label": "Design & configuration",
              "percent": 25
            },
            {
              "label": "Build & delivery",
              "percent": 35
            },
            {
              "label": "Integration & QA",
              "percent": 15
            },
            {
              "label": "Handover & support setup",
              "percent": 10
            }
          ],
          "note": "No ranking or lead guarantees; multi-location work separately quoted."
        },
        {
          "tier": "Local growth",
          "price": 30000,
          "billing": "Monthly",
          "includes": [
            "Technical and local SEO",
            "Location-focused content updates",
            "Local landing page improvements",
            "Citation and monthly reporting"
          ],
          "breakdown": [
            {
              "label": "Discovery & planning",
              "percent": 15
            },
            {
              "label": "Design & configuration",
              "percent": 25
            },
            {
              "label": "Build & delivery",
              "percent": 35
            },
            {
              "label": "Integration & QA",
              "percent": 15
            },
            {
              "label": "Handover & support setup",
              "percent": 10
            }
          ],
          "note": "Content volume and outreach limits defined in proposal."
        },
        {
          "tier": "Multi-location",
          "price": 60000,
          "billing": "Monthly",
          "includes": [
            "Multi-location strategy",
            "Technical and on-page SEO",
            "Location page programme",
            "Reputation and performance reporting"
          ],
          "breakdown": [
            {
              "label": "Discovery & planning",
              "percent": 15
            },
            {
              "label": "Design & configuration",
              "percent": 25
            },
            {
              "label": "Build & delivery",
              "percent": 35
            },
            {
              "label": "Integration & QA",
              "percent": 15
            },
            {
              "label": "Handover & support setup",
              "percent": 10
            }
          ],
          "note": "Competition, location count and content production determine scope."
        }
      ]
    },
    "digital-marketing": {
      "name": "Digital Marketing",
      "packages": [
        {
          "tier": "Single-channel management",
          "price": 25000,
          "billing": "Monthly",
          "includes": [
            "Campaign strategy",
            "One paid channel setup",
            "Creative coordination",
            "Optimisation and reporting"
          ],
          "breakdown": [
            {
              "label": "Discovery & planning",
              "percent": 15
            },
            {
              "label": "Design & configuration",
              "percent": 25
            },
            {
              "label": "Build & delivery",
              "percent": 35
            },
            {
              "label": "Integration & QA",
              "percent": 15
            },
            {
              "label": "Handover & support setup",
              "percent": 10
            }
          ],
          "note": "Advertising budget is paid by client directly and is not included."
        },
        {
          "tier": "Growth campaigns",
          "price": 50000,
          "billing": "Monthly",
          "includes": [
            "Two-channel campaign plan",
            "Campaign and conversion tracking",
            "Creative testing",
            "Optimisation and reporting"
          ],
          "breakdown": [
            {
              "label": "Discovery & planning",
              "percent": 15
            },
            {
              "label": "Design & configuration",
              "percent": 25
            },
            {
              "label": "Build & delivery",
              "percent": 35
            },
            {
              "label": "Integration & QA",
              "percent": 15
            },
            {
              "label": "Handover & support setup",
              "percent": 10
            }
          ],
          "note": "Ad spend, creator fees and landing page development excluded."
        },
        {
          "tier": "Performance programme",
          "price": 90000,
          "billing": "Monthly",
          "includes": [
            "Multi-campaign strategy",
            "Campaign operations",
            "Creative and funnel testing",
            "Optimisation and analytics"
          ],
          "breakdown": [
            {
              "label": "Discovery & planning",
              "percent": 15
            },
            {
              "label": "Design & configuration",
              "percent": 25
            },
            {
              "label": "Build & delivery",
              "percent": 35
            },
            {
              "label": "Integration & QA",
              "percent": 15
            },
            {
              "label": "Handover & support setup",
              "percent": 10
            }
          ],
          "note": "No guaranteed ROAS, sales or lead volume; media budget excluded."
        }
      ]
    },
    "custom-saas-development": {
      "name": "Custom SaaS Development",
      "packages": [
        {
          "tier": "MVP build",
          "price": 300000,
          "billing": "One-time",
          "includes": [
            "Discovery and architecture",
            "UX/UI and core workflows",
            "Backend, authentication and admin",
            "Integrations, QA and deployment"
          ],
          "breakdown": [
            {
              "label": "Discovery & planning",
              "percent": 15
            },
            {
              "label": "Design & configuration",
              "percent": 25
            },
            {
              "label": "Build & delivery",
              "percent": 35
            },
            {
              "label": "Integration & QA",
              "percent": 15
            },
            {
              "label": "Handover & support setup",
              "percent": 10
            }
          ],
          "note": "Final scope depends on roles, security, integrations and data migration."
        },
        {
          "tier": "Growth platform",
          "price": 600000,
          "billing": "One-time",
          "includes": [
            "Product architecture",
            "Multi-role UX and workflows",
            "Core engineering and dashboards",
            "Integrations, QA and security review"
          ],
          "breakdown": [
            {
              "label": "Discovery & planning",
              "percent": 15
            },
            {
              "label": "Design & configuration",
              "percent": 25
            },
            {
              "label": "Build & delivery",
              "percent": 35
            },
            {
              "label": "Integration & QA",
              "percent": 15
            },
            {
              "label": "Handover & support setup",
              "percent": 10
            }
          ],
          "note": "Cloud, licences, support and compliance audits excluded unless contracted."
        },
        {
          "tier": "Enterprise platform",
          "price": 1200000,
          "billing": "One-time",
          "includes": [
            "Enterprise architecture",
            "Role-based platform engineering",
            "Integrations and auditability",
            "Security testing and deployment"
          ],
          "breakdown": [
            {
              "label": "Discovery & planning",
              "percent": 15
            },
            {
              "label": "Design & configuration",
              "percent": 25
            },
            {
              "label": "Build & delivery",
              "percent": 35
            },
            {
              "label": "Integration & QA",
              "percent": 15
            },
            {
              "label": "Handover & support setup",
              "percent": 10
            }
          ],
          "note": "Complex scale, compliance, legacy integration and data migration require discovery."
        }
      ]
    },
    "ai-integration": {
      "name": "AI Integration",
      "packages": [
        {
          "tier": "Single AI capability",
          "price": 75000,
          "billing": "One-time",
          "includes": [
            "Use-case discovery",
            "Data preparation",
            "Model and workflow integration",
            "Evaluation and handover"
          ],
          "breakdown": [
            {
              "label": "Discovery & planning",
              "percent": 15
            },
            {
              "label": "Design & configuration",
              "percent": 25
            },
            {
              "label": "Build & delivery",
              "percent": 35
            },
            {
              "label": "Integration & QA",
              "percent": 15
            },
            {
              "label": "Handover & support setup",
              "percent": 10
            }
          ],
          "note": "API usage, hosting and model charges are separate."
        },
        {
          "tier": "Business AI workflow",
          "price": 150000,
          "billing": "One-time",
          "includes": [
            "AI workflow design",
            "Knowledge grounding",
            "One system integration",
            "Evaluation and monitoring setup"
          ],
          "breakdown": [
            {
              "label": "Discovery & planning",
              "percent": 15
            },
            {
              "label": "Design & configuration",
              "percent": 25
            },
            {
              "label": "Build & delivery",
              "percent": 35
            },
            {
              "label": "Integration & QA",
              "percent": 15
            },
            {
              "label": "Handover & support setup",
              "percent": 10
            }
          ],
          "note": "Data cleanup, model usage and cloud costs are extra."
        },
        {
          "tier": "Advanced AI system",
          "price": 350000,
          "billing": "One-time",
          "includes": [
            "AI architecture",
            "Data pipeline",
            "Multiple model capabilities",
            "Integrations, evaluation and monitoring"
          ],
          "breakdown": [
            {
              "label": "Discovery & planning",
              "percent": 15
            },
            {
              "label": "Design & configuration",
              "percent": 25
            },
            {
              "label": "Build & delivery",
              "percent": 35
            },
            {
              "label": "Integration & QA",
              "percent": 15
            },
            {
              "label": "Handover & support setup",
              "percent": 10
            }
          ],
          "note": "Production agent actions need approvals and audit controls."
        }
      ]
    },
    "business-automation": {
      "name": "Business Automation",
      "packages": [
        {
          "tier": "Single workflow",
          "price": 50000,
          "billing": "One-time",
          "includes": [
            "Process mapping",
            "One automated workflow",
            "Up to 2 integrations",
            "Testing and SOP handover"
          ],
          "breakdown": [
            {
              "label": "Discovery & planning",
              "percent": 15
            },
            {
              "label": "Design & configuration",
              "percent": 25
            },
            {
              "label": "Build & delivery",
              "percent": 35
            },
            {
              "label": "Integration & QA",
              "percent": 15
            },
            {
              "label": "Handover & support setup",
              "percent": 10
            }
          ],
          "note": "Third-party software and API fees excluded."
        },
        {
          "tier": "Multi-workflow",
          "price": 125000,
          "billing": "One-time",
          "includes": [
            "Process discovery",
            "Up to 4 connected workflows",
            "Integration and exception handling",
            "QA and documentation"
          ],
          "breakdown": [
            {
              "label": "Discovery & planning",
              "percent": 15
            },
            {
              "label": "Design & configuration",
              "percent": 25
            },
            {
              "label": "Build & delivery",
              "percent": 35
            },
            {
              "label": "Integration & QA",
              "percent": 15
            },
            {
              "label": "Handover & support setup",
              "percent": 10
            }
          ],
          "note": "Workflow and integration limits are fixed in the statement of work."
        },
        {
          "tier": "Operations suite",
          "price": 300000,
          "billing": "One-time",
          "includes": [
            "Operations architecture",
            "Department-level workflows",
            "Multi-system integration",
            "Controls, QA and training"
          ],
          "breakdown": [
            {
              "label": "Discovery & planning",
              "percent": 15
            },
            {
              "label": "Design & configuration",
              "percent": 25
            },
            {
              "label": "Build & delivery",
              "percent": 35
            },
            {
              "label": "Integration & QA",
              "percent": 15
            },
            {
              "label": "Handover & support setup",
              "percent": 10
            }
          ],
          "note": "Legacy access, licences and data remediation are additional."
        }
      ]
    },
    "custom-dashboards": {
      "name": "Custom Dashboards",
      "packages": [
        {
          "tier": "Operational dashboard",
          "price": 60000,
          "billing": "One-time",
          "includes": [
            "KPI discovery",
            "Up to 2 data sources",
            "Dashboard and filters",
            "QA, export and handover"
          ],
          "breakdown": [
            {
              "label": "Discovery & planning",
              "percent": 15
            },
            {
              "label": "Design & configuration",
              "percent": 25
            },
            {
              "label": "Build & delivery",
              "percent": 35
            },
            {
              "label": "Integration & QA",
              "percent": 15
            },
            {
              "label": "Handover & support setup",
              "percent": 10
            }
          ],
          "note": "Data warehouse, licences and source-system fees excluded."
        },
        {
          "tier": "BI suite",
          "price": 125000,
          "billing": "One-time",
          "includes": [
            "KPI and role discovery",
            "Up to 4 data sources",
            "Multiple dashboards",
            "Permissions, QA and training"
          ],
          "breakdown": [
            {
              "label": "Discovery & planning",
              "percent": 15
            },
            {
              "label": "Design & configuration",
              "percent": 25
            },
            {
              "label": "Build & delivery",
              "percent": 35
            },
            {
              "label": "Integration & QA",
              "percent": 15
            },
            {
              "label": "Handover & support setup",
              "percent": 10
            }
          ],
          "note": "Data cleansing and warehouse engineering separately scoped."
        },
        {
          "tier": "Enterprise analytics",
          "price": 300000,
          "billing": "One-time",
          "includes": [
            "Analytics architecture",
            "Data engineering",
            "Enterprise dashboard suite",
            "Security, QA and handover"
          ],
          "breakdown": [
            {
              "label": "Discovery & planning",
              "percent": 15
            },
            {
              "label": "Design & configuration",
              "percent": 25
            },
            {
              "label": "Build & delivery",
              "percent": 35
            },
            {
              "label": "Integration & QA",
              "percent": 15
            },
            {
              "label": "Handover & support setup",
              "percent": 10
            }
          ],
          "note": "Complex data pipelines and licences are extra."
        }
      ]
    },
    "pitch-deck-development": {
      "name": "Pitch Deck Development",
      "packages": [
        {
          "tier": "Pitch deck",
          "price": 25000,
          "billing": "One-time",
          "includes": [
            "Story structure",
            "Up to 12 designed slides",
            "One revision round",
            "Editable and PDF handover"
          ],
          "breakdown": [
            {
              "label": "Discovery & planning",
              "percent": 15
            },
            {
              "label": "Design & configuration",
              "percent": 25
            },
            {
              "label": "Build & delivery",
              "percent": 35
            },
            {
              "label": "Integration & QA",
              "percent": 15
            },
            {
              "label": "Handover & support setup",
              "percent": 10
            }
          ],
          "note": "No invented traction, financials, partnerships or investor commitments."
        },
        {
          "tier": "Investor deck",
          "price": 45000,
          "billing": "One-time",
          "includes": [
            "Narrative and research",
            "Up to 18 designed slides",
            "Two revision rounds",
            "Pitch flow and handover"
          ],
          "breakdown": [
            {
              "label": "Discovery & planning",
              "percent": 15
            },
            {
              "label": "Design & configuration",
              "percent": 25
            },
            {
              "label": "Build & delivery",
              "percent": 35
            },
            {
              "label": "Integration & QA",
              "percent": 15
            },
            {
              "label": "Handover & support setup",
              "percent": 10
            }
          ],
          "note": "Financial modelling and due diligence are separate."
        },
        {
          "tier": "Deck plus model review",
          "price": 75000,
          "billing": "One-time",
          "includes": [
            "Narrative and research",
            "Up to 20 designed slides",
            "Assumption review",
            "Q&A preparation"
          ],
          "breakdown": [
            {
              "label": "Discovery & planning",
              "percent": 15
            },
            {
              "label": "Design & configuration",
              "percent": 25
            },
            {
              "label": "Build & delivery",
              "percent": 35
            },
            {
              "label": "Integration & QA",
              "percent": 15
            },
            {
              "label": "Handover & support setup",
              "percent": 10
            }
          ],
          "note": "Client must verify all financial and market data; no funding guarantee."
        }
      ]
    },
    "startup-collateral": {
      "name": "Startup Collateral",
      "packages": [
        {
          "tier": "Founder starter kit",
          "price": 15000,
          "billing": "One-time",
          "includes": [
            "One-page company profile",
            "Executive summary layout",
            "Digital business card",
            "Social profile assets"
          ],
          "breakdown": [
            {
              "label": "Discovery & planning",
              "percent": 15
            },
            {
              "label": "Design & configuration",
              "percent": 25
            },
            {
              "label": "Build & delivery",
              "percent": 35
            },
            {
              "label": "Integration & QA",
              "percent": 15
            },
            {
              "label": "Handover & support setup",
              "percent": 10
            }
          ],
          "note": "Printing and legal/trademark filings excluded."
        },
        {
          "tier": "Launch kit",
          "price": 30000,
          "billing": "One-time",
          "includes": [
            "Company one-pager",
            "Executive summary",
            "Business stationery",
            "Social and launch assets"
          ],
          "breakdown": [
            {
              "label": "Discovery & planning",
              "percent": 15
            },
            {
              "label": "Design & configuration",
              "percent": 25
            },
            {
              "label": "Build & delivery",
              "percent": 35
            },
            {
              "label": "Integration & QA",
              "percent": 15
            },
            {
              "label": "Handover & support setup",
              "percent": 10
            }
          ],
          "note": "Print production and premium photography excluded."
        },
        {
          "tier": "Venture identity pack",
          "price": 55000,
          "billing": "One-time",
          "includes": [
            "Collateral strategy",
            "Pitch one-pager and templates",
            "Digital asset suite",
            "Brand consistency review"
          ],
          "breakdown": [
            {
              "label": "Discovery & planning",
              "percent": 15
            },
            {
              "label": "Design & configuration",
              "percent": 25
            },
            {
              "label": "Build & delivery",
              "percent": 35
            },
            {
              "label": "Integration & QA",
              "percent": 15
            },
            {
              "label": "Handover & support setup",
              "percent": 10
            }
          ],
          "note": "Full brand identity is a separate service."
        }
      ]
    },
    "mvp-development": {
      "name": "MVP Development",
      "packages": [
        {
          "tier": "Clickable prototype",
          "price": 75000,
          "billing": "One-time",
          "includes": [
            "Product discovery",
            "User flows and wireframes",
            "Clickable UI prototype",
            "Validation notes and handover"
          ],
          "breakdown": [
            {
              "label": "Discovery & planning",
              "percent": 15
            },
            {
              "label": "Design & configuration",
              "percent": 25
            },
            {
              "label": "Build & delivery",
              "percent": 35
            },
            {
              "label": "Integration & QA",
              "percent": 15
            },
            {
              "label": "Handover & support setup",
              "percent": 10
            }
          ],
          "note": "Prototype is not a production application; backend excluded."
        },
        {
          "tier": "Functional MVP",
          "price": 250000,
          "billing": "One-time",
          "includes": [
            "Discovery and UX/UI",
            "Core app and backend",
            "Basic admin and integrations",
            "QA and launch support"
          ],
          "breakdown": [
            {
              "label": "Discovery & planning",
              "percent": 15
            },
            {
              "label": "Design & configuration",
              "percent": 25
            },
            {
              "label": "Build & delivery",
              "percent": 35
            },
            {
              "label": "Integration & QA",
              "percent": 15
            },
            {
              "label": "Handover & support setup",
              "percent": 10
            }
          ],
          "note": "Feature list and security/data requirements determine final quote."
        },
        {
          "tier": "Integrated MVP",
          "price": 500000,
          "billing": "One-time",
          "includes": [
            "Product architecture",
            "Multi-workflow application",
            "Role access and integrations",
            "Analytics, QA and hardening"
          ],
          "breakdown": [
            {
              "label": "Discovery & planning",
              "percent": 15
            },
            {
              "label": "Design & configuration",
              "percent": 25
            },
            {
              "label": "Build & delivery",
              "percent": 35
            },
            {
              "label": "Integration & QA",
              "percent": 15
            },
            {
              "label": "Handover & support setup",
              "percent": 10
            }
          ],
          "note": "Cloud, licences and post-launch support excluded."
        }
      ]
    },
    "startup-guidance": {
      "name": "Startup Guidance",
      "packages": [
        {
          "tier": "Strategy session",
          "price": 5000,
          "billing": "Per session",
          "includes": [
            "Preparation and review",
            "60–90 minute session",
            "Written action summary",
            "Next-step priorities"
          ],
          "breakdown": [
            {
              "label": "Discovery & planning",
              "percent": 15
            },
            {
              "label": "Design & configuration",
              "percent": 25
            },
            {
              "label": "Build & delivery",
              "percent": 35
            },
            {
              "label": "Integration & QA",
              "percent": 15
            },
            {
              "label": "Handover & support setup",
              "percent": 10
            }
          ],
          "note": "Not legal, tax, investment or funding advice."
        },
        {
          "tier": "Validation sprint",
          "price": 25000,
          "billing": "One-time",
          "includes": [
            "Problem and customer framing",
            "Validation experiment plan",
            "Positioning and strategy",
            "Roadmap review"
          ],
          "breakdown": [
            {
              "label": "Discovery & planning",
              "percent": 15
            },
            {
              "label": "Design & configuration",
              "percent": 25
            },
            {
              "label": "Build & delivery",
              "percent": 35
            },
            {
              "label": "Integration & QA",
              "percent": 15
            },
            {
              "label": "Handover & support setup",
              "percent": 10
            }
          ],
          "note": "Primary research execution and paid surveys excluded."
        },
        {
          "tier": "Founder advisory",
          "price": 50000,
          "billing": "Monthly",
          "includes": [
            "Up to 4 advisory sessions",
            "Async review within agreed scope",
            "Monthly priorities",
            "Action tracking"
          ],
          "breakdown": [
            {
              "label": "Discovery & planning",
              "percent": 15
            },
            {
              "label": "Design & configuration",
              "percent": 25
            },
            {
              "label": "Build & delivery",
              "percent": 35
            },
            {
              "label": "Integration & QA",
              "percent": 15
            },
            {
              "label": "Handover & support setup",
              "percent": 10
            }
          ],
          "note": "No guaranteed fundraising or commercial outcome."
        }
      ]
    },
    "institution-website-development": {
      "name": "Institution Website Development",
      "packages": [
        {
          "tier": "Institution website",
          "price": 150000,
          "billing": "One-time",
          "includes": [
            "Discovery and UX/UI",
            "Responsive institutional website",
            "Admission/contact workflows",
            "CMS, QA and training"
          ],
          "breakdown": [
            {
              "label": "Discovery & planning",
              "percent": 15
            },
            {
              "label": "Design & configuration",
              "percent": 25
            },
            {
              "label": "Build & delivery",
              "percent": 35
            },
            {
              "label": "Integration & QA",
              "percent": 15
            },
            {
              "label": "Handover & support setup",
              "percent": 10
            }
          ],
          "note": "Content migration and ERP/payment integrations extra."
        },
        {
          "tier": "Student/faculty portal",
          "price": 300000,
          "billing": "One-time",
          "includes": [
            "Portal architecture",
            "Role-based dashboards",
            "Admissions and records workflows",
            "Integrations, QA and training"
          ],
          "breakdown": [
            {
              "label": "Discovery & planning",
              "percent": 15
            },
            {
              "label": "Design & configuration",
              "percent": 25
            },
            {
              "label": "Build & delivery",
              "percent": 35
            },
            {
              "label": "Integration & QA",
              "percent": 15
            },
            {
              "label": "Handover & support setup",
              "percent": 10
            }
          ],
          "note": "ERP, biometric and payment integrations separately scoped."
        },
        {
          "tier": "Integrated institution platform",
          "price": 600000,
          "billing": "One-time",
          "includes": [
            "Platform architecture",
            "Website and multi-role portal",
            "Institution workflows and integrations",
            "Migration, QA and rollout"
          ],
          "breakdown": [
            {
              "label": "Discovery & planning",
              "percent": 15
            },
            {
              "label": "Design & configuration",
              "percent": 25
            },
            {
              "label": "Build & delivery",
              "percent": 35
            },
            {
              "label": "Integration & QA",
              "percent": 15
            },
            {
              "label": "Handover & support setup",
              "percent": 10
            }
          ],
          "note": "Large deployments require discovery and data migration estimate."
        }
      ]
    },
    "education-digitalization": {
      "name": "Education Digitalization",
      "packages": [
        {
          "tier": "LMS setup",
          "price": 75000,
          "billing": "One-time",
          "includes": [
            "Needs assessment",
            "LMS configuration",
            "Basic course migration",
            "Admin training and QA"
          ],
          "breakdown": [
            {
              "label": "Discovery & planning",
              "percent": 15
            },
            {
              "label": "Design & configuration",
              "percent": 25
            },
            {
              "label": "Build & delivery",
              "percent": 35
            },
            {
              "label": "Integration & QA",
              "percent": 15
            },
            {
              "label": "Handover & support setup",
              "percent": 10
            }
          ],
          "note": "LMS subscriptions, hosting and content licences extra."
        },
        {
          "tier": "Digital learning suite",
          "price": 150000,
          "billing": "One-time",
          "includes": [
            "LMS and learner setup",
            "Assessment workflows",
            "Migration and integrations",
            "Faculty training and reporting"
          ],
          "breakdown": [
            {
              "label": "Discovery & planning",
              "percent": 15
            },
            {
              "label": "Design & configuration",
              "percent": 25
            },
            {
              "label": "Build & delivery",
              "percent": 35
            },
            {
              "label": "Integration & QA",
              "percent": 15
            },
            {
              "label": "Handover & support setup",
              "percent": 10
            }
          ],
          "note": "Custom development and large-scale content creation extra."
        },
        {
          "tier": "Institution transformation",
          "price": 350000,
          "billing": "One-time",
          "includes": [
            "Digital learning discovery",
            "Multi-module platform setup",
            "Workflow and integration",
            "Migration, training and QA"
          ],
          "breakdown": [
            {
              "label": "Discovery & planning",
              "percent": 15
            },
            {
              "label": "Design & configuration",
              "percent": 25
            },
            {
              "label": "Build & delivery",
              "percent": 35
            },
            {
              "label": "Integration & QA",
              "percent": 15
            },
            {
              "label": "Handover & support setup",
              "percent": 10
            }
          ],
          "note": "Multi-campus deployment and third-party licences separately scoped."
        }
      ]
    }
  },
  "products": {
    "atsfy-core-career-intelligence": {
      "name": "ATSFY Core Career Intelligence",
      "offers": [
        {
          "tier": "Candidate report",
          "price": 999,
          "billing": "Per report",
          "description": "Candidate ATS/resume intelligence report.",
          "setupFee": null,
          "breakdown": [
            {
              "label": "Product access & updates",
              "percent": 55
            },
            {
              "label": "Infrastructure & monitoring",
              "percent": 15
            },
            {
              "label": "Support operations",
              "percent": 20
            },
            {
              "label": "Service operations",
              "percent": 10
            }
          ]
        },
        {
          "tier": "Professional report",
          "price": 1499,
          "billing": "Per report",
          "description": "Enhanced candidate report.",
          "setupFee": null,
          "breakdown": [
            {
              "label": "Product access & updates",
              "percent": 55
            },
            {
              "label": "Infrastructure & monitoring",
              "percent": 15
            },
            {
              "label": "Support operations",
              "percent": 20
            },
            {
              "label": "Service operations",
              "percent": 10
            }
          ]
        },
        {
          "tier": "Premium report",
          "price": 2599,
          "billing": "Per report",
          "description": "Premium candidate report.",
          "setupFee": null,
          "breakdown": [
            {
              "label": "Product access & updates",
              "percent": 55
            },
            {
              "label": "Infrastructure & monitoring",
              "percent": 15
            },
            {
              "label": "Support operations",
              "percent": 20
            },
            {
              "label": "Service operations",
              "percent": 10
            }
          ]
        },
        {
          "tier": "Recruiter Starter",
          "price": 4499,
          "billing": "Monthly",
          "description": "Recruiter subscription; limits confirmed in proposal.",
          "setupFee": null,
          "breakdown": [
            {
              "label": "Product access & updates",
              "percent": 55
            },
            {
              "label": "Infrastructure & monitoring",
              "percent": 15
            },
            {
              "label": "Support operations",
              "percent": 20
            },
            {
              "label": "Service operations",
              "percent": 10
            }
          ]
        },
        {
          "tier": "Recruiter Growth",
          "price": 6999,
          "billing": "Monthly",
          "description": "Recruiter subscription; limits confirmed in proposal.",
          "setupFee": null,
          "breakdown": [
            {
              "label": "Product access & updates",
              "percent": 55
            },
            {
              "label": "Infrastructure & monitoring",
              "percent": 15
            },
            {
              "label": "Support operations",
              "percent": 20
            },
            {
              "label": "Service operations",
              "percent": 10
            }
          ]
        },
        {
          "tier": "Recruiter Pro",
          "price": 11999,
          "billing": "Monthly",
          "description": "Recruiter subscription; limits confirmed in proposal.",
          "setupFee": null,
          "breakdown": [
            {
              "label": "Product access & updates",
              "percent": 55
            },
            {
              "label": "Infrastructure & monitoring",
              "percent": 15
            },
            {
              "label": "Support operations",
              "percent": 20
            },
            {
              "label": "Service operations",
              "percent": 10
            }
          ]
        }
      ]
    },
    "gymos": {
      "name": "GYMOS",
      "offers": [
        {
          "tier": "Starter",
          "price": 2999,
          "billing": "Monthly",
          "description": "Core gym member and membership workflows.",
          "setupFee": null,
          "breakdown": [
            {
              "label": "Product access & updates",
              "percent": 55
            },
            {
              "label": "Infrastructure & monitoring",
              "percent": 15
            },
            {
              "label": "Support operations",
              "percent": 20
            },
            {
              "label": "Service operations",
              "percent": 10
            }
          ]
        },
        {
          "tier": "Growth",
          "price": 5999,
          "billing": "Monthly",
          "description": "Expanded attendance, billing and reporting workflows.",
          "setupFee": null,
          "breakdown": [
            {
              "label": "Product access & updates",
              "percent": 55
            },
            {
              "label": "Infrastructure & monitoring",
              "percent": 15
            },
            {
              "label": "Support operations",
              "percent": 20
            },
            {
              "label": "Service operations",
              "percent": 10
            }
          ]
        },
        {
          "tier": "Pro",
          "price": 9999,
          "billing": "Monthly",
          "description": "Advanced gym operations; exact limits confirmed in quote.",
          "setupFee": null,
          "breakdown": [
            {
              "label": "Product access & updates",
              "percent": 55
            },
            {
              "label": "Infrastructure & monitoring",
              "percent": 15
            },
            {
              "label": "Support operations",
              "percent": 20
            },
            {
              "label": "Service operations",
              "percent": 10
            }
          ]
        }
      ]
    },
    "savoros": {
      "name": "SavorOS",
      "offers": [
        {
          "tier": "Starter",
          "price": 2999,
          "billing": "Monthly",
          "description": "Digital menu and QR menu workflows.",
          "setupFee": null,
          "breakdown": [
            {
              "label": "Product access & updates",
              "percent": 55
            },
            {
              "label": "Infrastructure & monitoring",
              "percent": 15
            },
            {
              "label": "Support operations",
              "percent": 20
            },
            {
              "label": "Service operations",
              "percent": 10
            }
          ]
        },
        {
          "tier": "Growth",
          "price": 5999,
          "billing": "Monthly",
          "description": "Reservations and kitchen/floor workflows.",
          "setupFee": null,
          "breakdown": [
            {
              "label": "Product access & updates",
              "percent": 55
            },
            {
              "label": "Infrastructure & monitoring",
              "percent": 15
            },
            {
              "label": "Support operations",
              "percent": 20
            },
            {
              "label": "Service operations",
              "percent": 10
            }
          ]
        },
        {
          "tier": "Pro",
          "price": 9999,
          "billing": "Monthly",
          "description": "Advanced restaurant operations; scope confirmed in quote.",
          "setupFee": null,
          "breakdown": [
            {
              "label": "Product access & updates",
              "percent": 55
            },
            {
              "label": "Infrastructure & monitoring",
              "percent": 15
            },
            {
              "label": "Support operations",
              "percent": 20
            },
            {
              "label": "Service operations",
              "percent": 10
            }
          ]
        }
      ]
    },
    "atsfy-hotel-management-pms": {
      "name": "ATSFY Hotel Management PMS",
      "offers": [
        {
          "tier": "Starter",
          "price": 4999,
          "billing": "Monthly",
          "description": "Core property reservation and room workflows.",
          "setupFee": null,
          "breakdown": [
            {
              "label": "Product access & updates",
              "percent": 55
            },
            {
              "label": "Infrastructure & monitoring",
              "percent": 15
            },
            {
              "label": "Support operations",
              "percent": 20
            },
            {
              "label": "Service operations",
              "percent": 10
            }
          ]
        },
        {
          "tier": "Growth",
          "price": 9999,
          "billing": "Monthly",
          "description": "Expanded guest, billing and reporting workflows.",
          "setupFee": null,
          "breakdown": [
            {
              "label": "Product access & updates",
              "percent": 55
            },
            {
              "label": "Infrastructure & monitoring",
              "percent": 15
            },
            {
              "label": "Support operations",
              "percent": 20
            },
            {
              "label": "Service operations",
              "percent": 10
            }
          ]
        },
        {
          "tier": "Pro",
          "price": 19999,
          "billing": "Monthly",
          "description": "Advanced property workflows; integrations scoped separately.",
          "setupFee": null,
          "breakdown": [
            {
              "label": "Product access & updates",
              "percent": 55
            },
            {
              "label": "Infrastructure & monitoring",
              "percent": 15
            },
            {
              "label": "Support operations",
              "percent": 20
            },
            {
              "label": "Service operations",
              "percent": 10
            }
          ]
        }
      ]
    },
    "orderhub": {
      "name": "ORDERHUB",
      "offers": [
        {
          "tier": "Starter",
          "price": 1999,
          "billing": "Monthly",
          "description": "Digital catalogue and enquiry/order capture.",
          "setupFee": null,
          "breakdown": [
            {
              "label": "Product access & updates",
              "percent": 55
            },
            {
              "label": "Infrastructure & monitoring",
              "percent": 15
            },
            {
              "label": "Support operations",
              "percent": 20
            },
            {
              "label": "Service operations",
              "percent": 10
            }
          ]
        },
        {
          "tier": "Growth",
          "price": 3999,
          "billing": "Monthly",
          "description": "Order management and customer updates.",
          "setupFee": null,
          "breakdown": [
            {
              "label": "Product access & updates",
              "percent": 55
            },
            {
              "label": "Infrastructure & monitoring",
              "percent": 15
            },
            {
              "label": "Support operations",
              "percent": 20
            },
            {
              "label": "Service operations",
              "percent": 10
            }
          ]
        },
        {
          "tier": "Pro",
          "price": 6999,
          "billing": "Monthly",
          "description": "Advanced retail operations and reporting.",
          "setupFee": null,
          "breakdown": [
            {
              "label": "Product access & updates",
              "percent": 55
            },
            {
              "label": "Infrastructure & monitoring",
              "percent": 15
            },
            {
              "label": "Support operations",
              "percent": 20
            },
            {
              "label": "Service operations",
              "percent": 10
            }
          ]
        }
      ]
    },
    "clinicos": {
      "name": "ClinicoOS",
      "offers": [
        {
          "tier": "Starter",
          "price": 3999,
          "billing": "Monthly",
          "description": "Single-clinic appointment and patient workflow.",
          "setupFee": null,
          "breakdown": [
            {
              "label": "Product access & updates",
              "percent": 55
            },
            {
              "label": "Infrastructure & monitoring",
              "percent": 15
            },
            {
              "label": "Support operations",
              "percent": 20
            },
            {
              "label": "Service operations",
              "percent": 10
            }
          ]
        },
        {
          "tier": "Growth",
          "price": 7999,
          "billing": "Monthly",
          "description": "Expanded records and prescription workflows.",
          "setupFee": null,
          "breakdown": [
            {
              "label": "Product access & updates",
              "percent": 55
            },
            {
              "label": "Infrastructure & monitoring",
              "percent": 15
            },
            {
              "label": "Support operations",
              "percent": 20
            },
            {
              "label": "Service operations",
              "percent": 10
            }
          ]
        },
        {
          "tier": "Pro",
          "price": 14999,
          "billing": "Monthly",
          "description": "Advanced clinic operations; integration scope confirmed.",
          "setupFee": null,
          "breakdown": [
            {
              "label": "Product access & updates",
              "percent": 55
            },
            {
              "label": "Infrastructure & monitoring",
              "percent": 15
            },
            {
              "label": "Support operations",
              "percent": 20
            },
            {
              "label": "Service operations",
              "percent": 10
            }
          ]
        }
      ]
    },
    "student-erp": {
      "name": "ATSFY Student ERP",
      "offers": [
        {
          "tier": "Starter",
          "price": 4999,
          "billing": "Monthly",
          "description": "Small institution student, attendance and fee workflows.",
          "setupFee": null,
          "breakdown": [
            {
              "label": "Product access & updates",
              "percent": 55
            },
            {
              "label": "Infrastructure & monitoring",
              "percent": 15
            },
            {
              "label": "Support operations",
              "percent": 20
            },
            {
              "label": "Service operations",
              "percent": 10
            }
          ]
        },
        {
          "tier": "Growth",
          "price": 9999,
          "billing": "Monthly",
          "description": "Expanded academic and examination workflows.",
          "setupFee": null,
          "breakdown": [
            {
              "label": "Product access & updates",
              "percent": 55
            },
            {
              "label": "Infrastructure & monitoring",
              "percent": 15
            },
            {
              "label": "Support operations",
              "percent": 20
            },
            {
              "label": "Service operations",
              "percent": 10
            }
          ]
        },
        {
          "tier": "Pro",
          "price": 19999,
          "billing": "Monthly",
          "description": "Advanced institution workflows; student limits confirmed.",
          "setupFee": null,
          "breakdown": [
            {
              "label": "Product access & updates",
              "percent": 55
            },
            {
              "label": "Infrastructure & monitoring",
              "percent": 15
            },
            {
              "label": "Support operations",
              "percent": 20
            },
            {
              "label": "Service operations",
              "percent": 10
            }
          ]
        }
      ]
    },
    "lexora-legal-tech": {
      "name": "Lexora Legal-Tech",
      "offers": [
        {
          "tier": "Discovery",
          "price": 15000,
          "billing": "One-time",
          "description": "Paid discovery and requirements definition only; not legal advice.",
          "setupFee": null,
          "breakdown": [
            {
              "label": "Product access & updates",
              "percent": 55
            },
            {
              "label": "Infrastructure & monitoring",
              "percent": 15
            },
            {
              "label": "Support operations",
              "percent": 20
            },
            {
              "label": "Service operations",
              "percent": 10
            }
          ]
        },
        {
          "tier": "Prototype",
          "price": 75000,
          "billing": "One-time",
          "description": "Prototype only after readiness and professional review.",
          "setupFee": null,
          "breakdown": [
            {
              "label": "Product access & updates",
              "percent": 55
            },
            {
              "label": "Infrastructure & monitoring",
              "percent": 15
            },
            {
              "label": "Support operations",
              "percent": 20
            },
            {
              "label": "Service operations",
              "percent": 10
            }
          ]
        },
        {
          "tier": "Custom deployment",
          "price": 250000,
          "billing": "From",
          "description": "Indicative starting point; availability and compliance review required.",
          "setupFee": null,
          "breakdown": [
            {
              "label": "Product access & updates",
              "percent": 55
            },
            {
              "label": "Infrastructure & monitoring",
              "percent": 15
            },
            {
              "label": "Support operations",
              "percent": 20
            },
            {
              "label": "Service operations",
              "percent": 10
            }
          ]
        }
      ]
    },
    "atsfy-learn": {
      "name": "ATSFY Learn",
      "offers": [
        {
          "tier": "Short course",
          "price": 499,
          "billing": "Per learner",
          "description": "Course availability and curriculum confirmed before payment.",
          "setupFee": null,
          "breakdown": [
            {
              "label": "Product access & updates",
              "percent": 55
            },
            {
              "label": "Infrastructure & monitoring",
              "percent": 15
            },
            {
              "label": "Support operations",
              "percent": 20
            },
            {
              "label": "Service operations",
              "percent": 10
            }
          ]
        },
        {
          "tier": "Applied course",
          "price": 1499,
          "billing": "Per learner",
          "description": "Applied course; cohort dates and support confirmed.",
          "setupFee": null,
          "breakdown": [
            {
              "label": "Product access & updates",
              "percent": 55
            },
            {
              "label": "Infrastructure & monitoring",
              "percent": 15
            },
            {
              "label": "Support operations",
              "percent": 20
            },
            {
              "label": "Service operations",
              "percent": 10
            }
          ]
        },
        {
          "tier": "Cohort programme",
          "price": 4999,
          "billing": "Per learner",
          "description": "Structured cohort programme; schedule confirmed.",
          "setupFee": null,
          "breakdown": [
            {
              "label": "Product access & updates",
              "percent": 55
            },
            {
              "label": "Infrastructure & monitoring",
              "percent": 15
            },
            {
              "label": "Support operations",
              "percent": 20
            },
            {
              "label": "Service operations",
              "percent": 10
            }
          ]
        }
      ]
    },
    "easyreport": {
      "name": "EasyReport",
      "offers": [
        {
          "tier": "Starter",
          "price": 4999,
          "billing": "Monthly",
          "description": "Basic reporting and exports; usage limits confirmed.",
          "setupFee": null,
          "breakdown": [
            {
              "label": "Product access & updates",
              "percent": 55
            },
            {
              "label": "Infrastructure & monitoring",
              "percent": 15
            },
            {
              "label": "Support operations",
              "percent": 20
            },
            {
              "label": "Service operations",
              "percent": 10
            }
          ]
        },
        {
          "tier": "Growth",
          "price": 9999,
          "billing": "Monthly",
          "description": "More reports and data sources; limits confirmed.",
          "setupFee": null,
          "breakdown": [
            {
              "label": "Product access & updates",
              "percent": 55
            },
            {
              "label": "Infrastructure & monitoring",
              "percent": 15
            },
            {
              "label": "Support operations",
              "percent": 20
            },
            {
              "label": "Service operations",
              "percent": 10
            }
          ]
        },
        {
          "tier": "Business",
          "price": 19999,
          "billing": "Monthly",
          "description": "Expanded reporting, API and permissions.",
          "setupFee": null,
          "breakdown": [
            {
              "label": "Product access & updates",
              "percent": 55
            },
            {
              "label": "Infrastructure & monitoring",
              "percent": 15
            },
            {
              "label": "Support operations",
              "percent": 20
            },
            {
              "label": "Service operations",
              "percent": 10
            }
          ]
        }
      ]
    },
    "atsfy-incubate": {
      "name": "ATSFY Incubate",
      "offers": [
        {
          "tier": "Founder session",
          "price": 5000,
          "billing": "Per session",
          "description": "One scoped founder advisory session.",
          "setupFee": null,
          "breakdown": [
            {
              "label": "Product access & updates",
              "percent": 55
            },
            {
              "label": "Infrastructure & monitoring",
              "percent": 15
            },
            {
              "label": "Support operations",
              "percent": 20
            },
            {
              "label": "Service operations",
              "percent": 10
            }
          ]
        },
        {
          "tier": "Validation sprint",
          "price": 25000,
          "billing": "One-time",
          "description": "Defined validation sprint and roadmap.",
          "setupFee": null,
          "breakdown": [
            {
              "label": "Product access & updates",
              "percent": 55
            },
            {
              "label": "Infrastructure & monitoring",
              "percent": 15
            },
            {
              "label": "Support operations",
              "percent": 20
            },
            {
              "label": "Service operations",
              "percent": 10
            }
          ]
        },
        {
          "tier": "Readiness programme",
          "price": 60000,
          "billing": "One-time",
          "description": "Structured startup readiness support; no funding guarantee.",
          "setupFee": null,
          "breakdown": [
            {
              "label": "Product access & updates",
              "percent": 55
            },
            {
              "label": "Infrastructure & monitoring",
              "percent": 15
            },
            {
              "label": "Support operations",
              "percent": 20
            },
            {
              "label": "Service operations",
              "percent": 10
            }
          ]
        }
      ]
    },
    "green-to-gold": {
      "name": "Green-to-Gold",
      "offers": [
        {
          "tier": "Feasibility study",
          "price": null,
          "billing": "Custom quote",
          "description": "Requires feedstock, BOM, process and testing assessment.",
          "setupFee": null,
          "breakdown": [
            {
              "label": "Product access & updates",
              "percent": 55
            },
            {
              "label": "Infrastructure & monitoring",
              "percent": 15
            },
            {
              "label": "Support operations",
              "percent": 20
            },
            {
              "label": "Service operations",
              "percent": 10
            }
          ]
        },
        {
          "tier": "Prototype / pilot",
          "price": null,
          "billing": "Custom quote",
          "description": "Requires material, tooling, testing, compliance and logistics costing.",
          "setupFee": null,
          "breakdown": [
            {
              "label": "Product access & updates",
              "percent": 55
            },
            {
              "label": "Infrastructure & monitoring",
              "percent": 15
            },
            {
              "label": "Support operations",
              "percent": 20
            },
            {
              "label": "Service operations",
              "percent": 10
            }
          ]
        },
        {
          "tier": "Commercial production",
          "price": null,
          "billing": "Custom quote",
          "description": "Quote only after production feasibility and unit economics validation.",
          "setupFee": null,
          "breakdown": [
            {
              "label": "Product access & updates",
              "percent": 55
            },
            {
              "label": "Infrastructure & monitoring",
              "percent": 15
            },
            {
              "label": "Support operations",
              "percent": 20
            },
            {
              "label": "Service operations",
              "percent": 10
            }
          ]
        }
      ]
    },
    "rubberos": {
      "name": "RubberOS",
      "offers": [
        {
          "tier": "Starter",
          "price": 7999,
          "billing": "Monthly",
          "description": "Core rubber-sector workflow workspace.",
          "setupFee": null,
          "breakdown": [
            {
              "label": "Product access & updates",
              "percent": 55
            },
            {
              "label": "Infrastructure & monitoring",
              "percent": 15
            },
            {
              "label": "Support operations",
              "percent": 20
            },
            {
              "label": "Service operations",
              "percent": 10
            }
          ]
        },
        {
          "tier": "Growth",
          "price": 14999,
          "billing": "Monthly",
          "description": "Expanded operational workflows and reporting.",
          "setupFee": null,
          "breakdown": [
            {
              "label": "Product access & updates",
              "percent": 55
            },
            {
              "label": "Infrastructure & monitoring",
              "percent": 15
            },
            {
              "label": "Support operations",
              "percent": 20
            },
            {
              "label": "Service operations",
              "percent": 10
            }
          ]
        },
        {
          "tier": "Enterprise",
          "price": 29999,
          "billing": "Monthly",
          "description": "Multi-team workflows; integrations scoped separately.",
          "setupFee": null,
          "breakdown": [
            {
              "label": "Product access & updates",
              "percent": 55
            },
            {
              "label": "Infrastructure & monitoring",
              "percent": 15
            },
            {
              "label": "Support operations",
              "percent": 20
            },
            {
              "label": "Service operations",
              "percent": 10
            }
          ]
        }
      ]
    },
    "construction-platform": {
      "name": "ATSFY Construction",
      "offers": [
        {
          "tier": "Starter",
          "price": 9999,
          "billing": "Monthly",
          "description": "Core project and operations workflows.",
          "setupFee": null,
          "breakdown": [
            {
              "label": "Product access & updates",
              "percent": 55
            },
            {
              "label": "Infrastructure & monitoring",
              "percent": 15
            },
            {
              "label": "Support operations",
              "percent": 20
            },
            {
              "label": "Service operations",
              "percent": 10
            }
          ]
        },
        {
          "tier": "Growth",
          "price": 19999,
          "billing": "Monthly",
          "description": "Expanded project and team workflows.",
          "setupFee": null,
          "breakdown": [
            {
              "label": "Product access & updates",
              "percent": 55
            },
            {
              "label": "Infrastructure & monitoring",
              "percent": 15
            },
            {
              "label": "Support operations",
              "percent": 20
            },
            {
              "label": "Service operations",
              "percent": 10
            }
          ]
        },
        {
          "tier": "Enterprise",
          "price": 39999,
          "billing": "Monthly",
          "description": "Advanced multi-project workflows; integrations scoped separately.",
          "setupFee": null,
          "breakdown": [
            {
              "label": "Product access & updates",
              "percent": 55
            },
            {
              "label": "Infrastructure & monitoring",
              "percent": 15
            },
            {
              "label": "Support operations",
              "percent": 20
            },
            {
              "label": "Service operations",
              "percent": 10
            }
          ]
        }
      ]
    }
  }
};
 const money=n=>new Intl.NumberFormat('en-IN',{style:'currency',currency:'INR',maximumFractionDigits:0}).format(n);
 const amount=p=>p.price==null?'Custom quote':money(p.price)+(p.billing==='Monthly'?' / month':p.billing==='Per report'?' / report':p.billing==='Per learner'?' / learner':p.billing==='Per session'?' / session':p.billing==='From'?' onwards':'');
 function packageCard(p){
  const rows=p.breakdown.map(x=>'<li class="flex justify-between gap-3 text-xs text-gray-600 py-1"><span>'+x.label+'</span><span class="font-semibold text-atsfy-dark">'+x.percent+'% · '+(p.price==null?'Scoped':money(Math.round(p.price*x.percent/100)))+'</span></li>').join('');
  return '<article class="rounded-2xl border border-atsfy-green/15 bg-white p-5 shadow-sm flex flex-col"><div class="text-xs uppercase tracking-wider font-bold text-atsfy-olive">'+p.tier+'</div><div class="text-2xl font-extrabold text-atsfy-dark mt-2">'+amount(p)+'</div><div class="text-xs text-gray-500 mt-1">'+p.billing+'</div><div class="mt-4 text-sm font-semibold text-atsfy-dark">Indicative delivery breakdown</div><ul class="mt-2 divide-y divide-gray-100">'+rows+'</ul><ul class="mt-4 space-y-2 text-sm text-gray-700">'+p.includes.map(x=>'<li class="flex gap-2"><span class="text-atsfy-green">✓</span><span>'+x+'</span></li>').join('')+'</ul><p class="text-xs text-gray-500 mt-4">'+p.note+'</p></article>';
 }
 function productCard(p){
  const rows=p.breakdown.map(x=>'<li class="flex justify-between gap-3 text-xs text-gray-600 py-1"><span>'+x.label+'</span><span class="font-semibold text-atsfy-dark">'+x.percent+'%'+(p.price==null?'':' · '+money(Math.round(p.price*x.percent/100)))+'</span></li>').join('');
  return '<article class="rounded-2xl border border-atsfy-green/15 bg-white p-5 shadow-sm"><div class="text-xs uppercase tracking-wider font-bold text-atsfy-olive">'+p.tier+'</div><div class="text-2xl font-extrabold text-atsfy-dark mt-2">'+amount(p)+'</div><div class="text-xs text-gray-500 mt-1">'+p.billing+'</div><p class="text-sm text-gray-700 mt-3">'+p.description+'</p><div class="text-xs font-semibold text-atsfy-dark mt-4">Subscription allocation guide</div><ul class="mt-2 divide-y divide-gray-100">'+rows+'</ul><p class="text-xs text-gray-500 mt-3">Allocation is an illustrative service-value split, not a separate bill.</p></article>';
 }
 function section(title,items,note){
  return '<section class="mt-10 pt-8 border-t border-atsfy-green/15"><div class="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-5"><div><span class="text-xs uppercase tracking-wider font-bold text-atsfy-green">Transparent pricing</span><h2 class="text-2xl font-bold text-atsfy-dark">'+title+'</h2></div><span class="text-xs text-gray-500">INR · GST extra</span></div><div class="grid grid-cols-1 md:grid-cols-3 gap-4">'+items+'</div><p class="text-xs text-gray-500 mt-4">'+note+'</p></section>';
 }
 window.ATSFY_PRICING={
  data:DATA,
  serviceStart:id=>{const x=DATA.services[id];if(!x)return 'Custom quote';const vals=x.packages.map(p=>p.price).filter(v=>v!=null);return vals.length?'From '+money(Math.min(...vals))+(x.packages[0].billing==='Monthly'?' / month':''):'Custom quote';},
  productStart:id=>{const x=DATA.products[id];if(!x)return 'Request pricing';const vals=x.offers.map(p=>p.price).filter(v=>v!=null);return vals.length?'From '+money(Math.min(...vals)):'Custom quote';},
  renderService:id=>{const x=DATA.services[id];if(!x)return '';return section(x.name+' packages',x.packages.map(packageCard).join(''),DATA.taxNote+' '+DATA.negotiationNote+' '+DATA.disclaimer);},
  renderProduct:id=>{const x=DATA.products[id];if(!x)return '';return section(x.name+' plans',x.offers.map(productCard).join(''),DATA.taxNote+' '+DATA.negotiationNote+' '+DATA.disclaimer);}
 };
})();