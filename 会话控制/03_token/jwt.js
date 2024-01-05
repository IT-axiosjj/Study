//  导入
const jwt = require("jsonwebtoken");

// 创建（生成）token

// let token = jwt.sign(用户数据，加密字符串，配置对象)
// let token = jwt.sign({
//   username: '5a408'
// }, 'cqwywsxy', {
//   expiresIn: 60, //单位秒
// })

// console.log(token);

let t = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IjVhNDA4IiwiaWF0IjoxNzA0NDM4NjMzLCJleHAiOjE3MDQ0Mzg2OTN9.cgt0bWxS8HCLplaj1Wszb669sUB_QfUvgDJzKcPI71I'

// 校验
jwt.verify(t, 'cqwywsxy', (err, data) => {
  if (err) {
    console.log('校验失败');
    return
  }
  console.log(data);
})