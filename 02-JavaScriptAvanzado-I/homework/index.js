var contenedor = function() {
    let caja = [];

    return function(item) {
        caja.push(item);
        return caja;
    }
}

const miCaja = contenedor();

