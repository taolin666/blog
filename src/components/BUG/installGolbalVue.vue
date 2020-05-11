<template>
<div style="height:100%">
  <Header></Header>
  <el-container style="height: calc(100% - .6rem); border: 1px solid #eee">
    <Aside></Aside>
    <el-main style="background:#fff;">
      <el-alert
        title="提示"
        type="warning">
        mac中全局安装vue路径问题
      </el-alert>
      <div class="bordermain">
        <div class="container">
          <el-card class="box-card">
            <div class="text item yufa">
            <p style="padding:0;">问题:</p>
            <p>sudo npm install -g vue-cli</p>
            <p>然后vue -V </p>
            <p>终端显示 bash: vue: command not found</p>
            <p style="margin-top:.5rem;padding:0;">解决：</p>
            <p>终端输入:vim .bash_profile回车</p>
            <p>输入i之后</p>
            <p>输入</p>
            <p>export PATH="$PATH:(/use/local/bin/vue)"</p>
            <p>然后esc推出编辑，输入</p>
            <p>:wq!</p>
            <p>保存退出，这时再输入vue发现有信息了</p>
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
        
      }
    }
  };
</script>