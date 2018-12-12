// path.basename(path[, ext])	返回文件的最后一部分
// path.dirname(path)	返回路径的目录名 
// path.extname(path)	获取路径的扩展名

const path = require('path');

let str = 'D:\\飞秋文件\\feiq\\Recv Files\\前端-web资料\\15-班级随机点名.html'; 

console.log(path.basename(str));//15-班级随机点名.html
console.log(path.dirname(str));//D:\飞秋文件\feiq\Recv Files\前端-web资料
console.log(path.extname(str));//.html

var temp = "\\abc\\def\\gg\\a.html";
console.log(path.basename(temp,'.html'));//a
console.log(path.dirname(temp));//\abc\def\gg
console.log(path.extname(temp));//.html