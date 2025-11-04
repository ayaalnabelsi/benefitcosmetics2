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



