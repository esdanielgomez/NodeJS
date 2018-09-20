const fs = require('fs');
fs.unlink('nodejs.txt' , function(error){
    if(error){
        console.log(`ERROR: ${error}`);
    }else{
        console.log('El archivo ha sido eliminado');
    }
});