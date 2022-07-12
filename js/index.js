//este programa hace una pregunta al usuario el cual debe responder correctamente para ingresar al sitio//
let usuario = prompt (`Bienvenido! Ingrese su nombre por favor`)
let trivia = prompt (`Bienvenido ${usuario} para continuar debes responder correctamente la siguiente pregunta:
                      ¿Cual es la capital de Italia?`)
while (trivia != `Roma`){
  trivia = prompt (`Respuesta incorrecta. Intentemos de nuevo:
                      ¿Cual es la capital de Italia?`)
}
if (trivia == `Roma`){
  alert (`Felicitaciones ${usuario}! Respuesta correcta!`)
}