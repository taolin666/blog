<template>
<div style="height:100%">
  <Header></Header>
  <el-container style="height: calc(100% - .6rem); border: 1px solid #eee">
    <Aside></Aside>
    <el-main style="background:#fff;">
      <el-alert
        title="提示"
        type="warning">
        背景：在app里嵌套h5（这个h5相当一个小项目）。要完成登录功能
      </el-alert>
      <div class="bordermain">
        <div class="container">
          <el-card class="box-card">
            <div class="text item yufa">
            <p style="padding:0;">Vue使用sessionStorage做登录</p>
            <p>1在router里加meta标签做状态标示</p>
            <p>2用router.beforeEach做判断</p>
						<p>3在登录成功后存入sessionStorage</p>
            <p style="margin-top:.5rem;padding:0;"></p>
            <p>3如果看不懂我的解释，<a href="https://blog.csdn.net/sweet_note/article/details/81073564" target="_blank">推荐一篇文章</a></p>
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
          <pre>
            <code>
            {{threeBug}}
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
        oneBug: `
        // 1需要判断是否登录的页面要加meta:
                {
                  path: '/treeThree',
                  name: 'treeThree',
                  component: TreeThree,
                  meta:{
                    needLogin:true
                  }
                },
                {
                  path: '/login',
                  name: 'login',
                  component: Login,
                  meta:{
                    needLogin:true
                  }
                },
                {
                  path: '/forgetPw',
                  name: 'forgetPw',
                  component: ForgetPw
                },
                {
                  path: '/forgetNewPw',
                  name: 'forgetNewPw',
                  component: ForgetNewPw
                },
                `,
        twoBug: `
        // 2注意没有needLogin时，要判断是否进入login页，进入的话就可以next，否则就跳到登录页（这里如果不做判断的话，就会形成死循环）
          router.beforeEach((to, from, next) => {
            if(to.meta.needLogin){
              //当页面需要登录的时候判断浏览器是否有sessionStorage
              if(window.sessionStorage.getItem('token')){
                next()
              }else{
              //如果没有，让页面进入登录页 /login
                if (to.path === '/login') { // 如果是登录页面的话，直接next()
                  next();
                } else { // 否则 跳转到登录页面
                  next({
                    path: '/login'
                  });
                }
              }
            }else{
              next()
            }
          })
					注：我推荐的文章里就会形成死循环。
        `,
        threeBug:`
          //3登录调接口，成功后把token存入sessionStorage
          if (res.code === 0) {
          // 先清除掉token的sessionStorage
            window.sessionStorage.removeItem('token')
          // 存入sessionStorage后跳到首页去
            window.sessionStorage.setItem('token', JSON.stringify(res.data.token))
            this.$router.push('/')
          }
        `
      }
    }
  };
</script>