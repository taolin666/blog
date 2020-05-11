<template>
<div style="height:100%">
  <Header></Header>
  <el-container style="height: calc(100% - .6rem); border: 1px solid #eee">
    <Aside></Aside>
    <el-main style="background:#fff;">
      <el-alert
        title="提示"
        type="warning">
        react-advanced
      </el-alert>
      <div class="bordermain">
        <div class="container">
          <el-card class="box-card">
            <div class="text item yufa">
              <!-- <p style="padding:0;">1</p> -->
              <p>1PropTypes,defaultProps。react组建传值，对值对规范</p>
              <pre>
                <code>
                {{oneBug}}
                </code>
              </pre>
              <p>2 react中对state和props的改变就重新执行render方法</p>
              <p>3虚拟dom</p>
              <p>3-1 state数据</p>
              <p>3-2 jsx模版</p>
              <p>3-3 数据 + 模版 生成虚拟dom（就是一个js对象，用来描述真实dom）：['div', {'id': 'box'}, ['span', {}, 'hello World']]</p>
              <p>3-4 用虚拟dom构建真实dom</p>
              <p>3-5 state发送变化</p>
              <p>3-6 生成新的虚拟dom：['div', {'id': 'box'}, ['span', {}, 'tao lin']]</p>
              <p>3-7 比较原始虚拟dom和新的虚拟dom的区别，找到区别中的span里的内容</p>
              <p>3-8 直接操作dom，直接修改span里的内容</p>
              <p>5 diff算法：同层虚拟dom的比对</p>

              <p>6 setState是异步的，所以setState方法里可以直接用逗号再执行:this.setState(() => ({inputValue}), () => {console.log(123)})</p>
              <pre>
                <code>
                {{twoBug}}
                </code>
              </pre>
              <p>7 react生命周期函数</p>
              <img src="https://upload-images.jianshu.io/upload_images/8638758-70ff1cc0244b6f35.png" style="width:100%" alt="">
              <pre>
                <code>
                {{threeBug}}
                </code>
              </pre>
            </div>
            <el-card class="box-card">
            </el-card>
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
        oneBug: `
        // 1导入prop-types
        import PropTypes from 'prop-types';
        //1 第一个是组建定义的名字，第二个prop是小写，这个对象里对属性值是校验规则
        TodoItem.propTypes ={
          // 1-1对content这个属性，必须是字符串
          content: PropTypes.string,
          // 1-2对itemDelete这个属性，必须是函数且必填
          itemDelete: PropTypes.func.isRequired,
          // 1-3 对index这个属性，必须是布尔值或者是数值
          index: PropTypes.oneOfType([PropTypes.bool,PropTypes.number])
        }
        // 1-4如需更多配置看react官网：https://react.docschina.org/docs/typechecking-with-proptypes.html
        // 2如果没有传值，设置默认值
        TodoItem.defaultProps = {
          content: '123',
          index: 0
        }
                `,
        twoBug: `
        // ref获取dom元素
          ref={(input)=> {this.input = input}}
        `,
        threeBug: `
          // 当组建将要挂在的时候执行：组建中只执行一次
          componentWillMount() {console.log('componentWillMount')};
          // 当组建挂载完成后当时候执行：组建中只执行一次
          componentDidMount() {console.log('componentDidMount')}
          // 组建是否要修改，返回true和false；false则不执行下面
          shouldComponentUpdate() {console.log('shouldComponentUpdate'); return true;}
          // 组建将要被修改
          componentWillUpdate() {console.log('componentWillUpdate')}
          // 组建被修改后
          componentDidUpdate() {console.log('componentDidUpdate')}
          // 在子组建执行：如果第一次组建存在于父组建。不执行。如果这个组建之间已经存在于父组建，则执行
          componentWillReceiveProps() {console.log('componentWillReceiveProps')}
          // componentWillUnmount相当于destroyed
          componentWillUnmount() {console.log('componentWillUnmount')}
        `,
      }
    }
  };
</script>