

// function factorial(x) {    
//     if( x === 0 || x === 1 ) return 1;
//     else if(x < 0 ) return 0;
//     return x * factorial(x - 1);
// };

// console.log(factorial(5));

function Stack() {
    this.array = [];        
};

Stack.prototype.agregar = function(data) {
    this.array.push(data);
}

Stack.prototype.despilar = function(){
    this.array.pop();
}

let stack = new Stack();
stack.agregar('Plato1');
stack.agregar('Plato2');
console.log(stack);