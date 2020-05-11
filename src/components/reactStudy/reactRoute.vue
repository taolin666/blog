<template>
<div style="height:100%">
  <Header></Header>
  <el-container style="height: calc(100% - .6rem); border: 1px solid #eee">
    <Aside></Aside>
    <el-main style="background:#fff;">
      <el-alert
        title="提示"
        type="warning">
        初学react路由
      </el-alert>
      <div class="bordermain">
        <div class="container">
          <el-card class="box-card">
            <div class="text item yufa">
              <p>1 npm install react-router-dom --save-dev</p>
              <p>2下面是我在项目中的使用的react路由</p>
              <pre>
                <code>
                {{oneBug}}
                </code>
              </pre>
            </div>
          </el-card>
          <el-card class="box-card" style="margin:10px 0;">
            <div class="text item yufa">
              <p>1外层必须包一层BrowserRouter或者hashRouter，</p>
              <p>2switch  为了解决route的唯一渲染（仅仅渲染一个路由路径）出现的</p>
              <p>3Route有个exact属性当Route添加exact属性后只有URL和该 Route的path属性进行精确比对后完全相同该Route才会被渲染。</p>
              <pre>
                <code>
                {{twoBug}}
                </code>
              </pre>
            </div>
          </el-card>
          <el-card class="box-card">
            <div class="text item yufa">
              <p>1路由传参的方式入下面代码</p>
              <pre>
                <code>
                {{threeBug}}
                </code>
              </pre>
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
	.infoImg {
		width: 5rem;
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
				infoImg: require('@/assets/images/WechatIMG2.png'),
        oneBug: `
            import React from 'react';
            import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
            import App from './App';
            import Admin from './admin';
            import Home from './pages/Home';
            import Buttons from './pages/ui/Buttons';
            import Modals from './pages/ui/modals.js';
            import Loadings from './pages/ui/loadings.js';
            import Notification from './pages/ui/notification.js';
            import Messages from './pages/ui/message.js';
            import Tabs from './pages/ui/tabs.js';
            import Gallery from './pages/ui/gallery.js';
            import Carousel from './pages/ui/carousel.js';
            import Login from './pages/form/login.js';
            import Register from './pages/form/register.js';
            import BasicTable from './pages/Table/basicTable';

            export default class Router extends React.Component{

              render() {
                return <BrowserRouter>
                  <App>
                    <Switch>
                        <Route path="/" render={() =>
                          <Admin>
                            <Switch>
                              <Route path="/home" component={Home}></Route>
                              <Route path="/ui/buttons" component={Buttons}></Route>
                              <Route path="/ui/modals" component={Modals}></Route>
                              <Route path="/ui/loadings" component={Loadings}></Route>
                              <Route path="/ui/notification" component={Notification}></Route>
                              <Route path="/ui/messages" component={Messages}></Route>
                              <Route path="/ui/tabs" component={Tabs}></Route>
                              <Route path="/ui/gallery" component={Gallery}></Route>
                              <Route path="/ui/carousel" component={Carousel}></Route>
                              <Route path="/form/login" component={Login}></Route>
                              <Route path="/form/reg" component={Register}></Route>
                              <Route path="/table/basic" component={BasicTable}></Route>
                              <Redirect to="/home" />
                            </Switch>
                          </Admin>
                        }></Route>
                    </Switch>
                  </App>
                  
                </BrowserRouter>
              }
            }
                `,
        twoBug: `
        <Switch>
          <Route path="/home" exact component={Home}></Route>
        </Switch>
        `,
        threeBug: `
        // params
        // 优势 ： 刷新地址栏，参数依然存在
        // 缺点:只能传字符串，并且，如果传的值太多的话，url会变得长而丑陋。
        <Route path="/list/:id" component={List}></Route>
        // 页面传的跳转的方式如下，这个123应该动态接受
        <NavLink to="/list/123"></NavLink>
        // this.props.history.push({pathname:"/path/" + name});
        // 页面中接受
        在周期函数中用this.props.match.params.id读取

        // query
          <Route path='/query' component={Query}/>
          <Link to={{ path : ' /query' , query : { name : 'sunny' }}}>
          this.props.history.push({pathname:"/query",query: { name : 'sunny' }});
          读取参数用: this.props.location.query.name
        // 优势：传参优雅，传递参数可传对象；
        // 缺点：刷新地址栏，参数丢失

        // state
        <Route path='/sort ' component={Sort}/>
        <Link to={{ path : ' /sort ' , state : { name : 'sunny' }}}> 
        this.props.history.push({pathname:"/sort ",state : { name : 'sunny' }});
        读取参数用: this.props.location.query.state 
        // 优缺点同query

        // search
        <Route path='/web/departManange ' component={DepartManange}/>
        <link to="web/departManange?tenantId=12121212">xxx</Link>
        this.props.history.push({pathname:"/web/departManange?tenantId" + row.tenantId});
        读取参数用: this.props.location.search
        // 优缺点同params
        `,
      }
    }
  };
</script>