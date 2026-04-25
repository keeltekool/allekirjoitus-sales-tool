# Allekirjoitus.fi Yrityspalvelu - Tietopankki (Yksityiskohtainen)

Kaikenkattava tietolähde myyntityökalulle. Jokainen malli noutaa sisällön tästä asiakirjasta.

**Tuote:** Allekirjoitus.fi - pilvipohjainen sähköinen allekirjoitusalusta, SK ID Solutions
**Laajuus:** Vain Enterprise-taso. Portaali-/massapaketit eivät kuulu laajuuteen.
**Kohderyhmä:** Yritysostajat (teknologiajohtajat, lakiasiainjohtajat, IT-johtajat, hankinta)
**URL:** allekirjoitus.fi
**Palveluntarjoaja:** SK ID Solutions AS (Pärnu mnt 141, 11314 Tallinna, Viro)

---

## TYÖKALUN OHJEET

Tämä asiakirja toimii **sisältölähteenä** kaikille mallityypeille. Hinnoittelu ylläpidetään erikseen osassa 6 ja esitetään itsenäisenä, liitettävänä hintaliitteenä — ei koskaan sisällytettynä sisältöosioihin.

### Mallien kartoitus

| Malli | Käytetyt osat | Hintaliite | Syvyysvalinta |
|-------|--------------|------------|---------------|
| **Yritysratkaisu** | Osat 1-5, valinnaisesti 7-9 | Valinnainen liite (muokattava, esitäytetty osasta 6) | Yleiskatsaus (vain kuvauskappaleita) / Yksityiskohtainen (täydet taulukot + alaosiot) |
| **Ominaisuudet** | Osat 2-5, valinnaisesti 8 | Valinnainen liite | Yleiskatsaus / Yksityiskohtainen |
| **Hintatarjous** | Osa 1 (yhteenvetona), valitut kohdat osista 2-5, osa 7 | Pääelementti (muokattavat summat, esitäytetty osasta 6) | Yksitasoinen |
| **Hinnasto** | Ei sisältöä | Koko asiakirja — täysi osa 6, kaikki rivit, muokattava | Yksitasoinen |

### Osioiden kytkentälogiikka

Sisältö kytketään **tasotasolla** (osat 1-5, 8, 9), ei yksittäisten osioiden tasolla. Jokainen taso renderöidään yhtenäisenä kokonaisuutena. Käyttäjät poistavat yksittäisiä osioita, joita eivät tarvitse, suoraan esikatselusta.

### Tilamerkinnät

Jokainen osio sisältää tilamerkinnän, joka viestii mikä sisältyy ja mikä vaatii lisäkustannuksia:
- `[SISÄLTYY]` - ei lisäominaisuusmaksua, tapahtumakohtaiset maksut voimassa
- `[KONFIGUROITAVISSA]` - saatavilla, vaatii asennustyötä
- `[LISÄPALVELU]` - lisäominaisuus omalla hinnoittelulla (katso hintaliite)
- `[SISÄLTYY / KONFIGUROITAVISSA]` - perusominaisuus sisältyy, edistynyt konfigurointi saatavilla

Hinnoittelutiedot (EUR-summat, yksikköhinnat) ovat yksinomaan osassa 6 ja hintaliitteessä — eivät koskaan sisältöosioissa.

### Kieli

Tämä asiakirja on suomeksi. Englanninkielinen versio ylläpidetään rinnakkaisena asiakirjana `MASTER_KB_DETAIL_EN.md`.

### Kiinteät elementit (aina renderöidyt, ei kytkettävissä)

- Asiakirjan ylätunniste (logo, päivämäärä, asiakkaan nimi)
- CTA-palkki (KA-yhteyshenkilön tiedot)
- Alatunniste

---

# OSA 1: ENTERPRISE-OLETUSASETUKSET

Mitä saat ensimmäisestä päivästä alkaen Enterprise-asiakkaana. Oma ympäristösi konfiguroidaan organisaatiosi brändäyksellä ja käyttöoikeuksilla osana vakio-käyttöönottoa.

## 1.1 Allekirjoitus- ja tunnistautumisoletukset

| Komponentti | Oletusasetus | Laajennettavissa | Tila |
|-------------|-------------|-----------------|------|
| **Allekirjoitustaso** | Kehittynyt sähköinen allekirjoitus (AES) - eIDAS-yhteensopiva, oikeudellisesti sitova koko EU:ssa | Hyväksytty sähköinen allekirjoitus (QES) kansallisilla henkilökorteilla ja Smart-ID:llä. Yksinkertainen sähköinen allekirjoitus (SES) SMS OTP:llä, sähköposti-OTP:llä, piirretyllä allekirjoituksella. | QES: Sisältyy / SES: Lisäpalvelu |
| **Tunnistautuminen - Suomi** | Kaikki suomalaiset pankit luottamusverkoston kautta (OP, Nordea, Danske, Aktia, S-Pankki, Säästöpankki, POP, Ålandsbanken, OmaSP), suomalainen mobiilivarmenne | - | Sisältyy |
| **Tunnistautuminen - Ruotsi** | Ruotsalainen BankID, Freja eID | - | Sisältyy |
| **Tunnistautuminen - Pohjois-Baltia** | Ei oletuksena aktiivinen | Norjalainen BankID, Vipps, tanskalainen MitID, Smart-ID ja Mobiili-ID (Viro, Latvia, Liettua), Viron e-Residency | Lisäpalvelu |
| **Kutsujen toimitus** | Sähköposti | SMS-toimitus tai sähköposti + SMS yhdistettynä | SMS: Lisäpalvelu (per viesti) |
| **Asiakirjojen nouto** | OTP-suojattu latauslinkki SMS:llä | Automaattinen nouto ja arkistointi API:n/webhookien kautta | Sisältyy (API) tai konfigurointityö (mukautettu arkistointiliitäntä) |
| **Allekirjoitusjärjestys** | Konfiguroitavissa pyyntökohtaisesti: samanaikainen tai peräkkäinen | Monitasoiset allekirjoittajaryhmät, hybriditilat, hyväksyntähierarkiat | Sisältyy |
| **Asiakirjamuoto** | PDF/A vaaditaan (maks. 100 MB) | Office-tiedostot ja kuvat hyväksytään automaattimuunnoksella | Lisäpalvelu (per asiakirja) |
| **Käyttäjät** | Rajaton | - | Sisältyy |

## 1.2 Portaali, käyttöoikeudet ja brändäysoletukset

| Komponentti | Oletusasetus | Laajennettavissa | Tila |
|-------------|-------------|-----------------|------|
| **Kirjautuminen** | SSO Azure AD / Entra ID:n kautta (työntekijät kirjautuvat yritystunnuksilla) | Käyttäjätunnus + salasana myös saatavilla | Sisältyy (SSO-asennus osana käyttöönottoa) |
| **Portaalin brändäys** | Organisaatiosi brändäys (logo, värit, fontit, taustakuva) sekä portaalissa että allekirjoittajalle näkyvillä sivuilla | Osastokohtaiset brändäysvariaatiot | Kertakonfigurointi |
| **PAdES-kansilehti** | Yrityksesi logo allekirjoittajien metatiedoilla (nimi, tunnistautumistapa, aikaleima) | Mukautetut sarakkeet (henkilötunnus, IP-osoite), osastokohtaiset variaatiot | Sisältyy brändäysasennukseen |
| **Portaalin URL** | yritysnimi.allekirjoitus.fi | Täysin mukautettu verkkotunnus (esim. allekirjoitus.yrityksesi.fi) omalla SSL-varmenteella | Konfigurointityö |
| **Sähköpostin lähettäjäverkkotunnus** | Yrityksesi verkkotunnus (konfiguroidaan asennuksen yhteydessä) | - | Sisältyy brändäysasennukseen |
| **SMS-lähettäjänimi** | Yrityksesi nimi (maks. 11 merkkiä) | - | Sisältyy |
| **Viestipohjat** | Brändisi mukaisesti mukautetut (sähköpostin sisältö, HTML-ulkoasu, alatunniste, oikeudelliset vastuuvapauslausekkeet) | Lisäpohjat liiketoimintaprosessikohtaisesti, ilmoitusten esto API-pohjaisissa työnkuluissa | Sisältyy brändäysasennukseen |
| **Organisaatiorakenne** | Oma ympäristö osastohierarkialla AD:sta synkronoituna | Moniosastorakenne rajatulla näkyvyydellä | Sisältyy |
| **Käyttäjäroolit** | Organisaation ylläpitäjä (täysi näkyvyys), osaston ylläpitäjä (osaston laajuus), osaston käyttäjä (vain omat pyynnöt) | - | Sisältyy |
| **Kieli** | Suomi, ruotsi, englanti - valittavissa pyyntökohtaisesti | - | Sisältyy |

