'use strict';

function BinarioADecimal(num) {
   
   let resultado = 0;
   let j = 0;
    
   for(let i = num.length - 1; i >= 0 ; i--) {        
      if(num[i] === '1') {            
         resultado += Math.pow(2, j);            
         j++
      } else {
         j++
      }
   }

   return resultado;

   // num = num.split('').reverse();
   // let resultado = 0;
   
   // for(let i = 0; i < num.length; i++) {
   //    resultado += Math.pow(2, i) * num[i];      
   // }

   // return resultado;
}

function DecimalABinario(num) {

   let binario = '';

   while ( num > 0 ) {
      const residuo = num % 2;
      binario = residuo.toString() + binario;
      num = Math.floor(num / 2);
   }

   return binario;
   // return num.toString(2);
}


module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
