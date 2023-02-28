//Código de escape ('\') antes del salto de línea (No recomendado)

var myText = "Este es un texto muy largo que queremos \
              formatear en varias líneas. Un trozo de HTML \
              también sería un buen ejemplo de la necesidad \
              de asignar texto de varias líneas en una variable.";

console.log(myText+"\n");

//Concatenando strings no toma en cuenta el salto de linea

myText = "Este es un texto muy largo que queremos " +
        "formatear en varias líneas. Un trozo de HTML " +
        "también sería un buen ejemplo de la necesidad " +
        "de asignar texto de varias líneas en una variable.";

console.log(myText+"\n");

//ECMAscript 6 (ES6) strings multilínea con  las comillas hacia atrás (`) toma en cuenta el salto de linea
myText = `Este es un texto muy largo que queremos 
formatear en varias líneas. Un trozo de HTML 
también sería un buen ejemplo de la necesidad 
de asignar texto de varias líneas en una variable.`;

console.log(myText);