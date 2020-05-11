<template>
<div style="height:100%">
  <Header></Header>
  <el-container style="height: calc(100% - .6rem); border: 1px solid #eee">
    <Aside></Aside>
    <el-main style="background:#fff;">
      <el-alert
        title="提示"
        type="warning">
        node + express写接口和封装读写文件
      </el-alert>
      <div class="bordermain">
        <div class="container">
          <el-card class="box-card">
            <div class="text item yufa">
              <p>天天叫后端提供接口，现在自己写接口，还有封装读写文件函数</p>
              <pre>
                <code>
                {{oneBug}}
                </code>
              </pre>
            </div>
          </el-card>
          <el-card>
            <p>提示：没有数据库，增删改都是在读写文件生成一个data.json的文件完成</p>
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
          var fs = require('fs')
          var express = require('express');
          var path = require('path')
          var app = express()
          // app.use(express.static(path.join(__dirname, './src/components/HelloWorld.vue')));
          // app.createServer(function(req, res){
          //   console.log(res.send('1111111111111'))
          //   app.get('add',function())
          //   res.send('1111111111111')
          // }).listen('8081')

          app.use( function(req, res, next) {
            res.header('Access-Control-Allow-Origin', req.headers.origin);
            res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
            res.header('Access-Control-Allow-Headers', 'Content-Type');
            res.header('Access-Control-Allow-Credentials','true');
            next();
          })
          app.get('/add', function (req, res) {
            console.log('req.params2', req.query)
            readFileAndWriteFile(path.join(__dirname, './src/data.json'), function(data) {
              let info = JSON.parse(data || [])
              console.log('info', info)
              info.push(req.query)
              fs.writeFile(path.join(__dirname, './src/data.json'), JSON.stringify(info), function(err) {
                if (err) {
                  console.log('err', err)
                }
                res.send('ok')
              })
            })
          })
          app.post('/query', function(req, res) {
            readFileAndWriteFile(path.join(__dirname, './src/data.json'), function(data) {
              let list = JSON.parse(data || [])
              console.log('list', list)
              res.send(list)
            })
          })
          app.listen(8081, () => {console.log('连接8081')})
          function readFileAndWriteFile(path, callback) {
            fs.readFile(path, 'utf-8', (err , data) => {
              if(err) {
                throw err
              }
              // console.log(data)
              callback(data)
            })
          }
                `,
      }
    }
  };
</script>