## 1.3 Työnkulkuominaisuuksien oletukset

| Ominaisuus | Oletustila | Muutettavissa | Tila |
|-----------|-----------|--------------|------|
| **Allekirjoituspyyntömallit** | Yksi oletusmalli | Useita malleja liiketoimintaprosessikohtaisesti, kukin lukituilla säännöillä (tunnistautuminen, allekirjoitusjärjestys, muistutukset) | Konfigurointityö |
| **Automaattiset muistutukset** | Aktiivinen: 2 päivää lähetyksen jälkeen + 1 päivä ennen erääntymistä | Mukautetut aikataulut (tietyt väliajat, SMS-muistutukset) | Konfigurointityö |
| **Manuaaliset muistutukset** | Aktiivinen: tarvittaessa portaalista | - | Sisältyy |
| **Pyynnön vanhentuminen** | Konfiguroitavissa pyyntökohtaisesti: 7, 14, 30 tai 90 päivää | Mukautettu maksimi ympäristökohtaisesti | Konfigurointityö |
| **Asiakirjojen säilytys** | 90 päivää | Pidennettävissä enintään 365 päivään | Konfigurointityö |
| **Allekirjoittajan siirto** | Aktiivinen | Voidaan poistaa käytöstä mallikohtaisesti | Sisältyy |
| **Allekirjoittajan dokumenttien lataus** | Ei käytössä | Aktivoitavissa mallikohtaisesti (allekirjoittajan tulee ladata henkilöllisyystodistus, tutkintotodistukset jne. ennen allekirjoitusta) | Konfigurointityö |
| **Tarkkailijat/seuraajat** | Ei käytössä | Aktivoitavissa mallikohtaisesti (ei-allekirjoittavat sidosryhmät saavat ilmoituksia) | Konfigurointityö |
| **Allekirjoittajien tilanäkymä** | Ei käytössä | Aktivoitavissa mallikohtaisesti (allekirjoittajat näkevät muiden allekirjoittajien tilan) | Konfigurointityö |
| **Harkinta-aika** | Ei käytössä | Aktivoitavissa mallikohtaisesti (pakollinen odotusaika: yön yli, 7 päivää, 14 päivää) | Konfigurointityö |
| **Nippu-allekirjoittaminen** | Ei käytössä | Aktivoitavissa ympäristökohtaisesti (tunnistaudu kerran, allekirjoita useita asiakirjoja) | Konfigurointityö |
| **Henkilötunnuksen käsittely** | Tallennetaan XAdES XML -metatietoihin (selkotekstinä) | Kryptografinen tiivistäminen GDPR-tietojen minimointiin. Voidaan lukita mallitasolla. | Sisältyy (kytkin) / Konfigurointityö (pakottamiseen) |
| **Arkistointi** | Manuaalinen lataus portaalista | Automaattinen lähetys ulkoiseen arkistoon (Zefort, Arkinet, mukautettu) API:n/webhookien kautta | Konfigurointityö |
| **Mukautetut metatiedot** | Ei käytössä | Aktivoitavissa (avain-arvo-kentät pyyntökohtaisesti jatkokäsittelyyn CRM:ään/arkistoon) | Konfigurointityö |
| **Manuaaliset työnkulkuvaiheet** | Ei käytössä | Mukautetut portaalitilat ("Käsittelyssä", "Käsitelty") sisäiseen koordinointiin | Konfigurointityö |

---

# OSA 2: ALLEKIRJOITUKSEN PERUSPALVELU [SISÄLTYY]

Sisältyy Enterprise-tilaukseen. Tapahtumakohtaiset maksut veloitetaan käytön mukaan — katso hintatiedot hintaliitteestä.

## 2.1 Hyväksytyt ja kehittyneet sähköiset allekirjoitukset

Allekirjoitetut sopimuksesi ovat oikeudellisesti sitovia koko EU:ssa, itsenäisesti todennettavissa tavallisessa Adobe Acrobatissa ja pysyvät väärentämättöminä vuosikymmeniä — ilman riippuvuutta Allekirjoitus.fi-alustasta.

| Ominaisuus | Yksityiskohta | Tila |
|-----------|-------------|------|
| **Allekirjoitusstandardi** | eIDAS-kehittynyt sähköinen allekirjoitus (AES). Kattaa ~99 % suomalaisista liikesopimuksista. | Sisältyy |
| **Mitä vastaanottaja näkee** | Luotettu vahvistusindikaattori (sininen palkki, vihreä valintamerkki) Adobe Acrobatissa. Ei lisäosia, ei internetiä tarvita. | Sisältyy |
| **Muutosten havaitseminen** | Mikä tahansa muutos allekirjoituksen jälkeen — edes yksi pikseli — rikkoo leiman. Adobe merkitsee asiakirjan välittömästi virheelliseksi. | Sisältyy |
| **Pitkäaikainen pätevyys** | PAdES-LTV-muoto upottaa kaikki todennustiedot PDF:n sisälle. Asiakirjasi ovat itsenäisesti todennettavissa offline-tilassa vuosikymmeniä. | Sisältyy |
| **Allekirjoitettu PDF sisältää** | Alkuperäinen asiakirja + brändätty kansilehti (allekirjoittajien nimet, tunnistautumistavat, aikaleimat sarakkeissa) + kryptografinen leima + hyväksytty aikaleima + yksilöllinen jäljitysketju per allekirjoittaja | Sisältyy |
| **Laskutus** | Per allekirjoittaja lähetyksessä (riippumatta siitä, allekirjoittaako hän) | Per tapahtuma |

## 2.2 Tunnistautumistavat

Allekirjoittajasi käyttävät omia tuttuja pankkitunnuksiaan tai kansallista sähköistä henkilöllisyyttään. Ei tilin luomista, ei ohjelmistoja, ei rekisteröitymistä allekirjoittajan puolelta. Lähetät linkin — he tunnistautuvat ja allekirjoittavat.

### Sisältyy (Suomi + Ruotsi)

| Markkina | Menetelmät | Tila |
|----------|-----------|------|
| **Suomi** | OP, Nordea, Danske Bank, Aktia, S-Pankki, Säästöpankki, POP Pankki, Ålandsbanken, OmaSP, Hightrust.id, suomalainen mobiilivarmenne | Sisältyy |
| **Ruotsi** | Ruotsalainen BankID, Freja eID | Sisältyy |

### Pohjois-Baltian laajennus

| Markkina | Menetelmät | Tila |
|----------|-----------|------|
| **Norja** | Norjalainen BankID, Vipps | Lisäpalvelu |
| **Tanska** | MitID | Lisäpalvelu |
| **Baltia** | Smart-ID, Mobiili-ID (Viro, Latvia, Liettua), Viron e-Residency | Lisäpalvelu |

### Mitä voit hallita

| Hallinta | Yksityiskohta |
|---------|-------------|
| **Osastokohtainen menetelmävalinta** | Näytä vain tietyt tunnistautumistavat osastokohtaisesti (esim. vain BankID ulkoisille, kaikki menetelmät sisäisille) |
| **Neljä konfigurointitasoa** | Ympäristön oletus - mallin säännöt (lukitut) - pyyntökohtainen - yksittäisen allekirjoittajan kohtainen |
| **Henkilöllisyyden varmennus** | Vaadi henkilötunnuksen vastaavuus: jos tunnistautumisessa palautuva henkilötunnus ei vastaa lähettäjän ennalta syöttämää, allekirjoittaminen estetään |
| **Lukemisen ja allekirjoittamisen erottelu** | Vaadi vahva tunnistautuminen luottamuksellisen asiakirjan avaamiseen, tai salli avoin katselu ja vahva tunnistautuminen vasta allekirjoitusvaiheessa |
| **Monimaapyynnöt** | Lähetä yksi allekirjoituspyyntö suomalaiselle, ruotsalaiselle ja virolaiselle allekirjoittajalle — kukin tunnistautuu omalla kansallisella sähköisellä henkilöllisyydellään |

## 2.3 QES - Hyväksytyt sähköiset allekirjoitukset

