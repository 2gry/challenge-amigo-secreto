const inputCuate = document.getElementById("amigo");
const listaCuates = [];
const ulListaCuates = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

function agregarAmigo() {
    if (inputCuate.value == ""){
        alert ("Por favor, ingrese un nombre valido");
    }else{
        listaCuates.push(inputCuate.value);
        ulListaCuates.innerHTML +=`<li>${inputCuate.value}</li>`; 
    }
}

function sortearAmigo(){
    const alAzar = Math.floor(Math.random() * listaCuates.length);
    const amigoSecreto = listaCuates[alAzar];
    ulResultado.innerHTML = `<li>El amigo secreto es:
    ${amigoSecreto}</li>`
}
