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

function realizarCalculosEdades(cantidadIntegrantes){
    const edades = [];
    
    for (let i = 1; i <= cantidadIntegrantes; i = i + 1){
        const input = document.querySelector(`#integranteNumero${i}`);
        const edad = parseInt(input.value, 10);
        edades.push(edad);
    }

    let mayorEdad = edades[0];
    let menorEdad = edades[0];

    for (let i = 1; i < edades.length; i = i + 1) {
        if (edades[i] > mayorEdad) {
            mayorEdad = edades[i];
        }
        if (edades[i] < menorEdad) {
            menorEdad = edades[i];
        }
    }  
       
   
    let sumaTotal = 0;
    for(let i = 0; i < edades.length; i = i + 1){
        sumaTotal = sumaTotal + edades[i]
    }

    const promedio = sumaTotal / edades.length;

    const calculoMayorEdad = document.querySelector("#edad-mayor");
    calculoMayorEdad.textContent =  mayorEdad;

    const calculoMenorEdad = document.querySelector("#edad-menor")
    calculoMenorEdad.textContent = menorEdad;

    const calculoPromedio = document.querySelector("#edad-promedio")
    calculoPromedio.textContent = promedio.toFixed(2);
     
}


