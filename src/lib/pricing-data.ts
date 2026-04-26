import type { PricingItem } from '@/components/shared/PricingCard'

type PricingSection = {
  title: { en: string; fi: string }
  subtitle: { en: string; fi: string }
  items: { en: PricingItem; fi: PricingItem }[]
}

export const TABLE_HEADERS = {
  component: { en: 'Component', fi: 'Komponentti' },
  price: { en: 'Price', fi: 'Hinta' },
}

export const TRANSACTION: PricingSection = {
  title: { en: 'Transaction Pricing', fi: 'Tapahtumahinnoittelu' },
  subtitle: {
    en: 'Per-use fees applied when documents are dispatched for signing.',
    fi: 'Käyttöperusteiset maksut, jotka veloitetaan asiakirjojen lähettämisen yhteydessä.',
  },
  items: [
    {
      en: { name: 'Signing Request — Strong Authentication (AES)', description: 'Per signatory dispatched. Includes sealing with qualified timestamp.', price: '0.80', unit: 'EUR' },
      fi: { name: 'Allekirjoituspyyntö — Vahva tunnistautuminen (AES)', description: 'Per allekirjoittaja. Sisältää sinetöinnin hyväksytyllä aikaleimalla.', price: '0.80', unit: 'EUR' },
    },
    {
      en: { name: 'Signing Request — Light Authentication (SES)', description: 'Per signatory. SMS OTP, Email OTP, or drawn signature.', price: '0.65', unit: 'EUR' },
      fi: { name: 'Allekirjoituspyyntö — Kevyt tunnistautuminen (SES)', description: 'Per allekirjoittaja. SMS OTP, sähköposti-OTP tai piirretty allekirjoitus.', price: '0.65', unit: 'EUR' },
    },
    {
      en: { name: 'SMS Message', description: 'Per message. Signing invitations and document retrieval.', price: '0.10', unit: 'EUR' },
      fi: { name: 'SMS-viesti', description: 'Per viesti. Allekirjoituskutsut ja asiakirjojen noutaminen.', price: '0.10', unit: 'EUR' },
    },
    {
      en: { name: 'Document Sealing', description: 'Per document. Organizational e-seal with qualified timestamp.', price: '0.30', unit: 'EUR' },
      fi: { name: 'Asiakirjan sinetöinti', description: 'Per asiakirja. Organisaation sähköinen sinetti hyväksytyllä aikaleimalla.', price: '0.30', unit: 'EUR' },
    },
    {
      en: { name: 'File Conversion', description: 'Per document. Non-PDF to PDF/A format conversion.', price: '0.25', unit: 'EUR' },
      fi: { name: 'Tiedostomuunnos', description: 'Per asiakirja. Muunnos PDF/A-muotoon.', price: '0.25', unit: 'EUR' },
    },
    {
      en: { name: 'File Sharing', description: 'Per recipient. Secure document delivery via SMS OTP link.', price: '0.15', unit: 'EUR' },
      fi: { name: 'Tiedoston jakaminen', description: 'Per vastaanottaja. Suojattu toimitus SMS OTP -linkillä.', price: '0.15', unit: 'EUR' },
    },
  ],
}

export const MONTHLY: PricingSection = {
  title: { en: 'Monthly Subscriptions', fi: 'Kuukausimaksut' },
  subtitle: {
    en: 'Recurring platform and service fees.',
    fi: 'Toistuvat alusta- ja palvelumaksut.',
  },
  items: [
    {
      en: { name: 'Platform Access Fee', description: 'Enterprise tier access, portal, API, SSO, branding.', price: '275.00', unit: 'EUR/mo', highlight: true },
      fi: { name: 'Alustan perusmaksu', description: 'Enterprise-tason käyttöoikeus, portaali, API, SSO, brändäys.', price: '275.00', unit: 'EUR/kk', highlight: true },
    },
    {
      en: { name: 'Additional Environment', description: 'Per additional tenant (subsidiary, separate business unit).', price: '75.00', unit: 'EUR/mo' },
      fi: { name: 'Lisäympäristö', description: 'Per lisäympäristö (tytäryhtiö, erillinen liiketoimintayksikkö).', price: '75.00', unit: 'EUR/kk' },
    },
    {
      en: { name: 'Online Form Template', description: 'Per active form template per month.', price: '25.00', unit: 'EUR/mo' },
      fi: { name: 'Verkkolomakemalli', description: 'Per aktiivinen lomakemalli kuukaudessa.', price: '25.00', unit: 'EUR/kk' },
    },
    {
      en: { name: 'Nordic-Baltic Authentication', description: 'Cross-border eID authentication methods add-on.', price: '125.00', unit: 'EUR/mo' },
      fi: { name: 'Pohjois-Baltian tunnistautuminen', description: 'Rajat ylittävät sähköiset tunnistusmenetelmät.', price: '125.00', unit: 'EUR/kk' },
    },
  ],
}

