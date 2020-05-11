<template>
<div style="height:100%">
  <Header></Header>
  <el-container style="height: calc(100% - .6rem); border: 1px solid #eee">
    <Aside></Aside>
    <el-main style="background:#fff;">
      <el-alert
        title="提示"
        type="warning">
        此篇的原文是 <el-link type="info" :underline="false">阮一峰的flex</el-link>
      </el-alert>
      <el-card class="box-card">
        <div class="text item yufa">
          <p>1.flex-direction属性决定主轴的方向（即项目的排列方向）。(flex-direction: row | row-reverse | column | column-reverse;)</p>
          <p>2.flex-wrap属性定义，如果一条轴线排不下，如何换行。(flex-wrap: nowrap | wrap | wrap-reverse;)</p>
          <p>3.flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap(justify-content: flex-start | flex-end | center | space-between | space-around;)</p>
          <p>4.align-items属性定义项目在交叉轴上如何对齐。(align-items: flex-start | flex-end | center | baseline | stretch;)</p>
          <p>5.align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。(align-content: flex-start | flex-end | center | space-between | space-around | stretch;)</p>
          <p>6.order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。</p>
          <p>7.flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大(flex-grow: ; /* default 0 */)</p>
          <p>8.flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。(flex-shrink: ; /* default 1 */)</p>
          <p>9.flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。</p>
          <p>10.flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。(flex: none | [ 'flex-grow' 'flex-shrink'? || 'flex-basis' ])</p>
          <p>11.align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch(align-self: auto | flex-start | flex-end | center | baseline | stretch;)</p>
        </div>
        </el-card>
      <div class="bordermain">
        
        <el-card class="box-card">
          <div class="text item">
            一、骰子的布局: 骰子的一面，最多可以放置9个点。会将骰子
            <div style="display:flex">
              <p class="demo" style="padding: .07rem;">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </p>
              <span style="line-height:.9rem;">======></span>
              <p class="demo">
                <i>1</i>
                <i>2</i>
                <i>3</i>
                <i>4</i>
                <i>5</i>
                <i>6</i>
                <i>7</i>
                <i>8</i>
                <i>9</i>
              </p>
              <span style="line-height:.9rem;">用数字来表示，更好的做demo</span>
            </div>
            
            <!-- <div class="box" v-pre>
              <span class="item"></span>
            </div> -->
          </div>
        </el-card>
      </div>
      <div class="container">
        <!-- @change="handleChange" v-model="activeNames"  -->
        <el-collapse >
          <el-collapse-item v-for="(item, index) in infoArr" :key="index" :title="'骰子：'+ item.tip" :name="index">
            <div>{{item.html}}</div>
            <div>{{item.text}}</div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </el-main>
  </el-container>
</div>

</template>
<style scoped>
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
.demo {
  width: 0.9rem;
  height: 0.9rem;
  border: 1px solid #000;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  
}
.demo span {
  display: inline-block;
  width: 0.2rem;
  height: 0.2rem;
  background-color: #ccc;
  border-radius: 50%;
  padding: 0;
}
.demo i {
  font-size: .14rem;
  font-style: normal;
  display: inline-block;
  width: 0.25rem;
  height: 0.25rem;
  padding-left: 0.05rem;
  margin: 0;
}
.yufa p{
  margin-top: .2rem;
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
        infoArr: [
          {
            tip: '1',
            text: '.box {display: flex;}',
          },
          {
            tip: '2',
            text: '.box { display: flex; justify-content: center; }',
          },
          {
            tip: '3',
            text: '.box { display: flex; justify-content: flex-end; }'
          },
          {
            tip: '4',
            text: '.box {display: flex;align-items: center;}'
          },
          {
            tip: '5',
            text: '.box {display: flex;justify-content: center;align-items: center;}'
          },
          {
            tip: '8',
            text: '.box {display: flex;justify-content: center;align-items: flex-end;}'
          },
          {
            tip: '9',
            text: '.box {display: flex;justify-content: flex-end;align-items: flex-end;}'
          },
          {
            tip: '1,3',
            text: '.box {display: flex;justify-content: space-between;}'
          },
          {
            tip: '1,7',
            text: '.box {display: flex;flex-direction: column;justify-content: space-between;}'
          },
          {
            tip: '2,8',
            text: '.box {display: flex;flex-direction: column;justify-content: space-between;align-items: center;}'
          },
          {
            tip: '3,9',
            text: '.box {display: flex;flex-direction: column;justify-content: space-between;align-items: flex-end;}'
          },
          {
            tip: '1,5',
            text: '.box {display: flex;}.item:nth-child(2) {align-self: center;}'
          },
          {
            tip: '1,9',
            text: '.box {display: flex;justify-content: space-between;}.item:nth-child(2) {align-self: flex-end;}'
          },
          {
            tip: '1,5,9',
            text: '.box {display: flex;}.item:nth-child(2) {align-self: center;}.item:nth-child(3) {align-self: flex-end;}'
          },
          {
            tip: '1,2,3,9',
            text: '.box {display: flex;flex-wrap: wrap;justify-content: flex-end;align-content: space-between;}'
          },
          {
            tip: '1,3,7,9',
            html: '<div class="box"><div class="column"><span class="item"></span><span class="item"></span></div><div class="column"><span class="item"></span><span class="item"></span></div></div>',
            text: '.box {display: flex;flex-wrap: wrap;align-content: space-between;}.column {flex-basis: 100%;display: flex;justify-content: space-between;}'
          },
          {
            tip: '1,2,3,7,8,9',
            text: '.box {display: flex;flex-wrap: wrap;align-content: space-between;}'
          },
          {
            tip: '1,3,4,6,7,9',
            text: '.box {display: flex;flex-direction: column;flex-wrap: wrap;align-content: space-between;}'
          },
          {
            tip: '1,2,3,5,7,9',
            html:'<div class="box"><div class="row"><span class="item"></span><span class="item"></span><span class="item"></span></div><div class="row"><span class="item"></span></div><div class="row"><span class="item"></span><span class="item"></span></div></div>',
            text: '.box {display: flex;flex-wrap: wrap;}.row{flex-basis: 100%;display:flex;}.row:nth-child(2){justify-content: center;}.row:nth-child(3){justify-content: space-between;}'
          },
          {
            tip: '1,2,3,4,5,6,7,8,9',
            text: '.box {display: flex;flex-wrap: wrap;}'
          },
        ]
      }
    }
  };
</script>