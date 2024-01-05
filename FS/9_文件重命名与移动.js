// 1.引入fs模块
const fs = require("fs");

// 2.文件重命名
// fs.rename('./点名单.txt', './408点名单.txt', err => {
//   if (err) {
//     console.log('操作失败');
//     return
//   }
//   console.log('操作成功');
// })

// 3.文件移动
fs.rename('./408点名单.txt', './资料/408点名单.txt', err => {
  if (err) {
    console.log('操作失败');
    return
  }
  console.log('操作成功');
})