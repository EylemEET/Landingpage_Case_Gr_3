/**
 * file: js/js.js
 * purpose: Behaviors
 * COPILOT NOTE: Denne fil styrer burger-menuen og slideshowet
 **/

console.log('Success: JavaScriptet sender noget usynligt til konsollen!');

/* ========================= */
/* BURGER-MENU FUNKTION */
/* ========================= */

/* W3 NOTE: Denne funktion toggler klassen "change" på burger-ikonet */
/* COPILOT NOTE: Funktionen viser/skjuler navigationen via CSS-reglen .change + #menu */
function myFunction(x) {
  x.classList.toggle("change");
}

/* ========================= */
/* SØGEKNAP FUNKTION */
/* ========================= */


/* ========================= */
/* AUTOMATISK SLIDESHOW */
/* ========================= */
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // skjul alle slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // gå til næste slide
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // fjern aktiv klasse fra alle dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // vis aktiv slide og dot
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  // skift billede hver 2 sek.
  setTimeout(showSlides, 2000);
}
/* ========================= */
/* FOOTER FOLD-FUNKTION */
/* ========================= */

document.addEventListener('DOMContentLoaded', () => {
  document
    .querySelectorAll('.footer-column:not(.newsletter) h3')
    .forEach(header => {
      header.addEventListener('click', () => {
        header.parentElement.classList.toggle('active');
      });
    });
});


function setTheme(mode) {
  document.body.className = mode;
}


function toggleTheme() {
  const body = document.body;
  const icon = document.getElementById("theme-icon");

  if (body.classList.contains("dark")) {
    body.className = "light";
    icon.src = "images/body_darkmode.svg";   // viser dark ikon
  } else {
    body.className = "dark";
    icon.src = "images/body-lightmode.svg";  // viser light ikon
  }
}