//While
n = 0;
x = 0;
while (n < 3) {
  n ++;
  x += n;
  console.log(x);
}

//Do While
let result = '';
let i = 0;
do {

  i = i + 1;
  result += i;
  console.log(result);
} while (i < 5);

//Break    Finaliza un bucle
result = '';
i = 0;

do {
    i = i + 1;
    result += i;
    console.log(result);

    if(result==="123") //Finaliza el bucle cuando result es 123
        break;

  } while (i < 5);