"use strict";

window.addEventListener("DOMContentLoaded", start);

// Prototype for alle animals
const Animal = {
    name: "",
    desc: "",
    type: "",
    age: 0
};

// Array til alle animals
const allAnimals = [];

function start( ) {
    console.log("ready");

    loadJSON();
}


function loadJSON() {
    fetch("animals.json")
    .then( response => response.json() )
    .then( jsonData => {
        // when loaded, prepare objects
        prepareObjects( jsonData );
    });
}

function prepareObjects( jsonData ) {
    
    jsonData.forEach( jsonObject => {
        // opret et nyt animal objekt vha. prototypen
        const animal = Object.create(Animal);

        // hent data fra jsonObject i en variabel
        const fullName = jsonObject.fullname;

        // find first space (indexOf)
        const firstSpace = fullName.indexOf(" ");
        // find second space (lastIndexOf)
        const secondSpace = fullName.lastIndexOf(" ", firstSpace + 1);
        // find last space (lastIndexOf)
        const lastSpace = fullName.lastIndexOf(" ");

        // split fullName i 3 dele, name, desc og type
        // name = start of string til first space
        const name = fullName.substring(0, firstSpace);
        // desc = second space til last space
        const desc = fullName.substring(secondSpace + 1, lastSpace);
        // type = last space til end of string
        const type = fullName.substring(lastSpace + 1);

        // log resultatet
        console.log(`name: ${name}, desc: ${desc}, type: ${type}`);
        // sæt name, desc og type på animal objektet
        animal.name = name;
        animal.desc = desc;
        animal.type = type;
        // sæt age på animal objektet
        animal.age = jsonObject.age;

        // push animal objektet ind i allAnimals arrayet
        allAnimals.push(animal);

});
    // viser alle animals i HTML
    displayList();

}



function displayList() {
    // clear the list
    document.querySelector("#list tbody").innerHTML = "";

    // build a new list
    allAnimals.forEach( displayAnimal );
}

function displayAnimal( animal ) {
    // create clone
    const clone = document.querySelector("template#animal").content.cloneNode(true);

    // set clone data
    clone.querySelector("[data-field=name]").textContent = animal.name;
    clone.querySelector("[data-field=desc]").textContent = animal.desc;
    clone.querySelector("[data-field=type]").textContent = animal.type;
    clone.querySelector("[data-field=age]").textContent = animal.age;

    // append clone to list
    document.querySelector("#list tbody").appendChild( clone );
}

