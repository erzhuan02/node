//  fs模块用于 操作文件的  
//  global 是全局模块，在任何地方都可以使用  
//  fs 模块 不是全局模块， 不能直接使用， 需要先引入再使用；
const fs = require('fs')
// 读文件 
// fs.readFile(路径，[编码], function (err, data) { 
//  err ： 错误对象 ， 读取失败是，存放错误信息的  
//  data:  读取成功时，读取内容 
// });
// fs.readFile('路径'[,编码],(err,data){
//     err : 错误对象，读取失败，存放错误数据的
//     data : 读取成功时，读取内容
// })
// fs.readFile('data.txt1',(err,data) => {
//     console.log(err)
//     // console.log(data.toString())//燃烧我的卡路里
//     // console.log(data)//<Buffer e7 87 83 e7 83 a7 e6 88 91 e7 9a 84 e5 8d a1 e8 b7 af e9 87 8c>

// })


// fs.readFile读取文件 会得到要给butter对象，是一个二进制存储数据一个数组， 
// buffer转成字符串 toString(); 
fs.readFile('./data.txt',(e,d)=>{
    if(e){
        console.log('读取失败',err)
        return;  
    }
    console.log(1,d,d.toString())


})

// fs.readFile('./data.txt', (err, data) => {
//     if (err) {
//         console.log('读取失败', err);        
//         return;
//     }
//     console.log(data.toString());    
// })

// fs.readFile('./data.txt', 'utf-8', (err, data) => {
//     if (err) {
//         return console.log('读取失败', err);
//     }
//     console.log(data);    
// })
fs.readFile('./data.txt','UTF-8',(err,data)=>{
    if(err){
        return console.log('读取失败',err)
    }
    console.log(2,data)
})
fs.writeFile('data.txt','闲看庭前花开花落，漫随天外云卷云舒',(err) => {
    if(err){
        return console.log('写入失败')
    }
    console.log('3.写入成功')
})
fs.writeFile('data.txt','为你疯狂，为你着迷，为你闹心',(err) => {
    if(err){
        return console.log('写入失败')
    }
    console.log('4.写入成功')
})
