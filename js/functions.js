document.addEventListener("DOMContentLoaded", function () {
  const currentDate = new Date();
  const days = document.querySelectorAll('.door');
  const prevButton = document.getElementById("prevDay");
  const nextButton = document.getElementById("nextDay");
  const currentDay = getCurrentDay();
  const currentMonth = currentDate.getMonth(); // Voit myös korvata 'currentDate.getMonth()' haluamallasi kuukaudealla (tammikuu = 0 -> joulukuu = 11)
  const currentYear = currentDate.getFullYear(); // Voit myös korvata 'currentDate.getFullYear()' haluamallasi vuodella (esim. 2023)

  const API_KEY = 'API_KEY placeholder'; // Tähän oma Giphy API_KEY https://developers.giphy.com/
  const searchTerm = 'christmas'; // Voit vaihtaa haettavan termin
  const container = document.getElementById('gif-container');

  // Funktio hakee GIF-animaatioita Giphy API:sta
  function searchGifs() {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${searchTerm}&rating=r`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Käsitellään hakutulokset
      const gifUrl = data.data.images.original.url; // Haetaan GIF-animaation URL
      const gif = document.createElement('img'); // Luodaan img-elementti
      gif.src = gifUrl; // Asetetaan GIF-animaation URL lähteeksi
      container.appendChild(gif); // Lisätään GIF-animaatio div-elementtiin
    })
    .catch(error => {
      console.error('Error fetching GIFs:', error);
    });
  }

  // Kutsutaan hakufunktiota
  searchGifs();

  days.forEach(function(day, index) {
    day.addEventListener('click', function() {
      // Määritetään päivämäärä klikatulle ovelle
      const doorDate = new Date(currentYear, currentMonth, parseInt(day.textContent));
       // Jos nykyinen päivämäärä on suurempi tai yhtä suuri kuin klikatun oven päivämäärä, ohjataan kyseisen päivän sivulle, muuten ohjataan "forbidden.html" -sivulle
      if (currentDate >= doorDate) {
        window.location.href = './days/day' + (index + 1) + '.html';
      } else {
        window.location.href = './days/forbidden.html';
      }
    });
  });

  // Kutsutaan shakeDoors-funktiota 5 sekunnin välein
  setInterval(shakeDoors, 5000);

  // Lisätään tärinäefekti jokaiselle ovelle, jos päivämäärä on mennyt
  function shakeDoors() {
    days.forEach(day => {
      // Haetaan kuluneet päivät
      const doorDate = new Date(currentYear, currentMonth, parseInt(day.textContent));
      if (currentDate >= doorDate) {
        day.classList.add("shake");
        setTimeout(() => {
          day.classList.remove("shake");
        }, 1000);
      }
    });
  }

  // Piilotetaan "Edellinen päivä" -painike, jos nykyinen päivä on ensimmäinen päivä
  if (currentDay === 1) {
    prevButton.style.display = 'none';
  }

  // Piilotetaan "Seuraava päivä" -painike, jos nykyinen päivä on viimeinen päivä
  if (currentDay === 24) {
    nextButton.style.display = 'none';
  }

  prevButton.addEventListener("click", goToPreviousDay);
  nextButton.addEventListener("click", goToNextDay);

  // Tarkistetaan päivän URL-parametri ja ohjataan käyttäjä "forbidden.html" -sivulle, jos URL:ssa oleva päivä on suurempi, kuin nykyinen päivä
  const path = window.location.pathname;
  const match = path.match(/day(\d+)\.html/);
    if (match && match[1]) {
      const dayFromUrl = parseInt(match[1]);
      // Tarkistetaan, että asetettujen 'currentYear', 'currentMonth' ja 'dayFromUrl' yhdistetty päivämäärä ei ylitä elettävää päivämäärää 
      if (dayFromUrl > currentDate.getDate() && (currentYear > currentDate.getFullYear() || (currentYear === currentDate.getFullYear() && currentMonth >= currentDate.getMonth()))) {
        window.location.href = './forbidden.html';
      }
    }

  // Haetaan day(x).html päivämäärä URL:sta
  function getCurrentDay() {
    const path = window.location.pathname;
    const match = path.match(/day(\d+)\.html/);
    if (match && match[1]) {
      return parseInt(match[1]);
    } else {
      return 1; // Palautetaan oletuksena 1, jos päivää ei löydy URL:sta
    }
  }

  // Siirtyminen edelliseen päivään
  function goToPreviousDay() {
    const currentDay = getCurrentDay();
    if (currentDay > 1) {
      const prevDay = currentDay - 1;
      window.location.href = `./day${prevDay}.html`;
    }
  }

  // Siirtyminen seuraavaan päivään, ellei päivä ole tulevaisuudessa, jolloin ohjataan "forbidden.html" -sivulle
  function goToNextDay() {
    const currentDay = getCurrentDay();
    if (currentDay < 24) {
      const nextDay = currentDay + 1;
      // Haetaan seuraava päivämäärä
      const nextDayDate = new Date(currentYear, currentMonth, nextDay);
      if (new Date() < nextDayDate) {
        window.location.href = './forbidden.html';
      } else {
        window.location.href = `./day${nextDay}.html`;
      }
    }
  }
});

