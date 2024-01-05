// 导入express 
const express = require("express");
const bodyParser = require("body-parser");

// 创建应用
const app = express();

// 解析JSON格式的请求体的中间件
const jsonParser = bodyParser.json()

// 解析querystring格式请求体的中间件
const urlencodeParser = bodyParser.urlencoded({ extended: false })

// 创建路由规则
app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/12_form.html')
  // res.send('表单页面')
})

app.post('/login', urlencodeParser, (req, res) => {
  // 获取用户名和密码
  console.log(req.body);
  res.send('表单数据')
})

app.listen(3000, () => {
  console.log('服务已启动.....');
})