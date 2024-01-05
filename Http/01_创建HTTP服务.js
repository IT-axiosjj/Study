// 01.导入 http模块
const http = require("http");

//02. 创建服务对象
const server = http.createServer((request, response) => {
  // response.end('Hello chong-qing-wai-yu-wai-shi-xuw-yuan')//设置响应体
  response.setHeader('content-type', 'text/html;charset=utf-8')
  response.end('重外')
})

// 03.监听端口，启动服务
server.listen(9000, () => {
  console.log('服务已经启动....');
})