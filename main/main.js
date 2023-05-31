/*
// Inicialización de variables
let tarjetasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;
let temporizador = false;
let timer = 30;
let tiempoRegresivo = null;
let timerInicial = 30;

// Apuntando al documento HTML
let mostrarMovimientos = document.getElementById('movimientos');
let mostrarAciertos = document.getElementById('aciertos')
let mostrarTimepo = document.getElementById('T-restante') 

// Generación de números aleatorios
let numeros = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
numeros = numeros.sort(() => Math.random() - 0.5);
console.log(numeros);


//funciones

function contarTiempo(){
  tiempoRegresivo = setInterval(()=>{
    timer --;
    mostrarTimepo.innerHTML =`Tiempo: ${timer} segundos`;
    if(timer === 0){
      clearInterval(tiempoRegresivo)
      bloquearTarjetas();
    }
  },1000)
}

function bloquearTarjetas(){
  for(let i = 0; i<=15; i++){
   let tarjetabloqueada = document.getElementById(i);
   tarjetabloqueada.innerHTML = numeros[i];
   tarjetabloqueada.disabled = true;
  }
}


// Función principal
function destapar(id) {
    tarjetasDestapadas++;

    console.log(tarjetasDestapadas);
    if(temporizador == false){
      contarTiempo();
      temporizador = true;
    }

  if (tarjetasDestapadas == 1) {
    tarjeta1 = document.getElementById(id);
    tarjeta1.innerHTML = numeros[id];
    tarjeta1.innerHTML = primerResultado;

    // Deshabilitar primer botón
    tarjeta1.disabled = true;
  } else if (tarjetasDestapadas == 2) {
    // Mostrar segundo número
    tarjeta2 = document.getElementById(id);
    segundoResultado = numeros[id];
    tarjeta2.innerHTML = segundoResultado;

    // Deshabilitar segundo botón
    tarjeta2.disabled = true;

    // Incrementar movimientos
    movimientos++;
    mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;

    if( primerResultado == segundoResultado){
        // encerrar contador targdtas destapadas
        tarjetasDestapadas = 0;
        
        //aumetnar aciertos
        aciertos++;
        mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;
        
        if(aciertos === 8){
          clearInterval(tiempoRegresivo);
          mostrarAciertos.innerHTML = `Aciertos: ${aciertos} 🤨😑`;
          mostrarMovimientos.innerHTML =`Felicidades te Demoraste ${timerInicial - timer} segundos`
          mostrarMovimientos.innerHTML = `Movimientos: ${movimientos} 👌😎`;
        }
    }else{
      //mostrar momentaniamente valores y volver a tapar
      setTimeout(()=>{
        tarjeta1.innerHTML = ' ';
        tarjeta2.innerHTML = ' ';
        tarjeta1.disabled = false;  
        tarjeta2.disabled = false;
        tarjetasDestapadas = 0;
      }, 700);
    }
  }
}
*/



// Inicialización de variables
let tarjetasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;
let temporizador = false;
let timer = 30;
let tiempoRegresivo = null;
let timerInicial = 30;

// Apuntando al documento HTML
let mostrarMovimientos = document.getElementById('movimientos');
let mostrarAciertos = document.getElementById('aciertos');
let mostrarTiempo = document.getElementById('T-restante');

// Generación de números aleatorios
let numeros = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
numeros = numeros.sort(() => Math.random() - 0.5);
console.log(numeros);

// Función para contar el tiempo
function contarTiempo() {
  tiempoRegresivo = setInterval(() => {
    timer--;
    mostrarTiempo.innerHTML = `Tiempo: ${timer} segundos`;
    if (timer === 0) {
      clearInterval(tiempoRegresivo);
      bloquearTarjetas();
    }
  }, 1000);
}

// Función para bloquear las tarjetas después de que se acabe el tiempo
function bloquearTarjetas() {
  for (let i = 0; i <= 15; i++) {
    let tarjetabloqueada = document.getElementById(i);
    tarjetabloqueada.innerHTML = numeros[i];
    tarjetabloqueada.disabled = true;
  }
}

// Función principal para destapar las tarjetas
function destapar(id) {
  tarjetasDestapadas++;

  console.log(tarjetasDestapadas);

  if (temporizador === false) {
    contarTiempo();
    temporizador = true;
  }

  if (tarjetasDestapadas === 1) {
    tarjeta1 = document.getElementById(id);
    primerResultado = numeros[id];
    tarjeta1.innerHTML = primerResultado;

    // Deshabilitar primer botón
    tarjeta1.disabled = true;
  } else if (tarjetasDestapadas === 2) {
    // Mostrar segundo número
    tarjeta2 = document.getElementById(id);
    segundoResultado = numeros[id];
    tarjeta2.innerHTML = segundoResultado;

    // Deshabilitar segundo botón
    tarjeta2.disabled = true;

    // Incrementar movimientos
    movimientos++;
    mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;

    if (primerResultado === segundoResultado) {
      // Reiniciar contador de tarjetas destapadas
      tarjetasDestapadas = 0;

      // Incrementar aciertos
      aciertos++;
      mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;

      if (aciertos === 8) {
        clearInterval(tiempoRegresivo);
        mostrarAciertos.innerHTML = `Aciertos: ${aciertos} 🤨😑`;
        mostrarMovimientos.innerHTML = `Felicidades. Te demoraste ${timerInicial - timer} segundos`;
        mostrarMovimientos.innerHTML = `Movimientos: ${movimientos} 👌😎`;
      }
    } else {
      // Mostrar los valores durante un tiempo y volver a tapar
      setTimeout(() => {
        tarjeta1.innerHTML = '';
        tarjeta2.innerHTML = '';
        tarjeta1.disabled = false;
        tarjeta2.disabled = false;
        tarjetasDestapadas = 0;
      }, 700);
    }
  }
}

let refresh = document.getElementById('refresh');
refresh.addEventListener('click', _ => {
location.reload();
})
