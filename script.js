const llistaParaules = [
    "lata",
    "rata",
    "ata"
];
// Recuperar los elementos del DOM que nos interesan.
const envoltorioGuanyat = document.getElementsByClassName('envoltorio-popup-guanyat');
const envoltorioPerdut = document.getElementsByClassName('envoltorio-popup-perdut');

let paraulaSecreta = llistaParaules[Math.floor(Math.random() * 3)].toUpperCase();
let gions;
let intetns = 7;
let errors = 0;
let asGuanyat = 0;

let contador = 0;

let elCrono;
let miFecha = new Date();
let cronometroHtml = document.getElementById("cronometro");

miFecha.setHours(0, 0, 0, 0);
cronometroHtml.innerHTML = "00:00:00";

let elCuentaAtras;
let miFechaAtras = new Date();
let cuentaAtrasHtml = document.getElementById("cuentaAtras");

miFechaAtras.setHours(0, 0, 8, 0);
let segundosAtras = miFechaAtras.getSeconds();

cuentaAtrasHtml.innerHTML = "00:00:08";

paraulaSecreta = paraulaSecreta.split("");

console.log(paraulaSecreta);

let paraulaSecretaLletras = [];
for(let i = 0;i<paraulaSecreta.length;i++) {
    paraulaSecretaLletras.push(false);
}

let gionsArrays = [];
for(let i = 0;i<paraulaSecreta.length;i++) {
    gionsArrays.push("_ ");
}

aString();

let lletras = document.getElementById("lletras");

// FUNCIONS

function aString() {
    gions = gionsArrays.join(" ");
    let paraulaDiv = document.getElementById("paraula");
    paraulaDiv.innerHTML = "<span>" + gions + "</span>";
    let intetnsSpans = document.getElementById("intents");
    intetnsSpans.innerText = intetns;
    let errorsComesos = document.getElementById("errorsComesos");
    errorsComesos.innerText = `Has comes ${errors} errors`;
}

function comprovarVictoria() {
    if(asGuanyat == paraulaSecretaLletras.length) {
        envoltorioGuanyat[0].style.display = 'block';
        stop();
    } else if(intetns == 0) {
        envoltorioPerdut[0].style.display = 'block';
        stop();
    }
}

function crono() {
    let horas = miFecha.getHours();
    let minutos = miFecha.getMinutes();
    let segundos = miFecha.getSeconds();

    segundos += 1;

    if(segundos == 60) {
        segundos = 0;
        minutos += 1;

        miFecha.setMinutes(minutos);
    }

    miFecha.setSeconds(segundos);

    if (horas < 10) { horas = "0" + horas;}
    if (minutos < 10) { minutos = "0" + minutos;}
    if (segundos < 10) { segundos = "0" + segundos;}

    cronometroHtml.innerHTML = horas + ":" + minutos + ":" + segundos;
}

function cuentaAtras() {
    let horas = miFechaAtras.getHours();
    let minutos = miFechaAtras.getMinutes();

    segundos -= 1;

    if(segundos == 0) {
        segundos = 8;
        intetns--;
        errors++;
        aString();
        comprovarVictoria();
    }

    miFechaAtras.setSeconds(segundos);

    if (horas < 10) { horas = "0" + horas;}
    if (minutos < 10) { minutos = "0" + minutos;}
    if (segundos < 10) { segundos = "0" + segundos;}

    cuentaAtrasHtml.innerHTML = horas + ":" + minutos + ":" + segundos;
}

function start() {
    elCrono = setInterval(crono, 2000);
    elCuentaAtras = setInterval(cuentaAtras, 1000);
}

function stop() {
    clearInterval(elCrono);
    clearInterval(elCuentaAtras);
}

// EVENTS
lletras.addEventListener("click", ((e) => {
    contador++;
    segundos = 9;
    if(contador == 1) {
        start();
    }
    let paraulaSecretaLletrasCopia = paraulaSecretaLletras.slice();
    if(e.target.classList.contains("lletra")) {
        for(let i = 0; i<paraulaSecreta.length;i++) {
            if(paraulaSecreta[i] == e.target.innerHTML) {
                paraulaSecretaLletras[i] = true;
                gionsArrays[i] = paraulaSecreta[i];
            }
        }
        console.log(paraulaSecretaLletras);
        if(JSON.stringify(paraulaSecretaLletras) === JSON.stringify(paraulaSecretaLletrasCopia)) {
            e.target.classList.add("incorrecte");
            intetns--;
            errors++;
        } else {
            e.target.classList.add("correcte");
        }
        aString();
        asGuanyat = 0;
        for(let i = 0; i<paraulaSecretaLletras.length;i++) {
            if(paraulaSecretaLletras[i] == true) {
                asGuanyat++;
            }
        }
        comprovarVictoria()
    }
}));