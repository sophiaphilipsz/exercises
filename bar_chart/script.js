//Henter ul elementet fra HTML dokumentet
const list = document.querySelector("ul");
//Funktion der genererer et tilfældigt tal mellem 0 og 100
function randomNumber() {
    //Genererer et tilfældigt tal mellem 0 og 100
    return Math.floor(Math.random() * 101);
}
//Funktion der opretter et nyt li element med en tilfældig højde og tilføjer det til listen
function createBar() {
    //Genererer et tilfældigt tal mellem 0 og 100
    const number = randomNumber();
//Opretter et nyt li element
    const li = document.createElement("li");
//Sætter højden på li elementet til det tilfældige tal
    li.style.setProperty("--height", number);
//Tilføjer li elementet til listen
    list.appendChild(li);
//Fjerner det første li element fra listen, hvis der er mere end 20 li elementer i listen
    if (list.children.length > 20) {
        //Fjerner det første li element fra listen
        list.removeChild(list.firstElementChild);
    }
}
//Kører createBar funktionen første gang for at starte processen
createBar();
//Kører createBar funktionen hvert sekund for at tilføje et nyt li element til listen
setInterval(function() {
    createBar();
}, 1000);