
//primero almacenamos en una lista de nodos todos los elementos con clase arrow que son los iconos que dispararan el evento:
flechas = document.querySelectorAll('.arrow');


//recorremos la lista de nodos con un bucle forEach:
flechas.forEach(flecha =>{

    //programamos un evento que sobre la flecha:
    flecha.addEventListener("click", function(){

        //guardamos los submenus que queremos desplegar en una constante basandomos en su posicion relativa a la flecha:
        const submenu = this.parentElement.nextElementSibling;

        //cambiamos la clase de los submenus a show para que se vea afectada por el display flex del css:
        submenu.classList.toggle('show');

        //cambiamos la clase de la flecha a rotate arrow para que esta gire:
        this.classList.toggle('rotate-arrow');
    })
})


