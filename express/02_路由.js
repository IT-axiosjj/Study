//  导入express 
const express = require("express");

// 创建应用对象
const app = express();

// 创建路由
app.get('/home', (req, res) => {
  res.end('hello express')
});
app.get('/', (req, res) => {
  res.end('hello ')
});
app.post('/login', (req, res) => {
  res.end('login login ')
});

// 匹配所有方法
app.all('/test', (req, res) => {
  res.end('test ')
});

// 404响应
app.all('*', (req, res) => {
  res.end('404-404-404 ')
});

// 监听端口
app.listen(3000, () => {
  console.log('服务已启动，端口 3000 监听中...');
})