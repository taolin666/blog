import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Login from '@/comp/login'
import Reg from '@/comp/register'
// css
import Flex from '@/components/CSS/flex'
import BaseCss from '@/components/CSS/baseCss'
// html
// javascript
import Strings from '@/components/JavaScript/string'
import Arrays from '@/components/JavaScript/array'
// bug总结
import InstallGolbalVue from '@/components/BUG/installGolbalVue'
import Qiyukf from '@/components/BUG/qiyukf'
import IphoneX from '@/components/BUG/iphoneX'
import NounTouch from '@/components/BUG/nounTouch'
// 功能
import Random from '@/components/Functions/random'
import Authority from '@/components/Functions/authority'
import Tools from '@/components/Functions/tools'
import FullPage from '@/components/Functions/fullPage'
import Canvas from '@/components/Functions/canvas'
// 算法
import ArrJCB from '@/components/algorithms/arrJCB'
import FilterData from '@/components/algorithms/filterData'
import BinaryTree from '@/components/algorithms/binaryTree'
import JsGame from '@/components/algorithms/jsGame'
import LeetCode1 from '@/components/algorithms/leetCode1'
// react
import OnceReact from '@/components/reactStudy/onceReact'
import CliAndLess from '@/components/reactStudy/cliAndLess'
import ReactRoute from '@/components/reactStudy/reactRoute'
import BasicsReact from '@/components/reactStudy/basicsReact'
import AdvancedReact from '@/components/reactStudy/reactAdvanced'
// node
import ToServer from '@/components/node/toNode'
import ToInterface from '@/components/node/wirteInterface'
import Pm2 from '@/components/node/pm2'
import NodeLogin from '@/components/node/nodeLogin'
import DeepWebOne from '@/components/node/deepWeb1'
// other
import InterView from '@/components/other/interView'
import VueBus from '@/components/other/vueBus'
import KeyBoard from '@/components/other/keyBoard'
import Computer from '@/components/other/computer'

Vue.use(Router)

const router =  new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta:{
        needLogin:true
      },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/reg',
      name: 'reg',
      component: Reg,
    },
    // css
    {
      path: '/flex',
      name: 'flex',
      component: Flex,
      meta:{
        needLogin:true
      },
    },
    {
      path: '/baseCss',
      name: 'baseCss',
      component: BaseCss,
      meta:{
        needLogin:true
      },
    },
    // html
    // javascript
    {
      path: '/string',
      name: 'string',
      component: Strings,
      meta:{
        needLogin:true
      },
    },
    {
      path: '/array',
      name: 'array',
      component: Arrays,
      meta:{
        needLogin:true
      },
    },
    // bug总结
    {
      path: '/installGolbalVue',
      name: 'installGolbalVue',
      component: InstallGolbalVue,
      meta:{
        needLogin:true
      },
    },
    {
      path: '/qiyukf',
      name: 'qiyukf',
      component: Qiyukf,
      meta:{
        needLogin:true
      },
    },
    {
      path: '/iphoneX',
      name: 'iphoneX',
      component: IphoneX,
      meta:{
        needLogin:true
      },
    },
    {
      path: '/nounTouch',
      name: 'nounTouch',
      component: NounTouch,
      meta:{
        needLogin:true
      },
    },
    // 功能
    {
      path: '/random',
      name: 'random',
      component: Random,
      meta:{
        needLogin:true
      },
    },
    {
      path: '/authority',
      name: 'authority',
      component: Authority,
      meta:{
        needLogin:true
      },
    },
    {
      path: '/tools',
      name: 'tools',
      component: Tools,
      meta:{
        needLogin:true
      },
    },
    {
      path: '/fullPage',
      name: 'fullPage',
      component: FullPage,
      meta:{
        needLogin:true
      },
    },
    {
      path: '/canvas',
      name: 'canvas',
      component: Canvas,
      meta:{
        needLogin:true
      },
    },
    // 算法
    {
      path: '/arrJCB',
      name: 'arrJCB',
      component: ArrJCB,
      meta:{
        needLogin:true
      },
    },
    {
      path: '/filterData',
      name: 'filterData',
      component: FilterData,
      meta:{
        needLogin:true
      },
    },
    {
      path: '/binaryTree',
      name: 'binaryTree',
      component: BinaryTree,
      meta:{
        needLogin:true
      },
    },
    {
      path: '/jsGame',
      name: 'jsGame',
      component: JsGame,
      meta:{
        needLogin:true
      },
    },
    {
      path: '/leetCode1',
      name: 'leetCode1',
      component: LeetCode1,
      meta:{
        needLogin:true
      },
    },
    // react
    {
      path: '/onceReact',
      name: 'onceReact',
      component: OnceReact,
      meta:{
        needLogin:true
      },
    },
    {
      path: '/cliAndLess',
      name: 'cliAndLess',
      component: CliAndLess,
      meta:{
        needLogin:true
      },
    },
    {
      path: '/reactRoute',
      name: 'reactRoute',
      component: ReactRoute,
      meta:{
        needLogin:true
      },
    },
    {
      path: '/basicsReact',
      name: 'basicsReact',
      component: BasicsReact,
      meta:{
        needLogin:true
      },
    },
    {
      path: '/advancedReact',
      name: 'advancedReact',
      component: AdvancedReact,
      meta:{
        needLogin:true
      },
    },
    // node
    {
      path: '/toServer',
      name: 'toServer',
      component: ToServer,
      meta:{
        needLogin:true
      },
    },
    {
      path: '/toInterface',
      name: 'toInterface',
      component: ToInterface,
      meta:{
        needLogin:true
      },
    },
    {
      path: '/pm2',
      name: 'pm2',
      component: Pm2,
      meta:{
        needLogin:true
      },
    },
    {
      path: '/nodeLogin',
      name: 'nodeLogin',
      component: NodeLogin,
      meta:{
        needLogin:true
      },
    },
    {
      path: '/deepWebOne',
      name: 'deepWebOne',
      component: DeepWebOne,
      meta:{
        needLogin:true
      },
    },
    // other
    {
      path: '/otherInterView',
      name: 'interView',
      component: InterView,
      meta:{
        needLogin:true
      },
    },
    {
      path: '/otherVueBus',
      component: VueBus,
      meta:{
        needLogin:true
      },
    },
    {
      path: '/keyBoard',
      component: KeyBoard,
      meta:{
        needLogin:true
      },
    },
    {
      path: '/computer',
      component: Computer,
      meta:{
        needLogin:true
      },
    },
  ]
})

router.beforeEach((to, from, next) => {
  if(to.meta.needLogin){
    //当页面需要登录的时候判断浏览器是否有sessionStorage
    if(window.sessionStorage.getItem('token')){
      next()
    }else{
      next({
        path: '/login'
      });
    }
  }else{
    next()
  }
})

export default router
