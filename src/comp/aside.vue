<template>
<transition name="slide-fade">
  <el-aside width="4rem" v-show="isflag" class="SetSize">
    <el-avatar class="myImg">
      <img src="../assets/images/WechatIMG6.jpeg" alt="">
    </el-avatar>
    <el-menu>
      <el-menu-item index="0" @click="toHome" style="font-size:14px;">首页</el-menu-item>
      <el-submenu index="1">
        <template slot="title">CSS</template>
          <el-menu-item index="1-1" @click="toFlex">1flex布局</el-menu-item>
          <el-menu-item index="1-2" @click="toBaseCss">2 基础css</el-menu-item>
          <el-menu-item index="1-3">B</el-menu-item>
          <el-menu-item index="1-4">C</el-menu-item>
        <el-submenu index="1-4">
          <template slot="title">D</template>
          <el-menu-item index="1-4-1">D1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">HTML</template>
          <el-menu-item index="2-1">E</el-menu-item>
          <el-menu-item index="2-2">F</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">JavaScript</template>
          <el-menu-item index="3-1" @click="toString">字符串的方法</el-menu-item>
          <el-menu-item index="3-2" @click="toArray">数组的方法</el-menu-item>
        <el-submenu index="3-3">
          <template slot="title">I</template>
          <el-menu-item index="3-3-1">I1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">BUG总结</template>
          <el-menu-item index="4-1" @click="toInstallGolbalVue">全局安装vue</el-menu-item>
          <el-menu-item index="4-2" @click="toQiyukf">七鱼客服连接</el-menu-item>
          <el-menu-item >K</el-menu-item>
          <el-menu-item-group>
            <el-submenu index="4-3">
            <template slot="title">兼容性问题</template>
            <el-menu-item index="4-3-1" @click="toIphoneX">iphoneX底部tab</el-menu-item>
            <el-menu-item index="4-3-2" @click="toTouch">ios滑动卡顿</el-menu-item>
          </el-submenu>
          </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">前端功能</template>
          <el-menu-item index="5-1" @click="toRandom">随机数</el-menu-item>
          <el-menu-item index="5-2" @click="toAuth">vue登录权限</el-menu-item>
          <el-menu-item index="5-3" @click="toTools">Tools</el-menu-item>
          <el-menu-item index="5-4" @click="toFullPage">fullPage使用</el-menu-item>
          <el-menu-item index="5-5" @click="toCanvas">canvas刮奖</el-menu-item>
        <el-submenu index="5-9">
          <template slot="title">O</template>
          <el-menu-item index="5-9-1">O1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">数据结构</template>
          <el-menu-item index="6-1" @click="operationArr">数组交差并</el-menu-item>
          <el-menu-item index="6-2" @click="filterData">数据结构转化</el-menu-item>
          <el-menu-item index="6-3" @click="binaryTree">js二叉树</el-menu-item>
          <el-menu-item index="6-4" @click="jsGame">js小游戏</el-menu-item>
        <el-submenu index="6-9">
          <template slot="title">leetcode</template>
          <el-menu-item index="6-9-1" @click="leetCodeOne">领扣题目</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="7">
        <template slot="title">react</template>
          <el-menu-item index="7-1" @click="toOnceReact">初学react</el-menu-item>
          <el-menu-item index="7-2" @click="toCliAndLess">脚手架及less</el-menu-item>
          <el-menu-item index="7-3" @click="reactRoute">react路由</el-menu-item>
          <el-menu-item index="7-4" @click="baseReact">react基础</el-menu-item>
          <el-menu-item index="7-5" @click="advancedReact">react高级语法</el-menu-item>
        <el-submenu index="7-4">
          <template slot="title">1</template>
          <el-menu-item index="7-4-1">2</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="8">
        <template slot="title">nodeJS</template>
          <el-menu-item index="8-1" @click="toServer">静态服务器</el-menu-item>
          <el-menu-item index="8-2" @click="toInterface">写接口和封装</el-menu-item>
          <el-menu-item index="8-3" @click="toPm2">pm2的使用</el-menu-item>
          <el-menu-item index="8-4" @click="toNodeLogin">node完成Login</el-menu-item>
          <el-menu-item index="8-5" @click="deepWebOne">node爬虫（上）</el-menu-item>
        <el-submenu index="8-8">
          <template slot="title">U</template>
          <el-menu-item index="8-3-1">U1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="9">
        <template slot="title">其他</template>
          <el-menu-item index="9-1" @click="tofirstWeb">面试题</el-menu-item>
          <el-menu-item index="9-2" @click="toVueBus">vueBus的使用</el-menu-item>
          <el-menu-item index="9-3" @click="toInputKey">h5金额键盘</el-menu-item>
          <el-menu-item index="9-4" @click="toComputer">计算机网络知识</el-menu-item>
        <el-submenu index="9-3">
          <template slot="title">U</template>
          <el-menu-item index="9-3-1">U1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>

    <!-- <el-menu>
      <el-submenu :index="index" v-for="(item, index) in configMenu" :key= item.title>
        <template slot="title">{{item.title}}</template>
          <div v-for="(childItem, childIndex) in item.children" :key="childItem.title">
            <template slot="title" v-if="!childItem.children">{{childItem.title}}</template>
            <el-submenu :index="index-childIndex">
              <template slot="title" v-if="childItem.children">{{childItem.title}}</template>
              <div v-for="(threeChildItem, threeChildIndex) in childItem.children" :key="threeChildItem">
                <el-menu-item :index="index-childIndex-threeChildIndex">{{threeChildItem.title}}</el-menu-item>
              </div>
            </el-submenu>
        </div>
      </el-submenu>
    </el-menu> -->



    <!-- :default-active="this.$route.path"          
      router   -->
    <!-- <el-menu
      @select="handleSelect" >   
      <el-menu-item   v-for="item in configMenu" :key="item.title"  v-if="!item.children" :index="item.idx">
      {{ item.title }}
      </el-menu-item> -->

      <!-- <el-submenu v-for="item in configMenu" :key="item.title" v-if="item.children" :index="item.idx">              
        <template slot="title">{{ item.title }}</template>              
        <el-menu-item
          v-for="children in item.children"
          :key="children.title"
          :index="children.idx"
          >{{ children.title }}
        </el-menu-item>
      </el-submenu> -->

      <!-- <el-submenu v-for="item in configMenu" :key="item.title" v-if="item.children" :index="item.idx">              
        <template slot="title">{{ item.title }}</template>    
        <el-menu-item
          v-for="children in item.children"
          :key="children.title"
          :index="children.idx"
          >
          <span v-if="children && !children.children">{{children.title}}</span>
          <el-menu-item-group v-if="children && children.children">
            <el-submenu :index="children.idx">
              <template slot="title">{{children.title}}</template>
              <el-menu-item  v-for="threeChildren in children.children" :key="threeChildren.title" :index="threeChildren.idx">{{threeChildren.title}}11</el-menu-item>
            </el-submenu>
          </el-menu-item-group>
        </el-menu-item>
      </el-submenu>
    </el-menu> -->
    <a class="beian" target="_blank" href="http://www.beian.miit.gov.cn/">赣ICP备案20000703号</a>
  </el-aside>
