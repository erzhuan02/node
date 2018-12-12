// 根据不同的请求 做出不同的响应 
// 判断req.url 属性的值，返回对应的内容 
const http = require('http');

const server = http.createServer(); //创建服务器 

server.on('request', (req, res) => {
    // res.write(req.url);
    console.log(req.url);
    res.setHeader('content-type', 'text/html;charset=utf-8');
    //根据不同的req.url返回不同的响应 
    if (req.url.startsWith('/index') || req.url == '/') {
        res.end('你访问了首页');
    } else if (req.url.startsWith('/list')) {
        res.end('你访问了列表页');
    } else if (req.url.startsWith('/login')) {
        res.end('你访问了登录页');
    } else {
        res.end('404-页面未找到');
    }
    // res.end('ok');
})

server.listen(9999, () => console.log('http://localhost:9999 服务器已启动')); //开启服务器 

