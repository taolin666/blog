<template>
<div class="container">
  <h1>register</h1>
  <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585210763946&di=1a7dd97dbfaa4c8c057989c12ed74245&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20150811%2FImg418554622.jpg" alt="">
  <div class="centers">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="手机号" prop="tel">
          <el-input v-model.number="ruleForm.tel" maxlength="11"></el-input>
        </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" maxlength="16" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" maxlength="16" autocomplete="off"></el-input>
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
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if(value.toString().length < 6) {
          callback(new Error('密码长度为6-16位'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          tel: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          tel: [
            { validator: checkTel, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http({
              url: 'regist',
              method: 'POST',
              data: {
                pass: this.ruleForm.checkPass,
                tel: this.ruleForm.tel
              }
            }).then(res => {
              console.log(res)
              if (res.code === 0) {
                this.$message.success('注册成功');
                this.$router.push('/login')
              } else {
                this.$message.error(res.message || '注册失败了！');
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
      }
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
  .container img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>