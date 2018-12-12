// fs 写文件方法
// fs.writeFile(路径, 内容， [编码]， function(err) { }); 
// 注意点：
//  写入内容会覆盖掉之前的内容 
// 1-引入fs模块 
const fs = require('fs')
fs.writeFile('data.txt','我自横刀向天去',(err)=>{
    if(err){
        return console.log(err)
    }
    console.log('写入成功')
})


// 2-写文件  
// let a = fs.writeFile('./date1.txt', '飞流直下三千尺', (err) => {
//     if (err) {
//         return console.log('写入失败', err);        
//     }
//     console.log('写入成功');    
// });
// console.log(a)//undefined