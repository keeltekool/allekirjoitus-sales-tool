# Allekirjoitus.fi Yrityspalvelu - Tietopankki (Yleiskatsaus)

Yleiskatsaustason sisältö myyntityökalulle. Tiiviit, hyötykeskeiset kuvaukset jokaisesta osiosta. Ei taulukoita, ei alaosioita. Johtotason tapaamisiin ja nopeasti luettaviin tarjouksiin.

**Tuote:** Allekirjoitus.fi - pilvipohjainen sähköinen allekirjoitusalusta, SK ID Solutions
**Laajuus:** Vain Enterprise-taso.
**URL:** allekirjoitus.fi

---

## TYÖKALUN OHJEET

Tämä on tietopankin **yleiskatsausversio**. Osioiden otsikot vastaavat yksityiskohtaista versiota (`MASTER_KB_DETAIL_FI.md`). Syvyysvalinta vaihtaa näiden tiedostojen välillä — samat sivupalkin kytkimet, eri sisällön syvyys.

---

# OSA 1: ENTERPRISE-OLETUSASETUKSET

Mitä saat ensimmäisestä päivästä alkaen Enterprise-asiakkaana. Oma ympäristösi konfiguroidaan organisaatiosi brändäyksellä ja käyttöoikeuksilla osana vakio-käyttöönottoa.

## 1.1 Allekirjoitus- ja tunnistautumisoletukset

Enterprise-tilauksesi sisältää eIDAS-yhteensopivat kehittyneet sähköiset allekirjoitukset (AES), vahvan tunnistautumisen Suomen luottamusverkoston (kaikki merkittävät pankit ja mobiilivarmenne) sekä ruotsalaisen BankID:n kautta, sähköpostipohjaiset allekirjoituskutsut, konfiguroitavan allekirjoitusjärjestyksen (samanaikainen tai peräkkäinen) ja rajattoman käyttäjämäärän. Laajennettavissa hyväksyttyihin sähköisiin allekirjoituksiin (QES) kansallisilla henkilökorteilla, kevyisiin allekirjoitusmenetelmiin (SMS OTP, sähköposti-OTP, InkSign) ja Pohjois-Baltian tunnistautumismarkkinoihin lisäpalveluina.

**Tila:** Perusominaisuudet sisältyvät. Laajennukset saatavilla lisäpalveluina.

## 1.2 Portaali, käyttöoikeudet ja brändäysoletukset

Työntekijäsi kirjautuvat yrityksen SSO-tunnuksilla (Azure AD / Entra ID) — erillisiä salasanoja ei tarvita. Portaalisi on brändätty organisaatiosi ilmeellä sekä lähettäjänäkymässä että allekirjoittajalle näkyvissä sivuissa, mukaan lukien allekirjoitetun PDF:n kansilehdessä. Yrityksesi nimi näkyy SMS-lähettäjänä ja sähköpostin lähetysosoitteessa. Organisaatiorakenne (osastot, roolit, käyttöoikeudet) synkronoidaan Active Directorystasi automaattisesti.

**Tila:** Sisältyy. Brändäysasetukset ovat kertakonfigurointi.

## 1.3 Työnkulkujen oletukset

Ympäristöösi kuuluu yksi oletusarvoinen allekirjoituspyyntömalli, automaattiset muistutukset (2 päivää lähetyksen jälkeen + 1 päivä ennen erääntymistä), konfiguroitavat vanhentumisajat (7-90 päivää) ja allekirjoittajan siirto-oikeus oletuksena käytössä. Edistyneet ominaisuudet — useita malleja, dokumenttien latausvaatimukset, tarkkailijat, harkinta-ajat, nippu-allekirjoitus, mukautetut metatiedot ja automaattinen arkistointi — ovat saatavilla ja aktivoitavissa mallikohtaisesti tai ympäristökohtaisesti konfigurointityönä.

**Tila:** Perusominaisuudet aktiivisia. Edistyneet ominaisuudet konfiguroitavissa.

