import type { BrandConfig } from '@/lib/brand-config'

const allekirjoitus: BrandConfig = {
  id: 'allekirjoitus',
  name: 'Allekirjoitus.fi',
  company: 'SK ID Solutions',

  colors: {
    primary: '#ef4224',
    primaryAlt: '#e23013',
    primaryHover: '#bd2605',
    textBlack: '#231f20',
    textBody: '#010101',
    dark: '#170703',
    gray: '#bebdbd',
    grayLight: '#f2f2f2',
    grayBorder: '#e5e5e5',
    gray500: '#6b7280',
    gray600: '#4b5563',
  },

  typography: {
    body: {
      family: 'Metropolis',
      source: 'local',
      basePath: '/tenants/allekirjoitus/fonts',
      weights: [300, 400, 500, 600, 700],
      files: {
        300: 'Metropolis-Light.otf',
        400: 'Metropolis-Regular.otf',
        500: 'Metropolis-Medium.otf',
        600: 'Metropolis-SemiBold.otf',
        700: 'Metropolis-Bold.otf',
      },
    },
    heading: {
      family: 'Barlow Condensed',
      source: 'google-fonts',
      url: 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700&display=swap',
      weights: [400, 500, 600, 700],
    },
  },

  logos: {
    header: '/tenants/allekirjoitus/logos/logo.svg',
    headerHeight: '39px',
    favicon: '/tenants/allekirjoitus/logos/icon.svg',
  },

  contact: {
    name: 'Terhi Roll',
    title: 'Key Account Manager',
    phone: '+372 538 00017',
    email: 'Terhi.Roll@sk.ee',
  },

  footer: {
    company: 'Allekirjoitus.fi - SK ID Solutions',
    url: 'allekirjoitus.fi',
  },

  kb: {
    overview: {
      en: '/tenants/allekirjoitus/kb/MASTER_KB_OVERVIEW_EN.md',
      fi: '/tenants/allekirjoitus/kb/MASTER_KB_OVERVIEW_FI.md',
    },
    detail: {
      en: '/tenants/allekirjoitus/kb/MASTER_KB_RENDER_EN.md',
      fi: '/tenants/allekirjoitus/kb/MASTER_KB_DETAIL_FI.md',
    },
  },

  terms: {
    overview: {
      en: '/tenants/allekirjoitus/kb/TERMS_OVERVIEW_EN.md',
      fi: '/tenants/allekirjoitus/kb/TERMS_OVERVIEW_FI.md',
    },
    detail: {
      en: '/tenants/allekirjoitus/kb/TERMS_DETAIL_EN.md',
      fi: '/tenants/allekirjoitus/kb/TERMS_DETAIL_FI.md',
    },
  },

  languages: ['en', 'fi'],
  defaultLanguage: 'en',

  locale: {
    en: {
      eyebrow: {
        enterprise_offer: 'Enterprise Offer',
        feature_introduction: 'Feature Introduction',
        pricing_proposal: 'Pricing Proposal',
        price_list: 'Price List',
      },
      cta: {
        heading: 'Ready to get started?',
        subtext: 'Contact your dedicated account manager to discuss this proposal or schedule an onboarding kickoff.',
      },
      editButton: {
        inactive: 'Edit mode',
        active: 'Editing - click to lock',
      },
      sidebar: {
        contentLayers: 'Content Layers',
        attachments: 'Attachments',
        depth: 'Depth',
        overview: 'Overview',
        detail: 'Detail',
        customBlocks: 'Custom Blocks',
        customerContext: 'Customer Context',
        whatsIncluded: "What's Included",
        pricingBlock: 'Pricing Block',
        serviceTerms: 'Service Terms',
        loadPreset: 'Load preset...',
        savePreset: 'Save as preset...',
        layers: {
          defaults: 'Your Enterprise Defaults',
          core: 'Core Signing Service',
          workflows: 'Workflows & Orchestration',
          config: 'Enterprise Configuration',
          addons: 'Productized Add-ons',
          patterns: 'Industry Patterns',
        },
        pricingSubs: {
          transaction: 'Transaction Pricing',
          monthly: 'Monthly Subscriptions',
          setup: 'One-Time & Setup Fees',
          addons: 'Add-on Pricing',
        },
      },
    },
    fi: {
      eyebrow: {
        enterprise_offer: 'Yritysratkaisu',
        feature_introduction: 'Ominaisuudet',
        pricing_proposal: 'Hintatarjous',
        price_list: 'Hinnasto',
      },
      cta: {
        heading: 'Kiinnostuitko?',
        subtext: 'Ota yhteyttä yhteyshenkilöösi keskustellaksesi tarjouksesta tai sopiaksesi käyttöönotosta.',
      },
      editButton: {
        inactive: 'Muokkaustila',
        active: 'Muokkaus - lukitse',
      },
      sidebar: {
        contentLayers: 'Sisältötasot',
        attachments: 'Liitteet',
        depth: 'Syvyys',
        overview: 'Yleiskatsaus',
        detail: 'Yksityiskohtainen',
        customBlocks: 'Mukautetut lohkot',
        customerContext: 'Asiakkaan konteksti',
        whatsIncluded: 'Palveluun sisältyy',
        pricingBlock: 'Hintaliite',
        serviceTerms: 'Palveluehdot',
        loadPreset: 'Lataa asetus...',
        savePreset: 'Tallenna asetuksena...',
        layers: {
          defaults: 'Enterprise-oletusasetukset',
          core: 'Allekirjoituksen peruspalvelu',
          workflows: 'Työnkulut ja orkestraatio',
          config: 'Enterprise-konfiguraatio',
          addons: 'Tuotteistetut lisäpalvelut',
          patterns: 'Toimialakohtaiset mallit',
        },
        pricingSubs: {
          transaction: 'Tapahtumahinnoittelu',
          monthly: 'Kuukausimaksut',
          setup: 'Kerta- ja asennusmaksut',
          addons: 'Lisäpalveluhinnoittelu',
        },
      },
    },
  },
}

export default allekirjoitus
