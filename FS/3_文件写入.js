/**
 * 新建一个文件，座右铭.txt，重庆外语外事学院
*/

// 导入fs模块
const fs = require("fs");

// 写入文件
fs.writeFile('./座右铭.txt', '重庆外语外事学院', err => {
  // err写入失败：错误对象 写入成功：null
  if (err) {
    console.log('写入失败');
    return
  }
  console.log('写入成功')
});

// 同步写入
// fs.writeFileSync('./data.txt', 'test')