---

# OSA 2: ALLEKIRJOITUKSEN PERUSPALVELU [SISÄLTYY]

Sisältyy Enterprise-tilaukseen. Tapahtumakohtaiset maksut veloitetaan käytön mukaan — katso hintatiedot hintaliitteestä.

## 2.1 Hyväksytyt ja kehittyneet sähköiset allekirjoitukset

eIDAS-yhteensopiva digitaalinen allekirjoittaminen koko EU:n laajuisesti. Jokainen allekirjoitettu asiakirja saa hyväksytyn aikaleiman ja eheysleiman AATL-sertifioidulla varmenteella, mikä takaa pitkäaikaisen oikeudellisen pätevyyden ja väärentämisen estämisen. Vastaanottajat näkevät luotetun vahvistusindikaattorin (sininen palkki, vihreä valintamerkki) tavallisessa Adobe Acrobatissa — ei lisäosia, ei internet-yhteyttä tarvita. Asiakirjat käyttävät PAdES-LTV-muotoa ja ovat itsenäisesti todennettavissa offline-tilassa vuosikymmeniä.

**Tila:** Sisältyy (tapahtumakohtainen laskutus)

## 2.2 Tunnistautumistavat

Allekirjoittajat käyttävät omia tuttuja pankkitunnuksiaan tai kansallista sähköistä henkilöllisyyttään. Ei tilin luomista, ei ohjelmistoasennuksia, ei rekisteröitymistä allekirjoittajan puolelta. Lähetät linkin — he tunnistautuvat ja allekirjoittavat. Vahva tunnistautuminen (AES) Suomen luottamusverkoston pankkien (OP, Nordea, Danske, Aktia, S-Pankki ym.), suomalaisen mobiilivarmenteen, ruotsalaisen BankID:n ja Freja eID:n kautta sisältyy hintaan. Pohjois-Baltian laajennus (norjalainen BankID, Vipps, tanskalainen MitID, baltialainen Smart-ID, Mobiili-ID, Viron e-Residency) on saatavilla lisäpalveluna.

**Tila:** Suomi + Ruotsi sisältyy. Pohjois-Baltia: Lisäpalvelu.

## 2.3 QES - Hyväksytyt sähköiset allekirjoitukset

EU-lainsäädännön korkein oikeudellinen taso. QES vastaa omakätistä allekirjoitusta, eikä sitä voida riitauttaa tuomioistuimessa sähköisen muodon perusteella. Saatavilla kansallisilla henkilökorteilla (Suomi, Viro, Latvia, Liettua, Kroatia, Tšekki, Belgia) ja Smart-ID:n QES-tilassa. Käytetään viranomaishakemuksiin, notaarisopimuksiin, kiinteistökauppoihin ja arvoltaan merkittäviin rahoitussopimuksiin.

**Tila:** Sisältyy.

## 2.4 Kevyet allekirjoitustavat (SES)

SMS OTP, sähköposti-OTP ja piirretty allekirjoitus (InkSign) tilanteisiin, joissa vahvaa henkilöllisyyden todentamista ei vaadita tai se ei ole oikeassa suhteessa riskiin. Tyypillisiä käyttökohteita: kansainväliset allekirjoittajat ilman pohjoismaista/baltialaista sähköistä henkilöllisyyttä, sisäiset hyväksynnät, toimittajavahvistukset ja kasvotusten tapahtuva allekirjoittaminen palvelupisteissä.

**Tila:** Lisäpalvelu (per allekirjoittaja).

## 2.5 Toimitus ja ilmoitukset

Allekirjoituspyynnöt tavoittavat allekirjoittajat sähköpostitse suojatun allekirjoituslinkin avulla. SMS-toimitus on saatavilla vaihtoehtoisena tai yhdistettynä kanavana. Automaattiset muistutukset seuraavat odottavia allekirjoittajia konfiguroitavin väliajoin. Valmistumisen jälkeen kaikki osapuolet saavat sähköpostin OTP-suojatulla latauslinkillä. Kaikki ilmoitusmallit on brändätty organisaatiosi mukaisesti.

