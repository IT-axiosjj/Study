//  导入express 
const express = require("express");
const homeRouter = require("./routes/homeRouter");
const adminRouter = require("./routes/adminRouter");


// 创建应用对象
const app = express();

// 设置
app.use(homeRouter)
app.use(adminRouter)


app.get('*', (req, res) => {
  res.send('404 Not Found')
});

// 监听端口
app.listen(3000, () => {
  console.log('服务已启动，端口 3000 监听中...');
})