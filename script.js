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
    intetnsSpans.innerText =  intetns;
}

// EVENTS
lletras.addEventListener("click", ((e) => {
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
        } else {
            e.target.classList.add("correcte");
        }
        aString();
        let asGuanyat = 0;
        for(let i = 0; i<paraulaSecretaLletras.length;i++) {
            if(paraulaSecretaLletras[i] == true) {
                asGuanyat++;
            }
        }
        if(asGuanyat == paraulaSecretaLletras.length) {
            envoltorioGuanyat[0].style.display = 'block';
        } else if(intetns == 0) {
            envoltorioPerdut[0].style.display = 'block';
        }
    }
}));