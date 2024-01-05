// 1.导入http模块
const http = require("http");
const fs = require("fs");

// 2.创建服务
const server = http.createServer((request, response) => {
  // 读取文件内容
  let html = fs.readFileSync(__dirname + '/09_table.html')
  response.end(html)
})

// 3.监听端口
server.listen(9000, () => {
  console.log('服务已经启动...');
})