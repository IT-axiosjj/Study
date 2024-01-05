// 1.导入 fs模块
const fs = require("fs");

// 2.读取FS文件夹
const files = fs.readdirSync('FS')

// 3.遍历数组
files.forEach(item => {
  // console.log(item);
  // 拆分文件名
  let data = item.split('_')
  let [num, name] = data
  // console.log(data);
  // 判断
  if (Number(num) < 10) {
    num = num.replace(/^0+/, '')
    console.log(num);
  }

  // 创建新的文件名
  let newName = num + '_' + name
  // 重命名
  fs.renameSync(`FS/${item}`, `FS/${newName}`)
})