# Allekirjoitus.fi Palveluehdot

# OSA 1: Palvelu ja laskutus

## 1.1 Palveluntarjoaja
**Tarjoaja:** SK ID Solutions AS ("SK") tarjoaa Allekirjoitus.fi-palvelun pilvipohjaisen sähköisen allekirjoituspalveluna PDF-asiakirjoille.

**Voimaantulopäivä:** Nämä Palveluehdot (Versio 1.0) ovat voimassa 14.1.2026 alkaen ja niitä sovelletaan yhdessä Tilaajasopimuksen Yleisten Ehtojen kanssa.

**Palvelutasot:** Palvelua tarjotaan kahdella mallilla — Basic Tier (standardoitu, pakettipohjainen) ja Enterprise Tier (joustava, integraatiokykyinen, edistyneet työnkulut ja räätälöinti).

## 1.2 Laskutusyksikkö — Allekirjoituspyyntö
**Määritelmä:** Yksi Allekirjoituspyyntö (SR) veloitetaan allekirjoittajaa kohden, kun asiakirja lähetetään allekirjoitettavaksi, riippumatta siitä, suorittaako allekirjoittaja prosessin loppuun vai kieltäytyykö hän. Neljälle allekirjoittajalle lähetetty asiakirja kuluttaa neljä Allekirjoituspyyntöä.

## 1.3 Enterprise-laskutusmalli
**Rakenne:** Kuukausittainen alustan perusmaksu + tapahtumakohtaiset maksut + SMS-maksut. Ei kiinteitä paketteja tai volyymikattoja.

**Basic Tier:** Kiinteät kuukausipaketit; ylitykset veloitetaan Hinnaston mukaisesti.

**Hinnasto:** Kaikki maksut voimassa olevan Allekirjoitus.fi-hinnaston tai erikseen Tilaajasopimuksessa sovitun mukaisesti. Kaikki hinnat ALV 0 %.

**Laskutusjakso:** Kuukausittain, perustuen kalenterikuukauden todelliseen käyttöön.

## 1.4 Allekirjoitustyypit
**Kehittynyt sähköinen allekirjoitus (AES):** Luotu käyttäen Suomen luottamusverkoston ja Pohjoismaiden sekä Baltian korkean varmuustason sähköisiä tunnistusmenetelmiä. Täyttää eIDAS-asetuksen vaatimukset kehittyneelle sähköiselle allekirjoitukselle. Oletus molemmilla tasoilla.

**Yksinkertainen sähköinen allekirjoitus (SES):** Perustuu matalamman varmuustason tunnistusmenetelmiin — SMS OTP, email OTP tai piirretty allekirjoitus (InkSign). Vain Enterprise Tier, valinnainen.

# OSA 2: Asiakirjat ja allekirjoitusprosessi

## 2.1 Asiakirjavaatimukset
**Muoto:** Kaikki asiakirjat on toimitettava PDF-A-muodossa pitkäaikaisen arkistointiyhteensopivuuden varmistamiseksi.

**Rajoitukset:** Asiakirjat eivät saa olla salasanasuojattuja tai muutoin rajoitettuja. Tiedoston enimmäiskoko: 100 MB per asiakirja.

## 2.2 Allekirjoituksen työnkulku
**Prosessi:** Lähettäjä lataa PDF:n → määrittää allekirjoittajat (nimi, sähköposti, matkapuhelin) → Palvelu lähettää allekirjoituspyynnöt sähköpostitse → allekirjoittaja tunnistautuu, tarkistaa ja vahvistaa.

**Viimeistely:** Allekirjoitettu asiakirja toimitetaan PAdES-muodossa, automaattisesti sinetöitynä AATL-yhteensopivalla varmenteella. XML-audit trail liitetään allekirjoitustapahtuman yksityiskohtaiseksi todistukseksi.

**Noutaminen:** Allekirjoittaja saa sähköpostitse latauslinkin, joka on suojattu SMS OTP -kertakäyttösalasanalla.

**Todentaminen:** Eheys ja kelpoisuus todennettavissa Adobe Readerissa ilman ulkoista palveluyhteyttä.

## 2.3 Muokkausrajoitukset
**Lähettämisen jälkeen:** Uusia allekirjoittajia ei voida lisätä eikä voimassaoloaikaa muuttaa.

## 2.4 Asiakirjojen säilytys
**Säilytysaika:** 90 päivää pyynnön valmistumisesta (oletus).

**Tilaajan vastuu:** Kaikki allekirjoitetut asiakirjat on siirrettävä Tilaajan omaan pitkäaikaissäilytykseen ennen säilytysajan päättymistä.

