 let cadena = {
    "login": "PAULA2212",
    "id": 94548552,
    "email": 'paulibfg@gmail.com',
    "public_repos": 10
};

let cadenaJSON = JSON.stringify(cadena);
class DatosGitHub{
    constructor(datosJSON){
        this.datos = JSON.parse(datosJSON);
        this.login = this.datos.login;
        this.id = this.datos.id;
        this.email =  this.datos.email;
        this.public_repos = this.datos.public_repos;
    }

    datosRecibidos(){
        console.log(`El Usuario de GitHub ${this.login} tiene un id ${this.id} cuyo correo es ${this.email} y tiene ${this.public_repos} repositorios públicos.`);
        
    }
}

let datosGitHubInstancia = new DatosGitHub(cadenaJSON);
datosGitHubInstancia.datosRecibidos();