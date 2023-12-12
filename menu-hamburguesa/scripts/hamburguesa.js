//guardamos en una constante el menu de navegacion que querremos desplegar:

const navLink = document.querySelector('.nav-links');

// guardamos en otra constante el elemento html menu hamburguesa:

const hamburguer =  document.querySelector('.hamburger');

//creamos un evento que dispara una funcion para desplegar el navegador cuando se clicke en el menu hamburguesa:

hamburguer.addEventListener("click", () =>{
    navLink.classList.toggle('active');
}); 

/* //hacemos lo mismo con una funcion anonima:

hamburguer.addEventListener("click", function(){
    navLink.classList.toggle('active');
});

//hacemos lo mismo con notacion declarativa: 

function toggleNav(){
    navLink.classList.toggle('active');
}

hamburguer.addEventListener("click", toggleNav); */