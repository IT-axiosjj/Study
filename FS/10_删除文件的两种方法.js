// 1.引入fs模块
const fs = require("fs");

// 2.调用unlink方法  unlinkSync
// fs.unlink('./座右铭.txt', err => {
//   if (err) {
//     console.log('操作失败');
//     return
//   }
//   console.log('操作成功');
// })

// 3.调用rm方法 rmSync
fs.rm('./座右铭.txt', err => {
  if (err) {
    console.log('操作失败');
    return
  }
  console.log('操作成功');
})