EU-lainsäädännön korkein oikeudellinen taso. QES vastaa omakätistä allekirjoitusta, eikä sitä voida riitauttaa tuomioistuimessa sähköisen muodon perusteella. Toisin kuin AES:ssa, jossa alusta leimaa allekirjoittajan puolesta, QES:ssa allekirjoittajan oma henkilökohtainen varmenne allekirjoittaa asiakirjan suoraan.

| Menetelmä | Markkinat | Toiminta | Tila |
|----------|----------|---------|------|
| **Kansalliset henkilökortit** | Suomi, Viro, Latvia, Liettua, Kroatia, Tšekki, Belgia | Allekirjoittaja asettaa kortin lukijaan, tarkistaa asiakirjan, allekirjoittaa jokaisen asiakirjan yksitellen | Sisältyy |
| **Smart-ID QES** | Viro, Latvia, Liettua | Sama oikeudellinen asema, ei kortinlukijaa tarvita. Allekirjoittaja vahvistaa mobiililaitteella. | Sisältyy |

**Milloin QES soveltuu:** Viranomaishakemukset, notaarisopimukset, kiinteistökaupat, arvoltaan merkittävät rahoitussopimukset. Baltian markkinoilla QES on arkipäiväinen liiketoimintastandardi.

## 2.4 Kevyet allekirjoitustavat (SES)

Tilanteisiin, joissa vahvaa henkilöllisyyden todentamista ei ole saatavilla tai se ei ole oikeassa suhteessa riskiin. Allekirjoittaja todentaa henkilöllisyytensä kertakoodilla tai piirretyllä allekirjoituksella pankkitunnusten sijaan.

| Menetelmä | Allekirjoittajan kokemus | Tyypillinen käyttö | Tila |
|----------|------------------------|-------------------|------|
| **SMS OTP** | Vastaanottaa koodin puhelimeensa, syöttää sen allekirjoitusportaaliin | Kansainväliset allekirjoittajat ilman pohjoismaista/baltialaista sähköistä henkilöllisyyttä, sisäiset hyväksynnät, toimittajavahvistukset | Lisäpalvelu (per allekirjoittaja + per SMS) |
| **Sähköposti-OTP** | Vastaanottaa koodin sähköpostiinsa | Kun puhelinnumeroa ei ole saatavilla | Lisäpalvelu (per allekirjoittaja) |
| **InkSign** | Piirtää allekirjoituksen kosketusnäytölle/tabletille kasvotusten | Pankkikonttorit, vakuutustoimistot, palvelupisteet — henkilökuntasi todentaa fyysisen henkilöllisyyden paikan päällä | Lisäpalvelu (per allekirjoittaja) |

**Tärkeää:** SES ei kerää varmennettua henkilötunnusta. Se vahvistaa allekirjoittajan tahdonilmaisun ja pääsyn viestintäkanavaan, ei kryptografista identiteettiä.

## 2.5 Toimitus ja ilmoitukset

Miten allekirjoituspyynnöt tavoittavat allekirjoittajasi ja miten kaikki pysyvät ajan tasalla.

| Ominaisuus | Oletusasetus | Konfiguroitavissa | Tila |
|-----------|-------------|------------------|------|
| **Kutsun toimitus** | Sähköposti suojatulla allekirjoituslinkillä | SMS-toimitus tai sähköposti + SMS yhdistettynä vastaanottajakohtaisesti | SMS: Lisäpalvelu (per viesti) |
| **Ilmoituksen kieli** | Suomi | Ruotsi tai englanti, valittavissa pyyntökohtaisesti | Sisältyy |
| **Automaattiset muistutukset** | 2 päivää lähetyksen jälkeen + 1 päivä ennen erääntymistä | Mukautettu aikataulu konfiguroitavin väliajoin | Konfigurointityö |
| **Manuaaliset muistutukset** | Saatavilla portaalin kojelaudalta | Lähetä yksittäisille allekirjoittajille tarvittaessa | Sisältyy |
| **Valmistuminen** | Kaikki osapuolet saavat sähköpostin OTP-suojatulla latauslinkillä | Automaattinen nouto API:n/webhookien kautta | Sisältyy |
| **Brändäys** | Brändätyt sähköpostipohjasi | Mukautettu lähettäjäverkkotunnus, ilmoitusten esto API-työnkuluissa | Sisältyy brändäysasennukseen |

## 2.6 Jäljitysketju ja vaatimustenmukaisuus

Jokainen allekirjoitettu asiakirja on itsensä todistava. Täydellinen todisteaineisto on upotettu PDF:n sisälle — ulkoista järjestelmää ei tarvita aitouden todentamiseen, nyt tai vuosikymmenten päästä.

| Mitä tallennetaan per allekirjoittaja | Yksityiskohta |
|--------------------------------------|-------------|
| **Henkilöllisyys** | Koko nimi, sähköposti, puhelin, varmennettu henkilötunnus (kun kerätään) |
| **Tunnistautuminen** | Käytetty menetelmä, näytetään luettavana merkintänä (esim. "Vahva pankkitunnistautuminen FI") |
| **Toiminta** | Tarkat aikaleimat: kutsu lähetetty, asiakirja avattu, tunnistauduttu, allekirjoitettu tai hylätty. IP-osoite tallennettu. |
| **Todistusmuoto** | Yksilöllinen todistustiedosto per allekirjoittaja, upotettu piilotettuna liitteenä PDF:n sisälle |

| Asiakirjan eheys | Yksityiskohta |
|-----------------|-------------|
| **Hyväksytty aikaleima** | eIDAS-hyväksytty, todistaa tarkan allekirjoitushetken, mikä tahansa allekirjoituksen jälkeinen muutos mitätöi asiakirjan |
| **Pitkäaikainen todennus** | PAdES-LTV - kaikki todennustiedot upotettu. Todennettavissa offline-tilassa, itsenäisesti, vuosikymmeniä. |
| **Kansilehti** | Yrityksesi logo + rakenteelliset sarakkeet (nimi, tunnistautumistapa, aikaleima). Muokattavissa: lisää henkilötunnus, IP-osoite -sarakkeet. Osastokohtaiset variaatiot mahdollisia. |

| Vaatimustenmukaisuus | Yksityiskohta |
|---------------------|-------------|
| **GDPR** | Asiakas on rekisterinpitäjä, SK ID Solutions on henkilötietojen käsittelijä. Henkilötunnus piilotetuissa metatiedoissa (ei näkyvillä sivuilla). Mahdollisuus tiivistää henkilötunnus kryptografisesti. |
| **Säilytys** | 90 päivää oletuksena, pidennettävissä 365 päivään. Poistetaan pysyvästi erääntymisen jälkeen. Arkistoi järjestelmiisi tämän aikaikkunan sisällä. |

## 2.7 Portaaliin pääsy

Selainpohjainen käyttöliittymä. Ei ohjelmistoasennuksia. Tiimisi luo, lähettää, seuraa ja lataa allekirjoituspyyntöjä verkkoportaalista.

| Vaihe | Mitä tapahtuu |
|-------|-------------|
| 1 | Kirjaudu yrityksen SSO:lla tai sähköposti+salasana |
| 2 | Valitse allekirjoituspyyntömalli (lukitsee säännöt tälle prosessityypille) |
| 3 | Lataa asiakirjat (PDF/A, enintään 100 MB) + valinnaiset viiteliitteet (ei allekirjoiteta) |
| 4 | Lisää allekirjoittajat (nimi, sähköposti, puhelin; valinnaisesti: henkilötunnus, allekirjoitustaso, pakollinen/valinnainen) |
| 5 | Konfiguroi: ilmoituksen kieli, vanhentuminen (7/14/30/90 päivää), tunnistautumisen vahvuus, tarkkailijat |
| 6 | Lähetä - tai tallenna luonnoksena ja palaa myöhemmin |

| Lähetyksen jälkeen | Yksityiskohta |
|-------------------|-------------|
| **Kojelauta** | Reaaliaikainen tila per pyyntö (Avoin, Suljettu, Vanhentunut, Peruutettu, Hylätty). Allekirjoittajakohtainen edistyminen. Aikaleimattu tapahtumaloki. |
| **Käytettävissä olevat toiminnot** | Peruuta, korjaa virheelliset sähköpostit ja lähetä uudelleen, lähetä manuaalisia muistutuksia, kopioi pyyntö kaikkine asetuksineen esitäytettynä |
| **Ei muokattavissa** | Ei voi lisätä uusia allekirjoittajia tai muuttaa erääntymistä lähetyksen jälkeen. Luo uusi pyyntö tai käytä Kopioi-toimintoa. |
| **Arkistointi** | Manuaalinen arkistointipainike. Automaattinen arkistointi voidaan aktivoida. |

