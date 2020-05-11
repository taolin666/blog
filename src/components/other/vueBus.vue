<template>
<div style="height:100%">
  <Header></Header>
  <el-container style="height: calc(100% - .6rem); border: 1px solid #eee">
    <Aside></Aside>
    <el-main style="background:#fff;">
      <div class="container">
        <h1 >vueBus的使用总结</h1>
        <p class="mt50">1安装：npm install vue-bus</p>
        <p class="mt50">2在main.js中引入vue-bus:</p>
        <p class="p4">2-1import Vue from 'vue';</p>
        <p class="p4">2-2import VueBus from 'vue-bus';</p>
        <p class="p4">2-3Vue.use(VueBus);</p>
        <p class="mt50">3在组件中使用：</p>
        <p class="p4">3-1A组件触发事件：this.$bus.emit("parameterName",params)；</p>
        <p class="p4">3-2B组件接收事件：this.$bus.on("parameterName",(value) =>{console.log(value)});</p>
        <p class="p4">3-3组件销毁时解除事件绑定：destroyed:function(){this.$bus.off("parameterName")}</p>
        
        <div class="tip">
          <el-alert
          title="提示"
          type="warning">
          <img src="../../assets/images/careful.png" alt="">
          b组件接受事件时应该要用箭头函数，不然里面获取不到外面的this，或者在外面var that = this，在里面用that
        </el-alert>
        </div>
      </div>
    </el-main>
  </el-container>
</div>

</template>


<script>
import Aside from '../../comp/aside';
import Header from '../../comp/header';
  export default {
    components: {
      Aside,
      Header
    },
    data() {
      return {
        
      }
    },
    methods: {
      toDetail() {
        
      },
    }
  };
</script>
<style scoped>
  .container {
    /* font-size: .38rem; */
    color: #000;
  }
  .tc {
    text-align: center;
  }
  .mt50{
    margin-top: .5rem;
  }
  .p4{
    padding-left: 1rem;
  }
  .tid4{
    text-indent: 2rem;
  }
  .tip{
    margin-top: .5rem;
    padding: .5rem;
    min-height: 2rem;
    text-align: center;
  }
  .tip img {
    width: 0.44rem;
    height: 0.46rem;
    margin-right: .19rem;
    border-radius: 50%;
    vertical-align: middle;
  }
</style>