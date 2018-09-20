const fs = require('fs');

fs.appendFile('mcucuenca.txt', 'Microsoft Student UCuenca', function(error){
    if(error){
        console.log('No se ha podido crear el archivo');
    }
});