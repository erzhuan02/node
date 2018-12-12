const fs = require('fs');

//重命名 
fs.rename('./date2', 'aabb.txt', (err) => {
    console.log('重命名成功')
 });

//删除 
fs.unlink('aabbcc.txt',(err)=>{
    console.log('删除')

})
// fs.unlink('aabbcc.txt', (err) => { });