## 2.8 REST API -liittymä

Upota allekirjoittaminen suoraan liiketoimintajärjestelmiisi. CRM-, ERP- tai HR-alustasi luo pyyntöjä, vastaanottaa reaaliaikaiset tilatapahtumat ja arkistoi allekirjoitetut asiakirjat — kaikki ohjelmallisesti, ilman kenenkään koskemista portaaliin.

| Ominaisuus | Yksityiskohta | Tila |
|-----------|-------------|------|
| **API-pääsy** | Täysi REST API sisältyy Enterprise-tilaukseen | Sisältyy |
| **Integraatiovaihtoehdot** | Monivaiheinen työnkulku yksityiskohtaista hallintaa varten tai OneStep-rajapinta yhden kutsun lähetykseen | Sisältyy |
| **Reaaliaikaiset tapahtumat** | Webhookit lähettävät ilmoitukset järjestelmääsi, kun asiakirjoja allekirjoitetaan, hylätään tai ne vanhenevat. Kuormat sisältävät vain tunnisteet (ei henkilötietoja) — järjestelmäsi kutsuu takaisin noutaakseen tiedot. | Sisältyy |
| **Upotettu allekirjoittaminen** | Generoi allekirjoitus-URL:t omassa sovelluksessasi — allekirjoittajat eivät koskaan poistu käyttöliittymästäsi | Sisältyy |
| **Allekirjoituksen jälkeinen uudelleenohjaus** | Allekirjoittaja palaa sovellukseesi automaattisesti allekirjoituksen jälkeen | Sisältyy |
| **Automaattinen arkistointi** | Nouda allekirjoitetut PDF:t + metatiedot valmistumisen yhteydessä, lähetä arkistoosi (Zefort, Arkinet tai mukautettu) | Sisältyy / Konfigurointityö mukautetuille |
| **Valmiit integraatiot** | Sympa HR (mukautettu API), Salesforce Commerce Cloud (Kafka/Mulesoft + webhookit), Microsoft Dynamics CRM (REST API) | Konfigurointityö |

---

# OSA 3: TYÖNKULUT JA ORKESTRAATIO [SISÄLTYY / KONFIGUROITAVISSA]

Miten allekirjoitusprosessia hallitaan. Työnkulkujen perusominaisuudet sisältyvät ja ovat aktiivisia. Edistyneet orkestraatio-ominaisuudet voidaan aktivoida mallikohtaisesti tai ympäristökohtaisesti.

## 3.1 Allekirjoituspyyntömallit

| Ominaisuus | Yksityiskohta | Tila |
|-----------|-------------|------|
| **Mitä mallit tekevät** | Esikonfiguroivat tunnistautumisen vahvuuden, toimitustavan, allekirjoitusjärjestyksen, muistutusaikataulun, asiakirjan muotoilun ja vaatimustenmukaisuussäännöt tietylle liiketoimintaprosessille | Sisältyy |
| **Käyttö** | Yksi malli työsopimuksille (peräkkäinen, henkilötunnus pakollinen), toinen salassapitosopimuksille (samanaikainen, vakioasetukset), kolmas lainasopimuksille (harkinta-aika, vahva tunnistautuminen lukemiseen) | Konfigurointityö |
| **Lukitut asetukset** | Vaatimustenmukaisuuden kannalta kriittiset säännöt voidaan lukita, jotta portaalikäyttäjät eivät voi ohittaa niitä — he valitsevat mallin ja lisäävät vastaanottajat, säännöt noudatetaan automaattisesti | Konfigurointityö |
| **Oletus** | Yksi yleismalli | Konfiguroitavissa useisiin |

## 3.2 Allekirjoitusjärjestys

| Tila | Toiminta | Käyttökohde |
|-----|---------|------------|
| **Samanaikainen** | Kaikki allekirjoittajat saavat kutsut kerralla, allekirjoittavat missä järjestyksessä tahansa | Vakiosopimukset, salassapitosopimukset, suoraviivaiset sopimukset |
| **Peräkkäinen** | Taso 1 allekirjoittaa ensin, taso 2 kutsutaan vasta tason 1 valmistuttua jne. | Hyväksyntäketjut: työntekijä allekirjoittaa, sitten esimies, sitten johtaja |
| **Yhdistetty** | Useita allekirjoittajia samalla tasolla (samanaikainen keskenään) + peräkkäinen tasojen välillä | Kaksi osastopäällikköä tasolla 1 (kumpi tahansa järjestys), toimitusjohtaja tasolla 2 (vasta molempien jälkeen) |

**Mitä tapahtuu hylkäyksessä:** Jos joku allekirjoittaja hylkää, koko työnkulku pysähtyy välittömästi. Ylemmän tason allekirjoittajille ei koskaan ilmoiteta. Hylkäyksen syy tallennetaan.

**Mitä tapahtuu vanhentumisessa:** Kun määräaika umpeutuu ilman kaikkia allekirjoituksia, tila muuttuu Vanhentuneeksi. Ei voida enää saattaa loppuun — luo uusi pyyntö tai käytä Kopioi-toimintoa.

**Muistutukset kohdistuvat vain aktiiviseen tasoon** — vuoroaan odottavat allekirjoittajat eivät saa ennenaikaisia muistutussähköposteja.

**Tila:** Sisältyy. Konfiguroitavissa pyyntökohtaisesti.

## 3.3 Allekirjoittajaryhmät ja hyväksyntähierarkiat

Monitasoinen organisatorinen hyväksyntäprosessi. Ryhmittele allekirjoittajat johtotason mukaan. Jos alemman tason allekirjoittaja hylkää, ylemmille tasoille ei ilmoiteta — työnkulku pysähtyy hylkäyskohtaan.

**Tila:** Ei oletuksena käytössä. Aktivoidaan mallikohtaisesti. Sisältyy.

## 3.4 Allekirjoittajan siirto

Allekirjoittaja, jolla ei ole valtuuksia (esim. sopimuksen arvo ylittää hänen allekirjoitusmandaattinsa), voi delegoida valtuutetulle kollegalle. Allekirjoittaja klikkaa poistu, syöttää uuden allekirjoittajan tiedot, työnkulku jatkuu ilman uudelleenkäynnistystä. Täydellinen delegointiketju tallennetaan jäljitysketjuun.

**Tila:** Oletuksena aktiivinen. Voidaan poistaa käytöstä mallikohtaisesti. Sisältyy.

## 3.5 Harkintapyyntö (harkinta-aika)

Asettaa pakollisen odotusajan ennen allekirjoitusoikeutta. Allekirjoittaja vastaanottaa asiakirjan ja voi lukea sen välittömästi, mutta Allekirjoita-painike pysyy poissa käytöstä kunnes aika umpeutuu. Umpeuduttua lähetetään toinen ilmoitus varsinaisella allekirjoituslinkillä.

| Ominaisuus | Yksityiskohta |
|-----------|-------------|
| **Konfiguroitavat ajanjaksot** | Yön yli (allekirjoitus mahdollista seuraavana aamuna klo 8:00), 7 päivää, 14 päivää, mukautetut kestot |
| **Jos allekirjoittaja yrittää liian aikaisin** | Ohjataan vain luku -sivulle. Ei Allekirjoita-painiketta ennen ajanjakson umpeutumista. |
| **Sääntelyperusta** | Suomen kuluttajansuojalaki edellyttää harkinta-aikaa kulutusluotoille, henkilökohtaisille lainoille, asuntolainoille ja tietyille vakuutustuotteille |
| **Käytössä** | Pankkilainojen vaatimustenmukaisuus — konfiguroitu tuotetyyppikohtaisesti (7 päivää henkilökohtaiset lainat, 14 päivää asuntolainat) |

**Tila:** Ei oletuksena käytössä. Aktivoidaan mallikohtaisesti. Konfiguroitavissa.

## 3.6 Tunnistautumisen vahvuuden hallinta

| Taso | Lukeminen (kuka voi avata asiakirjan) | Allekirjoittaminen (kuka voi allekirjoittaa) |
|-----|--------------------------------------|---------------------------------------------|
| **Korkea** | Pankkitunnukset / vahva tunnistautuminen vaaditaan katseluun | Pankkitunnukset / vahva tunnistautuminen vaaditaan allekirjoittamiseen |
| **Keskitaso** | SMS OTP katseluun | SMS OTP allekirjoittamiseen |
| **Matala** | Sähköpostilinkki katseluun | Sähköpostivahvistus allekirjoittamiseen |
| **Ei mitään** | Avoimesti linkillä | Ei sovelleta (allekirjoittaminen vaatii aina vähintään matalan tason) |

