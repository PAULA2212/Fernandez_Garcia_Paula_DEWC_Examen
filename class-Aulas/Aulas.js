//definimos la clase aula:
class Aula{
    //usando el metodo constructor para poder asignarle atributos:
    constructor(numero, capacidad){
        this.numero = numero;
        this.capacidad = capacidad;
    }

    //un sencillo metodo que muestra los valores de los atributos:
    presentarMateriales(){
        console.log(`Bienvenidos al aula ${this.numero}, la cual tiene capacidad para ${this.capacidad} personas.`);
    }
}

//instanciamos un objeto clase aula:
let unAula =  new Aula(1,20);
//comprobamos en funcionamiento del metodo:
unAula.presentarMateriales();

//la clase musica hereda de clase aula
class Musica extends Aula{
    constructor(numero, capacidad, instrumentos){
        //atributos heredados de aula:
        super(numero,capacidad);
        //atributos propios de la clase musica:
        this.instrumentos = instrumentos;
    }
    //sobreescribimos el metodo para que se adapte a la nueva clase:
    presentarMateriales(){
        console.log(`Bienvenidos al aula de música número ${this.numero}. Hoy presentaremos los materiales necesarios para la clase de ${this.instrumento}, solamente tenemos ${this.capacidad} plazas`);
    }
}

//instanciamos un objeto de la clase musica:
let aulaMusica = new Musica(2,10,"saxofon");
//comprobamos el funcionamiento del metodo:
aulaMusica.presentarMateriales();


//creamos la clase tecnologia que hereda de aula
class Tecnologia extends Aula{
    constructor(numero, capacidad, cantidadOrdenadores){
        //atributos heredados de aula:
        super(numero, capacidad);
        //atributos propios de esta clase:
        this.cantidadOrdenadores = cantidadOrdenadores;
    }

    //sobreescribimos el metodo para que se adapte mejor a la nueva clase:
    presentarMateriales(){
        console.log(`Bienvenidos al aula de tecnología número ${this.numero}. El día de hoy hemos comprador ${this.cantidadOrdenadores} ordenadores adicionales para aprender a programar, en total ahora tenemos ${this.capacidad} estudiantes de capacidad`);
    }
}


//instanciamos un objeto de la clase tecnologia:
let aulaTecno = new Tecnologia(3,30,20);
//comprobamos el funcionamiento del metodo:
aulaTecno.presentarMateriales();


//respondo pregunta teorica:
console.log("La caracteristica de la POO que permite sobreescribir metodos en herencias se llama POLIMORFISMO.");

