// Vi finder knapperne fra HTML
let startKnap = document.getElementById("startKnap");
let forLavt = document.getElementById("forLavt");
let rigtigt = document.getElementById("rigtigt");
let forHoejt = document.getElementById("forHoejt");

// Vi finder stederne hvor teksten skal vises
let gaet = document.getElementById("gaet");
let besked = document.getElementById("besked");
let antalGaet = document.getElementById("antalGaet");

// Variabler til computerens gæt
let laveste = 0;
let hoejeste = 100;
let antal = 0;


// Når man trykker på start
startKnap.addEventListener("click", function() {

    laveste = 0;
    hoejeste = 100;
    antal = 0;

    besked.innerHTML = "";
    antalGaet.innerHTML = "";

    startKnap.disabled = true;

    forLavt.disabled = false;
    rigtigt.disabled = false;
    forHoejt.disabled = false;

    lavtGaet();
});


// Funktionen laver computerens gæt
function lavtGaet() {

    let computerGaet = Math.floor((laveste + hoejeste) / 2);

    gaet.innerHTML = "Mit gæt er: " + computerGaet;

    antal++;
}


// Brugeren siger: "Dit gæt er for lavt"
forLavt.addEventListener("click", function() {

    laveste = parseInt(gaet.innerHTML.split(": ")[1]) + 1;

    lavtGaet();
});


// Brugeren siger: "Dit gæt er for højt"
forHoejt.addEventListener("click", function() {

    hoejeste = parseInt(gaet.innerHTML.split(": ")[1]) - 1;

    lavtGaet();
});


// Brugeren siger: "Rigtigt!"
rigtigt.addEventListener("click", function() {

    besked.innerHTML = "Jeg gættede rigtigt! ";
    antalGaet.innerHTML = "Jeg brugte " + antal + " gæt.";

    // Slå knapperne fra
    forLavt.disabled = true;
    rigtigt.disabled = true;
    forHoejt.disabled = true;

    // Gør start-knappen aktiv igen
    startKnap.disabled = false;
});
