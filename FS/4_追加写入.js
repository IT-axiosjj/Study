// 引入fs模块
const fs = require('fs')

// 调用appendFile
// fs.appendFile('./座右铭.txt', '网络与新媒体', err => {
//   // 判断
//   if (err) {
//     console.log('写入失败~~');
//   }
//   console.log('追加写入成功');
// })

// 同步追加
// fs.appendFileSync('./座右铭.txt', '\r\n小冉同学')

// writeFile 实现追加写入
fs.writeFile('./座右铭.txt', 'love love love', { flag: 'a' }, err => {
  if (err) {
    console.log('写入失败');
    return
  }
  console.log('写入成功');
})
