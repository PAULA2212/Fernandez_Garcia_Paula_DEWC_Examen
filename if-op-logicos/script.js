
//creamos una funcion:
function saludarSegunHora() {

    //almacenamos en valor de la fecha y la hora en el objecto hoy:
    var hoy = new Date();

    //a traves de su metodo getHours nos quedamos solo con el valor de la hora:
    var hora = hoy.getHours();

    //creamos una estructura condicional en funcion del valor de la hora:
    if (hora >= 5 && hora <= 12) {

        //imprimimos en el documento html un parrafo con el saludo apropiado:
        document.write(`<p>Buenos dias!</p><br>`);
    } else if (hora > 12 && hora <= 18) {
        document.write(`<p>Buenas tardes!</p><br>`);
    } else {
        document.write(`<p>Buenas noches!</p><br>`);
    }

}

//llamamos a la funcion que hemos creado:
saludarSegunHora();
