<template>
<div style="height:100%">
  <Header></Header>
  <el-container style="height: calc(100% - .6rem); border: 1px solid #eee">
    <Aside></Aside>
    <el-main style="background:#fff;">
      <el-alert
        type="info">
        Welcome to code Park
      </el-alert>
      <p>你现在的当前位置在{{localtion}}</p>
      <el-container>
        <div id="container"></div>
        <div class="demo-image__lazy">
          <el-image style="width: 23%;margin-right:.05rem;" v-for="item in urls" :key="item.url" :src="item.url" :preview-src-list="item.bigImg" :z-index='99999' lazy fit="fill">
            <div slot="placeholder" class="image-slot">
              加载中<span class="dot">...</span>
            </div>
          </el-image>
        </div>
      </el-container>
    </el-main>
  </el-container>
</div>

</template>
<style scoped>
  .title {
    width: 100%;
    display: flex;
    justify-content: center;
    font-family: Hiragino Sans GB;
    margin-top: 2rem;
    font-size: .8rem;
  }
  .demo-image {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .demo-image__lazy{
    width: 100%;
  }
  p {
    text-align: center;
    margin: 20px 0;
  }
</style>

<script>
import Aside from '@/comp/aside';
import Header from '@/comp/header';
import { mapState } from 'vuex'
import AMap from 'AMap';
  export default {
    computed: {
      ...mapState([
        'phone'
      ])
    },
    components: {
      Aside,
      Header
    },
    data() {
      return {
        urls: [],
        localtion: '',
        
      }
    },
    mounted() {
      this.localtion = sessionStorage.getItem('location')
      this.init();
      for (let index = 1; index < 116; index++) {
        this.urls.push({url: require(`../assets/myphoto/${index}.jpg`),bigImg:[require(`../assets/myphoto/${index}.jpg`)]})
      }
    },
    methods: {
      init() {
        let params = {
          location: this.localtion,
          phone: this.phone || '000'
        }
        this.$http({
          url: 'location',
          params
        }).then(res => {
          if (res.code === 0) {
            // this.titleInfo = res.message.alert;
          } else {
            this.$message.error(res.message || '接口调用的code不是0');
          }
        })
      }
    }
  };
</script>