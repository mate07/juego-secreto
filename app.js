//variable
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//función
function asignarTextoElemento(elemento, texto){
      let titulo = document.querySelector(elemento);
      titulo.innerHTML = texto;
      return;
}

function verificarIntento(){
      let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
      
      if (numeroUsuario === numeroSecreto){
            asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
      }
      else{
            //EL usuario no acerto
            if (numeroUsuario > numeroSecreto){
                  asignarTextoElemento('p', 'El número secreto es menor');
            }
            else{
                  asignarTextoElemento('p', 'EL número secreto es mayor');
            }
            intentos ++;
            limpiarCaja();
      }

      return;
}

//para limpiar caja
function limpiarCaja(){
      document.querySelector('#valorUsuario').value = "";
}

//generar número secreto
function generarNumeroSecreto() {
      let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

      console.log(numeroGenerado);
      console.log(listaNumerosSorteados);

      //si ya sorteamos todos los números
      if(listaNumerosSorteados.length == numeroMaximo){
            asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
      }
      else{
            //si el número generado esta incluido en la lista
            if (listaNumerosSorteados.includes(numeroGenerado)){
                  return generarNumeroSecreto();
            }
            else{
                  listaNumerosSorteados.push(numeroGenerado);
                  return numeroGenerado;
            }
      }      
}

//mensajes
function condicionesIniciales(){
      asignarTextoElemento('h1', 'Juego del número secreto!');
      asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
      numeroSecreto = generarNumeroSecreto();
      intentos = 1;
      console.log(numeroSecreto);
}

//reinicar el juego
function reiniciarJuego(){
      //limpiar la caja
      limpiarCaja();

      //mensaje de invervarlos de números
      //generar el número aleatorio
      //inicializar el número de intentos
      condicionesIniciales();

      //deshabilitar botón de nuevo juego
      document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();