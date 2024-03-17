# Joulukalenteri

## Tässä README-tiedostossa esitellään Joulukalenteri-sovellus. Sovelluksessa on 24 luukkua, jotka avautuvat vasta, kun niiden päivämäärä vastaa nykyistä päivämäärää. 

### Ominaisuudet ja tekniset tiedot:

Sovellus on kehitetty käyttäen HTML-, CSS- ja JavaScript-ohjelmointikieliä.

Tämä versio sovelluksesta tarjoaa vain mallipohjan sisällönluomista varten ja sovelluksen käyttöönottajan tulee itse luoda sisältö päiväkohtaisiin .html-tiedostoihin.

Sovellus hyödyntää avointa Giphy-rajapintaa lisätäkseen visuaalista sisältöä luukkuihin.

Sovellus on suunniteltu responsiiviseksi, joten se toimii saumattomasti eri laitteilla, kuten tietokoneilla, tableteilla ja älypuhelimilla.

Sovellukseen on luotu toiminnallisuus, joka estää luukkujen ennenaikaisen avaamisen kolmella eri tavalla:
- Luukkuja ***ei voi*** avata ennen määräpäivää.
- Luukkujen sisällä ***voi*** navigoida ***ainoastaan*** kuluvan ja menneiden päivien välillä.
- Luukkuja ***ei voi*** avata ennenaikaisesti URL-polkua käyttäen.

> Näissä tilanteissa käyttäjä ohjataan aina "forbidden"-polkuun.

### Käyttöönotto:

- Lataa sovelluksen tiedostot GitHubista.
- Luo päiväkohtaiset tekstisisällöt kullekin päivälle.
- Sovelluksen lähdekoodi sisältää tarkemmat ohjeet päivämääräasetuksille ja Giphyn toimintakuntoon saattamiseksi.
- Avaa index.html-tiedosto selaimessa aloittaaksesi käytön.

### Huomio:

Tämä sovellus on luotu opetus- ja viihdetarkoituksiin. En takaa sen virheettömyyttä tai sopivuutta mihinkään tiettyyn käyttötarkoitukseen.
