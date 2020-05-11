<template>
<div style="height:100%">
  <Header></Header>
  <el-container style="height: calc(100% - .6rem); border: 1px solid #eee">
    <Aside></Aside>
    <el-main style="background:#fff;">
      <el-alert
        title="提示"
        type="warning">
        nodeJS搭建静态服务器
      </el-alert>
      <div class="bordermain">
        <div class="container">
          <el-card class="box-card">
            <div class="text item yufa">
              <p>背景：由于公司单个的.html文件偏多，每次完成后无法在手机上看到效果，导致在PC上完美的展示，移到手机上打开就炸了。</p>
              <p>解决：用node搭建静态服务器，在手机上也能访问自己写的代码</p>
              <pre>
                <code>
                {{oneBug}}
                </code>
              </pre>
            </div>
          </el-card>
          <el-card style="margin:10px 0;">
            <div>
              <pre>
                <code>
                <img src="../../assets/images/nodeImg.png" alt="">
                </code>
              </pre>
            </div>
          </el-card>
          <el-card>
            <p>提示：1必须在同一网络 2 hostname为自己的ip  3代码中的static是自己建的文件夹把写好的项目放到里面就行了</p>
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