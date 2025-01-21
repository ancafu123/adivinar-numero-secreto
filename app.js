let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 100;
let intentosUsuario = 0;


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {

    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (intentosUsuario == 1){ //Verifica si el usuario se quedo sin intentos
        asignarTextoElemento('p', `Te quedaste sin intentos. El número secreto era ${numeroSecreto}.`);

        document.querySelector('#verificar').setAttribute('disabled', true);
        document.querySelector('#reiniciar').removeAttribute('disabled');
    }
    else{
        if (numeroUsuario === numeroSecreto) { //Verifica si el ususario acerto el numero secreto
            asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez':'veces'}`);
            document.querySelector('#verificar').setAttribute('disabled', true);
            document.querySelector('#reiniciar').removeAttribute('disabled');
        }
        else {
            intentosUsuario--;
            if (numeroUsuario > numeroSecreto){
                asignarTextoElemento('p', 'El numero secreto es menor, te quedan ' + intentosUsuario + ' intentos');
            }
            else {
                asignarTextoElemento('p', 'El numero secreto es mayor, te quedan ' + intentosUsuario + ' intentos');
            } 
            intentos++;
            limpiarCaja();

        }
    }
    return;
}

function generarNumeroSecreto() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo + 1); 
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    
    
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p", "Ya se sortearon todos lo numeros posibles");
    }
    else {

        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        }
        else{
            
            return numeroGenerado;
            
        }
    }
}

function limpiarCaja(params) {
    document.querySelector('#valorUsuario').value = '';
    
}

function condicionesIniciales(params) {
    intentosUsuario = 10;   
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}, tienes ${intentosUsuario} intentos`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    
}

function reiniciarJuego(params) {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#verificar').removeAttribute('disabled');
}

condicionesIniciales();


