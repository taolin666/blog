<template>
<div style="height:100%">
  <Header></Header>
  <el-container style="height: calc(100% - .6rem); border: 1px solid #eee">
    <Aside></Aside>
    <el-main style="background:#fff;">
      <div class="bordermain">
        <div class="container">
          <el-card class="box-card">
            <div class="text item yufa">
              <p>链接：<a href="https://juejin.im/post/5e2fb311f265da3e4244eb4d" target="_blank" rel="noopener noreferrer">计算机组成原理</a></p>
              <p>链接：<a href="https://juejin.im/post/5e51febde51d4526c932b390" target="_blank" rel="noopener noreferrer">计算机网络知识</a></p>
              <p>链接：<a href="https://juejin.im/user/58bbac26ac502e006b02ce97" target="_blank" rel="noopener noreferrer">领扣刷题up主</a></p>
              <!-- <pre>
                <code>
                {{oneBug}}
                </code>
              </pre> -->
            </div>
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
  .yufa p a {
    display: inline-block;
    color: yellowgreen;
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
          var http = require('http');
          var fs = require('fs');
          var url = require('url');
          var path = require('path');
          var hostname = '10.127.53.204';//你自己的ip
          var port = 3456; //端口号可能有被占用的可能，
          // 思路 ：
          // 1获取你的静态文件（css,html,js）路径，
          // 2利用fs模块读取静态文件展示
          var servers = http.createServer(function(req, res) {
            // 1.1将路径转对象
            var mainUrl = url.parse(req.url);
            // 1.2获取静态跟路径
            var baseUrl = path.join(__dirname, 'static')
            // 1.3做判断当是/时应转/index
            if (mainUrl.pathname === '/') {
              mainUrl.pathname += '/index.html'
            }
            // 1.4获取到路径
            var filepath = path.join(baseUrl, mainUrl.pathname)
            // 2.1读取文件 tips:读取文件的参数分别是
            // 第一个参数是文件路径,第二个参数是二进制的意思
            fs.readFile(filepath, 'binary', function(err, data) {
              if (err) {
                throw err
              } else {
                res.write(data, 'binary');
                res.end()
              }
            })
          })
          servers.listen(port, hostname, function() {
            console.log('地址：' +'http://'+hostname+':'+port)
          })
                `,
      }
    }
  };
</script>