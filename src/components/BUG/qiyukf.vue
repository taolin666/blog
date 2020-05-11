<template>
<div style="height:100%">
  <Header></Header>
  <el-container style="height: calc(100% - .6rem); border: 1px solid #eee">
    <Aside></Aside>
    <el-main style="background:#fff;">
      <el-alert
        title="提示"
        type="warning">
        网易七鱼在线客服开发遇到的bug
      </el-alert>
      <div class="bordermain">
        <div class="container">
          <el-card class="box-card">
            <div class="text item yufa">
            <p style="padding:0;">问题:</p>
            <p>1第一次调用时就没有加载成功，只有点第二次才能进入，</p>
            <p>2h5的网易其余没有全屏的配置，应产品需求要求全屏</p>
            <!-- <p>然后vue -V </p>
            <p>终端显示 bash: vue: command not found</p> -->
            <p style="margin-top:.5rem;padding:0;">解决：</p>
            <p>1在进入到vue项目时就调用一次，然后关掉网易七鱼，这样就不会有第一次没有加载成功的问题了</p>
            <p>2在f12中增加height为100%的权限。这样解决第二个bug</p>
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
        // 解决问题1
          （1.1在index.html就执行这一段）:
                var isSdkReady = false
                try {
                  (function (w, d, n, a, j) {
                    w[n] = w[n] || function () {
                      (w[n].a = w[n].a || []).push(arguments);
                    };
                    j = d.createElement('script');
                    j.async = true;
                    j.src ='https://qiyukf.com/script/9bb805a60618411121ccf322be1b233a.js?hidden=1';
                    d.body.appendChild(j);
                  })(window, document, 'ysf');
                  ysf('onready', function () {
                    isSdkReady = true;
                  })
                  if (isSdkReady) {
                    // 关闭七鱼时重点
                    ysf('logoff')
                  } else {
                    console.log('没有加载成功')
                  }
                } catch(err) {
                  console.log(err)
                }
        // 1.2然后在你需要的页面里也加上面这段代码，但是要把
                ysf('logoff')改成
                ysf('open', {
                  templateId:在官网配置的模版id（number）
                });
                `,
        twoBug: `
        // 解决问题2（在app.vue里加这段css，加权重。就能到头部了）
          #YSF-PANEL-MOBILE > #YSF-IFRAME-LAYER.ysf-chat-mobile-layeropen {
            height: 100% !important;
          }
        `
      }
    }
  };
</script>