**Tila:** Sähköposti sisältyy. SMS: Lisäpalvelu (per viesti).

## 2.6 Jäljitysketju ja vaatimustenmukaisuus

Jokainen allekirjoitettu asiakirja on itsensä todistava. Täydellinen todisteaineisto — henkilöllisyys, tunnistautumismenetelmä, tarkat aikaleimat, IP-osoite — on upotettu PDF-tiedostoon allekirjoittajakohtaisesti. Asiakirjat käyttävät hyväksyttyjä aikaleimoja ja PAdES-LTV-muotoa pitkäaikaiseen todennukseen. Asiakas on rekisterinpitäjä, SK ID Solutions on henkilötietojen käsittelijä. Henkilötunnus voidaan tiivistää kryptografisesti GDPR-vaatimustenmukaisuutta varten.

**Tila:** Sisältyy.

## 2.7 Portaaliin pääsy

Selainpohjainen käyttöliittymä. Ei ohjelmistoasennuksia. Tiimisi luo, lähettää, seuraa ja lataa allekirjoituspyyntöjä verkkoportaalista. Reaaliaikainen tilanäkymä näyttää pyyntö- ja allekirjoittajakohtaisen edistymisen aikaleimatuilla tapahtumalokilla. Pyyntöjä voidaan peruuttaa, korjata ja kopioida kaikkine asetuksineen.

**Tila:** Sisältyy.

## 2.8 REST API -liittymä

Täysi REST API sisältyy Enterprise-tilaukseen. Monivaiheinen työnkulku yksityiskohtaista hallintaa varten tai OneStep-rajapinta yhden kutsun lähetykseen. Webhookit lähettävät reaaliaikaiset ilmoitukset järjestelmääsi, kun asiakirjoja allekirjoitetaan, hylätään tai ne vanhenevat. Upotettu allekirjoittaminen mahdollistaa prosessin suorittamisen omassa sovelluksessasi. Automaattinen arkistointi noutaa allekirjoitetut PDF-tiedostot valmistumisen yhteydessä.

**Tila:** Sisältyy.

---

# OSA 3: TYÖNKULUT JA ORKESTRAATIO [SISÄLTYY / KONFIGUROITAVISSA]

Miten allekirjoitusprosessia hallitaan. Työnkulkujen perusominaisuudet sisältyvät ja ovat aktiivisia. Edistyneet orkestraatio-ominaisuudet voidaan aktivoida mallikohtaisesti tai ympäristökohtaisesti.

## 3.1 Allekirjoituspyyntömallit

Ennalta määritellyt työnkulkupohjat, jotka standardoivat liiketoimintaprosesseja koko organisaatiossa. Jokainen malli esimäärittää tunnistautumisen vahvuuden, toimitustavan, allekirjoitusjärjestyksen, muistutusaikataulun ja vaatimustenmukaisuussäännöt. Erilaiset mallit eri käyttötarkoituksiin — yksi työsopimuksille, toinen salassapitosopimuksille, kolmas lainasopimuksille — kaikki saman ympäristön alla.

**Tila:** Sisältyy. Useita malleja: Konfigurointityö.

## 3.2 Allekirjoitusjärjestys

Samanaikainen allekirjoittaminen (kaikki kerralla, missä järjestyksessä tahansa) suoraviivaisiin sopimuksiin. Peräkkäinen allekirjoittaminen (tiukka järjestys, taso kerrallaan) hyväksyntäketjuihin. Yhdistetty tila monimutkaisiin hierarkioihin — useita allekirjoittajia samalla tasolla, peräkkäinen tasojen välillä. Jos joku allekirjoittaja hylkää, koko työnkulku pysähtyy välittömästi.

