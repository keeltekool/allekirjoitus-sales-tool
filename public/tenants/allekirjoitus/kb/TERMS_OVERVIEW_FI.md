# Allekirjoitus.fi Palveluehdot — Yhteenveto

# OSA 1: Keskeiset palveluehdot

## 1.1 Palveluntarjoaja
**SK ID Solutions AS** tarjoaa Allekirjoitus.fi-palvelun pilvipohjaisen sähköisen allekirjoituspalveluna. Näitä ehtoja sovelletaan yhdessä Tilaajasopimuksen Yleisten Ehtojen kanssa.

## 1.2 Laskutusyksikkö — Allekirjoituspyyntö
**Yksi Allekirjoituspyyntö (SR) veloitetaan allekirjoittajaa kohden**, kun asiakirja lähetetään allekirjoitettavaksi — riippumatta siitä, suorittaako allekirjoittaja prosessin loppuun vai kieltäytyykö hän. Neljälle allekirjoittajalle lähetetty asiakirja kuluttaa neljä SR:ää.

## 1.3 Enterprise-laskutusmalli
**Kuukausittainen alustan perusmaksu + tapahtumakohtaiset maksut + SMS-maksut.** Ei kiinteitä paketteja — läpinäkyvä käyttöön perustuva laskutus. Kaikki hinnat voimassa olevan Allekirjoitus.fi-hinnaston mukaisesti (ALV 0 %).

## 1.4 Asiakirjavaatimukset
**PDF-A-muoto vaaditaan** pitkäaikaisen arkistointiyhteensopivuuden varmistamiseksi. Asiakirjat eivät saa olla salasanasuojattuja. Tiedoston enimmäiskoko: 100 MB per asiakirja.

## 1.5 Allekirjoitetun asiakirjan muoto
**PAdES-muoto hyväksytyllä aikaleimalla ja AATL-yhteensopivalla sinetillä.** Jokaiseen allekirjoitettuun asiakirjaan liitetään XML-audit trail. Todennettavissa itsenäisesti Adobe Readerissa — ulkoista palveluyhteyttä ei tarvita.

## 1.6 Asiakirjojen säilytys
**Oletussäilytysaika 90 päivää** pyynnön valmistumisesta. Tilaajan on siirrettävä kaikki allekirjoitetut asiakirjat omiin säilytysjärjestelmiinsä ennen säilytysajan päättymistä. SK ei tarjoa pitkäaikaista arkistointia.

## 1.7 Henkilötietojen käsittely
**Tilaaja on rekisterinpitäjä; SK on henkilötietojen käsittelijä.** Käsiteltävät henkilötiedot: nimi, sähköposti, puhelinnumero, henkilötunnus (HETU), IP-osoite, tunnistautumistiedot. HETU tallennetaan ainoastaan XML-metatietoihin — ei näytetä asiakirjan sivuilla.

## 1.8 Enterprise-käyttö ja tunnistautuminen
**Rajoittamaton käyttäjämäärä. SSO Azure AD / Active Directory -integraatiolla.** Automaattinen käyttäjätilin luonti ensimmäisellä SSO-kirjautumisella. Edistyneet käyttöoikeudet AD:n osastorakenteilla. Oletuksena AES; valinnainen SES (SMS OTP, email OTP, piirretty allekirjoitus).

## 1.9 Tuki ja palvelutaso
**Tekninen tuki ma–pe, 09:00–17:00 EET** osoitteeseen support@allekirjoitus.fi. Palvelu tarjotaan best effort -periaatteella kolmansien osapuolten tunnistautumistarjoajista johtuen. SLA-seuraamuksia ei sovelleta.

## 1.10 Muokkausrajoitukset
**Ei muutoksia lähettämisen jälkeen.** Kun asiakirja on lähetetty allekirjoitettavaksi, uusia allekirjoittajia ei voida lisätä eikä voimassaoloaikaa muuttaa.
