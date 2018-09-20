const fs=require('fs');
fs.readFile('mcucuenca.txt','utf-8',function(error,data){
    if(error){
        console.log(`ERROR: ${error}`);
    }else{
        console.log(data);
    }
});