'use strict';

// import { Queue } from "../../04-EstructuraDeDatos-I/homework/homework";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
   this.value = value;
   this.right = null;
   this.left = null;
}

BinarySearchTree.prototype.size = function() {
   
   let counter = 1;

   if(this.right) counter += this.right.size();
   if(this.left) counter += this.left.size();

   return counter;

   // if(!this.left && !this.right) {
   //    return 1;
   // }

   // if(this.left && !this.right ) {

   //    return 1 + this.left.size();  

   // } else if(!this.left && this.right ) {

   //    return 1 + this.right.size();

   // }   

   return 1 + this.left.size() + this.right.size(); 
}

BinarySearchTree.prototype.insert = function(value) {
   
   if(value < this.value ) {
      if(this.left) {
         this.left.insert(value);
      } else {
         this.left = new BinarySearchTree(value);
         return value;
      }
   } else {
      if(this.right) {
         this.right.insert(value);
      } else {
         this.right = new BinarySearchTree(value);
         return value;
      }
   }
}

BinarySearchTree.prototype.contains = function(value) {
   
   if(this.value === value) {
      return true;
   } 

   if(value > this.value ) {
      if(!this.right) return false;
      else return this.right.contains(value);
   }

   if(value < this.value) {
      if(!this.left) return false;
      else return this.left.contains(value);
   }
   
}
// - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
BinarySearchTree.prototype.depthFirstForEach = function(cb, tipo) {
   
   // pre-order nodo - izq - der   

   if(tipo === 'in-order' || tipo === undefined) {

      if(this.left && this.left.depthFirstForEach(cb, tipo));
      cb(this.value);
      if(this.right && this.right.depthFirstForEach(cb, tipo));  

   } 

   if(tipo === 'pre-order') {

      cb(this.value);
      if(this.left && this.left.depthFirstForEach(cb, tipo));
      if(this.right && this.right.depthFirstForEach(cb, tipo));
      
   }
   
   if(tipo === 'post-order') {
      
      if(this.left && this.left.depthFirstForEach(cb, tipo));
      if(this.right && this.right.depthFirstForEach(cb, tipo));
      cb(this.value);
   }
}
// - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
BinarySearchTree.prototype.breadthFirstForEach = function(cb, value = []) {
   
   if(this.left !== null) value.push(this.left);
   if(this.right !== null) value.push(this.right);
   cb(this.value);

   if(value.length > 0 ) value.shift().breadthFirstForEach(cb, value);

}

let arbol = new BinarySearchTree(40);

arbol.insert(20);
arbol.insert(12);
arbol.insert(22);

console.log(arbol.contains(12));
console.log(arbol.size());

// console.log(arbol.size());
// console.log(arbol);


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
