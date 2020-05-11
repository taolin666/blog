<template>
<div style="height:100%">
  <Header></Header>
  <el-container style="height: calc(100% - .6rem); border: 1px solid #eee">
    <Aside></Aside>
    <el-main style="background:#fff;">
      <el-alert
        title="提示"
        type="warning">
        工具类
      </el-alert>
      <div class="bordermain">
        <div class="container">
          <el-card class="box-card">
            <div class="text item yufa">
            <p>1时间格式转化</p>
            <pre>
              <code>
              {{oneBug}}
              </code>
            </pre>
            <p>2地址栏获取参数</p>
            <pre>
              <code>
              {{twoBug}}
              </code>
            </pre>
            <p>3vue项目中对axios对封装</p>
            <pre>
              <code>
              {{threeBug}}
              </code>
            </pre>
            <p>4node读写文件api的封装</p>
            <pre>
              <code>
              {{fourBug}}
              </code>
            </pre>
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
        formateDate(time = +new Date(), typeOne = '-', typeTwo=':'){
          if(!time)return '';
          let date = new Date(time);
          function p(addZero) {
              return addZero>=10?addZero: '0' + addZero
          }
          return date.getFullYear()+typeOne+p((date.getMonth()+1))+typeOne+p(date.getDate())+' '+p(date.getHours())+typeTwo+p(date.getMinutes())+typeTwo+p(date.getSeconds());
        },
                `,
        twoBug: `
        // 直接getRequest().token,拿token
          function getRequest() {  
            var url = location.search; //获取url中"?"符后的字串  
            var theRequest = new Object(); 
            var strs 
            if (url.indexOf("?") != -1) {  
              var str = url.substr(1);  
              strs = str.split("&");  
              for(var i = 0; i < strs.length; i ++) {
                theRequest[strs[i].split("=")[0]]=decodeURI(strs[i].split("=")[1]);  
              }
            }
            return theRequest;  
          }
        `,
        threeBug: `
        // axios封装按照个人需求再修改
          import axios from 'axios'
          import qs from 'qs';
          const Base_URL = '这里填写基础url'
          axios.defaults.baseURL = Base_URL
          // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
          axios.interceptors.request.use(function (config) {

          // 在发送请求之前做些什么 这里的处理是对公司特定的一个接口
          if (config.method === 'post' && config.url.indexOf('v2/plan/uploadCard') === -1) {
            config.data = qs.stringify(config.data)
          }
          return config;
          }, function (error) {
          // 对请求错误做些什么
          return Promise.reject(error);
          });
          axios.interceptors.response.use(function (response) {
            // 对响应数据做点什么
            if (response.data) {
              return response.data
            }
            return response;
          }, function (error) {
            // 对响应错误做点什么
            return Promise.reject(error);
          });
          export default axios
        `,
        fourBug: `
        // node封装的读写文件
        // 只读取文件的话，直接用变量接受一下 var a = readFileAndWriteFile(path),
        // 要写文件的话，readFileAndWriteFile(path, function(data) {fs.writeFile()})
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