**Tila:** Sisältyy. Konfiguroitavissa pyyntökohtaisesti.

## 3.3 Allekirjoittajaryhmät ja hyväksyntähierarkiat

Monitasoinen organisatorinen hyväksyntäprosessi. Ryhmittele allekirjoittajat johtotason mukaan, jolloin asiakirjat etenevät hierarkiassa järjestyksessä. Jos alemman tason allekirjoittaja hylkää, ylemmille tasoille ei ilmoiteta — työnkulku pysähtyy hylkäyskohtaan.

**Tila:** Konfiguroitavissa. Aktivoidaan mallikohtaisesti.

## 3.4 Allekirjoittajan siirto

Nimetty allekirjoittaja voi siirtää allekirjoitustehtävän valtuutetulle kollegalle, kun hänellä ei ole riittävää allekirjoitusoikeutta (esim. sopimuksen arvo ylittää hänen valtuutensa). Työnkulku jatkuu ilman uudelleenkäynnistystä. Täydellinen siirtoketju tallennetaan jäljitysketjuun.

**Tila:** Sisältyy. Oletuksena aktiivinen.

## 3.5 Harkintapyyntö (harkinta-aika)

Sääntelyyn perustuva työnkulku, joka asettaa pakollisen odotusajan ennen allekirjoitusoikeutta. Vastaanottaja voi lukea asiakirjan kokonaisuudessaan heti, mutta Allekirjoita-painike pysyy poissa käytöstä kunnes määritetty aika umpeutuu (yön yli, 7 päivää, 14 päivää). Suunniteltu rahoitussektorin vaatimustenmukaisuuteen — aktiivisessa käytössä pankkiasiakkailla kuluttajalainasopimusten käsittelyssä.

**Tila:** Konfiguroitavissa. Aktivoidaan mallikohtaisesti.

## 3.6 Tunnistautumisen vahvuuden hallinta

Yksityiskohtainen pyyntökohtainen hallinta henkilöllisyyden todentamiseen, jaettuna asiakirjan lukemiseen ja allekirjoittamiseen. Lukutunnistautuminen voidaan asettaa korkeasta (pankkitunnukset vaaditaan avaamiseen) matalaan (avoin linkillä). Allekirjoitustunnistautumisen on oltava vähintään lukutunnistautumisen tasolla.

**Tila:** Sisältyy. Konfiguroitavissa pyyntö- ja mallikohtaisesti.

## 3.7 Vanhentuminen ja muistutukset

Jokainen pyyntö sisältää kiinteän vanhentumisajan (7, 14, 30 tai 90 päivää — ympäristökohtainen maksimi konfiguroitavissa). Automaattiset muistutukset seuraavat odottavia allekirjoittajia konfiguroitavin väliajoin sähköpostitse tai tekstiviestillä. Manuaaliset muistutukset käytettävissä portaalista.

**Tila:** Sisältyy. Aikataulu konfiguroitavissa.

## 3.8 Liitteet ja viiteasiakirjat

Liitä tukimateriaaleja (sopimusehdot, liitteet, viiteasiakirjat), jotka allekirjoittajat voivat tarkastella allekirjoitusseremonian aikana mutta joita ei allekirjoiteta kryptografisesti. Pitää allekirjoitetun asiakirjan selkeänä tarjoten samalla täyden kontekstin.

**Tila:** Sisältyy.

## 3.9 Allekirjoittajan dokumenttien lataus

Vaadi allekirjoittajia lataamaan tukidokumentteja (henkilöllisyystodistuksen kopio, tutkintotodistus, ajokortti) allekirjoitusseremonian aikana ennen allekirjoitusoikeutta. Ladatut tiedostot tallennetaan allekirjoitetun sopimuksen yhteyteen.

**Tila:** Konfiguroitavissa. Aktivoidaan mallikohtaisesti.

## 3.10 Allekirjoituksen jälkeinen uudelleenohjaus

