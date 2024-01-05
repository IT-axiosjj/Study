// 1.导入 fs模块
const fs = require("fs");

// 相对路径参照物：命令行的工作目录
// fs.writeFileSync('./index.html', '相对路径bug')

// 绝对路径 '全局变量' 保存的是：所在文件的所在目录的绝对路径
fs.writeFileSync(__dirname + '/index.html', '绝对路径')