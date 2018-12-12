const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, './data.txt'), 'utf-8', (err, data) => {
    console.log(data);    
});