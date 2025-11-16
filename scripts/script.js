// JavaScript Document

/*Button zoeken*/
let menuOpenButton = document.querySelector("header > button");

/*kruisje zoeken*/
let menuSluitButton = document.querySelector("header nav button");



/*functie uitvoeren*/
menuOpenButton.addEventListener("click", openMenu);

/*functie uitvoeren*/
menuSluitButton.addEventListener("click", sluitMenu);


/*menu openen*/
function openMenu() {
  let deNav = document.querySelector("div");
  deNav.classList.add("is-open");
}

/*menu sluiten*/
function sluitMenu() {
  let deNav = document.querySelector("div");
  deNav.classList.remove("is-open");
}




//socialmediaiconen//

const button = document.querySelector("li button");
const root = document.querySelector(":root");

button.addEventListener("click", changeContrast);

function changeContrast() {
  // selecteer de custom property uit de root
  const currentColor = getComputedStyle(root).getPropertyValue("--socialmediaicon-background");

  // pink is de waarde van de custom property, voor jou is dat wat na de dubbele punt staat in CSS
  if (currentColor === "#e6005c") {
    // als het pink is verander het dan naar zwart
    root.style.setProperty("--socialmediaicon-background", "black");
  } else {
    // als het niet pink is, verander het terug naar pink
    root.style.setProperty("--socialmediaicon-background", "#e6005c");
  }
}



//geholpen door Viresh// 
// ----------------------------------open details op desktop----------------------------------
// Selecteer details elementen in de footer
const footerDetails = document.querySelectorAll("footer details");
 
// hiermee controleren we als sde scherm breedte tenminste 900px breed is
const mediaQuery = window.matchMedia("(min-width: 900px)");
 
// open of close de details elementen op basis van schermbreedte
function openDetails() {
  footerDetails.forEach(detail => {
    // Controleer of de viewport ≥ 900px is
    if (mediaQuery.matches) {
      // true: voeg het open toe aan het details element
      detail.setAttribute("open", "");
    } else {
      // false: haal open weg van het details element
      detail.removeAttribute("open");
    }
  });
}
 
// Luister naar veranderingen in de viewport en voer functie uit
mediaQuery.addEventListener("change", openDetails);
 
// Voer functie een keer uit bij het laden van de pagina. zonder dit is zijn de details elementen dicht als je de website op desktop open maakt
openDetails();