//  导入express 
const express = require("express");

// 创建应用对象
const app = express();

// 创建路由
app.get('/response', (req, res) => {

  // express响应
  // res.status(500)
  // res.set('aaa', 'bbb')
  // res.send('你好 Express')

  res.status(500).set('abc', 'abc').send('express响应连写')


});

// 监听端口
app.listen(3000, () => {
  console.log('服务已启动，端口 3000 监听中...');
})