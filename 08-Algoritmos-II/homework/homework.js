'use strict'
// No cambies los nombres de las funciones.

// Implementar el método conocido como quickSort para ordenar de menor a mayor
// el array recibido como parámetro
// Devolver el array ordenado resultante
// Tu código:
function quickSort(array) {

  if( array.length <= 1 ) return array;
    
  let pivot = array[0];
        
  let mayores = [];
  let menores = [];
    
  for(let i = 1; i < array.length; i++) {
    if(array[i] < pivot) {
      menores.push(array[i]);
    } else {
      mayores.push(array[i]);
    }
  }
  
  return quickSort(menores).concat(pivot).concat(quickSort(mayores));  
}

// console.log(quickSort([4, 3, 6, 1, 8, 6]));

// Implementar el método conocido como mergeSort para ordenar de menor a mayor
// el array recibido como parámetro
// Devolver el array ordenado resultante
// Tu código:

//okey probemos ahora
function mergeSort(array) {
    
  if(array.length <= 1) return array;
  
  let half = Math.floor(array.length / 2);
  
  let part1 = array.slice(0, half);
  let part2 = array.slice(half);

  let newArr = [];

  part1 = mergeSort(part1);
  part2 = mergeSort(part2);

  while(part1.length && part2.length) {
    part1[0] < part2[0] ? newArr.push(part1.shift()) : newArr.push(part2.shift());
  }

  return newArr = newArr.concat(part1, part2);
}

console.log(mergeSort([4, 10, 6, 14, 2, 1, 8, 5]));

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
