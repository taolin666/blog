<template>
<div style="height:100%">
  <Header></Header>
  <el-container style="height: calc(100% - .6rem); border: 1px solid #eee">
    <Aside></Aside>
    <el-main style="background:#fff;">
      <el-alert
        title="提示"
        type="warning">
        数组的交集，差集，并集
      </el-alert>
      <div class="bordermain">
        <div class="container">
          <el-card class="box-card">
            <div class="text item yufa">
              <h1>通常用两个for循环去完成的，用es6的new Set()就一行代码搞定</h1>
            </div>
          </el-card>
          <pre>
            <code>
            {{oneBug}}
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
  canvas {
    border: 1px solid #f00;
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
        // 数组的交集，并集，差集
        let arr1 = [1,2,3,4,4];
        let arr2 = [3,4,5,6,7];
        // 并集
        let union = Array.from(new Set([...arr1, ...arr2]));
        // 交集
        let jiaoji = Array.from(new Set([...arr1].filter(e => new Set(arr2).has(e))));
        // 差集=》是用哪个数组比较，比较第一个数组与第二个数组的不同，结果是第一个数组中的不同值。
        let difference1 = Array.from(new Set([...arr1].filter(e => !new Set(arr2).has(e))));
        let difference2 = Array.from(new Set([...arr2].filter(e => !new Set(arr1).has(e))));
        console.log(difference1)
        console.log(difference2)
                `,
      }
    },
  };
</script>