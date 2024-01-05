var express = require('express');
var router = express.Router();

// 导入moment
const moment = require("moment");
// 导入数据库对象模型
const AccountModel = require('../../models/AccountModel');

// 记账本的列表
router.get('/account', function (req, res, next) {
  AccountModel.find().sort({ time: -1 }).then((data) => {
    // 响应成功的提示
    res.json({
      // 响应编号
      code: '0000',
      // 响应的信息
      msg: '读取成功',
      // 响应的数据
      data: data
    })
  }).catch((err) => {
    res.json({
      code: '1001',
      msg: '读取失败',
      data: null
    })
    return;
  })

});

// 新增记录
router.post('/account', (req, res) => {
  // 插入数据库
  AccountModel.create({ ...req.body, time: moment(req.body.time).toDate() }).then((data
  ) => {
    // 成功提醒
    // res.render('success', { msg: '添加数据成功', url: '/account' })
    console.log(data);
    res.json({
      code: '0000',
      msg: '创建成功',
      data: data
    })

  }).catch((err) => {
    // 失败提示
    // res.status(500).send('添加数据失败~~~');
    // console.log(err);
    res.json({
      code: '1002',
      msg: '创建失败',
      data: null
    })
    return;
  })


});

// 删除记录
router.delete('/account/:id', (req, res) => {
  // 获取params的id参数
  let id = req.params.id;
  // 删除
  // db.get('accounts').remove({ id }).write();
  AccountModel.deleteOne({ _id: id }).then(() => {
    // 删除成功提醒
    res.json({
      code: '0000',
      msg: '删除成功',
      data: {}
    })
  }).catch((err) => {
    // 删除失败提醒
    res.json({
      code: '1003',
      msg: '删除失败',
      data: null
    })
    return;
  })
})

// 获取单个账单信息
router.get('/account/:id', (req, res) => {
  // 获取id参数
  let { id } = req.params;
  // 查询数据库
  AccountModel.findById(id).then((data) => {
    res.json({
      code: '0000',
      msg: '读取成功',
      data: data
    })
  }).catch((err) => {
    res.json({
      code: '1004',
      msg: '读取失败',
      data: null
    })
    return;
  })
})

// 更新单个账单信息
router.patch('/account/:id', (req, res) => {
  // 获取id参数值
  let { id } = req.params;
  // 更新数据库
  AccountModel.updateOne({ _id: id }, req.body).then((data) => {
    //  再次查询数据库 获取单条数据
    AccountModel.findById(id).then((data) => {
      res.json({
        code: '0000',
        msg: '更新成功',
        data: data
      }).catch((err) => {
        res.json({
          code: '1004',
          msg: '读取失败',
          data: null
        })
        return;
      })
    }).catch((err) => {
      return;
    })
  })
})

module.exports = router;
