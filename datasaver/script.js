// Data voor de lijsten
const tijdenScrambles = [
    { tijd: "5.67s", scramble: "R U R' U R U2 R'" },
    { tijd: "6.45s", scramble: "U R U' R' U' R U R'" },
    { tijd: "4.89s", scramble: "F R U R' U' F'" }
];

const kubussen = [
    { naam: "2x2", afbeelding: "https://via.placeholder.com/100", besteTijd: "1.50s", gemiddeldeTijd: "2.00s" },
    { naam: "3x3", afbeelding: "https://via.placeholder.com/100", besteTijd: "5.00s", gemiddeldeTijd: "6.00s" },
    { naam: "4x4", afbeelding: "https://via.placeholder.com/100", besteTijd: "10.00s", gemiddeldeTijd: "12.00s" }
];

const toernooien = [
    { afbeelding: "https://via.placeholder.com/100", naam: "3x3 Kampioenschap", toernooiNaam: "Nederlands Kampioenschap", land: "Nederland", besteTijd: "5.10s", gemiddeldeTijd: "6.20s", slechtsteTijd: "7.50s", vlag: "https://flagcdn.com/nl.svg" },
    { afbeelding: "https://via.placeholder.com/100", naam: "4x4 Kampioenschap", toernooiNaam: "Europees Kampioenschap", land: "België", besteTijd: "15.00s", gemiddeldeTijd: "18.00s", slechtsteTijd: "20.00s", vlag: "https://flagcdn.com/be.svg" }
];

// Functie om lijsten te vullen
function vulLijsten() {
    vulLijst1();
    vulLijst2();
    vulLijst3();
}

// Vul de eerste lijst met tijden en scrambles
function vulLijst1() {
    const lijst1 = document.getElementById('lijst1');
    lijst1.innerHTML = ''; // Maak de lijst leeg
    tijdenScrambles.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.tijd} - ${item.scramble}`;
        lijst1.appendChild(li);
    });
}

// Vul de tweede lijst met kubussen
function vulLijst2() {
    const lijst2 = document.getElementById('lijst2');
    lijst2.innerHTML = ''; // Maak de lijst leeg
    kubussen.forEach(kubus => {
        const li = document.createElement('li');
        li.innerHTML = `<img src="${kubus.afbeelding}" alt="${kubus.naam}"> ${kubus.naam} - Beste Tijd: ${kubus.besteTijd}, Gemiddelde Tijd: ${kubus.gemiddeldeTijd}`;
        lijst2.appendChild(li);
    });
}

// Vul de derde lijst met toernooien
function vulLijst3() {
    const lijst3 = document.getElementById('lijst3');
    lijst3.innerHTML = ''; // Maak de lijst leeg
    toernooien.forEach(toernooi => {
        const li = document.createElement('li');
        li.innerHTML = `<img src="${toernooi.afbeelding}" alt="${toernooi.naam}"> ${toernooi.naam} - Toernooi: ${toernooi.toernooiNaam}, Land: <img src="${toernooi.vlag}" alt="${toernooi.land}" style="width: 20px; vertical-align: middle;"> ${toernooi.land}, Beste Tijd: ${toernooi.besteTijd}, Gemiddelde Tijd: ${toernooi.gemiddeldeTijd}, Slechtste Tijd: ${toernooi.slechtsteTijd}`;
        lijst3.appendChild(li);
    });
}

// Functies om nieuwe items toe te voegen
function voegTijdToe() {
    const tijdInput = document.getElementById('tijdInput').value;
    const scrambleInput = document.getElementById('scrambleInput').value;
    if (tijdInput && scrambleInput) {
        tijdenScrambles.push({ tijd: tijdInput, scramble: scrambleInput });
        vulLijst1();
        document.getElementById('tijdInput').value = '';
        document.getElementById('scrambleInput').value = '';
    }
}

function voegKubusToe() {
    const naam = document.getElementById('kubusNaamInput').value;
    const afbeelding = document.getElementById('kubusAfbeeldingInput').value;
    const besteTijd = document.getElementById('besteTijdInput').value;
    const gemiddeldeTijd = document.getElementById('gemiddeldeTijdInput').value;

    if (naam && afbeelding && besteTijd && gemiddeldeTijd) {
        kubussen.push({ naam: naam, afbeelding: afbeelding, besteTijd: besteTijd, gemiddeldeTijd: gemiddeldeTijd });
        vulLijst2();
        document.getElementById('kubusNaamInput').value = '';
        document.getElementById('kubusAfbeeldingInput').value = '';
        document.getElementById('besteTijdInput').value = '';
        document.getElementById('gemiddeldeTijdInput').value = '';
    }
}

function voegToernooiToe() {
    const toernooiNaam = document.getElementById('toernooiNaamInput').value;
    const land = document.getElementById('landInput').value;
    const besteTijd = document.getElementById('besteToernooiTijdInput').value;
    const gemiddeldeTijd = document.getElementById('gemiddeldeToernooiTijdInput').value;
    const slechtsteTijd = document.getElementById('slechtsteToernooiTijdInput').value;
    const afbeelding = document.getElementById('toernooiAfbeeldingInput').value;
    const vlag = getVlagUrl(land); // Haal de vlag URL op

    if (toernooiNaam && land && besteTijd && gemiddeldeTijd && slechtsteTijd && afbeelding) {
        toernooien.push({ afbeelding: afbeelding, naam: toernooiNaam, toernooiNaam: toernooiNaam, land: land, besteTijd: besteTijd, gemiddeldeTijd: gemiddeldeTijd, slechtsteTijd: slechtsteTijd, vlag: vlag });
        vulLijst3();
        document.getElementById('toernooiNaamInput').value = '';
        document.getElementById('landInput').value = '';
        document.getElementById('besteToernooiTijdInput').value = '';
        document.getElementById('gemiddeldeToernooiTijdInput').value = '';
        document.getElementById('slechtsteToernooiTijdInput').value = '';
        document.getElementById('toernooiAfbeeldingInput').value = '';
    }
}

// Functie om de vlag URL op te halen op basis van het land
function getVlagUrl(land) {
    const vlaggen = {
        "Nederland": "https://flagcdn.com/nl.svg",
        "België": "https://flagcdn.com/be.svg",
        "Duitsland": "https://flagcdn.com/de.svg",
        "Frankrijk": "https://flagcdn.com/fr.svg",
        "Spanje": "https://flagcdn.com/es.svg",
        // Voeg hier meer landen en hun vlaggen toe
    };
    return vlaggen[land] || "https://via.placeholder.com/20"; // Standaard afbeelding als het land niet is gevonden
}

// Vul de lijsten bij het laden van de pagina
window.onload = vulLijsten;