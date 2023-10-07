function saludar(saludo) {
    return function(nombre) {
        console.log(saludo + ' ' + nombre);
    }
};


// saludar('Hola')('Matti');
// saludar()
// let saludarHola = saludar('Holisss');

// saludarHola('Raul');
// saludarHola('Messi');


function crearContador() {
    let count = 0;
    return function() {
        count++;
        return count;
    }
}

let contador1 = crearContador();
// console.log(contador1());
// console.log(contador1());
// console.log(contador1());
// console.log(contador1());

let contador2 = crearContador();
// console.log(contador2());
// console.log(contador2());
// console.log(contador2());
// console.log(contador2());


// let crearFuncion = function(){
//     let arreglo = [];

//     for(let i = 0; i < 3; i++) {
//         arreglo.push(() => {console.log(i)})
//     }
//     return arreglo;
// }

// let arr = crearFuncion();

// arr[0]();
// arr[1]();
// arr[2]();

persona = {
    nombre: 'Camilo',
    apellido: 'Contreras'
}

let logNombre = function(arg1, arg2) {
    console.log(arg1+ ' ' + this.nombre + ' '+ arg2);
}

logNombre.apply(persona, ['Hola', ', como estas']);











