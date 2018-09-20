// Importamos el módulo request
// Consumir la API de Geolocalización 

const request = require('request');
const argv = require('yargs').argv;

let direccion = argv.direccion;
let url = `http://maps.googleapis.com/maps/api/geocode/json?address=${direccion}`;

/*request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});*/

/*request({
    url: url,
    json: true
},(error, response,body)=>{
    console.log(body);
});*/ // Función si sucede un error o también para obtener el resultado

// Obtener la latitud y la longitud en una variable

request({
    url: url,
    json: true
},(error, response,body)=>{
    if(error){
        console.log('Servicio no dispoible');
    }else if(body.status === "ZERO_RESULTS"){
        console.log('No hay datos a mostrar');
    } else if(body.status === "OK"){
        console.log(JSON.stringify(body, undefined, 1)); //1 Grado de Indentación
        console.log(JSON.stringify(body.results[0].formatted_address));//JSONViwer Guia
        //Obtener la latitud y la longitud
        console.log(JSON.stringify(body.results[0].geometry.location.lat));
        console.log(JSON.stringify(body.results[0].geometry.location.lng));
    }
});