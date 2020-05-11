<template>
<div style="height:100%">
  <Header></Header>
  <el-container style="height: calc(100% - .6rem); border: 1px solid #eee">
    <Aside></Aside>
    <el-main style="background:#fff;">
      <el-alert
        title="提示"
        type="warning">
        使用canvas实现刮奖功能
      </el-alert>
      <div class="bordermain">
        <div class="container">
          <el-card class="box-card">
            <div class="text item yufa">
              <h1>刮奖区</h1>
              <canvas ref="myCanvas" @mousedown="mousedownHandle" @mousemove="mousemoveHandle" @mouseover="mouseoverHandle"></canvas>
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
        let c = document.getElementById('myCanvas');
        let ctx = c.getContext('2d');
        let arr = ['一等奖','二等奖','三等奖','没中奖'];
        let rmdArr = arr[Math.floor(Math.random() * arr.length)]
        ctx.font = '25px serif';
        ctx.textAlign = 'center';
        ctx.textBaseAlign = 'middle';
        ctx.fillStyle = 'red';
        ctx.fillText(rmdArr, c.width/2, c.height/2);
        
        // 使用灰色的矩形覆盖中奖信息
        let imgUrl = c.toDataURL('image/png', 1)
        c.style.background = \`url('\${imgUrl}')\`;
        ctx.clearRect(0,0,c.width,c.height);
        ctx.fillStyle = '#ddd';
        ctx.fillRect(0,0,c.width,c.height)

        // 刮
        var flag = false;
        c.addEventListener('mousedown', function() {
          flag = true;
          ctx.globalCompositeOperation = 'destination-out';
        })
        c.addEventListener('mousemove', function(e) {
          if (flag) {
            var x = e.offsetX,y=e.offsetY;
            ctx.fillStyle='red';
            ctx.fillRect(x,y,30,30);
          }
        })
        c.addEventListener('mouseover', function() {
          flag = false
        })
                `,
        flag: false,
        ctx: ''
      }
    },
    mounted() {
      let c = this.$refs.myCanvas;
      this.ctx = c.getContext('2d');
      let arr = ['一等奖','二等奖','三等奖','没中奖'];
      let rmdArr = arr[Math.floor(Math.random() * arr.length)]
      this.ctx.font = '25px serif';
      this.ctx.textAlign = 'center';
      this.ctx.textBaseAlign = 'middle';
      this.ctx.fillStyle = 'red';
      this.ctx.fillText(rmdArr, c.width/2, c.height/2);
      // 使用灰色的矩形覆盖中奖信息
      let imgUrl = c.toDataURL('image/png', 1)
      c.style.background = `url('${imgUrl}')`;
      this.ctx.clearRect(0,0,c.width,c.height);
      this.ctx.fillStyle = '#ddd';
      
      this.ctx.fillRect(0,0,c.width,c.height)
    },
    methods: {
      mousedownHandle() {
        this.flag = true;
        this.ctx.globalCompositeOperation = 'destination-out';
      },
      mousemoveHandle(e) {
        var that = this
        if (this.flag) {
          this.ctx.fillRect(e.offsetX,e.offsetY,30,30);
        }
      },
      mouseoverHandle() {
        this.flag = false;
      }
    }
  };
</script>