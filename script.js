const llistaParaules = [
    "lata",
    "rata",
    "ata"
];

let paraulaSecreta = llistaParaules[Math.floor(Math.random() * 3)].toUpperCase();
paraulaSecreta = paraulaSecreta.split("");

paraulaSecretaLletras = [];
for(let i = 0;i<paraulaSecreta.length;i++) {
    paraulaSecretaLletras.push(false);
}

let gions = "";
for(let i = 0;i<paraulaSecreta.length;i++) {
    gions += "_ ";
}

let paraulaDiv = document.getElementById("paraula");
paraulaDiv.innerHTML = "<span>" + gions + "</span>";

let lletras = document.getElementById("lletras");
lletras.addEventListener("click");

function revisarLletra(e) {
    e.target.value;
}