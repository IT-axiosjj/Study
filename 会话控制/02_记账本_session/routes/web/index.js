// 导入express
const express = require('express');
// 导入moment
const moment = require("moment");
// 导入数据库对象模型
const AccountModel = require('../../models/AccountModel');
// 创建路由对象
const router = express.Router();



// 导入中间件检测登录
const checkLoginMiddleware = require("../../middlewares/checkLoginMiddleware");

// 添加首页路由规则
router.get('/', (req, res) => {
  res.redirect('/account')
})

// 记账本的列表
router.get('/account', checkLoginMiddleware, function (req, res, next) {
  // 获取数据库的账单信息
  // let accounts = db.get('accounts').value();

  AccountModel.find().sort({ time: -1 }).then((data) => {
    // 获取成功的提示
    res.render('list', { accounts: data, moment: moment })
  }).catch((err) => {
    console.log(err);
    res.status(500).send('获取数据库数据失败~~~')
    return;
  })

});

// 添加记录
router.get('/account/create', checkLoginMiddleware, function (req, res, next) {
  res.render('create')
});

// 新增记录
router.post('/account', checkLoginMiddleware, (req, res) => {
  // 获取请求体数据
  // console.log(req.body);
  // // 生成id
  // let id = shortid.generate();
  // // 写入文件
  // db.get('accounts').unshift({ id, ...req.body }).write();

  // 插入数据库
  AccountModel.create({ ...req.body, time: moment(req.body.time).toDate() }).then((data
  ) => {
    // 成功提醒
    res.render('success', { msg: '添加数据成功', url: '/account' })

  }).catch((err) => {
    // 失败提示
    res.status(500).send('添加数据失败~~~');
    console.log(err);
    return;
  })


});

// 删除记录
router.get('/account/:id', checkLoginMiddleware, (req, res) => {
  // 获取params的id参数
  let id = req.params.id;
  // 删除
  // db.get('accounts').remove({ id }).write();
  AccountModel.deleteOne({ _id: id }).then(() => {
    // 提醒
    res.render('success', { msg: '删除成功', url: '/account' })
  }).catch((err) => {
    res.status(500).send('删除失败~~~~')
    return;
  })
})

module.exports = router;