export const SETUP: PricingSection = {
  title: { en: 'One-Time & Setup Fees', fi: 'Kerta- ja asennusmaksut' },
  subtitle: {
    en: 'Initial configuration and customization.',
    fi: 'Alkukonfiguraatio ja räätälöinti.',
  },
  items: [
    {
      en: { name: 'Customization & Branding', description: 'One-time. Portal UI, signer view, message templates, PAdES cover.', price: '980.00', unit: 'EUR' },
      fi: { name: 'Räätälöinti ja brändäys', description: 'Kertamaksu. Portaalin käyttöliittymä, allekirjoittajanäkymä, viestimallit, PAdES-kansilehti.', price: '980.00', unit: 'EUR' },
    },
    {
      en: { name: 'Development & Configuration', description: 'Per hour (min 0.5h). Custom integrations, form development, support.', price: '145.00', unit: 'EUR/h' },
      fi: { name: 'Kehitys ja konfigurointi', description: 'Per tunti (min. 0,5h). Mukautetut integraatiot, lomakekehitys, tuki.', price: '145.00', unit: 'EUR/h' },
    },
    {
      en: { name: 'Specialist Consultation', description: 'Per hour. Architecture, project management, solution design.', price: '190.00', unit: 'EUR/h' },
      fi: { name: 'Asiantuntijakonsultointi', description: 'Per tunti. Arkkitehtuuri, projektinhallinta, ratkaisusuunnittelu.', price: '190.00', unit: 'EUR/h' },
    },
  ],
}

export const ADDONS: PricingSection = {
  title: { en: 'Add-on Pricing', fi: 'Lisäpalveluhinnoittelu' },
  subtitle: {
    en: 'Additional capabilities activated on top of your subscription.',
    fi: 'Lisäominaisuudet, jotka aktivoidaan tilauksesi päälle.',
  },
  items: [
    {
      en: { name: 'E-Form Template', description: 'Per active form. Monthly fee + development work for creation.', price: '25.00', unit: 'EUR/mo' },
      fi: { name: 'Sähköinen lomakemalli', description: 'Per aktiivinen lomake. Kuukausimaksu + kehitystyö luomiseen.', price: '25.00', unit: 'EUR/kk' },
    },
    {
      en: { name: 'Document Templating', description: 'API-driven PDF generation. Per transaction + setup work.', price: 'Per use', unit: '' },
      fi: { name: 'Asiakirjamallit', description: 'API-pohjainen PDF-generointi. Tapahtumakohtainen + asennustyö.', price: 'Käytön mukaan', unit: '' },
    },
    {
      en: { name: 'Mass Requests', description: 'Bulk dispatch via CSV. Standard transaction fees per request.', price: 'Per use', unit: '' },
      fi: { name: 'Massapyynnöt', description: 'CSV-pohjainen massalähetys. Normaalit tapahtumamaksut per pyyntö.', price: 'Käytön mukaan', unit: '' },
    },
  ],
}

export function getLocalizedItems(section: PricingSection, lang: 'en' | 'fi') {
  return {
    title: section.title[lang],
    subtitle: section.subtitle[lang],
    items: section.items.map(item => item[lang]),
  }
}
