const fs = require('fs');
fs.appendFile('nodejs.txt' , '\nUniversidad de Cuenca' , function(error){
    if(error){
        console.log(`ERROR: ${error}`);
    }
    console.log('Se ha agregado la informacion');
});