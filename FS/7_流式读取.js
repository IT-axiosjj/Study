// 1.引入fs模块
const fs = require('fs')

// 创建读取流对象
const rs = fs.createReadStream('./资料/笑看风云.mp4')

// 3.绑定 data事件 chunk 块儿 大块儿
rs.on('data', chunk => {
  console.log(chunk.length); //65536字节 =>64kb
})

// 4.end 可选事件
rs.on('end', () => {
  console.log('读取完成');
})