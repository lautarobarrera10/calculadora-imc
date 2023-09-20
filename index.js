function calculcarIMC (centimetros, kilogramos) {
    let imc = kilogramos / (centimetros/100 * centimetros/100);
    return imc;
}

function clasificarIMC (imc) {
    let clasificacion;
    if (imc < 18) {
        clasificacion = "Bajo peso";
    } else if (imc < 25) {
        clasificacion = "Peso normal";
    } else if (imc < 30) {
        clasificacion = "Sobrepeso";
    } else if (imc < 35) {
        clasificacion = "Obesidad tipo 1";
    } else if (imc < 40) {
        clasificacion = "Obesidad tipo 2";
    } else {
        clasificacion = "Obesidad tipo 3";
    }
    return clasificacion;
}

function obtenerColorDeFondo(imc){
    let color;
    if (imc < 18) {
        color = "#53E1E5";
    } else if (imc < 25) {
        color = "#C9E26C";
    } else if (imc < 30) {
        color = "#FFDE63";
    } else if (imc < 35) {
        color = "#FEA851";
    } else if (imc < 40) {
        color = "#FF9251";
    } else {
        color = "#EB5A5F";
    }
    return color;
}


function calcularResultadoYMostrarEnPantalla(){
    let estatura = document.querySelector("#estatura").value;
    let peso = document.querySelector("#peso").value;
    let imcDOM = document.querySelector(".resultado-number");
    let diagnosticoDOM = document.querySelector(".resultado-text");
    let resultadoDOM = document.querySelector(".resultado");
    let resultadoContainerDOM = document.querySelector(".resultado-container");
    let imc = calculcarIMC(estatura, peso).toFixed(2);
    let diagnostico = clasificarIMC(imc);
    let color = obtenerColorDeFondo(imc)
    imcDOM.textContent = imc;
    diagnosticoDOM.textContent = diagnostico;
    resultadoDOM.classList.add("active");
    resultadoContainerDOM.style.backgroundColor = color;
}


calcularButton = document.querySelector("#calcular-button");

calcularButton.addEventListener("click", ()=>calcularResultadoYMostrarEnPantalla())