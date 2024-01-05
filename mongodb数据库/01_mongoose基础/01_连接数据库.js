// 1.安装mongoose
// 2.导入mongoose
const mongoose = require("mongoose");

// 3.连接mongodb服务                         数据库名称
mongoose.connect('mongodb://127.0.0.1:27017/test')

// 4.设置回调
// 设置连接成功的回调
mongoose.connection.on('open', () => {
  console.log('连接成功');
})

// 设置连接错误的回调
mongoose.connection.once('error', () => {
  console.log('连接失败');
})

// 设置连接关闭的回调
mongoose.connection.on('close', () => {
  console.log('连接关闭');
})

// 关闭mongodb连接
setTimeout(() => {
  mongoose.disconnect();
}, 2000);