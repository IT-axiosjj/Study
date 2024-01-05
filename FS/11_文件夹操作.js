// 1.引入fs模块
const fs = require("fs");

// 2.创建文件夹
// fs.mkdir('./文件夹创建test', err => {
//   if (err) {
//     console.log('创建失败');
//     return
//   }
//   console.log('创建成功');
// })

// 3.递归创建
// fs.mkdir('./parent/child/grand', { recursive: true }, err => {
//   if (err) {
//     console.log('创建失败');
//     return
//   }
//   console.log('创建成功');
// })

// 4.读取文件夹
// fs.readdir('./资料', (err, data) => {
//   if (err) {
//     console.log('操作失败');
//     return
//   }
//   console.log('操作成功', data);
// })

// 5.删除文件夹
// fs.rmdir('./文件夹创建test', err => {
//   if (err) {
//     console.log('操作失败');
//     return
//   }
//   console.log('操作成功');
// })

// 6.递归删除 不推荐使用
// fs.rmdir('./parent', { recursive: true }, err => {
//   if (err) {
//     console.log('操作失败');
//     return
//   }
//   console.log('操作成功');
// })

// 6-1 建议使用
fs.rm('./parent', { recursive: true }, err => {
  if (err) {
    console.log('操作失败');
    return
  }
  console.log('操作成功');
})