// 01.导入 http模块
const http = require("http");
const url = require("url");

//02. 创建服务对象
const server = http.createServer((request, response) => {
  // 解析request.url
  let res = url.parse(request.url, true);
  // 路径
  // let pathname = res.pathname;
  // console.log(pathname);
  // 查询字符串
  let keyword = res.query.keyword;
  console.log(keyword);

  response.end('url')

})

// 03.监听端口，启动服务
server.listen(9000, () => {
  console.log('服务已经启动....');
})