// 1.导入http模块
const http = require("http");

// 2.创建服务
const server = http.createServer((request, response) => {
  // 1.设置响应状态码
  // response.statusCode = 203;

  // 2.响应状态的描述
  // response.statusMessage = '5a408'

  // 3.响应头
  // response.setHeader('myHeader', 'test test test')
  // response.setHeader('myHeader', ['a', 'b', 'c'])

  // 4.响应体的设置
  response.write('love')

  response.end('response')//设置响应体

})

// 3.监听端口
server.listen(9000, () => {
  console.log('服务已启动....');
})