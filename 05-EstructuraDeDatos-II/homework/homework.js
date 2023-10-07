'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 

  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
  this.head = null;
}

function Node(data) {
  this.value = data;
  this.next = null;
}

LinkedList.prototype.add = function(value){
    let nuevoNodo = new Node(value);
    let current = this.head;
    
    if(current === null) {
      this.head = nuevoNodo;
      return nuevoNodo;
    }

    while(current.next !== null) {
      current = current.next;
    }

    current.next = nuevoNodo;
    return nuevoNodo;
}
    

LinkedList.prototype.remove = function() {
            
    if(this.head === null )  {        
        return null;
    }

    let current = this.head; 
        
    if( this.head.next === null) {
        this.head = null;               
        return current.value;
    }
        
    let anterior = null;    
    
    while( current.next !== null ) {        
        anterior = current;
        current = current.next;        
    }   

    anterior.next = null;      
    return current.value;    
}

LinkedList.prototype.search = function(param) {
        
    if(this.head === null) return;
        
    if(typeof param !== 'function') {
        
        if(this.head.value === param) {            
            return this.head.value;
        }
                        
        let current = this.head;

        while(current.next !== null) {                
            current = current.next;        
            if(current.value === param) return current.value;
        }   

        return null;

    } else {

        if(param(this.head.value)) {                        
            return this.head.value;
        }                
        
        let current = this.head;

        while(current.next !== null) {                
            current = current.next;        
            if( param(current.value) ) return current.value;
        }   

        return null;
    }
}

LinkedList.prototype.addOrdenado = function(num) {
        
    if( !num ) return;

    const nuevoNodo = new Node(num);

    if(this.head === null) {
        this.head = nuevoNodo;
        return;
    } else if(num < this.head.value) {
        nuevoNodo.next = this.head;
        this.head = nuevoNodo;    
        return;    
    }

    if( this.head.next === null ) {
        if(num < this.head.value ) {
            nuevoNodo.next = this.head;
            this.head = nuevoNodo;
            return
        } else {
            this.head.next = nuevoNodo;
            return;
        }
    }
    
    if(num >= this.head.value && num <= this.head.next.value) {
        nuevoNodo.next = this.head.next;
        this.head.next = nuevoNodo;
        return;
    }   
    
    let current = this.head.next;
    let anterior = this.head;

    while(current !== null ) {        
        if(num > anterior.value && num < current.value ) {
            nuevoNodo.next = current;
            anterior.next = nuevoNodo;
            return;
        }
        anterior = current;
        current = current.next;
    }

    anterior.next = nuevoNodo;
    
}

// let listaDeNumeros = new LinkedList();

// listaDeNumeros.addOrdenado(20);
// listaDeNumeros.addOrdenado(25);
// listaDeNumeros.addOrdenado(50);
// listaDeNumeros.addOrdenado(25);
// listaDeNumeros.addOrdenado(100);
// listaDeNumeros.addOrdenado(10);
// listaDeNumeros.addOrdenado(2);
// listaDeNumeros.addOrdenado(30);
// listaDeNumeros.addOrdenado(5);

// console.log(listaDeNumeros.head);

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {
    this.table = [];
    this.numBuckets = 35;
}

HashTable.prototype.hash = function(key) {
    let hash = 0;
    for(let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);        
    }       
    return hash % this.numBuckets;
}

HashTable.prototype.set = function(key, valor) { 

    if(typeof key !== 'string') throw new TypeError("Ambos argumentos deben ser números.")

    const indice = this.hash(key);
    
    if (this.table[indice]) {
      for (let i = 0; i < this.table[indice].length; i++) {        
        if (this.table[indice][i][0] === key) {
          this.table[indice][i][1] = valor;
          return;
        }
      }
      // No encontrado, añade un nuevo llave valor
      this.table[indice].push([key, valor]);
    } else {
      this.table[indice] = [];
      this.table[indice].push([key, valor]);
    }
}

HashTable.prototype.get = function(key) {
        
    let indice = this.hash(key);  

    if(this.table[indice]) {        
        let dimension = this.table[indice].length;        
        for(let i = 0; i < dimension; i++) {                        
            if(this.table[indice][i].includes(key)) {                
                return this.table[indice][i][1];
            }
        } 

        return this.table[indice];
    }
        
    return this.table[indice][1];
}

HashTable.prototype.hasKey = function(key) {
    let indice = this.hash(key);  

    if(this.table[indice]) {        
        let dimension = this.table[indice].length;        
        for(let i = 0; i < dimension; i++) {                        
            if(this.table[indice][i].includes(key)) {                
                return true;
            }
        } 

        return false;
    }   
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