Allekirjoitustunnistautumisen on oltava vähintään lukutunnistautumisen tasolla. Esimerkki: luottamuksellinen asiakirja vaatii korkean molempiin. Rutiinivahvistus vaatii lukemiseen ei mitään, allekirjoittamiseen matalan.

**Tila:** Konfiguroitavissa pyyntö- ja mallikohtaisesti. Sisältyy.

## 3.7 Vanhentuminen ja muistutukset

| Ominaisuus | Oletusasetus | Konfiguroitavissa |
|-----------|-------------|------------------|
| **Vanhentumisaika** | Lähettäjä valitsee: 7, 14, 30 tai 90 päivää | Maksimi konfiguroitavissa ympäristökohtaisesti |
| **Automaattiset muistutukset** | 2 päivää lähetyksen jälkeen + 1 päivä ennen erääntymistä | Mukautetut väliajat, SMS-muistutukset |
| **Manuaaliset muistutukset** | Portaalista yksittäisille allekirjoittajille | - |

**Tila:** Oletuksena aktiivinen. Aikataulu konfiguroitavissa. Sisältyy.

## 3.8 Liitteet ja viiteasiakirjat

Liitä sopimusehdot, liitteet tai viitemateriaalit asiakirjan rinnalle. Allekirjoittajat voivat tarkastella niitä allekirjoitusseremonian aikana. Liitteitä EI allekirjoiteta kryptografisesti — allekirjoitettu asiakirja pysyy selkeänä tarjoten samalla täyden kontekstin.

**Tila:** Saatavilla. Sisältyy.

## 3.9 Allekirjoittajan dokumenttien lataus

Vaadi allekirjoittajia lataamaan tukidokumentteja (henkilöllisyystodistuksen kopio, tutkintotodistus, ajokortti, sertifikaatit) ennen allekirjoitusoikeutta. Ladatut tiedostot tallennetaan allekirjoitetun sopimuksen yhteyteen. Lähettäjä noutaa ne portaalista.

**Tila:** Ei oletuksena käytössä. Aktivoidaan mallikohtaisesti. Konfiguroitavissa.

## 3.10 Allekirjoituksen jälkeinen uudelleenohjaus

Allekirjoituksen jälkeen allekirjoittaja ohjataan automaattisesti määritettyyn URL-osoitteeseen — takaisin CRM-järjestelmääsi, käyttöönottoportaaliin, vahvistussivulle tai digitaalisen prosessisi seuraavaan vaiheeseen. Ei katkeamia.

**Tila:** Konfiguroitavissa pyyntökohtaisesti. Sisältyy.

## 3.11 Tarkkailijat / Seuraajat

Ei-allekirjoittavat sidosryhmät, jotka saavat edistymisilmoitukset jokaisessa vaiheessa ja voivat ladata valmiin asiakirjan. He eivät voi allekirjoittaa, muokata tai häiritä työnkulkua. Käytetään vaatimustenmukaisuuden valvontaan, johdon näkyvyyteen tai lakimiesten informointiin.

**Tila:** Ei oletuksena käytössä. Aktivoidaan mallikohtaisesti. Konfiguroitavissa.

## 3.12 Mukautetut metatiedot

Liitä jokaiseen allekirjoituspyyntöön rakenteellisia avain-arvo-kenttiä (esim. vakuutuspoliisinnumero, HR-tapaus-ID, sopimusviite). Metatiedot kulkevat jatkojärjestelmiin API:n/webhookien kautta, mahdollistaen valmistuneiden asiakirjojen automaattisen reitityksen oikeaan arkistokansioon, CRM-tietueeseen tai liiketoimintaprosessiin.

**Tila:** Ei oletuksena käytössä. Aktivoidaan ympäristökohtaisesti. Konfiguroitavissa.

## 3.13 Nippu-allekirjoittaminen

Allekirjoittaja tunnistautuu kerran ja allekirjoittaa useita asiakirjoja yhdessä istunnossa. Järjestelmä ryhmittää kaikki saman allekirjoittajan avoimet pyynnöt yhdeksi jonoksi (sama ympäristö, sama tunnistautumistaso, vastaavat allekirjoittajatiedot). Jokainen asiakirja saa oman yksilöllisen leiman ja aikaleiman. Vertailuarvo: jopa 50 asiakirjaa yhdessä istunnossa. Jos allekirjoittaja hylkää yhden asiakirjan nipusta, järjestelmä luo uuden nipun jäljellä oleville asiakirjoille.

**Tila:** Ei oletuksena käytössä. Aktivoidaan ympäristökohtaisesti. Konfiguroitavissa.

---

# OSA 4: ENTERPRISE-KONFIGURAATIO [KONFIGUROITAVISSA]

Nämä ominaisuudet konfiguroidaan Enterprise-käyttöönottosi yhteydessä. Organisaatiosi toimittaa lähtötiedot (brändiohjeistus, AD-tiedot jne.) ja palvelutiimi hoitaa teknisen asennuksen.

## 4.1 Mukautettu brändäys

| Mitä asiakkaasi ja työntekijäsi näkevät | Ennen asennusta | Asennuksen jälkeen | Tila |
|----------------------------------------|----------------|-------------------|------|
| **Portaali (työntekijäsi)** | Allekirjoitus.fi-oletusteema | Oma logosi, värit, fontit, taustakuva | Kertakonfigurointi |
| **Allekirjoitussivut (asiakkaasi/allekirjoittajat)** | Allekirjoitus.fi-oletus | Oma brändäyksesi — allekirjoittajat eivät välttämättä huomaa kolmannen osapuolen alustan käyttöä | Sisältyy brändäysasennukseen |
| **Allekirjoitetun PDF:n kansilehti** | Allekirjoitus.fi-logo | Yrityksesi logo + rakenteelliset allekirjoittajametatietosarakkeet | Sisältyy brändäysasennukseen |
| **Osastokohtaiset variaatiot** | Ei käytössä | Eri brändäys liiketoimintayksiköittäin tarvittaessa (esim. HR vs. myynti) | Konfigurointityö |

**Toimitat:** Graafiset ohjeet tai CSS Bootstrap -tiedoston. **Palvelutiimi:** Luo mukautetun teeman ja ottaa käyttöön. **Aikataulu:** 1-2 päivää.

## 4.2 Mukautettu verkkotunnus

| Vaihtoehto | URL-muoto | Mitä allekirjoittaja näkee | Tila |
|-----------|----------|--------------------------|------|
| **Vakioaliverkkotunnus** | yritysnimi.allekirjoitus.fi | Yrityksesi nimi URL:ssa | Sisältyy |
| **Täysin mukautettu verkkotunnus** | esim. allekirjoitus.yrityksesi.fi | Oma verkkotunnuksesi — ei näkyvää yhteyttä Allekirjoitus.fi:hin | Konfigurointityö |

**Toimitat:** SSL-varmenteen + DNS-tietueet. **Palvelutiimi:** Rekisteröi verkkotunnuksen ja konfiguroi reitityksen. **Aikataulu:** 1-2 päivää.

## 4.3 SSO / Active Directory -integraatio

| Mitä tapahtuu | Yksityiskohta |
|-------------|-------------|
| **Työntekijä kirjautuu** | Klikkaa AD-kirjautumista, ohjataan organisaatiosi Entra ID -kirjautumiseen. Jos Microsoft-istunto on jo aktiivinen, uudelleenohjaus on välitön — ei salasanan syöttöä. |
| **Uusi työntekijä aloittaa** | IT lisää hänet nimettyyn AD-ryhmään. Ensimmäinen portaalikirjautuminen luo tilin automaattisesti oikealla roolilla ja osastolla. |
| **Työntekijä vaihtaa roolia** | Ylennys tai osastonvaihto AD:ssa päivittää portaalin käyttöoikeudet automaattisesti seuraavalla kirjautumisella. |
| **Työntekijä lähtee** | IT poistaa AD-ryhmästä. Portaalipääsy peruutetaan välittömästi. Ei manuaalisia toimenpiteitä allekirjoitusportaalissa. |

**Toimitat:** Entra ID -ympäristön tiedot, turvaryhmät, claims-rakenne. **Palvelutiimi:** Konfiguroi provisioinnin ja roolimäärittelyn. **Aikataulu:** Muutama päivä.

