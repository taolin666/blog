<template>
<div style="height:100%">
  <Header></Header>
  <el-container style="height: calc(100% - .6rem); border: 1px solid #eee">
    <Aside></Aside>
    <el-main style="background:#fff;">
      <el-alert
        title="提示"
        type="warning">
        此篇是根据<a href="https://leetcode-cn.com/problemset/all/">leetCode</a>官网的题目练习的
      </el-alert>
      <div class="bordermain">
        <!-- <el-container>
          <el-card class="box-card">
            <div class="text item yufa">
            </div>
          </el-card>
        </el-container> -->
        <div class="container">
          <el-collapse >
            <el-collapse-item v-for="(item, index) in infoArr" :key="index" :title="(index+1)+ '.' +item.tip" :z-index='99999' :name="index">
              <div>{{item.html}}</div>
              <div>{{item.text}}</div>
              <pre>
                <code>
                {{item.example}}
                </code></pre>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </el-main>
  </el-container>
</div>

</template>
<style scoped>
  .yufa p{
    margin-top: .2rem;
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
        infoArr: [
          {
            tip: '两数之和',
            html: '给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。来源：力扣（LeetCode）链接：https://leetcode-cn.com/problems/two-sum',
            text: '给定 nums = [2, 7, 11, 15], target = 9因为 nums[0] + nums[1] = 2 + 7 = 9所以返回 [0, 1]',
            example: `
                get_sum(arr = [2,27,11,15,18,81], target = 99){
                let obj = {};
                let info
                arr.forEach((item, index) => {
                  if (!obj[item]) {
                    obj[item] = {'keyInde': index, 'targetData': target - item}
                    for (const key in obj) {
                      if (obj.hasOwnProperty(key)) {
                        const element = obj[key];
                        if (element.targetData === item) {
                          info = {'第一个值':key,'第一个值的下标': element.keyInde, '第2个值':element.targetData,'第2个值第下标':index}
                        }
                      }
                    }
                  }
                });
                console.log(info || '该数组找不到两个相加后的值等于target')
              }
                `,
          },
          {
            tip: '三数之和',
            html: '给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。来源：力扣（LeetCode）链接：https://leetcode-cn.com/problems/3sum',
            text: '注意：答案中不可以包含重复的三元组。例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，满足要求的三元组集合为：[  [-1, 0, 1],  [-1, -1, 2]]',
            example: `
                let result = [];
                var repeatSet = new Set();
                for (let i = 0; i < arr.length; i++) {
                  for(let j = 0;j < arr.length; j++) {
                    for (let k = 0; k < arr.length; k++) {
                      if (arr[j] + arr[i] + arr[k] === 0) {
                        // res.push(arr[i], arr[j], arr[k])
                        var tmpResult = [arr[i],arr[j],arr[k]];
                        var tmpSortStr = String(tmpResult.sort());
                        if(!repeatSet.has(tmpSortStr)){
                            result.push(tmpResult);
                            repeatSet.add(tmpSortStr)
                        }
                      }
                    }
                  }
                }
                return result;
                `,
          },
          {
            tip: '整数反转',
            html: '有可能是复数',
            text: '输入: 120输出: 21； 输入: -123输出: -321',
            example: `
                reverse (x) {
                  if (x === 0) return 0;
                  if (x.toString()[0] === '-') {
                    return x.toString()[0] + x.toString().slice(1).split('').reverse().join('') - 0
                  } else {
                    return x.toString().split('').reverse().join('') - 0
                  }
                }`,
          },
          {
            tip: '分糖果(i%num_people)',
            html: '排排坐，分糖果。 我们买了一些糖果 candies，打算把它们分给排好队的 n = num_people 个小朋友。 给第一个小朋友 1 颗糖果，第二个小朋友 2 颗，依此类推，直到给最后一个小朋友 n 颗糖果。 然后，我们再回到队伍的起点，给第一个小朋友 n + 1 颗糖果，第二个小朋友 n + 2 颗，依此类推，直到给最后一个小朋友 2 * n 颗糖果。 重复上述过程（每次都比上一次多给出一颗糖果，当到达队伍终点后再次从队伍起点开始），直到我们分完所有的糖果。注意，就算我们手中的剩下糖果数不够（不比前一次发出的糖果多），这些糖果也会全部发给当前的小朋友。 返回一个长度为 num_people、元素之和为 candies 的数组，以表示糖果的最终分发情况（即 ans[i] 表示第 i 个小朋友分到的糖果数）。',
            text: '输入：candies = 7, num_people = 4 输出：[1,2,3,1] 解释： 第一次，ans[0] += 1，数组变为 [1,0,0,0]。 第二次，ans[1] += 2，数组变为 [1,2,0,0]。 第三次，ans[2] += 3，数组变为 [1,2,3,0]。 第四次，ans[3] += 1（因为此时只剩下 1 颗糖果），最终数组变为 [1,2,3,1]。',
            example: `var distributeCandies = function(candies, num_people) {
                      let res = new Array(num_people).fill(0)
                      let i = 0
                      while(candies !=0){
                          res[i%num_people]+= Math.min(i+1,candies)
                          // debugger
                          candies -= Math.min(i+1, candies)
                          i++
                      }
                      return res
                    };`,
          },
        ]
      }
    },
    created() {
      // console.log(this.get_sum())
      // console.log(this.reverse(-210))
      console.log(this.getthree_sum())
    },
    methods: {
      // 两数之和
      get_sum(arr = [2, 7, 11, 15], target = 9){
        let obj = {};
        let info
        arr.forEach((item, index) => {
          if (!obj[item]) {
            obj[item] = {'keyInde': index, 'targetData': target - item}
            for (const key in obj) {
              if (obj.hasOwnProperty(key)) {
                const element = obj[key];
                if (element.targetData === item) {
                  info = {'oneVal':key,'oneIndex': element.keyInde, 'twoVal':element.targetData,'twoIndex':index}
                }
              }
            }
          }
        });
        return [Number(info.oneVal),info.oneIndex,info.twoVal,info.twoIndex]
      },
      getthree_sum(arr = [-1, 0, 1, 2, -1, -4]){
        let result = [];
        var repeatSet = new Set();
        for (let i = 0; i < arr.length; i++) {
          for(let j = 0;j < arr.length; j++) {
            for (let k = 0; k < arr.length; k++) {
              if (arr[j] + arr[i] + arr[k] === 0) {
                // res.push(arr[i], arr[j], arr[k])
                var tmpResult = [arr[i],arr[j],arr[k]];
                var tmpSortStr = String(tmpResult.sort());
                if(!repeatSet.has(tmpSortStr)){
                    result.push(tmpResult);
                    repeatSet.add(tmpSortStr)
                }
              }
            }
          }
        }
        return result;
      },
      // 反转
      reverse (x) {
        if (x === 0) return 0;
        if (x.toString()[0] === '-') {
          return x.toString()[0] + x.toString().slice(1).split('').reverse().join('') - 0
        } else {
          return x.toString().split('').reverse().join('') - 0
        }
      }
    }
  };
</script>