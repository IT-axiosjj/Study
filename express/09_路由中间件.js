//  导入express 
const express = require("express");


// 创建应用对象
const app = express();

// 路由中间件
let checkCodeMiddleware = (req, res, next) => {
  // 判断URL中是否code参数等于521
  if (req.query.code === '521') {
    next();
  } else {
    res.send('code错误')
  }
}


// 创建路由
app.get('/home', (req, res) => {
  res.send('前台主页')
});
app.get('/admin', checkCodeMiddleware, (req, res) => {
  res.send('后台主页')
});
app.get('/setting', checkCodeMiddleware, (req, res) => {
  res.send('后台设置')
});
app.get('*', (req, res) => {
  res.send('404 Not Found')
});

// 监听端口
app.listen(3000, () => {
  console.log('服务已启动，端口 3000 监听中...');
})