Allekirjoituksen jälkeen allekirjoittaja ohjataan automaattisesti määritettyyn URL-osoitteeseen — takaisin asiakkaan CRM-järjestelmään, käyttöönottopoortaaliin, vahvistussivulle tai digitaalisen prosessin seuraavaan vaiheeseen. Saumaton digitaalinen polku ilman katkeamia.

**Tila:** Sisältyy. Konfiguroitavissa pyyntökohtaisesti.

## 3.11 Tarkkailijat / Seuraajat

Ei-allekirjoittavat sidosryhmät, jotka saavat edistymisilmoitukset jokaisessa vaiheessa ja voivat ladata valmiin asiakirjan. Käytetään vaatimustenmukaisuuden valvontaan, johdon näkyvyyteen tai lakimiesten informointiin ilman heidän lisäämistään allekirjoittajiksi.

**Tila:** Konfiguroitavissa. Aktivoidaan mallikohtaisesti.

## 3.12 Mukautetut metatiedot

Liitä allekirjoituspyyntöihin rakenteellisia metatietokenttiä jatkokäsittelyä varten. Mahdollistaa valmistuneiden asiakirjojen automaattisen reitityksen oikeaan arkistokansioon, CRM-tietueeseen tai liiketoimintaprosessiin API:n/webhookien kautta.

**Tila:** Konfiguroitavissa. Aktivoidaan ympäristökohtaisesti.

## 3.13 Nippu-allekirjoittaminen

Allekirjoittaja tunnistautuu kerran ja allekirjoittaa useita asiakirjoja yhdessä istunnossa. Tunnistaudu kerran, allekirjoita jono odottavia asiakirjoja kerralla. Suunniteltu johtajille, esihenkilöille ja HR-henkilöstölle, jotka käsittelevät suuria allekirjoitusmääriä säännöllisesti. Enintään 50 asiakirjaa per istunto.

**Tila:** Konfiguroitavissa. Aktivoidaan ympäristökohtaisesti.

---

# OSA 4: ENTERPRISE-KONFIGURAATIO [KONFIGUROITAVISSA]

Nämä ominaisuudet konfiguroidaan Enterprise-käyttöönottosi yhteydessä. Organisaatiosi toimittaa lähtötiedot ja palvelutiimi hoitaa teknisen asennuksen.

## 4.1 Mukautettu brändäys

Sovella organisaatiosi logoa, värejä, fontteja ja taustakuvia sekä lähettäjäportaaliin että allekirjoittajalle näkyvään käyttöliittymään. Brändätty PAdES-kansilehti valmiissa asiakirjoissa korvaa alustan oletusbrändäyksen. Osastokohtaiset brändäysvariaatiot mahdollisia. Allekirjoittajat eivät välttämättä huomaa kolmannen osapuolen alustan käyttöä.

**Tila:** Kertakonfigurointi.

## 4.2 Mukautettu verkkotunnus

Tarjoa allekirjoituskokemus omalla brändätyllä URL-osoitteellasi — joko vakioaliverkkotunnuksella (yritysnimi.allekirjoitus.fi, sisältyy) tai täysin mukautetulla verkkotunnuksella (esim. allekirjoitus.yrityksesi.fi) omalla SSL-varmenteella.

**Tila:** Aliverkkotunnus sisältyy. Mukautettu verkkotunnus: Konfigurointityö.

## 4.3 SSO / Active Directory -integraatio

OIDC-integraatio Azure AD / Entra ID:n kanssa kertakirjautumista varten. Työntekijät klikkaavat AD-kirjautumista ja ohjataan organisaation kirjautumissivulle — jos Microsoft-istunto on jo aktiivinen, salasanaa ei kysytä. Uudet työntekijät provisioidaan automaattisesti ensimmäisellä kirjautumisella. Roolimuutokset AD:ssa päivittävät portaalin käyttöoikeudet automaattisesti. AD-ryhmästä poistaminen peruuttaa pääsyn välittömästi.

