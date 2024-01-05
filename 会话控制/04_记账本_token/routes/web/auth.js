var express = require('express');
// 导入用户模型
const UserModel = require('../../models/UserModel');
var router = express.Router();
const md5 = require("md5");

// 注册
router.get('/reg', (req, res) => {
  // 响应HTML内容
  res.render('reg')
})

// 注册用户
router.post('/reg', (req, res) => {
  // 获取请求体的数据
  UserModel.create({ ...req.body, password: md5(req.body.password) }).then((data) => {
    res.render('success', { msg: '注册成功', url: '/login' })
  }).catch((err) => {
    res.status(500).send('注册失败');
    return;
  })
})

// 登录页面
router.get('/login', (req, res) => {
  // 响应HTML内容
  res.render('login')
})

// 登录操作
router.post('/login', (req, res) => {
  //获取用户名和密码
  let { username, password } = req.body;
  //查询数据库
  UserModel.findOne({ username: username, password: md5(password) }).then((data) => {
    // 判断data
    if (!data) {
      return res.send('账号或密码错误')
    }

    // 写入session
    req.session.username = data.username;
    req.session._id = data._id
    // 登录成功响应
    res.render('success', { msg: '登录成功', url: '/account' })

  }).catch((err) => {
    res.status(500).send('登录失败')
    return;
  })
})

// 退出登录
router.post('/logout', (req, res) => {
  // 销毁session
  req.session.destroy(() => {
    res.render('success', { msg: '退出登录', url: 'login' })
  })
})

module.exports = router;
