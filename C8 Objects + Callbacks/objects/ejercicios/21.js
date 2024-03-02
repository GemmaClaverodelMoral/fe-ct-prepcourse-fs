  // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
  // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
  // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
  // Luego debes restar del precio total del producto ese valor de descuento.
  // Retornar el precio final.
function agregarMetodoCalculoDescuento(objetoProducto) {
  // Tu código:
  objetoProducto.calcularPrecioDescuento = 
    function calculoPrecioDescuento(){     
    
    return this.precio - this.precio * this.porcentajeDeDescuento
    }
  return objetoProducto
}
const storeItem = {
  precio: 80,
  porcentajeDeDescuento: 0.1,
};
agregarMetodoCalculoDescuento(storeItem)
console.log(storeItem)
console.log(storeItem.calcularPrecioDescuento)
module.exports = agregarMetodoCalculoDescuento;