'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un arrayay
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

  let array = [1];
  let div = 2;

  while(num > 1) {
    if(num % div === 0 ) {
      array.push(div);
      num = num / div;
    } else {
      div++;
    }
  }

  return array;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el arrayay recibido como parámetro
  // Devolver el arrayay ordenado resultante
  // Tu código:

  for(let i = 0; i < array.length - 1; i++) {
    for(let j = 0; j < array.length - 1; j++) {      
      if(array[j] > array[j + 1]) {
        let mayor = array[j];
        let menor = array[j + 1];
        array[j] = menor;
        array[j + 1 ] = mayor;        
      } 
    }
  }    
  return array;
}


function insertionSort(array) {
  
   for (let i = 1; i < array.length; i++) {
    
    const valorActual = array[i];
    let j = i - 1; 
    
    while (j >= 0 && array[j] > valorActual) {
      array[j + 1] = array[j];
      j--;
    }
    
    array[j + 1] = valorActual;
  }

  return array;
  
}


function selectionSort(array) {
  // for (let i = 0; i < array.length; i++) {
  //   for(let j = 1; j < array.length, j++) {
      
  //   }
  // }

}

// console.log(factorear(180));

// bubbleSort([10, -2, -7, 4]);

// insertionSort([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]);
// insertionSort([10, -2, -7, 4]);
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