**Tila:** Konfigurointityö.

## 4.4 SMS- ja sähköpostikustomointi

Mukautettu SMS-lähettäjänimi (enintään 11 merkkiä). Mukautettu sähköpostin lähettäjäverkkotunnus. Täysi hallinta sähköpostin aiheeseen, sisältöön, HTML-ulkoasuun, alatunnisteeseen ja oikeudellisiin vastuuvapauslausekkeisiin. Dynaamiset paikkamerkit syöttävät automaattisesti vastaanottajan tiedot, asiakirjojen nimet ja allekirjoituslinkit. Useita ilmoitusmalleja eri sopimustyypeille. Mahdollisuus poistaa alustan ilmoitukset kokonaan API-pohjaisissa työnkuluissa.

**Tila:** Sisältyy brändäysasennukseen. Lisämallit: Konfigurointityö.

## 4.5 Organisaatiorakenne ja roolit

Oma ympäristösi heijastaa organisaatiosi rakennetta: Ympäristö → Osasto → Ryhmä → Käyttäjä. Roolipohjainen käyttöoikeuksien hallinta: Organisaation ylläpitäjä (täysi näkyvyys), osaston ylläpitäjä (osaston laajuus) ja osaston käyttäjä (vain omat pyynnöt). Synkronoidaan Active Directorystasi automaattisesti.

**Tila:** Sisältyy.

## 4.6 Asiakirjojen säilytysajan hallinta

Konfiguroitava säilytysaika oletusarvoisesta 90 päivästä enintään 365 päivään. Asiakirjat poistetaan pysyvästi säilytysajan umpeuduttua — ei palautettavissa. Automaattinen arkistointi voidaan konfiguroida lähettämään valmiit asiakirjat arkistojärjestelmääsi (Zefort, Arkinet tai mukautettu) API:n kautta ennen säilytysikkunan sulkeutumista.

**Tila:** Konfigurointityö.

## 4.7 Henkilötunnuksen käsittely

Konfiguroitava henkilötunnuksen kerääminen — poista käytöstä, tee valinnaiseksi, tee pakolliseksi tai tiivistä kryptografisesti lopullisessa allekirjoituksessa GDPR-tietojen minimoinnin periaatteen mukaisesti. Asetukset voidaan lukita mallitasolla, jotta yksittäiset lähettäjät eivät voi ohittaa organisaatiosi tietosuojakäytäntöä.

**Tila:** Sisältyy (kytkin). Pakotettu noudattaminen: Konfigurointityö.

## 4.8 Allekirjoittajaehdotukset

Automaattinen täydennys aiemmin käytetyille yhteystiedoille allekirjoittajien lisäämisessä uusiin pyyntöihin. Sisältää henkilötunnushaun. Nopeuttaa toistuvia työnkulkuja — ei manuaalista uudelleensyöttöä toistuvien allekirjoittajien tiedoille.

**Tila:** Sisältyy.

---

# OSA 5: TUOTTEISTETUT LISÄPALVELUT [LISÄPALVELU]

Ominaisuudet, jotka aktivoit Enterprise-tilauksen päälle, kukin omalla hinnoittelullaan — katso hintatiedot hintaliitteestä.

## 5.1 E-lomakkeet: Lomakepyynnöt

Korvaa staattiset PDF-lomakkeet interaktiivisilla verkkolomakkeilla. Työntekijäsi valitsee portaalista esikonfiguroidun lomakkeen ja lähettää yksityisen linkin vastaanottajalle. Vastaanottaja tunnistautuu, täyttää dynaamisen verkkolomakkeen kaskadilogiikalla (kentät ilmestyvät aiempien vastausten perusteella, tukee yli 180 kenttää), lähettää tiedot, ja alusta generoi täytetyn PDF:n ja ohjaa suoraan allekirjoitusseremoniaan. Lomakekenttien arvot ovat poimittavissa rakenteisina metatietoina CRM-/arkistojärjestelmääsi API:n kautta.

