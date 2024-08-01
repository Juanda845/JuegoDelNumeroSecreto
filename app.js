//DOM = Document Objet Model: El DOM te permite manipular la estructura HTML de tu página web con JavaScript.

// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Juego del número secreto';

// let parrafo = document.querySelector('p');
// parrafo.innerHTML = 'Indica un número del 1 al 10';

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //EL USUARIO NO ACERTO
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarInput();
    }
    return;
}

function limpiarInput() {
    // let valorInput = document.querySelector('#valorUsuario');
    // valorInput.value = '';
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    console.log(numeroGenerado)
    console.log(listaNumerosSorteados)
    //Si ya sorteamos todos los número
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('P', 'Ya se sortearon todos los números posibles');
    } else {
        //Si el número  generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //LIMPIAR INPUT
    limpiarInput();
    //INDICAR MENSAJE DE INTERVALO DE NÚMEROS
    //GENERAR EL NÚMERO ALEATORIO
    //INICIALIZAR EL NÚMERO DE INTENTOS
    condicionesIniciales();
    //DESHABILITAR EL BOTÓN DE NUEVO JUEGO
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();