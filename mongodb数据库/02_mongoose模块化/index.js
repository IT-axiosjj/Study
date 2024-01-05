// 导入db文件
const db = require("./db/db");
// 导入mongoose
const mongoose = require("mongoose");
// 导入BookModel
const BookModel = require("./models/BookModel");

// 调用函数
db(() => {
  //7. 新增
  BookModel.create({
    name: '西游记',
    author: '吴承恩',
    price: 19.9
  }).then((data) => {
    // 插入成功
    console.log(data);
    //8. 关闭数据库连接 (项目运行过程中, 不会添加该代码)
    mongoose.disconnect();
  }).catch((err) => {
    // 插入失败
    console.log(err);
  })
}, () => {
  console.log('连接数据库失败');
})






