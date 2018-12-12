// 1-引入http模块
const http = require('http');

// 2-创建服务器
const server = http.createServer();
// 3-绑定事件监听请求，处理请求
server.on('request', (req, res) => {
    //获取 req 请求报文的数据  
    // req.url  请求地址 
    // req.method 请求方式 
    // req.headers 请求头
    console.log(req.url);
    console.log(req.method);   
    console.log(req.headers);
    
    
    res.end('aaa');
});
// 4-设置端口，开启服务器 
server.listen('9999', () => console.log('http://localhost:9999 服务器已启动') );