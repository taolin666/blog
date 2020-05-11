<template>
<div class="container">
  <h1>login</h1>
  <router-link :to="'/reg'">
    <h2><el-button>注册</el-button></h2>
  </router-link>
  <h2><el-button @click="forgetPsw">忘记密码</el-button></h2>
  <!-- <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585210869039&di=59aad5052259f24110b71c66fb9466b5&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fd62a6059252dd42a16533d85083b5bb5c9eab841.jpg" alt=""> -->
  <div class="centers">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="手机号" prop="tel">
        <el-input v-model.number="ruleForm.tel" maxlength="11"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" maxlength="16" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</div>
  
</template>
<script>
  import { mapMutations } from 'vuex'
  export default {
    data() {
      var checkTel = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('号码不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else if(value.toString().length !== 11) {
            callback(new Error('号码位数必须是11位'));
          } else if(value.toString()[0] !== '1' || !['3','4','5','6','7','8','9'].includes(value.toString()[1])) {
            callback(new Error('号码输入有误'));
          } else {
            callback();
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else if(value.toString().length < 6) {
          callback(new Error('密码长度为6-16位'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          tel: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          tel: [
            { validator: checkTel, trigger: 'blur' }
          ]
        }
      };
    },
    mounted() {
      window.sessionStorage.removeItem('token')
    },
    methods: {
      // ...mapMutations([
      //   'setPhone'
      // ]),
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http({
              url: 'login',
              // url: '/login',
              // baseURL: `/`,
              method: 'POST',
              data: {
                pass: this.ruleForm.pass,
                tel: this.ruleForm.tel
              }
            }).then(res => {
              if (res.code === 0 && res.token) {
                window.sessionStorage.removeItem('token')
                window.sessionStorage.setItem('token', JSON.stringify(res.token))
                // this.setPhone(this.ruleForm.tel)
                this.$store.commit('setPhone', this.ruleForm.tel)
                this.$message.success('登陆成功');
                this.$router.push('/')
              } else {
                this.$message.error(res.message || '登陆失败了！');
              }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      forgetPsw() {
        this.$message.info('此功能没有完成，原因是阿里云服务器发送短消息需要收费的，简单一个字：‘我很穷，’哦，是三个字。 可直接联系本人查找账号密码，本人手机号和微信：15270505447');
      },
    }
  }
</script>
<style scoped>
.container {
  width: 100%;
  height: 100%;
  position: relative;
}
  .centers {
    width: 500px;
    height: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .container h1 {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    margin: 40px;
    font-size: 36px;
    z-index: 1000
  }
  .container h2 {
    float: right;
    padding: 10px 20px;
  }
  .container img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>