//Declarar Objetos
var miCarro = new Object();
miCarro.Marca = "Ford";
miCarro.Modelo = "Conquistador";
miCarro.año = 1987;

console.log(miCarro.Marca+" "+miCarro.Modelo+" "+miCarro.año);

var person1 = { 
    Edad : 20,
    Nombre : "Juan",
    Cedula : 19183837    
}

var person2 = { 
    Edad : 25,
    Nombre : "Luis",
    Cedula : 20183837    
}

console.log(person1.Edad+" "+person1.Nombre+" "+person1.Cedula);

//También puedes acceder o establecer las propiedades de los objetos en JavaScript 
//mediante la notación de corchetes

console.log(person1['Edad']+" "+person1['Nombre']+" "+person1['Cedula']);
console.log(miCarro);

// Se crean y asignan cuatro variables de una sola vez,
// separadas por comas
var myObj = new Object(),
    str = 'myString',
    rand = Math.random(),
    person = new Object();

myObj.type                 = 'Sintaxis de puntos';
myObj['fecha de creación'] = 'Cadena con espacios';
myObj[str]                 = 'Valor de cadena';
myObj[rand]                = 'Número aleatorio';
myObj[person1]                 = 'Object';
myObj['']                  = 'Incluso una cadena vacía';

//console.log(myObj)
console.log(myObj.type+" "+myObj['fecha de creación']);

//Crear Objeto con funciones creadoras.

function Car(marca, modelo, año){

    this.Marca = marca;
    this.Modelo = modelo;
    this.Año = año;

}

var myCarro2 = new Car("Ford","Festiva","1999");
console.log(myCarro2);

var myCarro3 = new Car('Mazda', 'Miata', 1990);
console.log(myCarro3)

//Redifinimos la funcion Car para agregar propietario.
function Car(marca, modelo, año, propietario){

    this.Marca = marca;
    this.Modelo = modelo;
    this.Año = año;
    this.Propietario = propietario;

}

myCarro2 = new Car("Ford","Festiva","1999", person1);
console.log(myCarro2);
console.log("Propietario: "+myCarro2.Propietario.Nombre);

myCarro3 = new Car('Mazda', 'Miata', 1990, person2);
console.log(myCarro3)

    //Crear Objetos usando el metodo "Object.create"

// Propiedades y método de encapsulación para Animal (Prototipo)
var Animal = {

    tipo: 'Invertebrado', // Valor predeterminado de las propiedades
    displayType: function() {  // Método que mostrará el tipo de Animal
      console.log(this.tipo);
    }

  };

var Perro = Object.create(Animal);
Perro.Raza = "Dalmata";
Perro.Nombre = "Fipo";
console.log(Perro);
Perro.displayType();

  //Creando un nuevo animal de tipo Pez
var Pez = Object.create(Animal);
Pez.tipo = 'Pez';
Pez.Nombre = "Tiburon";
Pez.displayType();    // Muestra: Fishes
console.log(Pez);

//El siguiente código agrega una propiedad color a todos los objetos del tipo Car
Car.prototype.Color = undefined;
myCarro2.Color = "Rojo";
myCarro3.Color = "Azul";
console.log(myCarro2);
console.log(myCarro3);

