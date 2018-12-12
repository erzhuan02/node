const http = require('http'); //引入http模块 

const server = http.createServer(); //创建服务器

// 绑定事件，监听 处理请求
server.on('request', (req, res) => {
    //req 可以获取请求报文的数据
    // console.log(req.url);
    // console.log(req.method);
    // res 用于设置响应报文的数据  
    // 1-状态行：状态码 状态文本 
    // res.statusCode = 404;
    // res.statusMessage = 'aaa';
    // res.statusMessage = '没找到';
    // 2-响应头： 
    // res.setHeader('aaa', 'bbb');
    // header('content-type', 'text/html;charset=utf-8')
    // res.setHeader('content-type', 'text/css;charset=utf-8');
    res.setHeader('content-type', 'text/html;charset=utf-8');
    // res.writeHead(404, 'bbb', {
    //     ccc: 'ddd',
    //     'content-type': 'text/html;charset=utf-8'
    // });
    // 响应头
    // res.setHeader('content-type', 'text/css;charset=utf-8');
    // 3-响应主体：    
    res.write(111);
    res.end('<h1>总有刁民想朕</h1>');
});

//设置端口，开启服务器 
server.listen(9999, () => console.log('http://localhost:9999 服务器已启动'));