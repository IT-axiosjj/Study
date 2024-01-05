//  导入express 
const express = require("express");

// 创建应用对象
const app = express();

// 创建路由
app.get('/other', (req, res) => {
  // 跳转响应
  // res.redirect('https://www.douyin.com/')

  // 下载响应
  // res.download(__dirname + '/package.json')

  // JSON响应
  // res.json({
  //   name: '冉俊伟',
  //   slodon: '我才是最屌的!!!!'
  // })

  // 响应文件内容
  res.sendFile(__dirname + '/02_form.html')
});

// 监听端口
app.listen(3000, () => {
  console.log('服务已启动，端口 3000 监听中...');
})