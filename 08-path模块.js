// 在不同操作系统中，路径分隔符 也不一样 
// window  \
// 其他操作系统  /  
// 我们之间用  字符串拼接的话， 不能实现操作系统之间兼容 ， 
// 为了解决这个问题 node 提供 path模块 

// 引入path模块 
const path = require('path');

// path.join();  根据不同的操作系统拼接处不同的路径分隔符 ， 以实现兼容 ；
console.log(path.join(__dirname, 'data', './page', '\aa.txt'));//E:\陈转\11阶段 Node\02\04-代码.1\data\page\aa.txt
console.log(path.join(__dirname, '../../', 'bb.html'));//E:\陈转\11阶段 Node\bb.html
console.log(path.join("/abc","\def","../", "./index.html"));//\abc\index.html

