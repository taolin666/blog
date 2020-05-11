<template>
<div style="height:100%">
  <Header></Header>
  <el-container style="height: calc(100% - .6rem); border: 1px solid #eee">
    <Aside></Aside>
    <el-main style="background:#fff;">
      <el-alert
        title="提示"
        type="warning">
        node爬虫
      </el-alert>
      <div class="bordermain">
        <div class="container">
          <el-card class="box-card">
            <div class="text item yufa">
              <p>node爬虫，爬取百度新闻http://news.baidu.com/</p>
              <pre>
                <code>
                {{oneBug}}
                </code>
              </pre>
            </div>
          </el-card>
          <el-card>
            <p>提示：具体详情请看<a href="https://segmentfault.com/a/1190000014811373?utm_source=tag-newest" target="_blank" rel="noopener noreferrer">技术博客</a></p>
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
          const express = require('express');
          const app = express();
          const superAgent = require('superagent');
          const cheerio = require('cheerio');
          const Nightmare = require('nightmare');
          const nightmare = Nightmare({show: true});
          let hotNews = [];
          let localNews = [];
          // 本地新闻是动态的接口，所有必须用百度新闻正式的接口，或者使用测试的工具nightmare
          nightmare
                  .goto('http://news.baidu.com/')
                  .wait('div#local_news')
                  .evaluate(() => document.querySelector("div#local_news").innerHTML)
                  .then(htmlStr => {
                    localNews = getLocalNews(htmlStr)
                  })
                  .catch(error => {
                    console.log('本地新闻抓取失败 -'+error)
                  })

          // 热点新闻
          let getHotNews = (res) => {
            let hotNewsArr = [];
            let $ = cheerio.load(res.text);
            $('#pane-news ul li a').each((idx, ele) =>{
              hotNewsArr.push({
                title: $(ele).text(),
                href: $(ele).attr('href')
              })
            })
            return hotNewsArr
          }

          // 本地新闻
          let getLocalNews = (htmlStr) => {
            let localNewsArr = [];
            let $ = cheerio.load(htmlStr);
            // 新闻
            $('ul#localnews-focus li a').each((idx, ele) => {
              localNewsArr.push({
                title: $(ele).text(),
                href: $(ele).attr('href')
              })
            })
            $('div#localnews-zixun ul li a').each((idx, ele) => {
              localNewsArr.push({
                title: $(ele).text(),
                href: $(ele).attr('href')
              })
            })
            return localNewsArr;
          }
          // superagent是node里一个非常方便的、轻量的、渐进式的第三方客户端请求代理模块，用他来请求目标页面
          superAgent.get('http://news.baidu.com/').end((err, res) => {
            if (err) {
              // 如果访问失败或者出错，会这行这里
              console.log(\`热点新闻抓取失败 - \${err}\`)
            } else {
              // 访问成功，请求http://news.baidu.com/页面所返回的数据会包含在res
              // 抓取热点新闻数据
              hotNews = getHotNews(res);
              localNews = getLocalNews(res);
            }
          })
          // 返回给前端
          app.get('/', async (req, res, next) => {
            res.send({hotNews, localNews});
          });

          app.listen(3003)
                `,
      }
    }
  };
</script>