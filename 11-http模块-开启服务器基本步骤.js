// http 模块  
// 用于处理http请求模块   
// 在node中没有现成的服务器，需要用代码去创建服务器， 我们可以使用http模块来创建服务器 
// 开启服务器基本步骤 

// 1-引入http模块
const http = require('http');
// 2-创建服务器 
const server = http.createServer(); 

// 3-绑定事件处理请求
server.on('request', function (req, res) {
    console.log('已监听到有请求发送过来了');
    // req 是请求报文对象
    //  req 用于获取 请求报文信息的 
    // res 是响应报文对象 
    //  res 用于设置响应报文数据
    
    //处理请求
    res.write('aaa');
    res.end();//告诉浏览器服务器响应结束 
})

// 4-设置端口，开启服务器 
server.listen(9999, () => { console.log('服务器已启动'); });