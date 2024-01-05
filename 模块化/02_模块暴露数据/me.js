function tiemo() {
  console.log('模块化初体验....');
}

function xijiao() {
  console.log('洗脚....');
}

// 暴露数据-方法一
// module.exports = {
//   tiemo,
//   xijiao
// }


// 暴露数据-方法二
exports.tiemo = tiemo;
exports.xijiao = xijiao;