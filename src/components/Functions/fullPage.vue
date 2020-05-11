<template>
<div style="height:100%">
  <Header></Header>
  <el-container style="height: calc(100% - .6rem); border: 1px solid #eee">
    <Aside></Aside>
    <el-main style="background:#fff;">
      <el-alert
        title="提示"
        type="warning">
        利用fullPage插件实现页面滚动效果
      </el-alert>
      <div class="bordermain">
        <div class="container">
          <el-card class="box-card">
            <div class="text item yufa">
            <p style="margin-top:.5rem;padding:0;"></p>
            <p>3看代码没明白的话，直接看<a href="http://fullpage.81hu.com/" target="_blank">官网文档</a></p>
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
        twoBug: `
        // js
          $(document).ready(function() {
            $('#fullpage').fullpage({
              slidesNavigation: true,
              loopHorizontal: true,
              touchSensitivity: 15,//在移动设备中滑动页面的敏感性，默认为5最高100，越大越难滑动
              controlArrows: false,//定义是否通过箭头来控制slide,默认true
              resize : true,//字体是否随窗口缩放而缩放，默认false
              sectionsColor : ['#ccc', '#fff', 'pink', 'green'],//为每个section设置background-color属性
              //events
              // 离开这个页面当前页的index和下个页的nextIndex，和方向
              onLeave: function(index, nextIndex, direction){
                console.log(index, nextIndex, direction)
              },
              afterLoad: function(anchorLink, index){
                console.log(anchorLink, index)
              },
              afterRender: function(){
                // 第一次加载
                console.log('afterRender')
              },
              afterResize: function(){
                console.log('afterResize')
              },
              // 左右slide滑动事件
              // 滑动到时事件
              afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
                console.log(anchorLink, index, slideAnchor, slideIndex)
              },
              // 滑动离开事件
              onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
                console.log(anchorLink, index, slideIndex, direction, nextSlideIndex)
              },
            });
          });
        `,
        oneBug:`
        // 1要引入fullpage.min.css再jquery.min.js最后再引入jquery.fullpage.js
        // 2html
        <div id="fullpage">
          <div class="section active">Some section1</div>
          <div class="section">
              <!-- Some section2 -->
            <div class="slide"> Slide 1 </div>
            <div class="slide"> Slide 2 </div>
            <div class="slide"> Slide 3 </div>
            <div class="slide"> Slide 4 </div>
          </div>
          <div class="section">Some section3</div>
          <div class="section">Some section4</div>
        </div>
        `
      }
    },
  };
</script>