<template>
<div style="height:100%">
  <Header></Header>
  <el-container style="height: calc(100% - .6rem); border: 1px solid #eee">
    <Aside></Aside>
    <el-main style="background:#fff;">
      <el-alert
        title="提示"
        type="warning">
        背景：在app里嵌套h5（这个h5相当一个小项目）。要完成输入金额到数字键盘
      </el-alert>
      <div class="bordermain">
        <div class="container">
          <el-card class="box-card">
            <div class="text item yufa">
            <p style="padding:0;">需求:</p>
            <p>1完成一个带小数点带数字键盘</p>
            <p>2输入自动生成金额格式（3位带一个逗号，且保留两位小数）</p>
						<p>3要有光标</p>
						<img class="infoImg" :src="infoImg" alt="">
            <!-- <p>然后vue -V </p>
            <p>终端显示 bash: vue: command not found</p> -->
            <p style="margin-top:.5rem;padding:0;">解决：</p>
            <p>1引入vantUI框架里的数字键盘就行了，简单方便</p>
            <p>2这个之间字符串分割就行的，也简单</p>
            <p>3无解QAQ：因为光标是input特有的，如果用input会调用手机端默认的键盘。<a href="https://www.cnblogs.com/chaoyuehedy/p/9530380.html">网上查的资料好像有</a></p>
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
            第3个问题暂时无解
            </code>
          </pre>
        </div>
      </div>
			<p>总结：</p>
			<p>1.数字键盘的方法可以设置 type = "number" 或者type = "tel"; 前者在Andriod可以弹出数字键盘在ios端只能弹全键盘，后者在Android和ios弹出的都是数字键盘，但是！！坑爹的，弹出的数字键盘没有小数点！（我的华为荣耀9倒是很给力的给我弹了个带小数点的数字键盘，不容易啊啊）</p>
			<p>2.如果是一个强迫症癌晚期患者的话，推荐一篇文章自行解决，https://www.cnblogs.com/chaoyuehedy/p/9530380.html</p>
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
        // 解决问题1
          （Vant框架里的数字键盘，点击时，在让这个show为true就行了）:
                <van-number-keyboard
									close-button-text="完成"
									:show="show"
									extra-key="."
									v-model="money"
									:z-index="moreIndex"
									@blur="onBlurHandle"
									safe-area-inset-bottom
								/>
                `,
        twoBug: `
        // 解决问题2-1（在util.js里写个方法就行里）
          function toMoney(num, flag = true){
						if(num){
							if(isNaN(num)) {
								alert("金额中含有不能识别的字符");
								return;
							}
							if (flag) {
								return num.toLocaleString('zh', { style: 'currency', currency: 'cny'}).substr(1)
							} else {
								return (num/100).toLocaleString('zh', { style: 'currency', currency: 'cny'}).substr(1)
							}
						}else{
							return num = '';
						}
          }
          // 2-2在computed里对金额做处理只能 =》输出小数点后两位，不能多次点击小数点等等
          filterMoney: function() {
            if (this.money.toString() === '0.00') {
              this.money = '0';
            }
            if (this.money.toString() === '0.0') return '0.0';
            if (this.money.toString() === '0.') return '0.';
            if (this.money == '0') return '0';
            if (this.money < 0) return '0';
            if (this.money.toString().lastIndexOf('..') > -1 && this.money.split('.')[0]) {
              this.money = this.money.split('.')[0] + '.'
            }
            if (!this.money || !Number(this.money)) {
              this.money = ''
              return '请输入充值金额'
            };
            if (this.money.split('.')[1] && this.money.split('.')[1].length >= 2) {
              this.money = this.money.split('.')[0] + '.' + this.money.split('.')[1].substr(0, 2)
            }
            console.log(this.money)
            return toMoney(this.money * 100, false);
          },
					调用时传第二个参数为false就有保留2位小数里，
					注：两种状态切换就行了
        `
      }
    }
  };
</script>