// 导入 express
const express = require("express");

// 创建应用对象
const app = express();

// 声明中间件
app.use((req, res, next) => {
  // 检测请求头中的referer是否为127.0.01
  // 获取referer
  let referer = req.get('referer')
  if (referer) {
    // 实例化
    let url = new URL(referer)
    // 获取hostname
    let hostname = url.hostname;
    console.log(hostname);
    // 判断
    if (hostname !== '127.0.0.1') {
      // 响应404
      res.status(404).send('<h1>404 Not Found</h1>')
      return;
    }
  }
  next();
})

// 设置静态资源中间件
app.use(express.static(__dirname + '/public'))

// 监听端口
app.listen(3000, () => {
  console.log('服务已启动，端口 3000 正在监听中....');
})