<template>
<div style="height:100%">
  <Header></Header>
  <el-container style="height: calc(100% - .6rem); border: 1px solid #eee">
    <Aside></Aside>
    <el-main style="background:#fff;">
      <div class="container">
        <div class="question">
          <div class="questionContent" @click="toDetail(item.isUp, index)" v-for="(item, index) in gridInfo" :key="index">
            <div class="question_item">
              <div>{{index+1}}：{{item.text}}</div>
              <span class="el-icon-arrow-right" v-show="!item.isUp"></span>
              <span class="el-icon-arrow-up" v-show="item.isUp"></span>
            </div>
            <div class="questionDetail" v-show="item.isUp">{{item.content}}</div>
          </div>
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
        gridInfo: [
          {
            text:"如何让一个不定宽高的div水平垂直居中？",
            content: '1111111111111111',
            isUp: false
          },
          {
            text:"怎样实现一个左边右边固定，中间自适应？",
            content: '怎么通过意向金询价购车？怎么通过意向金询价购车？怎么通过意向金询价购车？',
            isUp: false
          },
          {
            text:"说一下html5有什么新特性和作用？",
            content: '3333333333',
            isUp: false
          },
          {
            text:"什么是闭包？",
            content: '怎么通过意向金询价购车？怎么通过意向金询价购车？怎么通过意向金询价购车？怎么通过意向金询价购车？怎么通过意向金询价购车？怎么通过意向金询价购车？',
            isUp: false
          },
          {
            text:"js中的this指向有那些？",
            content: '5555555555555555555',
            isUp: false
          },
          {
            text:"call和apply的区别？",
            content: '6666666666666',
            isUp: false
          },
          {
            text:"讲一下跨域？",
            content: '777777777777777',
            isUp: false
          },
          {
            text:"请描述一下cookies，sessionStorage和localStorage的区别？",
            content: '88888888888888888',
            isUp: false
          },
          {
            text:"说一下vue的生命周期？",
            content: '99999999999999',
            isUp: false
          },
          {
            text:"说一下vue的双向绑定原理？",
            content: '99999999999999',
            isUp: false
          },
          {
            text:"vue是怎么传值的？",
            content: '99999999999999',
            isUp: false
          },
          {
            text:"v-if和v-show 区别？",
            content: '99999999999999',
            isUp: false
          },
          {
            text:"route和router的区别？",
            content: '99999999999999',
            isUp: false
          },
          {
            text:"讲一下vuex？",
            content: '99999999999999',
            isUp: false
          },
          {
            text:"vue的优化？",
            content: '99999999999999',
            isUp: false
          },
          {
            text:"var，let和const的区别？",
            content: '99999999999999',
            isUp: false
          },
          {
            text:"箭头函数的用法和作用？",
            content: '99999999999999',
            isUp: false
          },
        ],
        flag: false
      }
    },
    methods: {
      toDetail(info, index) {
        this.gridInfo.forEach((item, ind, arr) => {
          if (index === ind) {
            this.$set(item, 'isUp', !info)
          }
        })
      },
    }
  };
</script>
<style scoped>
.question {
  color: #000;
  padding: 0 .44rem;
  font-family:Hiragino Sans GB;
  /* font-size: .44rem; */
}
.questionContent {
  border-bottom: 1px solid #E1E1E1;
}
.question_item {
  height: 1.53rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.question_item > div {
overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.questionDetail {
  padding: .16rem .48rem .7rem .48rem;
  color: #818181;
}
</style>