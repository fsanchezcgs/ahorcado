const llistaParaules = [
    "lata",
    "rata",
    "ata"
];

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
        console.log(e.target.classList);
        aString();
    }
}));