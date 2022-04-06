let inputqBloco = document.getElementById("qBloco");
let inputqFbloco = document.getElementById("qFbloco");
let inputqFolha = document.getElementById("qFolha");
let inputnIni = document.getElementById("nIni");
let inputnFim = document.getElementById("nFim");

let resultado = document.getElementById("resultado");

function calcular(){
    // alert("Calculando...");

    let qBloco = inputqBloco.value;
    let qFbloco = inputqFbloco.value;
    let qFolha = inputqFolha.value;
    let nIni = inputnIni.value;
    let nFim = inputnFim.value;

    // resultado.innerHTML = `<p> ${qBloco}`
    // resultado.innerHTML += `<p> ${qFbloco}`
    // resultado.innerHTML += `<p> ${qFolha}`
    // resultado.innerHTML += `<p> ${nIni}`
    // resultado.innerHTML += `<p> ${nFim}`


    let rFolha = parseInt(qBloco) * parseInt(qFbloco);
    let rBloco = parseInt(rFolha) / parseInt(qFolha);
    let nComeco = parseInt(nIni) + parseInt(rBloco) - 1;
    let nFinal = parseInt(nComeco) + parseInt(rBloco);

    // resultado.innerHTML = `<p>${rFolha}</p>`
    // resultado.innerHTML += `<p>${rBloco}</p>`
    // resultado.innerHTML += `<p>${nComeco}</p>`
    // resultado.innerHTML += `<p>${nFinal}</p>`

    resultado.innerHTML = `<p> CIMA | INICIO: ${nIni} | FIM: ${nComeco}</p>`
    resultado.innerHTML += `<p> BAIXO | INICIO: ${nComeco+1} | FIM: ${nFinal}</p>`

}

