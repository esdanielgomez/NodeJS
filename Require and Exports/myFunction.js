//Primera forma de crear funciones
function saludo(){
    console.log('Hola Microsoft Student UCuenca');
};
module.exports.saludar = saludo();
// Segunda forma de crear funciones
module.exports.saludar2 = function(){
    console.log('Hola de Nuevo Microsoft Student UCuenca');
};