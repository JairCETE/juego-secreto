let numeroSecreto;
let intentos = 0;
let listaNumeroSorteados = []; //entiende que sera una lista 
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    //con querySelector accedemos a la tag que modificaremos y con innerHTML agregamos texto 
    let elementoHTML = document.querySelector(elemento); //espera que pongamos el selector al que queremos acceder. Esto es un objeto
    elementoHTML.innerHTML = texto; //ponemos el texto 
    return;
}

function verificarIntento(){
    //let numeroUsuario = document.querySelector('input');
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value); //es otra forma de acceder al valor. Value es para que nos de el valor
    
    //console.log(numeroSecreto===numeroUsuario); //para el true, se usa el triple igual, igual en valor y en tipo de dato 
    
    if (numeroSecreto===numeroUsuario){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled'); //borramos un atributo para habiliar el boton 

    }else{
        //El usuario no acerto
        if(numeroUsuario>numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }

    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = ''; //cuando ponemos # es por que utilizaremos el ID. Value es para asignar un valor 
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);
    
    //si ya sorteamos todos los numeros 
    if(listaNumeroSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sorearon todos los numeros sorteados');
    }else{
        //si el numero generado esta incluido en lal lista 
        if (listaNumeroSorteados.includes(numeroGenerado)){ //con el metodo inlcudes hacemos un barrido a la lista 
            return generarNumeroSecreto(); //aplicamos recursividad, la funcion se llama a si misma 
        }else{
            listaNumeroSorteados.push(numeroGenerado); //con el metodo push agregamos valores a la lista 
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego de numero secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1; 
}

function reiniciarJuego(){
    //limpiar la caja 
    limpiarCaja();
    //indicar mesaje de intervalo de numeros 
    //generar el numero aleatorio 
    //incializar el numero de intentos
    condicionesIniciales();
    //desahbilitar el boton de nuevo juego  
    document.querySelector('#reiniciar').setAttribute('disabled','true'); //ponemos dos parametros, lo que agregamos y como se activara 
}

condicionesIniciales();



