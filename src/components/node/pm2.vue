<template>
<div style="height:100%">
  <Header></Header>
  <el-container style="height: calc(100% - .6rem); border: 1px solid #eee">
    <Aside></Aside>
    <el-main style="background:#fff;">
      <el-alert
        title="提示"
        type="warning">
        pm2的使用
      </el-alert>
      <div class="bordermain">
        <div class="container">
          <el-card class="box-card">
            <div class="text item yufa">
              <p>1下载 npm install -g pm2 用yarn也可以</p>
              <p>2在根目录下建pm2.json文件并写入下面这样的配置(我这是简单的配置)</p>
              <pre>
                <code>
                {{oneBug}}
                </code>
              </pre>
            </div>
          </el-card>
          <el-card>
            <p>1 启动命令： pm2 start pm2.json</p>
            <p>2 重启命令 pm2 restart app.js</p>
            <p>3 删除pm2配置的项目 pm2 delete my-server</p>
            <p>4 查看日志 pm2 log</p>
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
          {
            "name": "my-server",
            "script": "node app/server.js",
            "error_file": "./logs/error.log",
            "out_file": "./logs/out.log",
            "pid_file": "./logs/pid_file.pid",
            "log_date_format": "YYYY-MM-DD HH:mm:ss",
            "combine_logs": true,
            "merge_logs": true,
            "env": {
              "NODE_ENV": "production"
            }
          }
                `,
      }
    }
  };
</script>