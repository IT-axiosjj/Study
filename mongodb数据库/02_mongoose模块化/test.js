// 导入db
const db = require("./db/db");
// MovieModel
const MovieModel = require("./models/MovieModel");

// 调用函数
db(() => {
  // 电影模型对象
  MovieModel.create({ name: '海王', director: '小冉' }).then((err) => {
    console.log(err);
    return
  }).catch((data) => {
    console.log(data);
  })
}, () => {
  console.log('连接失败');
})