## 4.4 SMS- ja sähköpostikustomointi

| Mitä hallitset | Yksityiskohta | Tila |
|---------------|-------------|------|
| **SMS-lähettäjänimi** | Yrityksesi nimi (maks. 11 merkkiä) allekirjoittajan puhelimessa | Sisältyy |
| **Sähköpostin lähettäjäverkkotunnus** | Ilmoitukset tulevat omasta verkkotunnuksestasi, ei allekirjoitus.fi:stä | Sisältyy brändäysasennukseen |
| **Viestin sisältö** | Täysi hallinta: sähköpostin aihe, sisältö, HTML-ulkoasu, alatunniste, oikeudelliset vastuuvapauslausekkeet | Sisältyy brändäysasennukseen |
| **Dynaamiset paikkamerkit** | Automaattisyöttö: vastaanottajan nimi, asiakirjan otsikko, allekirjoituslinkki, erääntymispäivä | Sisältyy |
| **Useita pohjia** | Eri ilmoitussisältö eri sopimustyypeille | Konfigurointityö |
| **Ilmoitusten esto** | Poista alustan ilmoitukset kokonaan API-pohjaisissa työnkuluissa | Konfigurointityö |

**Toimitat:** Tekstisisällön, oikeudelliset vastuuvapauslausekkeet, HTML-ulkoasutoiveet. **Aikataulu:** Tunneista 1 päivään.

## 4.5 Organisaatiorakenne ja roolit

Oma ympäristösi heijastaa organisaatiosi rakennetta.

| Taso | Mihin se vastaa | Tarkoitus |
|-----|----------------|----------|
| **Ympäristö** | Organisaatiosi | Kaikki konfiguraatio, data ja käyttäjät rajattu sinulle |
| **Osasto** | Liiketoimintayksikkösi (AD:sta) | Asiakirjat ja käyttäjät organisoitu osastoittain |
| **Ryhmä** | Alatiimit osaston sisällä | Tarkka käyttöoikeuksien hallinta |
| **Käyttäjä** | Yksittäinen työntekijä | Määritetty rooli määrittää mitä näkee ja voi tehdä |

| Rooli | Mitä näkee | Mitä voi tehdä |
|------|-----------|---------------|
| **Organisaation ylläpitäjä** | Kaikki osastot, kaikki pyynnöt | Käyttäjähallinta, täysi konfigurointi |
| **Osaston ylläpitäjä** | Kaikki pyynnöt omassa osastossaan | Osaston käyttäjien hallinta |
| **Osaston käyttäjä** | Vain omat allekirjoituspyynnöt | Luo ja seuraa omia pyyntöjä |

## 4.6 Asiakirjojen säilytysajan hallinta

| Ominaisuus | Yksityiskohta |
|-----------|-------------|
| **Oletussäilytys** | 90 päivää valmistumisesta |
| **Maksimipidennys** | 365 päivää |
| **Erääntymisen jälkeen** | Asiakirjat poistetaan pysyvästi — ei palautettavissa |
| **Vastuusi** | Lataa ja arkistoi allekirjoitetut asiakirjat omiin järjestelmiisi ennen säilytysajan umpeutumista |
| **Automaattinen arkistointi** | Voidaan konfiguroida lähettämään valmiit asiakirjat arkistojärjestelmääsi (Zefort, Arkinet tai mukautettu) automaattisesti API:n kautta |

**Tila:** Konfigurointityö pidennys- tai automaattiarkistointiasennukseen.

## 4.7 Henkilötunnuksen käsittely

| Tila | Mitä lähettäjä näkee | Mitä tapahtuu | Miten pakotetaan |
|-----|---------------------|-------------|-----------------|
| **Pois käytöstä** | Henkilötunnuskenttä piilotettu | Henkilötunnusta ei kerätä | Asetetaan mallitasolla |
| **Valinnainen** | Henkilötunnuskenttä näkyvissä, valintaruutu per allekirjoittaja | Lähettäjä päättää tapauskohtaisesti. Jos henkilötunnus annetaan, tiukka vastaavuus pakotetaan tunnistautumisessa — poikkeama estää allekirjoittamisen. | Oletus |
| **Pakollinen** | Henkilötunnuskenttä pakollinen | Ei voi lähettää ilman henkilötunnusta jokaiselle allekirjoittajalle | Lukitaan mallitasolla |
| **Tiivistetty** | Tiivistyksen valintaruutu näkyvissä | Kryptografinen tiiviste allekirjoitetussa PDF:ssä selkotekstisen henkilötunnuksen sijaan. Varsinainen henkilötunnus välittäjälokeissa 5 vuotta (tuomioistuimen noudettavissa). | Lukitaan mallitasolla |

Asetukset voidaan lukita mallitasolla, jotta yksittäiset lähettäjät eivät voi ohittaa organisaatiosi tietosuojakäytäntöä.

## 4.8 Allekirjoittajaehdotukset

Automaattinen täydennys aiemmin käytetyille yhteystiedoille allekirjoittajien lisäämisessä uusiin pyyntöihin. Sisältää henkilötunnushaun. Nopeuttaa toistuvia työnkulkuja — ei manuaalista uudelleensyöttöä toistuvien allekirjoittajien tiedoille.

**Tila:** Aktiivinen. Sisältyy.

---

# OSA 5: TUOTTEISTETUT LISÄPALVELUT [LISÄPALVELU]

Ominaisuudet, jotka aktivoit Enterprise-tilauksen päälle, kukin omalla hinnoittelullaan — katso hintatiedot hintaliitteestä.

## 5.1 E-lomakkeet: Lomakepyynnöt

Korvaa staattiset PDF-lomakkeet interaktiivisilla verkkolomakkeilla. Työntekijäsi valitsee portaalista esikonfiguroidun lomakkeen ja lähettää yksityisen linkin vastaanottajalle. Vastaanottaja tunnistautuu, täyttää dynaamisen verkkolomakkeen (kaskadilogiikka — kentät ilmestyvät aiempien vastausten perusteella, tukee yli 180 kenttää), lähettää, ja alusta generoi täytetyn PDF:n ja ohjaa suoraan allekirjoitusseremoniaan.

| Ominaisuus | Yksityiskohta |
|-----------|-------------|
| **Kuka aloittaa** | Työntekijäsi valitsee lomakkeen ja lähettää tietylle vastaanottajalle |
| **Tunnistautuminen** | Konfiguroitavissa: SMS OTP (oletus) tai vahva pankkitunnistautuminen arkaluonteisille lomakkeille |
| **Dynaamiset kentät** | Kaskadilogiikka, mukautetut validointisäännöt, tekstikentät, radiopainikkeet, valintaruudut, päivämääräkentät, liitetiedostolataukset |
| **Lähettämisen jälkeen** | Lomaketiedot yhdistetään PDF-malliin reaaliajassa, allekirjoittaja ohjataan allekirjoitusseremoniaan |
| **Tietojen poiminta** | Lomakekenttien arvot poimittavissa rakenteisina metatietoina CRM-/arkistojärjestelmääsi API:n kautta |
| **Tietosuoja** | Lomaketiedot tallennetaan tilapäisesti JSON-muodossa, poistetaan välittömästi PDF-yhdistämisen jälkeen — olemassa vain allekirjoitetussa asiakirjassa |
| **Lomakkeen luonti** | Palvelutiimi rakentaa jokaisen lomakkeen PDF-mallisi ja vaatimusten perusteella. Tyypillisesti 1-2 päivää per lomake. |
| **Tila** | Lisäpalvelu (kuukausimaksu per lomake + kehitystyö) |

## 5.2 E-lomakkeet: Avoimet lomakkeet

Julkiset, itsepalvelulomakkeet uniikilla URL:lla, jonka upotat verkkosivustollesi ("Hae nyt" -painikkeen tai vastaavan taakse). Kävijä klikkaa, tunnistautuu vahvasti pankkitunnuksilla (pakollinen — lomake on julkisesti saatavilla), täyttää lomakkeen ja ohjataan suoraan allekirjoitukseen yhdessä jatkuvassa prosessissa. Ei kutsu-sähköpostia, ei odotusta. Tukee brändättyä verkkotunnusta.

