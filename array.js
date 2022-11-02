//Crear array
let frutas = ["pera","manzana", "cambur","patilla"];
console.log(frutas[0]);

//acceder al ultimo elemento
console.log(frutas[frutas.length-1],"\n");

//recorrer arrays
frutas.forEach(function(elemento,index,array){
    //console.log(array[index]);
    console.log(elemento, index);
})

//añadir elemento al array

let nuevoTamaño = frutas.push("naranja"); //Devuelve el nuevo tamaño
console.log('\nNuevo Elemento: ',frutas[nuevoTamaño-1]);

//eliminar ultimo elementos al array
let elementoEliminado = frutas.pop(); //Devuelve el elemento eliminado
console.log('Elemento eliminado:',elementoEliminado);
console.log('Ultimo elemento actual:',frutas[frutas.length-1]);

//eliminar primer elementos al array
elementoEliminado = frutas.shift(); //Devuelve el elemento eliminado
console.log('\nElemento eliminado:',elementoEliminado);
console.log('Primer elemento actual:',frutas[0]);


//Concatenar con otro array
let masFrutas = ["mandarina", "mango", "lechoza", "Jobo"];
frutas = frutas.concat(masFrutas);
frutas.forEach(function(elemento,index,array){
    //console.log(array[index]);
    console.log(elemento, index);
})



//Encontrar el índice de un elemento del Array
let pos = frutas.indexOf("mango");
console.log("La fruta",frutas[pos],"esta en la ubicación",pos);

//Eliminar un único elemento mediante su posición
elementoEliminado = frutas.splice(pos,1); //Devuelve un array con los elementos eliminados
console.log(elementoEliminado);

//Copiar un Array
let copiaDeFrutas = frutas.slice();

//console.clear();

//Array asociativos
let carro = new Array();

/*
//declaracion 1 
carro["color"] = "rojo";
carro["marca"] = "Ford";
carro["año"] = "1992";
*/
//Declaracion 2
carro = {color:"rojo",marca:"Ford",año:1987};
console.log(carro["color"],carro["marca"],carro["año"]);
