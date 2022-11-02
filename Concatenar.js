var num1 = 48;
var num2 = 20;
var text1 = "Hola";
var text2 = "Mundo";

//Forma si vamos a concatenar solo numero:
console.log(""+48+20) // Agregamos ("") para forzar la concatenacion si no se sumara los numeros.

//Usando concat
    //Si al inicio un string
console.log(text1.concat(text2,num1,num2));
console.log("");
    //Usando ("") "".concat
console.log("".concat(text1,text2,num1,num2));    
console.log("".concat(num1,num2));

//Usando template string
console.log(`${text1} ${text2} ${num1} ${num2}`);