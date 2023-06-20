//Le pedimos al usuario los datos por medio de un prompt y los asignamos a variables
var primerNumero = parseFloat(prompt("Ingresa tu primer número, por favor:"));
var segundoNumero = parseFloat(prompt("Ingresa tu segundo número, por favor:"));
var tercerNumero = parseFloat(prompt("Ingresa tu tercer número, por favor:"));

//También podemos utilizar parseInt si solicitamos que los numeros solo sean enteros

//Arreglo con nuestros numeros y decimos que los ordene con el metodo sort

var numeros = [ primerNumero, segundoNumero, tercerNumero];
//menor a mayor
var MenorAMayor = numeros.sort(function( a , b ){
    return a - b;//comparamos los numeros para ordenarlos de forma ascendente
});


//mayor a menor
var MayorAMenor = [...numeros].sort(function( a , b ){//Se hace una compia del array para que no afecte el segundo ordenamiento
    return b - a; //comparando los numeros para ordenarlos en forma descendente.
});

if(primerNumero === segundoNumero && segundoNumero === tercerNumero){
    console.log(alert("Los números son iguales"));//Para comprobar si son iguales
}

console.log(alert("Tu set de numeros ordenados de menor a mayor: " + MenorAMayor.join(", "))); //imprimir el orden menor a mayor

console.log(alert("Tu set de numeros ordenados de mayor a menor: " + MayorAMenor.join(", ")));//imprimir el orden mayor a menor


console.log(alert("Si te aparece NaN fue que introdujo un numero no valido como: '-  2', 'dosmil' Intentelo de nuevo sin espacios y solo en digitos numericos Ej.  '-2', '20'"));//Actualizar  con elementos de validación más adelante con elementod de una cadena o establecer un limite de caracteres 



