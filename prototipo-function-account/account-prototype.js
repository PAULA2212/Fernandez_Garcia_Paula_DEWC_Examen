//creamos un prototipo usando la funcion constructora de prototipos:
function CuentaBancaria(nombre, dni, saldo){
    //asignamos atributos:
    this.nombre = nombre;
    this.dni = dni;
    this.saldo = 0 || saldo;
    //este atributo no entrara dentro de los parametros del constructor
    this.numeroCuenta = "ES" + Math.floor(Math.random() * 99999999999999999999).toString().padStart(20, '0');

    //metodo sencillo que muestra el valor de los atributos.
    this.mostrarDatos = function() {
        console.log(`Nombre: ${this.nombre}\n DNI: ${this.dni}\n Numero de cuenta: ${this.numeroCuenta}\n Saldo: ${this.saldo}`);
    }
    
    //metodo que usa monto como parametro de entrada para aumentar la cantidad de saldo y mostrar su valor por pantalla:
    this.realizarIngreso = function(monto) {
        this.saldo += monto;
        console.log(`Ingreso realizado. Nuevo saldo: ${this.saldo}`);
    }
    //este metodo comprueba que el saldo de la cuenta es suficiente y despues de eso permite restar saldo de la cuenta y mostrar su nuevo valor por pantalla:
    this.realizarRetiro = function(monto) {
        if (monto > this.saldo && monto > 0){
            this.saldo -= monto;
            console.log(`Retiro realizado. Nuevo saldo: ${this.saldo}`);
        }
    }
    //este metodo invoca a los metodos anteriores para simular una transferencia bancaria, usando como parametros de entrada otro objeto y un monto
    this.realizarTransferencia = function(cuentaDestino, monto){
        if (monto > 0 && monto < this.saldo){
            cuentaDestino.realizarIngreso(monto);
            this.realizarRetiro(monto);
        console.log(`Transferencia realizada. Nuevo saldo: ${this.saldo}`);
        }
        
        
    }
}

//instancion dos objetos distintos y compruebo el funcionamiento de mostrarDatos():
let cuentaJuan = new CuentaBancaria('Juan Perez', '12345678A', 1000);
cuentaJuan.mostrarDatos();
let cuentaAna = new CuentaBancaria('Ana Gomez', '87654321B', 500);
cuentaAna.mostrarDatos();

//utilizo el metodo realizarTransferencia desde la cuenta de juan hasta la cuenta de Ana:
cuentaJuan.realizarTransferencia(cuentaAna,100);

//compruebo si se modificaron correctamente los datos despues de la transferencia:
cuentaJuan.mostrarDatos();
cuentaAna.mostrarDatos();


