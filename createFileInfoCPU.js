const os = require('os');
const fs = require('fs');
let cpu = os.cpus();
fs.appendFile('infoCPU.txt', JSON.stringify(cpu), function(error){
    if(error){
        console.log('No se ha podido crear el archivo');
    }
});