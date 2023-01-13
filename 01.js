/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function soloNumeros(array) {
  // La funcion llamada 'soloNumeros' recibe como argumento un arreglo de enteros y strings llamado 'array'.
  // Debe devolver un arreglo con solo los enteros.
  // Ej: 
  // soloNumeros([1, 'Henry', 2]) debe retornar [1, 2]

  // Tu código aca:function  soloNumeros ( matriz )  {                                                                                                                                  var resultado = [];
for (var i = 0; i < matriz.length; i++) {
if (typeof matriz[i] === 'number') {
resultado.push(matriz[i]);
        }
    }
return resultado;
}

console.log(soloNumeros([1, 'Henry', 2])); // [1, 2]

}

// No modifiques nada debajo de esta linea //


module.exports = soloNumeros
