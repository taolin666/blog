<template>
<div style="height:100%">
  <Header></Header>
  <el-container style="height: calc(100% - .6rem); border: 1px solid #eee">
    <Aside></Aside>
    <el-main style="background:#fff;">
      <el-alert
        title="提示"
        type="warning">
        在苹果手机上使用了-webkit-overflow-scrolling:touch之后，页面偶尔会卡住不动。
      </el-alert>
      <div class="bordermain">
        <div class="container">
          <el-card class="box-card">
            <div class="text item yufa">
            <p style="padding:0;">-webkit-overflow-scrolling</p>
            <p>touch: 使用具有回弹效果的滚动,当手指从触摸屏上移开，内容会继续保持一段时间的滚动效果。继续滚动的速度和持续的时间和滚动手势的强烈程度成正比。同时也会创建一个新的堆栈上下文。</p>
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
    <p>文章参考：https://www.cnblogs.com/hrone/p/10143960.html</p>
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
          <div id="app" style="-webkit-overflow-scrolling: touch;">
              <div style="min-height:101%"></div>
          </div>
                `,
        twoBug: `
        // 方法二
          <div id="app" style="-webkit-overflow-scrolling: touch;">
            <div style="height:calc(100%+1px)"></div>
          </div>
        `
      }
    }
  };
</script>