**Tila:** Lisäpalvelu (kuukausimaksu per lomake + kehitystyö).

## 5.2 E-lomakkeet: Avoimet lomakkeet

Julkisesti saatavilla olevat itsepalvelulomakkeet, joilla on uniikki URL verkkosivustollesi upotettavaksi. Kävijä klikkaa, tunnistautuu vahvasti pankkitunnuksilla (pakollinen), täyttää lomakkeen ja ohjataan suoraan allekirjoitukseen yhdessä jatkuvassa prosessissa. Ei kutsu-sähköpostia, ei odotusta. Tukee brändättyä verkkotunnusta.

**Tila:** Lisäpalvelu (kuukausimaksu per lomake + kehitystyö).

## 5.3 E-lomakkeet: Acroforms

Jos sinulla on jo täytettäviä PDF-lomakkeita (vakio Acroform-muoto), liitä ne allekirjoituspyyntöön. Allekirjoittaja täyttää kentät suoraan allekirjoitusseremonian aikana. Ei mukautettua kehitystyötä, ei kuukausittaista lomakemaksua. Tukee tällä hetkellä vain yhden allekirjoittajan pyyntöjä.

**Tila:** Sisältyy tapahtumakustannukseen.

## 5.4 Asiakirjamallit (API-pohjainen)

Automaattinen PDF-generointi JSON-datasta API:n kautta. Taustajärjestelmäsi lähettää avain-arvo-datan malli-ID:n kanssa, alusta yhdistää sen esimääriteltyyn PDF-malliin, generoi valmiin asiakirjan ja lähettää allekirjoitettavaksi — nolla manuaalisia vaiheita, nolla portaali-interaktiota.

**Tila:** Lisäpalvelu (per tapahtuma + kehitystyö asennukseen).

## 5.5 Massapyynnöt (CSV-tuonti)

Lähetä satoja tai tuhansia allekirjoituspyyntöjä kerralla ZIP + CSV -latauksella. Alusta yhdistää asiakirjat vastaanottajiin ja lähettää kaikki pyynnöt automaattisesti. Suunniteltu vuosittaisiin sopimusuusintaan, työntekijäkäsikirjojen jakeluun, toimittajasopimusten käyttöönottoon ja käytäntökuittauksiin.

**Tila:** Vakiotapahtumahinnat per pyyntö.

## 5.6 Asiakirjan leimaus (itsenäinen)

Aseta organisaatiosi virallinen digitaalinen leima PDF-asiakirjoihin ilman ihmisallekirjoittajaa — digitaalinen vastine yritysleimalle. Jokainen leimattu asiakirja saa hyväksytyn aikaleiman, joka todistaa eheyden ja alkuperän. API-pohjainen automaattiseen massaprosessointiin: laskut, palkkalaskelmat, todistukset ja virallinen kirjeenvaihto.

**Tila:** Lisäpalvelu (per asiakirja).

## 5.7 Tiedostomuunnos

Tiimisi lataa Office-tiedostoja (Word, Excel) tai kuvia — alusta muuntaa ne automaattisesti arkistokelpoiseen PDF/A-muotoon ennen allekirjoitusprosessin alkua. Ei manuaalista muunnosvaihetta.

**Tila:** Lisäpalvelu (per asiakirja).

## 5.8 Tiedoston jakaminen

Jaa asiakirjoja turvallisesti vastaanottajille, joiden tarvitsee vain lukea eikä allekirjoittaa. Asiakirja toimitetaan linkin kautta — vastaanottaja todentaa henkilöllisyytensä SMS OTP:llä ennen pääsyä. Hallittu vaihtoehto sähköpostiliitteille arkaluonteisen materiaalin osalta.

**Tila:** Lisäpalvelu (per vastaanottaja).

## 5.9 API-pohjainen työnkulkuautomaatio

