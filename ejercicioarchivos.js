const fs=require('fs');

fs.readFile('name.txt','utf-8',function(error,data){
    if(error){
        console.log(`ERROR: ${error}`);
    }else{
        var array = data.split(',');
        var info = `${array[1]} \n ${array[2]} \n ${array[3]} \n ${array[4]}`
        fs.appendFile(array[0], info , function(error){
            if(error){
                console.log('No se ha podido crear el archivo');
            }else{
                console.log('Guardado!!!');
            }
        });
    }
});
