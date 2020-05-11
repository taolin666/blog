const fs = require('fs');
const path = require('path');
const {getToken, addToken} = require('./token')

const readFile = function(fileUrl, callback) {
  fs.readFile(path.join(__dirname, `./${fileUrl}.json`), 'utf-8', async (err , data) => {
    if(err) {
      throw err
    }
    // if (fileUrl === 'data/data') {
    //   let dbToken = JSON.parse(data)[1] || {};
    //   if (dbToken && dbToken.token) {
    //     let beginTime = parseInt(dbToken.token.split('&')[1]);
    //     let nowTime = new Date().valueOf();
    //     if ((beginTime+10000) < nowTime) {
    //       console.dir('失效')
    //       // 登陆半小时了，token失效
    //       res.send({
    //         code: -100,
    //         message: '登陆半小时了，token失效了'
    //       })
    //       return;
    //     }
    //   }
    // } else {
    //   return readFile(res, 'data/data', callback)
    // }

    // data, dbToken = {}
    callback(data)
  })

  // fs.readFile(path.join(__dirname, './data/data.json'), 'utf-8', async (err , data) => {
  //   if(err) {
  //     throw err
  //   }
  //   let dbToken = JSON.parse(data)[1] || {};
  //   let beginTime = parseInt(dbToken.token.split('&')[1]);
  //   let nowTime = new Date().valueOf();
  //   console.log('dbToken.token', dbToken.token)
  //   if (dbToken && dbToken.token && (beginTime+10000) < nowTime) {
  //     console.dir('失效')
  //     // 登陆半小时了，token失效
  //     res.send({
  //       code: -100,
  //       message: '登陆半小时了，token失效了'
  //     })
  //     return;
  //   }
  //   if (fileUrl === 'data/data') {
  //     callback(data, dbToken = {})
  //   } else {
  //     // callback(data)
  //     fs.readFile(path.join(__dirname, `./${fileUrl}.json`), 'utf-8', async (errors , data) => {
  //       if (errors) {
  //         throw errors
  //       }
  //       callback(data)
  //     })
  //   }
  // })
}

const readFileSync = function(fileUrl, callback) {
  fs.readFileSync(path.join(__dirname, `./${fileUrl}.json`), 'utf-8', async (err , data) => {
    if(err) {
      throw err
    }
    callback(data)
  })
}
const writeFile = async function(res, info, resMessage) {
  console.log('resMessage', resMessage)
  fs.writeFile(path.join(__dirname, './data/data.json'), JSON.stringify(info), function(err) {
    if (err) {
      console.log('err', err)
    }
    if (resMessage) {
      res.send(resMessage)
    }
  })
}
const writeFileHandle = async function(res,url, info, resMessage) {
  fs.writeFile(path.join(__dirname, url), JSON.stringify(info), function(err) {
    if (err) {
      console.log('err', err)
    }
    if (resMessage) {
      res.send(resMessage)
    }
  })
}

// 检查token是否过期
const updateToken =  function(res) {
  readFile('data/data', function(data) {
    // 拿到用户信息
    let info = JSON.parse(data)[0] || [];
    // 拿到token =》 字符串&登陆时的时间戳
    let token = JSON.parse(data)[1].token || '';
    // 拿到token前面的字符串
    let beforeToken = token.split('&')[0];
    // 拿到token后面的时间戳
    let beginTime = parseInt(token.split('&')[1] || '');
    let nowTime = new Date().valueOf();
    console.log('beginTime+600', beginTime+1000 * 1800)
    console.log('nowTime', nowTime)
    console.log((beginTime+1000 * 1800) < nowTime)
    if ((beginTime+1000 * 1800) < nowTime) {
      // 登陆半小时了，token失效 重定向
      res.send({
        code: -100,
        message: '登陆半小时了，token失效了,'
      })
      return;
    } else {
      beforeToken
      let a = [[...info], {token: `${beforeToken}&${nowTime}`}]
      console.log('a', a)
      writeFile(res, a)
    }
  })
}



module.exports = {readFile, writeFile, readFileSync, updateToken, writeFileHandle}