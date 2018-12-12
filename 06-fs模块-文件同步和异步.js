const fs = require('fs');

// 异步读取文件 
// console.log(11111);

// fs.readFile('./data.txt', 'utf-8', (err, data) => {
//     console.log(data);    
// });

// console.log(2222);


//同步读取文件  
console.log(11111);

// let str = fs.readFileSync('./data.txt', 'utf-8');
console.log(fs.readFileSync('./data.txt', 'utf-8'));


console.log(2222);