| Ominaisuus | Yksityiskohta |
|-----------|-------------|
| **Kuka aloittaa** | Julkinen kävijä (asiakkaasi, hakija) — klikkaa linkkiä verkkosivustollasi |
| **Tunnistautuminen** | Pakollinen vahva tunnistautuminen ennen tietojen syöttöä (lomake on julkisesti saatavilla) |
| **Lähettämisen jälkeen** | Automaattinen ohjaus allekirjoitukseen — saumaton, ei sähköpostiodotusta |
| **Useita allekirjoittajia** | Tuettu. Ensisijainen täyttäjä voi olla myös allekirjoittaja, lisäallekirjoittajat kutsutaan erikseen. |
| **Lomakkeen luonti** | Sama kehitysprosessi kuin lomakepyynnöissä — palvelutiimi rakentaa PDF-mallisi perusteella |
| **Tila** | Lisäpalvelu (kuukausimaksu per lomake + kehitystyö) |

## 5.3 E-lomakkeet: Acroforms

Jos sinulla on jo täytettäviä PDF-lomakkeita (vakio Acroform-muoto), liitä ne allekirjoituspyyntöön. Allekirjoittaja täyttää kentät suoraan allekirjoitusseremonian aikana. Ei mukautettua kehitystyötä, ei kuukausittaista lomakemaksua.

| Ominaisuus | Yksityiskohta |
|-----------|-------------|
| **Rajoitus** | Tukee tällä hetkellä vain yhden allekirjoittajan pyyntöjä |
| **Ei kehitystyötä** | Toimii olemassa olevilla täytettävillä PDF:lläsi sellaisenaan |
| **Tila** | Sisältyy tapahtumakustannukseen |

## 5.4 Asiakirjamallit (API-pohjainen)

Taustajärjestelmäsi lähettää JSON-avain-arvo-datan API:n kautta malli-ID:n kanssa. Alusta yhdistää datan esimääriteltyyn PDF-malliin, generoi valmiin asiakirjan ja lähettää allekirjoitettavaksi — nolla manuaalisia vaiheita, nolla portaali-interaktiota. Suunniteltu järjestelmille, jotka voivat lähettää dataa mutta eivät pysty tuottamaan omia muotoiltuja PDF-tiedostojaan.

| Ominaisuus | Yksityiskohta |
|-----------|-------------|
| **Toiminta** | Järjestelmäsi tekee REST API -kutsun JSON-datalla + malli-ID:llä. Alusta täyttää PDF:n ja lähettää. |
| **Mallimuoto** | Vakio täytettävä PDF (Acroform) paikkakenttineen. JSON-avaimien tulee vastata mallin kenttänimiä. |
| **Asennus** | Toimitat PDF-mallin + JSON-skeeman. Palvelutiimi konfiguroi kenttäyhdistämisen. Tyypillisesti 0,5-2 tuntia. |
| **Tila** | Lisäpalvelu (per tapahtuma + kehitystyö asennukseen) |

## 5.5 Massapyynnöt (CSV-tuonti)

Lähetä satoja tai tuhansia allekirjoituspyyntöjä kerralla. Lataa ZIP-tiedosto asiakirjoista + CSV-tiedosto, joka yhdistää jokaisen asiakirjan allekirjoittajaansa yksilöllisellä tunnisteella. Alusta yhdistää asiakirjat vastaanottajiin ja lähettää kaikki pyynnöt automaattisesti.

| Ominaisuus | Yksityiskohta |
|-----------|-------------|
| **CSV sisältää** | Allekirjoittajien nimet, sähköpostit, puhelinnumerot, yksilöllinen tunniste linkittää vastaavaan asiakirjaan ZIP:ssä |
| **Tyypillinen käyttö** | Vuosittaiset sopimusuusinnat, työntekijäkäsikirjojen jakelu, toimittajasopimusten käyttöönotto, käytäntökuittaukset |
| **Seuranta** | Jokainen pyyntö seurataan yksittäin portaalin kojelaudalla |
| **Tila** | Vakiotapahtumahinnat per pyyntö |

## 5.6 Asiakirjan leimaus (itsenäinen)

Aseta organisaatiosi virallinen digitaalinen leima PDF-asiakirjoihin ilman ihmisallekirjoittajaa — digitaalinen vastine yritysleimalle. Jokainen leimattu asiakirja saa hyväksytyn aikaleiman, joka todistaa eheyden ja alkuperän. Allekirjoittajaa ei kutsuta, tunnistautumisprosessia ei tapahdu.

| Ominaisuus | Yksityiskohta |
|-----------|-------------|
| **Käyttökohteet** | Automaattinen massaleimaus: laskut, palkkalaskelmat, todistukset, virallinen kirjeenvaihto |
| **Toiminta** | API-pohjainen. Järjestelmäsi lähettää asiakirjat, alusta asettaa leiman + hyväksytyn aikaleiman, palauttaa leimatut PDF:t. |
| **Tila** | Lisäpalvelu (per asiakirja) |

## 5.7 Tiedostomuunnos

Tiimisi lataa Office-tiedostoja (Word, Excel) tai kuvia — alusta muuntaa ne automaattisesti arkistokelpoiseen PDF/A-muotoon ennen allekirjoitusprosessin alkua. Ei manuaalista muunnosvaihetta.

| Ominaisuus | Yksityiskohta |
|-----------|-------------|
| **Oletus** | PDF/A vaaditaan. Ilman tätä lisäpalvelua vain PDF-lataukset hyväksytään. |
| **Tila** | Lisäpalvelu (per asiakirja) |

## 5.8 Tiedoston jakaminen

Jaa asiakirjoja turvallisesti vastaanottajille, joiden tarvitsee vain lukea eikä allekirjoittaa. Asiakirja toimitetaan linkin kautta — vastaanottaja todentaa henkilöllisyytensä SMS OTP:llä ennen pääsyä. Hallittu vaihtoehto sähköpostiliitteille arkaluonteisen materiaalin osalta.

| Ominaisuus | Yksityiskohta |
|-----------|-------------|
| **Pääsysuoja** | Sähköpostilinkki + SMS OTP -varmistus (kaksivaiheinen) |
| **Tila** | Lisäpalvelu (per vastaanottaja) |

## 5.9 API-pohjainen työnkulkuautomaatio

Täysi päästä-päähän allekirjoitusautomaatio. CRM-, ERP- tai HR-järjestelmäsi luo pyyntöjä, vastaanottaa reaaliaikaiset tilatapahtumat webhookien kautta ja arkistoi allekirjoitetut asiakirjat — kaikki järjestelmästä järjestelmään, ilman kenenkään koskemista portaaliin. Jotkut Enterprise-asiakkaat toimivat kokonaan API-pohjaisesti — heidän työntekijänsä eivät koskaan näe allekirjoitusalustaa.

| Ominaisuus | Yksityiskohta |
|-----------|-------------|
| **Mitä mahdollistaa** | Ohjelmallinen pyyntöjen luonti, webhook-pohjaiset tilapäivitykset, automaattinen asiakirjojen nouto ja arkistointi |
| **Valmiit integraatiot** | Sympa HR, Salesforce Commerce Cloud, Microsoft Dynamics CRM, Zefort-arkisto, Arkinet-arkisto |
| **Tila** | Sisältyy (API-pääsy). Mukautetut integraatiot: Konfigurointityö. |

## 5.10 Asiantuntijapalvelut

| Palvelu | Minimi | Mitä kattaa | Tila |
|--------|-------|------------|------|
| **Kehitys ja konfigurointi** | 0,5 tuntia | Mukautetut integraatiot, lomakekehitys, malliasetukset, ympäristökonfiguraatio, tuki/muutospyynnöt | Tuntiveloitus — katso hintaliite |
| **Asiantuntijakonsultaatio** | 0,5 tuntia | Arkkitehtuurikonsultaatio, projektinhallinta, ratkaisusuunnittelu | Tuntiveloitus — katso hintaliite |
| **Kustomointi ja brändäys** | Kertamaksu | Portaalin käyttöliittymä, allekirjoittajanäkymä, viestipohjat, PAdES-kansilehti | Kertamaksu — katso hintaliite |

Ennen työn aloittamista esitetään työmääräarvio ja hyväksytetään se. Laskutus tapahtuu toteutuneiden tuntien mukaan.

---

# OSA 6: ENTERPRISE-HINNASTO

Kaikki hinnat ALV 0 %. Tämä osa toimii tietolähteenä hintaliitteelle ja erilliselle hinnastomallille.

## 6.1 Kuukausittaiset tilausmaksut

| Komponentti | Maksu (EUR/kk) |
|------------|---------------|
| Alustan käyttömaksu | 275,00 |
| Lisäympäristö (ympäristö) | 75,00 |
| Verkkolomakepohja | 25,00 per aktiivinen lomake |
| Pohjois-Baltian tunnistautuminen | 125,00 |

