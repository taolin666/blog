<template>
<div style="height:100%">
  <Header></Header>
  <el-container style="height: calc(100% - .6rem); border: 1px solid #eee">
    <Aside></Aside>
    <el-main style="background:#fff;">
      <el-alert
        title="提示"
        type="warning">
        iphoneX安全区域的问题，当手势返回时tab会掉到安全区。
        在修改公司以前的项目中，遇到了vue移动端在iphoneX上底部tab栏被遮挡的问题。在查网上，有很多方法，苹果也给出了开发建议，几乎都试了一圈。
      </el-alert>
      <div class="bordermain">
        <div class="container">
          <el-card class="box-card">
            <div class="text item yufa">
            <p style="padding:0;">方法一</p>
            <p>（这是我最终用的方法，实际应用中，我是在底部加了一个空div，撑起来的，单独给#app加一个padding，在吸附在底部的tab上不是很好用）</p>
            <!-- <p>然后vue -V </p>
            <p>终端显示 bash: vue: command not found</p> -->
            <p style="margin-top:.5rem;padding:0;">方法二</p>
            <p>方法二（我首选这个方法，因为看起来高大上，但是我在我的项目中使用没有生效，不知道为啥，该加的都加了还是不好用！！）</p>
            </div>
          </el-card>
          <pre>
            <code>
            {{oneBug}}
            </code>
          </pre>
          <pre>
            <code>
            {{twoBug}}
            </code>
          </pre>
        </div>
      </div>
    <p>文章参考：https://blog.csdn.net/qq_41314371/article/details/90442293</p>
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
        // 方法一
          @media only screen and (width: 375px) and (min-height: 690px){
            #app {
                padding-bottom: 0.34rem;
            }
          }
                `,
        twoBug: `
        // 方法二
          第一步：新增 viweport-fit 属性，使得页面内容完全覆盖整个窗口：
            <meta name="viewport" content="width=device-width, viewport-fit=cover">
          第二步：页面主体内容限定在安全区域内
            body {
              padding-bottom: constant(safe-area-inset-bottom);
              padding-bottom: env(safe-area-inset-bottom);
            }
          第三步：fixed 元素的适配
            类型一：fixed 完全吸底元素（bottom = 0）
            {
              padding-bottom: constant(safe-area-inset-bottom);
              padding-bottom: env(safe-area-inset-bottom);
            }
          类型二：fixed 非完全吸底元素（bottom ≠ 0），比如 “返回顶部”、“侧边广告” 等
            {
              margin-bottom: constant(safe-area-inset-bottom);
              margin-bottom: env(safe-area-inset-bottom);
            }
        `
      }
    }
  };
</script>