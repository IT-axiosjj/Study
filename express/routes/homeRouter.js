const express = require("express");

// 创建路由对象
const router = express.Router()

// 创建路由
router.get('/home', (req, res) => {
  res.send('前台主页')
});
router.get('/search', (req, res) => {
  res.send('内容搜索')
});


// 暴露
module.exports = router;