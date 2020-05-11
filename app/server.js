const path = require('path');
const express = require('express');
var bodyParser = require('body-parser');
const url = require("url");
const app =  express();
app.use(bodyParser());
app.use(express.static(path.join(__dirname, '../dist')));
// const hostname = '172.19.77.247'

const {readFile, writeFile, updateToken, writeFileHandle} = require('./utils');
const {addToken, getToken} = require('./token');

// 设置跨域
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type,token');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  if (req.method.toUpperCase() === `OPTIONS`) {
    res.sendStatus(200);
    return;
  } else {
    next();
  }
});
app.use('*', function(req, res, next) {
  console.log('111')
  next()
})

// 获取页面alert的数据接口
app.get('/baseCss', async function(req, res, next) {
  // 先检查token是否过期
  await updateToken(res);
  console.log('req.path', req.path);
  readFile('data/alert', function(data) {
    let info = JSON.parse(data || {})
    console.log('data/alert', info)
    res.send({
      code: 0,
      message: info
    })
  })
})
app.get('/location', async function(req, res, next) {
  var params = url.parse(req.url, true).query;
  await updateToken(res);
  
  readFile('data/location', function(data) {
    let info = JSON.parse(data || [])
    // console.log('data/localion', info)
    info.push({location: params.location, phone: params.phone})
    writeFileHandle(res,'data/location.json', info, { code: 0, message: '获取地址成功' })
  })
})

// 注册接口
app.post('/regist', function(req, res) {
  readFile('data/data', function(data) {
    let info = JSON.parse(data)[0] || [];
    let dbToken = JSON.parse(data)[1] || {};
    // regist-1 判断这个号码是否已经注册过
    if (info.some(item => item.tel === req.body.tel)) {
      res.send({
        code: -1,
        message: '此号码已经注册过了'
      })
      return;
    }
    // regist-2 给要注册的账号数据加一条id
    let id = info.length + 1;
    req.body.id = id;
    info.push(req.body);
    dbToken.token = '';
    // 写入数据库
    let newData = new Array(2)
    newData[0] = info;
    newData[1] = dbToken;
    writeFile(res, newData, { code: 0, message: '注册成功' })
  })
})

// 登陆接口
app.post('/login', function(req, res) {
  readFile('data/data', async function(data) {
    let info = JSON.parse(data)[0] || [];
    let dbToken = JSON.parse(data)[1] || {};
    // 判断这个号码是否已经注册过
    let oneInfo = info.find(item => item.tel == req.body.tel)
    console.log('req.body.tel', typeof req.body.tel)
    console.log('info', typeof info[0].tel)
    console.log('oneInfo', oneInfo)
    // login-1 判断数据库有没有这个手机号吗
    if (!oneInfo) {
      res.send({
        code: -1,
        message: '此号码没有注册，请先注册'
      })
      return;
    }
    // login-2 判断这个号码在数据库的密码是否和客户输入的密码一致
    if (oneInfo.pass !== req.body.pass) {
      res.send({
        code: -2,
        message: '密码错误，请输入正确的密码'
      })
      return;
    }
    // login-3 账号和密码输入正确了,更新这个账号的token
    // token的规则：13个小写字母或数字的随机数  +  & +  当前时间戳
    let token = Math.random().toString(16).slice(2) + '&' + new Date().valueOf()
    dbToken.token = token;
    for(let i=0;i<info.length;i++) {
      let item = info[i];
      if (item.tel === req.body.tel && item.pass === req.body.pass) {
        item.token = token;
      }
    }
    let newData = new Array(2);
    newData[0] = info;
    newData[1] = dbToken;
    // login-4 写入数据库
    writeFile(res, newData, { code: 0, message: '登陆成功', token })
  })
})





app.listen(3000, function() {
  console.log('8012端口成功')
})