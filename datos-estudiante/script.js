// utilizamos la funcion prompt para que en una ventana emergente se pregunte al usuario algunos datos:

let nombre = prompt("Porfavor, escribe tu nombre: ");

let apellidos = prompt("Porfavor, dime tus apellidos: ");

let edad = prompt("Porfavor, indicame tu edad: ");

//usando un segundo parametro de entrada en la funcion prompt conseguimos agregarle un texto por defecto:

let cicloFormativo = prompt("¿Cual es tu ciclo formativo?", "DAW");


//Usando el metodo write del documento mostramos los datos en pantalla:

document.write(`Hola, tu nombre es: ${nombre}.`);

document.write(`Tus apellidos son: ${apellidos}.`);

document.write(`Tienes ${edad} años.`);

document.write(`El ciclo formativo que estas estudiando es: ${cicloFormativo}.`);