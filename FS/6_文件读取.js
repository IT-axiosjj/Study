// 1.引入fs模块
const fs = require('fs')

// 异步读取
// fs.readFile('./点名单.txt', (err, data) => {
//   if (err) {
//     console.log('读取失败');
//     return
//   }
//   console.log('读取成功', data.toString());

// })

// 同步读取
let data = fs.readFileSync('./点名单.txt')
console.log(data.toString());