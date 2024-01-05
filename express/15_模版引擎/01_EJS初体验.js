

// 导入ejs
const ejs = require("ejs");
const fs = require("fs");

// 字符串
let china = '中国'
let weather = '今天很冷~'

// 声明变量
let str = fs.readFileSync('./01_htmel.html').toString()

// 使用ejs渲染
let result = ejs.render(str, { china, weather })
console.log(result);