Täysi päästä-päähän allekirjoitusautomaatio. CRM-, ERP- tai HR-järjestelmäsi luo pyyntöjä, vastaanottaa reaaliaikaiset tilatapahtumat webhookien kautta ja arkistoi allekirjoitetut asiakirjat — kaikki järjestelmästä järjestelmään, ilman kenenkään koskemista portaaliin. Valmiita integraatioita: Sympa HR, Salesforce Commerce Cloud, Microsoft Dynamics CRM, Zefort ja Arkinet.

**Tila:** Sisältyy (API-pääsy). Mukautetut integraatiot: Konfigurointityö.

## 5.10 Asiantuntijapalvelut

Kehitys- ja konfigurointipalvelut mukautetuille integraatioille, e-lomakkeiden luomiselle, työnkulkumallien asetukselle ja ympäristökonfiguraatioille. Asiantuntijakonsultaatio saatavilla arkkitehtuuriin, projektinhallintaan ja ratkaisusuunnitteluun. Työmääräarvio esitetään ja hyväksytään ennen työn aloittamista.

**Tila:** Tuntiveloitus — katso hintaliite.

---

# OSA 8: TOIMIALAKOHTAISET TYÖNKULKUMALLIT

Miten eri toimialat hyödyntävät alustan ominaisuuksia.

## Pankki ja rahoitus
Peräkkäinen allekirjoittaminen harkinta-ajoin sääntelyvaatimustenmukaisuuteen. Dynaaminen metatieto allekirjoittajien roolien seuraamiseen (Hakija, Takaaja). Automaattinen arkistointi suojattuihin holvehin valmistumisen yhteydessä. Avoimet lomakkeet julkisiin lainahakemuksiin pakollisella vahvalla tunnistautumisella.

## Henkilöstöhallinto
Peräkkäiset hyväksyntäketjut (HR aloittaa — hakija allekirjoittaa — esimies vahvistaa). Allekirjoittajan dokumenttien lataus tutkintotodistusten ja henkilöllisyystodistusten keräämiseen perehdytyksen aikana. Massapyynnöt vuosittaisten käytäntöpäivitysten tai käsikirjakuittausten jakeluun koko organisaatiossa.

## Juridinen ja vaatimustenmukaisuus
Allekirjoittajien tilanäkymät lakimiehille muiden osapuolten allekirjoitustilanteen vahvistamiseen ennen oman allekirjoituksen lisäämistä. Tarkkailijat vaatimustenmukaisuuden valvontaan. Liitteet sopimusehdoille, jotka täydentävät mutta eivät muodosta osaa allekirjoitetusta asiakirjasta.

## Hankinta ja myynti
Samanaikainen allekirjoittaminen nopeisiin salassapitosopimuksiin ja suoraviivaisiin sopimuksiin. Massapyynnöt toimittajasopimusten käyttöönottoon. Allekirjoittajan siirto kun nimetyn allekirjoittajan tulee delegoida kollegalle, jolla on asianmukainen valtuutus.

## Operaatiot ja hallinto
Itsenäinen asiakirjan leimaus laskujen, todistusten ja virallisen kirjeenvaihdon massaprosessointiin. Nippu-allekirjoittaminen esihenkilöille, jotka käsittelevät suuria hyväksyntämääriä. Asiakirjamallit standardoitujen dokumenttien automaattiseen generointiin taustajärjestelmistä.

---

*Tietopankki Yleiskatsaus v1.0 - 25.4.2026*
*Yleiskatsaussyvyys: tiiviit kappaleet, ei taulukoita, ei alaosioita. Osioiden otsikot vastaavat yksityiskohtaista versiota (MASTER_KB_v2.md) yhtenäisen toiminnan varmistamiseksi eri syvyystasojen välillä.*
*Osat 6, 7, 9 eivät sisälly yleiskatsaukseen — hinnoittelu on erillisessä hintaliitteessä, ehdot ja asennusviite ovat erillisiä liitteitä.*
