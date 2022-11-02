var int=1; //variable int
var double=0.250; //variable double
var string="Hola Mundo"; //variable string
var bool=true; //variable boleana

console.log(int);
console.log(double);
console.log(string);

//Declaracion de variables
var d,e,f;
var a=1, b= 2, c=3;
var g = a+b, h=c-b;
var i=j=k = "Hola Mundo";

console.log(a+" "+b+" "+c+" "+g+" "+h);
console.log(i+" "+j+" "+k);


//Uso de let

function varTest() {
    var x = 31;
    if (true) {
      var x = 71;  // ¡misma variable!
      console.log(x);  // 71
    }
    console.log(x);  // 71
  }
  
  function letTest() {
    let x = 31;
    if (true) {
      let x = 71;  // variable diferente
      console.log(x);  // 71
    }
    console.log(x);  // 31
  }
varTest();
letTest();


//Uso de cont

const z=20; //Esta es una constante
console.log("Esta es (z) una constante global = "+z);

// z=10; //No pdemos cambiar el valor de z
// const z=10; //No pdemos  declarar nuevamente z