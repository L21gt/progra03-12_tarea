let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

/*TAREA 1
Crea una función generateTarget().  Esta función debe
devolver un número entero aleatorio entre 0 y 9.

El propósito de estafunción es llamarse al comienzo de 
cada nueva ronda para generar el nuevo número objetivo 
secreto.*/

let generateTarget = () => {
    return Math.floor(Math.random() * 10);
}


/*TAREA 2
Crea una función compareGuesses(). Esta función:

 * Tiene tres parámetros que representan la suposición
   del usuario (humano), una suposición de la computadora
   y el número objetivo secreto que se debe adivinar.

 * Determina qué jugdor (humano o computadora) gana
   en función de la conjeura más cercana al objetivo.
   Si ambos jugadores están empatados, el usuario
   humano debería ganar.

 * Devuelve true si el jugador humano gana y false si
   el jugador de la computadora gana.

El proposito de esta función es llamarla en cada
ronda para determinar qué conjetura es la más
cercana al número objetivo.
   */

let compareGuesses = (humanGuess, computerGuess,targetNumber) => {
    let humanDifference = Math.abs(targetNumber - humanGuess);
    let computerDifference = Math.abs(targetNumber - computerGuess);
    return humanDifference <= computerDifference;
}


/*TAREA 3 
Crea una función updateScore().  Esta función:
    * Tiene un único parámetro.  Este parámetro será un
      valor de cadena que representa al ganador.
    * Aumenta la variable de puntuación (humanScore o
      computerScore) en 1 según el ganador que se pasa
      a updateScore. La cadena que se pasa será 'human'
      o 'computer'.
    * No es necesario devolver ningún valor.

El propósito de esta función es utilizarse para aumentar
correctamente la puntuación del ganador después de 
cada ronda.*/

let updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}


/*TAREA 4
Crea una función advanceRound().  Esta función debe
incrementar el valor de currentRoundNumber en 1.

El propósito de esta función es actualizar el número de ronda
después de cada ronda.

Después de completar el juego advanceRound(), su juego Number
Guesser debería estar completamente operativo.
Debería poder adivinar, ver cómo su puntaje o el de la
computadora aumentan correctamente, pasar a la siguiente
ronda y ver la ronda correcta en la pantalla.*/

let advanceRound = () => currentRoundNumber++;


/*TAREA 5 
Comprueba que tu código funciona correctamente 
invocando las funciones que acabas de escribir en 
script.js con entradas de muestra. 
Puedes eliminar este código una vez que estés 
convencido de que todo funciona como debería.*/

// probar generateTarget()
console.log(generateTarget()); // Debería imprimir un número aleatorio entre 0 y 9
// probar compareGuesses()
console.log(compareGuesses(5, 8, 7)); // Debería imprimir false
console.log(compareGuesses(7, 5, 9)); // Debería imprimir true
// probar updateScore()
console.log('El punteo inicial humano es: '+humanScore); // Debería imprimir 0
console.log('El punteo inicial de la PC es: '+computerScore); // Debería imprimir 0
updateScore('computer'); // Debería incrementar el puntaje de la computadora en 1
updateScore('human'); // Debería incrementar el puntaje humano en 1
console.log('El punteo despues del turno humano es: '+humanScore); // Debería imprimir 1
console.log('El punteo despues del turno de la PC es: '+computerScore); // Debería imprimir 1
// probar updateScore()
console.log(updateScore('human')); // Debería imprimir undefined ya que establecimos que no regresaria ningun valor
console.log(updateScore('computer')); // Debería imprimir undefined ya que establecimos que no regresaria ningun valor
// probar advanceRound()
console.log('El número de ronda inicial es: '+currentRoundNumber); // Debería imprimir 1
advanceRound(); // Debería incrementar el número de ronda en 1
console.log('El número de ronda después de avanzar es: '+currentRoundNumber); // Debería imprimir 2
// TODO FUNCIONA CORRECTAMENTE, TAREA 5 COMPLETADA!!!

/*TAREA 6 
Ejecuta tu código y juega algunas rondas del juego
para asegurarte de que todo funciona como debería.*/

// TODO FUNCIONA CORRECTAMENTE EN EL JUEGO, TAREA 6 COMPLETADA!!!

