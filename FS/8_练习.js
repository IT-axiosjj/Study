/**
 * 需求：
 * 复制[资料]文件夹下的 --- 笑看风云.MP4
 */

const fs = require("fs");
// 方式一
// 读取文件内容
// let data = fs.readFileSync('./资料/笑看风云.mp4')
// // 写入文件
// fs.writeFileSync('./资料/笑看风云-2.mp4', data)

// 方式二 流式操作
// 创建读取对象
const rs = fs.createReadStream('./资料/笑看风云.mp4')
// 创建写入流对象
const ws = fs.createWriteStream('./资料/笑看风云-3.mp4')

// 绑定data事件
rs.on('data', chunk => {
  ws.write(chunk)
})
// 简写
// rs.pipe(ws)

// 计算占用内存大小
rs.on('end', () => {
  console.log(process.memoryUsage());
})