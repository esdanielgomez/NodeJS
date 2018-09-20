const fs = require('fs');
fs.createReadStream('mcucuenca.txt').pipe(fs.createWriteStream('mcucuenca2.txt'));