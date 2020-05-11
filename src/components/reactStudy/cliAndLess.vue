<template>
<div style="height:100%">
  <Header></Header>
  <el-container style="height: calc(100% - .6rem); border: 1px solid #eee">
    <Aside></Aside>
    <el-main style="background:#fff;">
      <el-alert
        title="提示"
        type="warning">
        脚手架搭建的react项目和安装less
      </el-alert>
      <div class="bordermain">
        <div class="container">
          <el-card class="box-card">
            <div class="text item yufa">
            <!-- <p style="padding:0;">1</p> -->
            <p>1.1yarn add --global create-react-app</p>
            <p>1.2mkdir react-bzhan</p>
            <p>1.3cd react-bzhan</p>
            <p>1.4 create-react-app bzhan</p>
            <p>1.5cd bzhan</p>
            <p>1.6yarn</p>
            <p>1.7npm start</p>
            <pre>
              <code>
              {{oneBug}}
              </code>
            </pre>
            <p>2安装less，必须暴露webpack配置并修改。yarn eject</p>
            <p>2.1yarn add less less-loader</p>
            <p>2.2找到config文件里的webpack.config.js文件</p>
            <p><img src="https://img2018.cnblogs.com/i-beta/1829715/201911/1829715-20191119125357403-1055623252.png" alt=""></p>
            <p><img src="https://img2018.cnblogs.com/i-beta/1829715/201911/1829715-20191119125513800-1291192644.png" alt=""></p>
            <p><img src="https://img2018.cnblogs.com/i-beta/1829715/201911/1829715-20191119125042007-633977540.png" alt=""></p>
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
        // 1按照上面步骤就可以搭建出react，
                `,
        twoBug: `
          {
            test: lessRegex,
            exclude: cssModuleRegex,
            use: getStyleLoaders({
              importLoaders: 1,
              sourceMap: isEnvProduction && shouldUseSourceMap,
            }),
            sideEffects: true,
          },
          {
            test: lessModuleRegex,
            use: getStyleLoaders({
              importLoaders: 1,
              sourceMap: isEnvProduction && shouldUseSourceMap,
              modules: true,
              getLocalIdent: getCSSModuleLocalIdent,
            }),
          },
        `,
      }
    }
  };
</script>