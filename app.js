let numeroSecreto = 0;
let intentos = 0;
let numeroMaximo = 50;
let intentosUsuario = 0;


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {

    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (intentosUsuario == 1){ 
        asignarTextoElemento('p', `Te quedaste sin intentos. El número secreto era ${numeroSecreto}.`);

        document.querySelector('#verificar').setAttribute('disabled', true);
        document.querySelector('#reiniciar').removeAttribute('disabled');
    }
    else{
        if (numeroUsuario === numeroSecreto) {
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
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo + 1); 
    return numeroGenerado;    
       
}

function limpiarCaja(params) {
    document.querySelector('#valorUsuario').value = '';
    
}

function condicionesIniciales(params) {
    intentosUsuario = 8;   
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


let lista1 = [1,2,3,4,5,6];
let lista2 = [6,5,4,3,2,1];

function sumarListas(lista1, lista2) {
    return lista1.map((num, i) => num + (lista2[i] || 0));
    
}

console.log(sumarListas(lista1, lista2))

function sumaLista(lista) {
    let suma = 0;
    lista.forEach(element => {
        suma += element;
    });
    return suma;    
}

console.log(sumaLista(lista1));

let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin' , 'Python'];
lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');
console.log(lenguajesDeProgramacion);

function mostrarLenguajes(lista){
    i = lista.length - 1;
    while(i >= 0){
        console.log(lista[i]);
        i--;
    }
    return;
}


mostrarLenguajes(lenguajesDeProgramacion);