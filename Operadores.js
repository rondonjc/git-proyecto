//Operadores de Asignacion.
var num1 = 43; //Operador de asignacion =
num1 += 2 //Operador Asignación de adición num1 = 45
console.log(num1);
num1 -= 3 //Operador Asignación de resta  num1 = 42
console.log(num1);
num1 *= 2 //Operador Asignación de multiplicacion  num1 = 84
console.log(num1);
num1 /= 2 //Operador Asignación de division  num1 = 42
console.log(num1);
num1 %= 5 //Operador Asignación de residuo  num1 = 2
console.log(num1);
num1 **= 2 //Operador Asignación de exponenciación num1 = 4
console.log(num1);

//Operadores Arigmeticos
var num3, num2 = 2;
//Suma, resta, division, multiplicacion
num3 = num1+num2;
num3 = num1-num2;
num3 = num1*num2;
num3 = num1/num2;

//Operador Binario Residuo %
num3 = num1%num2;
console.log(num3); //Residuo es 0

//Operadores unarios. Agrega uno a su operando. Si se usa como operador prefijo (++x), 
//devuelve el valor de su operando después de agregar uno; si se usa como operador 
//sufijo (x++), devuelve el valor de su operando antes de agregar uno.

//Incremento ++
console.log("++");
console.log(++num3);
console.log(num3++);

//Decremento --
console.log("--");
console.log(--num3);
console.log(num3--);

//Negación unaria (-). Operador unario. Devuelve la negación de su operando.
console.log(-3);

//Positivo unario (+). Operador unario. Intenta convertir el operando en un número, si aún no lo es.
num3=+"3";
console.log(num3);

num3=+true; //Devuelve 1
console.log(num3);

//Operador de exponenciación (**) Calcula la base a la potencia de exponente, es decir, base**exponente
num3=2**10; //Devuelve 8
console.log(num3);

num3=10**-1//Devuelve 0.1
console.log(num3);

//Operadores de Comparación
    //Igual (==)

num1 = 10;
num2 = "10";
num3 = 15;
var num4 = 10;

console.log(num1 == num2); //Verdadero o True
console.log(num1 == num3); //Falso

    //No es igual (!=)

console.log(num1 != num3); //Verdadero
console.log(num1 != num2); //Falso

    //Estrictamente igual (===) Devuelve true si los operandos son iguales y del mismo tipo.
var text1 = "10";
console.log(num1 === num4); //Verdadero
console.log(num1 === num2); //Falso

    //Desigualdad estricta (!==) Devuelve true si los operandos son del mismo tipo pero no iguales, 
    //o son de diferente tipo.

console.log(num1 !== num3); //verdadero Los numeros son de distinto valor
console.log(num1 !== num2); //verdadero Los numeros son de distinto tipo
console.log(num1 !== num4); //falso  Los numeros tienen el mismo valor y el mismo tipo

    //Mayor que (>)
console.log(num3 > num1); //Verdadero

    //Mayor o igual que (>=)
console.log(num1 >= num2); //Verdadero

    //Menor que (<)
console.log(num1 < num3); //Verdadero

    //Menor o igual que (<=)
console.log(num1 <= num3); //Verdadero