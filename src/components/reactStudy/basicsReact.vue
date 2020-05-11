<template>
<div style="height:100%">
  <Header></Header>
  <el-container style="height: calc(100% - .6rem); border: 1px solid #eee">
    <Aside></Aside>
    <el-main style="background:#fff;">
      <el-alert
        title="提示"
        type="warning">
        react-todoList
      </el-alert>
      <div class="bordermain">
        <div class="container">
          <el-card class="box-card">
            <div class="text item yufa">
              <!-- <p style="padding:0;">1</p> -->
              <p>1直接看todolist代码</p>
              <pre>
                <code>
                {{oneBug}}
                </code>
              </pre>
              <p>2直接看todoItem的代码，是todoList的子组建</p>
              <pre>
                <code>
                {{twoBug}}
                </code>
              </pre>
            </div>
            <el-card class="box-card">
              <p>父向子组建数据：在父组建用属性的方式传入，子组建直接用this.props.属性名接收；</p>
              <p>父向子组建方法：在父组建用属性名：{父组建方法}的方式传入，子组建直接用this.props.方法名接收；</p>
              <p>子向父传（index）值：handleClick() { const {itemDelete, index} = this.props; itemDelete(index) }</p>
            </el-card>
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
        import React, { Component, Fragment } from 'react';
        import TodoItem from "./TodoItem";
        import "./base.css";

        class TodoList extends Component {
          constructor(props) {
            super(props)
            this.state = {
              inputValue: '',
              list: []
            }
            // 这样写性能更好
            this.handleInputChange = this.handleInputChange.bind(this);
            this.handleButtonClick = this.handleButtonClick.bind(this);
            this.handleClickDelet = this.handleClickDelet.bind(this)
          }
          render() {
            return (
              <Fragment>
                {/* label中的htmlFor代替原来的for */}
                <label htmlFor='toInput'>请输入：</label>
                <input
                id='toInput'
                // react 用className代替class
                className='inputClass'
                value={this.state.inputValue}
                onChange={this.handleInputChange}/>
                <button onClick={this.handleButtonClick}>按钮</button>
                <ul>
                  {this.getTodoList()}
                </ul>
              </Fragment>
            );
          }
          getTodoList() {
            return this.state.list.map((item,index) => {
              return <TodoItem
              key={index}
              content={item}
              index={index}
              itemDelete={this.handleClickDelet}
              ></TodoItem>
            })
          }
          handleInputChange(e) {
            const inputValue = e.target.value
            this.setState(() => ({inputValue}))
          };
          handleButtonClick() {
            this.setState((prevState)=>  ({
              list:[...prevState.list, prevState.inputValue],
              inputValue: ''
            }))
          };
          handleClickDelet(i) {
            this.setState((prevState) => {
              const list = [...prevState.list];
              list.splice(i, 1);
              return {list}
            })
          }
        }

        export default TodoList;
                `,
        twoBug: `
          import React, { Component } from 'react';
          class TodoItem extends Component {
            constructor(props) {
              super(props);
              this.handleClick = this.handleClick.bind(this)
            }
            render() {
              return (
                <div
                onClick={this.handleClick}
                >
                  {this.props.content}
                </div>
              );
            }
            // 在子组建定义一个方法，然后在方法里调用父组建的方法
            handleClick() {
              const {itemDelete, index} = this.props
              itemDelete(index)
            }
          }
          export default TodoItem;
        `,
      }
    }
  };
</script>