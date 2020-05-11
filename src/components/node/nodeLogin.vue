<template>
<div style="height:100%">
  <Header></Header>
  <el-container style="height: calc(100% - .6rem); border: 1px solid #eee">
    <Aside></Aside>
    <el-main style="background:#fff;">
      <el-alert
        title="提示"
        type="warning">
        建一个json文件存取数据，利用node的读取文件完成登陆注册。
      </el-alert>
      <div class="bordermain">
        <div class="container">
          <el-card class="box-card">
            <div class="text item yufa">
              <p>在根目录简历app文件夹，1，文件下面建data文件夹 2，再建urils.js 3，再建server.js</p>
              <p>2在data文件再建一个data.json和alert.json来当作数据库存取数据</p>
              <p>3在server.js里写登陆和注册接口还有页面的一个渲染接口，不逼逼直接看代码,还有设置里跨域</p>
              <pre>
                <code>
                {{oneBug}}
                </code>
              </pre>
            </div>
          </el-card>
          <el-card>
            <p>4再直接看utils.js里的一些方法： 异步读取文件，异步写入文件，检查token</p>
            <pre>
              <code>
                {{twoCode}}
              </code>
            </pre>
          </el-card>
          <el-card>
            <p>提示：具体详情请看<a href="https://juejin.im/post/5e1fa941e51d451c774dcc18" target="_blank" rel="noopener noreferrer">掘金链接</a></p>
          </el-card>
        </div>
      </div>
    </el-main>
  </el-container>
</div>

</template>
<style scoped>
  .yufa p{
    margin-top: .2rem;
    padding-left: .3rem;
  }
  .container {
    width: 100%;
  }
  .bordermain {
    margin-top: .5rem;
    width: 100%;
    min-height: 2rem;
  }
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }
</style>

<script>
import Aside from '@/comp/aside';
import Header from '@/comp/header';
  export default {
    components: {
      Aside,
      Header
    },
    data() {
      return {
        oneBug: `
          const path = require('path');
          const express = require('express');
          var bodyParser = require('body-parser');
          const app =  express();
          app.use(bodyParser());
          app.use(express.static(path.join(__dirname, '../dist')));
          // const hostname = '172.19.77.247'

          const {readFile, writeFile, updateToken} = require('./utils');
          const {addToken, getToken} = require('./token');

          // 设置跨域
          app.all('*', function(req, res, next) {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Content-Type,token');
            res.header('Access-Control-Allow-Methods', '*');
            res.header('Content-Type', 'application/json;charset=utf-8');
            if (req.method.toUpperCase() === 'OPTIONS') {
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
            console.log('3000端口成功')
          })
                `,
          twoCode: `
          const fs = require('fs');
          const path = require('path');
          const {getToken, addToken} = require('./token')

          const readFile = function(fileUrl, callback) {
            fs.readFile(path.join(__dirname, \`./\${fileUrl}.json\`), 'utf-8', async (err , data) => {
              if(err) {
                throw err
              }
              callback(data)
            })
          const readFileSync = function(fileUrl, callback) {
            fs.readFileSync(path.join(__dirname, \`./\${fileUrl}.json\`), 'utf-8', async (err , data) => {
              if(err) {
                throw err
              }
              callback(data)
            })
          }
          const writeFile = async function(res, info, resMessage) {
            console.log('resMessage', resMessage)
            fs.writeFile(path.join(__dirname, './data/data.json'), JSON.stringify(info), function(err) {
              if (err) {
                console.log('err', err)
              }
              if (resMessage) {
                res.send(resMessage)
              }
            })
          }
          // 检查token是否过期
          const updateToken =  function(res) {
            readFile('data/data', function(data) {
              // 拿到用户信息
              let info = JSON.parse(data)[0] || [];
              // 拿到token =》 字符串&登陆时的时间戳
              let token = JSON.parse(data)[1].token || '';
              // 拿到token前面的字符串
              let beforeToken = token.split('&')[0];
              // 拿到token后面的时间戳
              let beginTime = parseInt(token.split('&')[1] || '');
              let nowTime = new Date().valueOf();
              console.log('beginTime+600', beginTime+1000 * 1800)
              console.log('nowTime', nowTime)
              console.log((beginTime+1000 * 1800) < nowTime)
              if ((beginTime+1000 * 1800) < nowTime) {
                // 登陆半小时了，token失效
                res.send({
                  code: -100,
                  message: '登陆半小时了，token失效了,'
                })
                return;
              } else {
                beforeToken
                let a = [[...info], {token: \`\${beforeToken}&\${nowTime}\`}]
                console.log('a', a)
                writeFile(res, a)
              }
            })
          }
          module.exports = {readFile, writeFile, readFileSync, updateToken}
          `
      }
    }
  };
</script>