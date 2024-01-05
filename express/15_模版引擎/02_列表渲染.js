const ejs = require("ejs");
const fs = require("fs");

const xiyou = ['唐僧', '猴子', '猪', '沙和尚']

// ejs实现
// let result = ejs.render(`
// <ul>
// <% xiyou.forEach(item =>{ %>
//   <li><%= item%></li>
//   <% })%>
// </ul>
// `, { xiyou })

// 分离
let html = fs.readFileSync('./02_西游.html').toString()
let result = ejs.render(html, { xiyou })

console.log(result);