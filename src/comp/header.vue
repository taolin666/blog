<template>
<div>
  <el-header style=" display: flex;justify-content: space-between;align-items: center;font-size: .44rem;width:100%;">
    <div @click="toggleAside" style=" display: flex;align-items: center;">
      <transition name="slide-fade">
        <span v-show="flag" class="el-icon-s-fold"></span>
      </transition>
      <transition name="slide-fade">
        <span v-show="!flag" class="el-icon-s-unfold"></span>
      </transition>
      <div style="padding:0 15px;width:350px;">{{dateNow}}</div>
    </div>
    <div style="text-align:center;overflow:hidden;">
      <h1 v-cloak style="">coding</h1>
    </div>
    <div style="display: flex;">
      <!-- <div style="width: 350px;">{{dateNow}}</div> -->
      <el-dropdown>
        <i class="el-icon-setting" style="z-index:9999;" ></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="toLogin">登陆</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span @click="drawer = true" style="padding:0 15px;">{{phone}}</span>
    </div>
  </el-header>
  <el-drawer
    title="15270505447"
    :visible.sync="drawer"
    :before-close="handleClose">
    <el-card class="box-card">
      <video 
      :src="videoSrc" 
      controls="true"
      preload="auto"
      playsinline="true"
      x-webkit-airplay="allow"
      x5-video-player-type="h5"
      x5-video-player-fullscreen="true"
      x5-video-orientation="portraint"
      style="object-fit:fill;width:100%;"></video>
    </el-card>
  </el-drawer>
</div>
    
</template>
<style  scoped>
.slide-fade-enter-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
/* .slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
} */
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
</style>
<script>
  import { mapState } from 'vuex'
  export default {
    computed: {
      ...mapState([
        'phone'
      ])
    },
    data() {
      return {
        flag:true,
        drawer: false,
        timer: null,
        dateNow: null,
        videoSrc: require('../assets/myphoto/A.mp4')
      }
    },
    mounted() {
      this.timer = setInterval(()=>{
        this.dateNow = this.formateDate();
      },1000)
    },
    destroyed() {
      clearInterval(this.timer)
      this.timer = null
    },
    methods: {
      toggleAside() {
        this.flag = !this.flag
        this.$bus.emit("parameterName",this.flag);
      },
      handleClose(done) {
        done();
      },
      formateDate(time = +new Date()) {
        var date = new Date(time + 8 * 3600 * 1000); // 增加8小时
        return date.toJSON().substr(0, 19).replace('T', ' ');
      },
      toLogin() {
        console.log('tologin')
        this.$router.push('/login');
      },
    }
  };
</script>