## 6.2 Tapahtumakohtaiset maksut

| Komponentti | Maksu (EUR/yksikkö) | Yksikkö |
|------------|-------------------|--------|
| Allekirjoituspyyntö - Vahva tunnistautuminen (AES) | 0,80 | Per allekirjoittaja |
| Allekirjoituspyyntö - Kevyt tunnistautuminen (SES) | 0,65 | Per allekirjoittaja |
| Tekstiviesti | 0,10 | Per viesti |
| Asiakirjan leimaus | 0,30 | Per asiakirja |
| Tiedostomuunnos | 0,25 | Per asiakirja |
| Tiedoston jakaminen | 0,15 | Per vastaanottaja |

## 6.3 Kerta- ja asiantuntijamaksut

| Komponentti | Maksu (EUR) |
|------------|-----------|
| Kustomointi ja brändäys | 980,00 (kertamaksu) |
| Kehitys ja konfigurointi | 145,00/tunti (min. 0,5 h) |
| Asiantuntijakonsultaatio | 190,00/tunti |

## 6.4 Laskutussäännöt

- Allekirjoituspyyntö veloitetaan **per allekirjoittaja asiakirjan lähetyshetkellä**, riippumatta siitä, allekirjoittaako hän vai kieltäytyykö.
- Neljälle allekirjoittajalle lähetetty asiakirja kuluttaa neljä allekirjoituspyyntöä.
- SMS-kustannukset laskutetaan Enterprise-asiakkailta erikseen (sisältyvät Basic-tason paketteihin).
- SK:lla on oikeus veloittaa 145 EUR/tunti ongelmien selvittämisestä, jotka eivät johdu SK:sta tai jotka aiheutuvat asiakkaan laitteista tai verkosta.

---

# OSA 7: KESKEISET PALVELUEHDOT

Poimittu Allekirjoitus.fi-palvelun käyttöehdoista v1.0 (voimassa 14.1.2026).

| Ehto | Yksityiskohta |
|-----|-------------|
| **Palveluntarjoaja** | SK ID Solutions AS |
| **Palvelun tyyppi** | Pilvipohjainen SaaS-palvelu PDF-asiakirjojen sähköiseen allekirjoittamiseen |
| **Enterprise-tason määritelmä** | Joustava, integraatiokelpoinen palvelu, joka tukee edistyneitä työnkulkuja ja kustomointia. API-pääsy, SSO, mukautettu brändäys, verkkolomakkeet. |
| **Pääsy** | Verkkoportaali ja API-järjestelmäintegraatiot |
| **Käyttäjät** | Rajaton |
| **Kirjautuminen** | SSO organisaation tunnuksilla ja/tai sähköposti + salasana |
| **Tunnistautuminen** | AES oletuksena; valinnainen SES ja QES |
| **Laskutus** | Kuukausittainen alustan perusmaksu + tapahtumakohtaiset maksut + SMS-kulut |
| **Tuki** | Kaikki pyynnöt osoitteeseen support@allekirjoitus.fi. Ma-pe, 09:00-17:00 EET. |
| **Palvelutaso** | Parhaalla mahdollisella tavalla. Ei sopimusperusteista SLA:ta sanktioehdoin. |
| **Yhteyshenkilöt** | Enterprise-asiakkaiden tulee nimetä sekä sopimusyhteyshenkilö että tekninen yhteyshenkilö |
| **Käyttäjähallinta** | Enterprise: automaattinen SSO/AD:n kautta. Ensimmäinen kirjautuminen luo tilin. AD-ryhmästä poistaminen peruuttaa pääsyn. |
| **Henkilötietojen käsittely** | Asiakas on rekisterinpitäjä. SK ID Solutions on henkilötietojen käsittelijä. |

---

# OSA 8: TOIMIALAKOHTAISET TYÖNKULKUMALLIT

Miten eri toimialat hyödyntävät alustan ominaisuuksia.

## Pankki ja rahoitus
Peräkkäinen allekirjoittaminen harkinta-ajoin sääntelyvaatimustenmukaisuuteen. Dynaaminen metatieto allekirjoittajien roolien seuraamiseen (Hakija, Takaaja). Automaattinen arkistointi suojattuihin holveihin valmistumisen yhteydessä. Avoimet lomakkeet julkisiin lainahakemuksiin pakollisella vahvalla tunnistautumisella.

## Henkilöstöhallinto
Peräkkäiset hyväksyntäketjut (HR aloittaa — hakija allekirjoittaa — esimies vahvistaa). Allekirjoittajan dokumenttien lataus tutkintotodistusten ja henkilöllisyystodistusten keräämiseen perehdytyksen aikana. Massapyynnöt vuosittaisten käytäntöpäivitysten tai käsikirjakuittausten jakeluun koko organisaatiossa.

## Juridinen ja vaatimustenmukaisuus
Allekirjoittajien tilanäkymät lakimiehille muiden osapuolten allekirjoitustilanteen vahvistamiseen ennen oman allekirjoituksen lisäämistä. Tarkkailijat vaatimustenmukaisuuden valvontaan. Liitteet sopimusehdoille, jotka täydentävät mutta eivät muodosta osaa allekirjoitetusta asiakirjasta.

## Hankinta ja myynti
Samanaikainen allekirjoittaminen nopeisiin salassapitosopimuksiin ja suoraviivaisiin sopimuksiin. Massapyynnöt toimittajasopimusten käyttöönottoon. Allekirjoittajan siirto kun nimetyn allekirjoittajan tulee delegoida kollegalle, jolla on asianmukainen valtuutus.

## Operaatiot ja hallinto
Itsenäinen asiakirjan leimaus laskujen, todistusten ja virallisen kirjeenvaihdon massaprosessointiin. Nippu-allekirjoittaminen esihenkilöille, jotka käsittelevät suuria hyväksyntämääriä. Asiakirjamallit standardoitujen dokumenttien automaattiseen generointiin taustajärjestelmistä.

---

# OSA 9: KONFIGUROINNIN ASENNUSVIITE

Mitä organisaatioltasi tarvitaan Enterprise-ominaisuuksien konfigurointiin.

| Ominaisuus | Mitä toimitat | Mitä palvelutiimi tekee | Tyypillinen aikataulu |
|-----------|-------------|----------------------|---------------------|
| **SSO/AD-integraatio** | Azure AD/Entra ID -ympäristön tiedot, turvaryhmät, claims-rakenne | Konfiguroi henkilöllisyyden provisioinnin, yhdistää AD-ryhmät portaalirooleihin | Muutama päivä |
| **Mukautettu brändäys** | Brändiohjeistus, logot, värit tai Bootstrap-tiedostot | Soveltaa mukautetun teeman, konfiguroi brändätyn käyttöliittymän ja PAdES-kansilehden | 1-2 päivää |
| **Mukautettu verkkotunnus** | SSL-varmenne, päivitetyt DNS-tietueet | Rekisteröi verkkotunnuksen, konfiguroi reitityksen | 1-2 päivää |
| **Viestipohjat** | Käännetty tekstisisältö, oikeudelliset vastuuvapauslausekkeet, HTML-toiveet | Konfiguroi sähköposti/SMS-ulkoasut, yhdistää dynaamiset paikkamerkit | Tunneista 1 päivään |
| **E-lomakkeen kehitys** | Staattiset PDF-lomakkeet, validointi-/logiikkavaatimukset | Koodaa HTML-lomakkeen, rakentaa validointisäännöt, ottaa käyttöön | 1-2 päivää per lomake |
| **Asiakirjamallit** | JSON-kuorman skeema, Acroform-PDF-malli paikkakenttineen | Lataa mallin, konfiguroi JSON-PDF-kenttäyhdistämisen | 0,5-2 tuntia |
| **Arkistointi-integraatio** | Kohde-API:n tiedot, tunnistautumisavaimet, webhook-vaatimukset | Rakentaa automaattisen liittimen allekirjoitetun PDF:n + metatietojen lähetykseen | Projektipohjainen |

---

*Tietopankki Yksityiskohtainen v2.0 - 25.4.2026*
*Arkkitehtuurimuutos: Hinnoittelu erotettu sisältöosioista. EUR-summat poistettu osista 1-5. Osa 6 on ainoa hinnoitteluauktoriteetti hintaliitteelle ja hinnastomallille.*
*Lähde: SK ID Solutions -tuotedokumentaatio, palveluehdot v1.0, virallinen hinnasto, tekninen tietopankki*
