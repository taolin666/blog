<template>
<div style="height:100%" v-loading="loading">
  <Header></Header>
  <el-container style="height: calc(100% - .6rem); border: 1px solid #eee">
    <Aside></Aside>
    <el-main style="background:#fff;">
      <h1 style="text-align: center;margin-bottom: 30px;">{{getDate()}}</h1>
      <el-alert
        title="提示"
        type="warning">
        此篇包含todoList和随机选中功能
      </el-alert>
      <div class="bordermain">
        <el-container style="width: 100%;">
          <el-card class="box-card" style="width: 100%;">
            <div class="text item yufa">
            <div class="headerInput">
              <el-input
                size="small"
                placeholder="请输入内容"
                v-model="input"
                clearable
                @keyup.enter.native= "add"
                >
              </el-input>
              <el-button type="primary" plain @click="add">新增</el-button>
              <el-button type="warning" plain @click="clearList">清空</el-button>
            </div>
            <div v-for="(item, index) in list" :key='index'>
              <div class="itemsClass" :class="{'addClass': isGreen === index}" >
                <span style="width:100%;" @click="toModal(item, index)">{{item}}</span>
                <!-- <el-input placeholder="请输入内容" v-model="item" :disabled="true"></el-input> -->
                <span class="el-icon-circle-close" @click="del(index)"></span>
              </div>
            </div>
            <el-button type="info" style="margin-top:30px;" plain @click="RandomList">随机</el-button>
            </div>
          </el-card>
        </el-container>
        <!-- <div class="container">
          <el-collapse >
            <el-collapse-item v-for="(item, index) in infoArr" :key="index" :title="(index+1)+ '.' +item.tip" :name="index">
              <div>{{item.html}}</div>
              <div>{{item.text}}</div>
              <pre>
                <code>
                {{item.example}}
                </code></pre>
            </el-collapse-item>
          </el-collapse>
        </div> -->
      </div>
    </el-main>
  </el-container>
  <el-dialog
    title="编辑"
    :visible.sync="dialogVisible"
    width="30%">
    <el-input v-model="editContent" placeholder="请输入内容"></el-input>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="confimEdit">确 定</el-button>
    </span>
  </el-dialog>
</div>

</template>
<style scoped>
.yufa {
  width: 100%;
}
  .yufa p{
    width: 100%;
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
  .headerInput {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .headerInput .el-input {
    width: 70%;
  }
  .itemsClass {
    width: 70%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
  }
  .addClass {
    background-color: yellowgreen;
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
        input: '',
        list: [],
        dialogVisible: false,
        editContent: '',
        editIndex: '',
        tipContent: '',
        isGreen: null,
        timer: null,
        loading: false
      }
    },
    methods: {
      getDate(type = '-') {
        let Time = new Date()
        function istenNum(DateNum) {
          return DateNum >= 10 ? DateNum : '0' + DateNum
        }
        return Time.getFullYear() + type + istenNum(Time.getMonth()+1) + type + istenNum(Time.getDate()) + ' ' + istenNum(Time.getHours()) + ':' + istenNum(Time.getMinutes()) + ':' + istenNum(Time.getSeconds())
      },
      add() {
        this.list.push(this.input)
        this.input = ''
      },
      del(i) {
        this.list.splice(i, 1)
      },
      toModal(info , i) {
        this.editContent = info
        this.editIndex = i
        this.dialogVisible = true;
      },
      confimEdit() {
        if(!this.editContent) {
          return this.$message({
            message: '编辑不能为空，如果要为空请点击删除当条',
            type: 'warning'
          });
        }
        this.list.splice(this.editIndex, 1, this.editContent)
        this.dialogVisible = false
      },
      clearList() {
        this.list = []
      },
      RandomList() {
        this.loading = true
        this.isGreen = null
        if (this.list.length === 0) {
          return this.$message({
            message: '请先新增数据再选取随机点',
            type: 'warning'
          });
        }
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.isGreen = Math.floor(Math.random() * this.list.length);
          this.tipContent
          this.loading = false
        }, 2000)
      }
    },
    destroyed() {
      this.timer = null
    }
  };
</script>