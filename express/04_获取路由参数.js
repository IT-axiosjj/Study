//  导入express 
const express = require("express");

// 创建应用对象
const app = express();

// 创建路由
app.get('/:id.html', (req, res) => {
  console.log(req.params.id);
  res.setHeader('content-type', 'text/html;charset=utf-8')
  res.end('重庆外语外事学院')
});

// 监听端口
app.listen(3000, () => {
  console.log('服务已启动，端口 3000 监听中...');
})