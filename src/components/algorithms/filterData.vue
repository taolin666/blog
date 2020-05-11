<template>
<div style="height:100%">
  <Header></Header>
  <el-container style="height: calc(100% - .6rem); border: 1px solid #eee">
    <Aside></Aside>
    <el-main style="background:#fff;">
      <el-alert
        title="提示"
        type="warning">
        帮人转化一份数据格式
      </el-alert>
      <el-container>
        <el-card class="box-card">
        <div class="text item yufa">
          <p>问题：将每级分类的归类到各自数组里将</p>
          <pre>
            <code>list: [
          {
            result: '4级分类',
            title: '4',
          },
          {
            result: '3级分类',
            title: '3',
          },
          {
            result: '4级分类',
            title: '44',
          },
          {
            result: '2级分类',
            title: '2',
          },
          {
            result: '1级分类',
            title: '1',
          }
        ],</code></pre>
        <p>转化为
          <pre><code>
        list: [
          {
            key: '4级分类',
            children: [{result: '4级分类',title: '4',}
            {result: '4级分类',title: '44',}]
          },
          {
            key: '3级分类',
            children: [result: '3级分类',title: '3',]
          },
          {
            key: '2级分类',
            children: [result: '2级分类',title: '2',]
          },
          {
            key: '1级分类',
            children: [result: '1级分类',title: '1',]
          }],</code></pre></p>
        </div>
        </el-card>
      </el-container>
      <el-card class="box-card">
          <div class="text item yufa">
            <p>我的代码：1在methods里的方法，(需要调用一下)</p>
            <!-- <p>2.flex-wrap属性定义，如果一条轴线排不下，如何换行。(flex-wrap: nowrap | wrap | wrap-reverse;)</p> -->
            <pre>
              <code>
                {{codeInfo}}
              </code>
            </pre>
          </div>
        </el-card>
        
      <el-card class="box-card">
          <div class="text item yufa">
            <p>别人写的代码，真简洁！</p>
            <!-- <p>2.flex-wrap属性定义，如果一条轴线排不下，如何换行。(flex-wrap: nowrap | wrap | wrap-reverse;)</p> -->
            <pre>
              <code>
                {{otherCodeInfo}}
              </code>
            </pre>
          </div>
        </el-card>
        
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
.box-card {
  margin-top: 1rem;
  width: 100%;
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
        list: [
          {
            result: '4级分类',
            img: '',
            title: '3',
            des: '描述',
          },
          {
            result: '3级分类',
            img: '',
            title: '1',
            des: '描述a1',
          },
          {
            result: '4级分类',
            img: '',
            title: '33',
            des: '描述c1',
          },
          {
            result: '4级分类',
            img: '',
            title: '33',
            des: '描述',
          },
          {
            result: '3级分类',
            img: '',
            title: '11',
            des: '描述a1',
          },
          {
            result: '1级分类',
            img: '',
            title: '2',
            des: '描述c1',
          }
        ],
        infoArr: [],
        codeInfo: `
        fli(agr = this.list) {
          // arr1是存第一个数组的，其余的多个数组存在arr2
          let arr1= [],arr2=[]
          var data = [...new Set(agr.map(item => item.result))]
          data.forEach((element, i, array) => {
            agr.forEach(a => {
              if (a.result === element) {
                arr1.push(a)
              } else {
                arr2.push(a)
              }
              // 存好一个就把自己给删除掉
              array.splice(0)
            })
          });
          // push到新的数组并以key和children为对象的形式存入
          this.infoArr.push({key:arr1[0].result, children: arr1})
          // 第一个数组存好后，另外的数组就在arr2里的，以此递归处理arr2
          if (!arr2.every(function(x, i,a) {return x === a[0];})) {
            this.fli(arr2)
          } else {
            // 到里最后一个数组时直接存入arr2就可
            this.infoArr.push({key:arr2[0].result, children: arr2})
            return;
          }
          console.log('this.infoArr', this.infoArr)
        }
      }
        `,
      otherCodeInfo: `
      var obj = {}
        this.list.forEach(item => {
          if (!obj[item.result]) {
            obj[item.result] = []
          }
          obj[item.result].push(item)
        })
        for(let key in obj) {
          if (obj.hasOwnProperty(key)) {
            this.infoArr.push({
              key: key,
              children: obj[key]
            })
          }
        }`
      }
    },
    created() {
      this.fli()
    },
    methods: {
      fli(agr = this.list) {
        // let arr1= [],arr2=[]
        // var data = [...new Set(agr.map(item => item.result))]
        // data.forEach((element, i, array) => {
        //   agr.forEach(a => {
        //     if (a.result === element) {
        //       arr1.push(a)
        //     } else {
        //       arr2.push(a)
        //     }
        //     array.splice(0)
        //   })
        // });
        // this.infoArr.push({key:arr1[0].result, children: arr1})
        // if (!arr2.every(function(x, i,a) {return x === a[0];})) {
        //   this.fli(arr2)
        // } else {
        //   this.infoArr.push({key:arr2[0].result, children: arr2})
        //   return;
        // }

        // 方法2
        var obj = {}
        this.list.forEach(item => {
          if (!obj[item.result]) {
            obj[item.result] = []
          }
          obj[item.result].push(item)
        })
        console.log(obj)
        for(let key in obj) {
          if (obj.hasOwnProperty(key)) {
            this.infoArr.push({
              key: key,
              children: obj[key]
            })
          }
        }
        console.log(this.infoArr)
      }
    }
  };
</script>