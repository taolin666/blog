<template>
<div style="height:100%">
  <Header></Header>
  <el-container style="height: calc(100% - .6rem); border: 1px solid #eee">
    <Aside></Aside>
    <el-main style="background:#fff;">
      <el-alert
        title="提示"
        type="warning">
        此篇包含javascript中string类型的所有方法
      </el-alert>
      <div class="bordermain">
        <el-container>
          <el-card class="box-card">
            <div class="text item yufa">
            <p>字符串常用的一些方法有：charAt()，indexOf(), lastIndexOf(), substring(), slice(), substr(), replace(), search(), match(), split(), trim(), toLowerCase(), toUpperCase()</p>
            </div>
          </el-card>
        </el-container>
        <div class="container">
          <el-collapse >
            <el-collapse-item v-for="(item, index) in infoArr" :key="index" :title="(index+1)+ '.' +item.tip" :name="index">
              <div>{{item.html}}</div>
              <div>{{item.text}}</div>
              <div>示例：{{item.example}}</div>
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
            tip: 'charAt()',
            html: 'str.charAt(n)',
            text: '===> 返回字符串的第 n 个字符，如果不在 0~str.length-1之间，则返回一个空字符串。',
            example: "string.vuevar str = 'javascript'; str.charAt(2); //'v'   str.charAt(12); //''",
          },
          {
            tip: 'indexOf()',
            html: 'indexOf(substr[,start])',
            text: `＝> 返回 substr 在字符串 str 中首次出现的位置,从 start 位置开始查找，如果不存在，则返回 -1。 start可以是任意整数，默认值为 0。如果 start < 0 则查找整个字符串（如同传进了 0）。如果 start >= str.length，则该方法返回 -1，除非被查找的字符串是一个空字符串，此时返回 str.length.`,
            example: `var str = "javascript"; str.indexOf('s',6); // -1 str.indexOf('',11); // 10str.indexOf('',8); // 8`
          },
          {
            tip: 'lastIndexOf()',
            html: 'lastIndexOf(substr[,start])',
            text: '===> 返回字符串的第 n 个字符，如果不在 0~str.length-1之间，则返回一个空字符串。',
            example: "'lastindex'.lastIndexOf('a'); // 1",
          },
          {
            tip: 'substring()',
            html: 'str.substring(start[, end])',
            text: '= > 返回从 start 到 end（不包括）之间的字符，start、end均为 非负整数。若结束参数(end)省略，则表示从start位置一直截取到最后。',
            example: `var str = 'abcdefg';
                      str.substring(1, 4); //"bcd"
                      str.substring(1); // "bcdefg"
                      str.substring(-1); //"abcdefg" 传入负值时会视为0`,
          },
          {
            tip: 'slice()',
            html: 'str.slice(start[,end])',
            text: '= > 返回从 start 到 end （不包括）之间的字符，可传负值',
            example: `var str = 'this is awesome';
                      str.slice(4, -1); //" is awesom"`,
          },
          {
            tip: 'substr()',
            html: 'str.slice(start[,end])',
            text: '= > 返回 str 中从指定位置开始到指定长度的子字符串，start可为负值',
            example: `var str = "Just give me a reason";
                      str.substr(5, 10); // "give me a "
                      str.substr(-4, 2); // "as"`,
          },
          {
            tip: 'replace()',
            html: 'str.replace(regexp|substr, newSubStr|function)',
            text: '= > 替换 str 的子字符串',
            example: `var str = "do you love me";str.replace('love','hate'); // "do you hate me"`,
          },
          {
            tip: 'search()',
            html: 'str.search(regexp)',
            text: '= > 查找 str 与一个正则表达式是否匹配。如果匹配成功，则返回正则表达式在字符串中首次匹配项的索引；否则，返回 -1。如果参数传入的是一个非正则表达式对象，则会使用 new RegExp(obj) 隐式地将其转换为正则表达式对象',
            example: `var str = 'I love JavaScript!';
                      str.search(/java/); // -1
                      str.search(/Java/); // 7
                      str.search(/java/i); // 7
                      str.search('Java'); // 7`,
          },
          {
            tip: 'match()',
            html: 'str.match(regexp)',
            text: '= > 返回一个包含匹配结果的数组，如果没有匹配项，则返回 null。如果参数传入的是一个非正则表达式对象，则会使用 new RegExp(obj) 隐式地将其转换为正则表达式对象',
            example: `var str = 'Javascript java';
                      str.match(/Java/); // ["Java"]
                      str.match(/Java/gi); // ["java", "Java"]
                      str.match(/ab/g); // null`,
          },
          {
            tip: 'split()',
            html: 'str.split([separator][, limit])',
            text: '= >返回一个数组，分隔符 separator 可以是一个字符串或正则表达式',
            example: `var str = "Hello?World!";
                      str.split(); // ["Hello?World!"]
                      str.split(''); // ["H", "e", "l", "l", "o", "?", "W", "o", "r", "l", "d", "!"]
                      str.split('?'); // ["Hello", "World!"]
                      str.split('',5); // ["H", "e", "l", "l", "o"]`,
          },
          {
            tip: 'trim()',
            html: 'str.trim()',
            text: '= > 去除 str 开头和结尾处的空白字符，返回 str 的一个副本，不影响字符串本身的值',
            example: `var str = ' abc ';
                      str.trim(); // 'abc'
                      console.log(str); // ' abc '`,
          },
          {
            tip: 'toLowerCase()',
            html: 'str.toLowerCase()',
            text: '= > 将 str 转换为小写，并返回 str 的一个副本，不影响字符串本身的值',
            example: `var str = 'JavaScript';
                      str.toLowerCase(); // 'javascript'
                      console.log(str); // 'JavaScript'`,
          },
          {
            tip: 'toUpCase()',
            html: 'str.toUpCase()',
            text: '= > 将 str 转换为大写，并返回 str 的一个副本，不影响字符串本身的值',
            example: `var str = 'JavaScript';
                      str.toUpperCase(); // 'JAVASCRIPT'
                      console.log(str); // 'JavaScript'`,
          },
        ]
      }
    }
  };
</script>