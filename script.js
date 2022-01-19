'use strict';

const personas = [
    new Persona('Juan', 'Perez'),
    new Persona('Jhoan', 'Pabon'),
    new Persona('Carol', 'Rojas')
];

document.addEventListener('DOMContentLoaded', mostrarPersonas);

function mostrarPersonas(){
    let texto = '';
    for(let persona of personas){
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
    }
    document.getElementById('personas').innerHTML = texto;
}

document.getElementById('enviar').addEventListener('click', agregarPersona);

function agregarPersona(){
    const form = document.forms['formulario'];
    let nombre = form['nombre'].value;
    let apellido = form['apellido'].value;
    if(nombre != '' && apellido != ''){
        const persona = new Persona(nombre, apellido); 
        personas.push(persona);
        mostrarPersonas();
    }else{
        alert(`Todos los campos son obligatorios`);
    }
    form['nombre'].value = '';
    form['apellido'].value = '';
}