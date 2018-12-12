// 向文件中追加内容 
// fs.appendFile(路径， 内容， [编码]， function (err) { ... });
// 指定路径文件不存在，会创建一个新文件 
// 1- 引入 fs模块 
const fs = require('fs'); 

// 追加 ：
fs.appendFile('data.txt','谁还不是小公主',(err)=>{
    console.log('追加成功')
})
fs.appendFile('data.txt','就是只有那个',(err)=>{
    if(err){
        return console.log('追加失败',err)
    }
    console.log('追加成功')
})

// fs.appendFileSync('./date1.txt', '\n简单点，说话的方式简单点', (err) => {
//     if (err) {
//         return console.log('追加失败', err);        
//     }
//     console.log('追加成功'); 
//     console.log(11)
//     return 22;   
// });
// console.log(a)//undefined
// 同步中，如果真有回调函数，不会执行回调函数中的