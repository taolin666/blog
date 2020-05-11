<template>
<div style="height:100%">
  <Header></Header>
  <el-container style="height: calc(100% - .6rem); border: 1px solid #eee">
    <Aside></Aside>
    <el-main style="background:#fff;">
      <el-alert
        title="提示"
        type="warning">
        用webpack搭建的react项目（从0开始）
      </el-alert>
      <div class="bordermain">
        <div class="container">
          <el-card class="box-card">
            <div class="text item yufa">
            <!-- <p style="padding:0;">1</p> -->
            <p>1.1新建一个firstReact文件夹，cd ./firstReact,</p>
            <p>1.2npm init -y(初始化，生成一个package.json文件)</p>
            <p>1.3mkdir dist(新建dist文件夹)，mkdir src（新建src文件夹）</p>
            <p>1.4 cd ./src， touch index.js ，touch.html ，下次还是手动新增文件吧！！！！</p>
            <p>1.5yarn add webpack webpack-cli(下载webpack和webpack-cli包,直接下载到dependencies里)</p>
            <p>1.6既然是学react那当然要下载react和react-dom的包：yarn add react react-dom这样就可以在index.js里写react啦啦啦啦</p>
            <pre>
              <code>
              {{oneBug}}
              </code>
            </pre>
            <p>1.7这样太麻烦里，还不能热更新，装一下webpack-dev-server：yarn add webpack-dev-server</p>
            <p>1.7-1 现在在package.json里到scripts里加"dev": "webpack-dev-server --open --hot"</p>
            <p>1.7-2 在最外层新建webpack.config.js文件，写入module.exports = {mode: 'development'}</p>
            <p>1.8 装一下html-webpack-plugin：yarn add html-webpack-plugin</p>
            <pre>
              <code>
              {{twoBug}}
              </code>
            </pre>
            <p>1.9现在是真到可以写react，但是像上面那样用creacteElement去做到话就太麻烦里，需要用jsx的形式写</p>
            <p>1.9-1需要装yarn add babel-core babel-loader babel-plugin-transform-runtime babel-preset-env babel-preset-react  babel-preset-stage-0 -D(装在devDependencies里)注意babel-core版本如果是6.X的话，babel-loader就最好是7.X</p>
            <pre>
              <code>
              {{threeBug}}
              </code>
            </pre>
            <p>1.9-2 这样还是会报错，要在外层新建.babelrc文件且要写上下面代码：</p>
            <pre>
              <code>
              {{fourCode}}
              </code>
            </pre>
            <p>2这样就可以写jsx语法了</p>
            <pre>
              <code>
              {{fiveCode}}
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
        // 1引入react和react-dom
          import React from 'react';
          import ReactDOM from 'react-dom';
        //2 用React.createElement(),参数1是标签，参数2标签属性，对象形式，参数3是子节点，比如文本节点或者可以写一个标签
          const htmlH1 = React.createElement('h1', {id: 'reactH1', title: '这是h1的title'}, '我是h1标签')
        //3 ReactDOM渲染虚拟dom参数一是要渲染的对象，参数二渲染到哪个标签里
          ReactDOM(htmlH1, document.getElementById('app'))
                `,
        twoBug: `
          const path = require('path')
          const HtmlWebPackPlugin = require('html-webpack-plugin')

          const htmlwebpack = new HtmlWebPackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
          })
          module.exports = {
            mode: 'development',
            plugins: [
              htmlwebpack
            ],
          }
        `,
        threeBug: `
          module:{
            rules: [
              {
                test: /\.js|jsx$/,
                use: "babel-loader",
                exclude: /node_modules/, // exclude必须去掉node_modules
              }
            ]
          }
        `,
        fourCode: `
          {
            "presets": ["env", "stage-0", "react"],
            "plugins": ["transform-runtime"]
          }
        `,
        fiveCode: `
          // const htmlH1 = React.createElement('h1', {id: 'reactH1', title: '这是h1的title'}, '我是h1标签')
          // 就可以代替上面这样的语法了
          const mydiv = <div>
              我是div
              <p>我是div里面的p标签</p>
              </div>
        `,
      }
    }
  };
</script>