</transition>
</template>
<style scoped>
  /* .SetSize > ul > li {
    font-size: .18rem;
  } */
  .SetSize {
    overflow-x: hidden;
  }
  .myImg {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    margin-bottom: .2rem;
    margin-left: 1rem;
    margin:.1rem 1rem .2rem;
  }
  .slide-fade-enter-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }
  .beian {
    display: block;
    font-size: 12px;
    text-align: center;
    color: #ccc;
  }
</style>
<script>
import configMenu from '@/config/menuConfig.js'
  export default {
    data() {
      return {
        isAside: '3.5rem',
        isflag: true,
        configMenu: []
      }
    },
    computed: {
      
    },
    mounted() {
      this.configMenu = configMenu
      this.$bus.on("parameterName",(flag) => {
        this.isflag = flag
      });
    },
    methods: {
      toServer() {
        this.$router.push('/toServer').catch(err => {err})
      },
      toInterface() {
        this.$router.push('/toInterface').catch(err => {err})
      },
      toPm2() {
        this.$router.push('/pm2').catch(err => {err})
      },
      toNodeLogin() {
        this.$router.push('/nodeLogin').catch(err => {err})
      },
      deepWebOne() {
        this.$router.push('/deepWebOne').catch(err => {err})
      },
      tofirstWeb() {
        this.$router.push('/otherInterView').catch(err => {err})
      },
      toVueBus() {
        this.$router.push('/otherVueBus').catch(err => {err})
      },
      toInputKey() {
        this.$router.push('/keyBoard').catch(err => {err})
      },
      toComputer() {
        this.$router.push('/computer').catch(err => {err})
      },
      toHome() {
        this.$router.push('/')
      },
      toFlex() {
        this.$router.push('/flex')
      },
      toBaseCss() {
        this.$router.push('/baseCss')
      },
      toString() {
        this.$router.push('/string')
      },
      toArray() {
        this.$router.push('/array')
      },
      toInstallGolbalVue() {
        this.$router.push('/installGolbalVue')
      },
      toQiyukf() {
        this.$router.push('/qiyukf')
      },
      toIphoneX() {
        this.$router.push('/iphoneX')
      },
      toTouch() {
        this.$router.push('/nounTouch')
      },
      operationArr() {
        this.$router.push('/arrJCB')
      },
      filterData() {
        this.$router.push('/filterData')
      },
      binaryTree() {
        this.$router.push('/binaryTree')
      },
      jsGame() {
        this.$router.push('/jsGame')
      },
      leetCodeOne() {
        this.$router.push('/leetCode1')
      },
      toRandom() {
        this.$router.push('/random')
      },
      toAuth() {
        this.$router.push('/authority')
      },
      toTools() {
        this.$router.push('/tools')
      },
      toFullPage() {
        this.$router.push('/fullPage')
      },
      toCanvas() {
        this.$router.push('/canvas')
      },
      toOnceReact() {
        this.$router.push('/onceReact')
      },
      toCliAndLess() {
        this.$router.push('/cliAndLess')
      },
      reactRoute() {
        this.$router.push('/reactRoute')
      },
      baseReact() {
        this.$router.push('/basicsReact')
      },
      advancedReact() {
        this.$router.push('/advancedReact')
      }
    },
    destroyed(){
      this.$bus.off("parameterName");
    },
  };
</script>