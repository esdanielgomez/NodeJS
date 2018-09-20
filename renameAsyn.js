const fs = require('fs');
fs.rename('mcucuenca.txt' , 'nodejs.txt' , function(error){
    if(error){
        console.log(`ERROR: ${error}`);
    }
    console.log('El archivo se ha renombrado con exito.');
});