**Ei arkistointia:** SK ei tarjoa pysyvää asiakirjojen säilytystä.

# OSA 3: Henkilötietojen käsittely ja vaatimustenmukaisuus

## 3.1 Henkilötietojen käsittelyn roolit
**Rekisterinpitäjä:** Tilaaja on rekisterinpitäjä.

**Käsittelijä:** SK on henkilötietojen käsittelijä; SK:n alihankkijat ovat alikäsittelijöitä, jotka käsittelevät tietoja vain Tilaajan ohjeiden mukaisesti.

## 3.2 Käsiteltävät henkilötiedot
**Tietotyypit:** Allekirjoittajan etunimi(et) ja sukunimi, sähköpostiosoite, matkapuhelinnumero, henkilötunnus (HETU), IP-osoitteet ja tunnistautumistiedot.

**HETU-käsittely:** Tallennetaan selväkielisenä tekstinä PAdES-tiedoston XML-metatieto-osioon — ei näytetä näkyvillä asiakirjan sivuilla. Tilaaja vastaa tiukkojen käyttöoikeusrajoitusten toteuttamisesta.

## 3.3 Tilaajan velvollisuudet
**Lainmukainen käsittely:** Henkilötietojen käsittely sovellettavien säädösten mukaisesti.

**Suostumukset:** Kaikkien vaadittujen oikeuksien, lupien ja suostumusten hankkiminen.

**Valtuutus:** SK:n valtuuttaminen käsittelijäksi.

**Vastuu:** Jos vaateita tai oikeustoimia aiheutuu Tilaajan tietojen käsittelyvelvollisuuksien laiminlyönnistä tai lainvastaisesta käytöstä, Tilaaja korvaa SK:lle kaikki aiheutuvat vahingot ja kustannukset, mukaan lukien oikeudenkäynti- ja asianajokulut.

# OSA 4: Enterprise-ominaisuudet ja käyttöoikeudet

## 4.1 Käyttäjähallinta
**Enterprise:** Rajoittamaton käyttäjämäärä. SSO Azure AD / Active Directory -integraatiolla ja/tai sähköposti + salasana. Automaattinen käyttäjätilin luonti ensimmäisellä SSO-kirjautumisella. Käyttöoikeuden poistaminen AD-ryhmähallinnan kautta.

**Basic:** Vain sähköposti + salasana. Perusroolit rajatulla näkyvyydellä. Käyttäjämäärä paketin mukaan.

## 4.2 Edistyneet oikeudet ja konfiguraatio
**Osastorakenteet:** Haetaan Active Directorysta. Konfiguroitava organisaatiohierarkia.

**Työnkulut:** Konfiguroitavat työnkulut ja usean mallipohjan asetus (vain Enterprise). Basic Tier -tasolla yksi standardoitu työnkulku.

## 4.3 API ja integraatiot
**Enterprise:** Täysi REST API ja Webhook-tuki.

**Basic:** Ei tuettu.

## 4.4 Brändäys ja edistyneet ominaisuudet
**Enterprise:** Yrityksen oma brändäys kaikissa allekirjoittajalle näkyvissä kosketuspisteissä. Verkkolomakkeet, tarkistusajat, tiedostomuunnokset, asiakirjamallit, massapyynnöt.

**Basic:** Vain vakiobrändäys. Ei edistyneitä ominaisuuksia.

# OSA 5: Tuki ja palvelutasot

## 5.1 Yhteyshenkiöt
**Enterprise:** Sekä Sopimuksellinen Yhteyshenkiö että Tekninen Yhteyshenkiö ovat pakollisia.

**Basic:** Sopimuksellinen Yhteyshenkiö pakollinen, Tekninen Yhteyshenkiö valinnainen.

## 5.2 Tukikanava
**Kaikki pyynnöt:** Palvelupyynnöt ja häiriöilmoitukset osoitteeseen support@allekirjoitus.fi.

**Aukioloajat:** Tekninen tuki ma–pe, 09:00–17:00 EET.

## 5.3 Palvelutasosopimus
**Best effort -periaate:** Kolmansien osapuolten tunnistautumistarjoajista johtuen. SK vastaa häiriöihin aukioloaikoina niiden vakavuuden mukaisesti.

**SLA-poikkeukset:** Tilaajasopimuksen Yleisten Ehtojen kohdan 9 SLA-ehtoja ja kohdan 14 käyttökatkoihin liittyviä seuraamusehtoja ei sovelleta tähän Palveluun.
