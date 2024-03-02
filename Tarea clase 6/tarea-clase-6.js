/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

const botonSiguiente = document.querySelector("#boton-siguiente");

botonSiguiente.onclick = function(){
    const cantidadIntegrantes = Number(document.querySelector("#cantidad-integrantes").value);
    crearInputIntegrantes(cantidadIntegrantes);
    
    return false;
};

const botonBorrar = document.querySelector("#boton-borrar");
botonBorrar.onclick = function(){
    const integrantesFamilia = document.querySelector("#integrantes");
    integrantesFamilia.innerHTML = ""; 
}

function crearInputIntegrantes(cantidadIntegrantes){
    const integrantesFamilia = document.querySelector("#integrantes");
    
    for(let i = 1; i <= cantidadIntegrantes; i = i + 1){
     crearIntegranteFamilia(integrantesFamilia, i);
    }
}

function crearIntegranteFamilia (integrantesFamilia, index){

    const nuevoLabel = document.createElement("label");
    nuevoLabel.textContent = `Edad del integrante  ${index}: `; 

    const nuevoInput = document.createElement("input");
    nuevoInput.type = "number";
    nuevoInput.id = `integranteNumero${index}`; 

    integrantesFamilia.appendChild(nuevoLabel);
    integrantesFamilia.appendChild(nuevoInput);
}

const botonCalcular = document.querySelector("#boton-calcular");
botonCalcular.onclick = function () {
    const cantidadIntegrantesFamilia = Number(document.querySelector("#cantidad-integrantes").value);
    realizarCalculosEdades(cantidadIntegrantesFamilia);
}


function obtenerEdades(cantidadIntegrantes){
    
    const edades = [];
    
    for (let i = 1; i <= cantidadIntegrantes; i = i + 1){
        const input = document.querySelector(`#integranteNumero${i}`);
        const edad = parseInt(input.value, 10);
        if(edad){
            edades.push(edad);
        }        
    }
    return edades;
}    

function calcularMayorEdad(edades) {
    let mayorEdad = edades[0];
    for (let i = 1; i < edades.length; i = i + 1) {
        if (edades[i] > mayorEdad) {
            mayorEdad = edades[i];
        }
    }
    return mayorEdad;
}    

function calcularMenorEdad(edades){
    let menorEdad = edades[0];
    for (let i = 1; i < edades.length; i = i + 1) {
        if (edades[i] < menorEdad) {
            menorEdad = edades[i];
        }
    }
    return menorEdad
}      
       
function calcularPromedio(edades) {
    let sumaTotal = 0;
    for(let i = 0; i < edades.length; i = i + 1){
        sumaTotal = sumaTotal + edades[i]
    }

    return sumaTotal / edades.length;    
}

function realizarCalculosEdades(cantidadIntegrantes){
    const edades = obtenerEdades(cantidadIntegrantes);
    if(edades.length === 0){
        return;
    } 
    const mayorEdad = calcularMayorEdad(edades);
    const menorEdad = calcularMenorEdad(edades);
    const promedio = calcularPromedio(edades);
    actualizarResultadosEdad(mayorEdad,menorEdad,promedio)
}

function actualizarResultadosEdad(mayorEdad, menorEdad, promedio){
    const calculoMayorEdad = document.querySelector("#edad-mayor");
    calculoMayorEdad.textContent =  mayorEdad;

    const calculoMenorEdad = document.querySelector("#edad-menor")
    calculoMenorEdad.textContent = menorEdad;

    const calculoPromedio = document.querySelector("#edad-promedio")
    calculoPromedio.textContent = promedio.toFixed(2);

}


/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/