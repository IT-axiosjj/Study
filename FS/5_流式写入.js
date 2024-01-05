/**
 * 点名单.txt
 */

// 1.导入fs
const fs = require('fs')

// 2.创建写入流对象
const ws = fs.createWriteStream('./点名单.txt')

// 3.write
ws.write('小周\r\n')
ws.write('小冉\r\n')
ws.write('小邓\r\n')