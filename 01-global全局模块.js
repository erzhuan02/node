// 在浏览中 全局对象是 window  
// 在node中 也有一个全局变量  global  , global中的属性和方法 任何地方都可以直接使用 
// console 
// setInterval();
// setTimeout();
// clearInterval();
// clearTimeout(); 

// __dirname  : 当前文件的绝对路径  
// __filename ： 当前文件全名（文件绝对路径+文件名）

// console.log('嘿嘿');
// setInterval(() => {
//     console.log('呵呵');    
// }, 1000);

console.log('__dirname',__dirname)
console.log('__filename',__filename)
console.log('------',__dirname)
console.log('----',__filename)
setInterval(()=>{
    console.log('heh')
},1000)


