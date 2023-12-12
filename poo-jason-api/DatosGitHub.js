 //cojo los datos del html indicado:
 let cadena = {
    "login": "PAULA2212",
    "id": 94548552,
    "email": 'paulibfg@gmail.com',
    "public_repos": 10
};

//los convierto en una cadena JSON:
let cadenaJSON = JSON.stringify(cadena);

//Creo la clase que recibe como parametro la cadena JSON
class DatosGitHub{
    constructor(datosJSON){
        //lo convierto en un objeto de javascript:
        this.datos = JSON.parse(datosJSON);
        this.login = this.datos.login;
        this.id = this.datos.id;
        this.email =  this.datos.email;
        this.public_repos = this.datos.public_repos;
    }
    //creo un sencillo metodo que muestra los datos:
    datosRecibidos(){
        console.log(`El Usuario de GitHub ${this.login} tiene un id ${this.id} cuyo correo es ${this.email} y tiene ${this.public_repos} repositorios públicos.`);
        
    }
}
//instanciamos un objeto y comprobamos el funcionamiento del metodo:

let datosGitHubInstancia = new DatosGitHub(cadenaJSON);
datosGitHubInstancia.datosRecibidos();