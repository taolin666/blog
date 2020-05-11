<template>
<div style="height:100%">
  <Header></Header>
  <el-container style="height: calc(100% - .6rem); border: 1px solid #eee">
    <Aside></Aside>
    <el-main style="background:#fff;">
      <el-alert
        title="提示"
        type="warning">
        JavaScript 二叉树
      </el-alert>
      <div class="bordermain">
        <div class="container">
          <el-card class="box-card">
            <div class="text item yufa">
              <p>1第一次接触二叉树（创建二叉树的节点，插入，中序遍历，先序遍历，后序遍历，查找最小值，查找最大值，查找指定值，查找树最大深度）</p>
              <pre>
                <code>
                {{oneBug}}
                </code>
              </pre>
            </div>
          </el-card>
          <el-card style="margin:10px 0;">
            <div>
              <p>重点看下图，（中序遍历，先序遍历，后序遍历）的顺序</p>
              <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1579024851997&di=de22c285145bb6552608ed7515d14026&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F-vo3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2Fb151f8198618367a676201e92b738bd4b31ce51f.jpg" alt="">
              <p>2如果看不懂，推荐慕课网的二叉树视频讲解的很清晰，<a href="https://www.imooc.com/learn/888">点次进入</a>，二叉树另外方法代码如下</p>
              <pre>
                <code>
                {{twoBug}}
                </code>
              </pre>
            </div>
          </el-card>
          <el-card>
            <p>本篇研究来自：<a href="http://www.conardli.top/docs/dataStructure/%E4%BA%8C%E5%8F%89%E6%A0%91/%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E5%9F%BA%E6%9C%AC%E6%93%8D%E4%BD%9C.html">awesome-coding-js</a></p>
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
        // 创建二叉树的节点
          function Node(data, left, right) {
            this.data = data;
            this.left = left;
            this.right = right;
            this.show = show;
          }
          function BST() {
            this.root = null;
            this.insert = insert; // 插入操作
            this.inOrder = inOrder; // 中序遍历
            this.getMin = getMin; // 找出最小值
            this.getMax = getMax; // 找出最大值
            this.find = find; // 找出指定数据
            this.getDeep = getDeep;
          }
          // 显示
          function show() {
            return this.data;
          }
          // 插入(第一次了解二叉树，看的有点懵，debug就能清晰的懂到走到哪了)
          function insert(data) {
            let n = new Node(data, null, null)
            if (this.root === null) {
              this.root = n
            } else {
                var current = this.root;
                var parent;
                // while一直遍历，知道遇见break就停止
              while (true) {
                // 如果是第二次循环的话，current已经是上一个current的left了。
                parent = current;
                if (data < current.data) {
                  // current可能为空也可能有子左节点，
                  current = current.left
                  // 如果有子左节点就再走while遍历，直到current没有left就停止且将传入的值赋值给parent.left
                  if(current === null) {
                    parent.left = n;
                    break;
                  }
                } else {
                  current = current.right;
                  if (current === null) {
                    parent.right = n;
                    break;
                  }
                }
              }
            }
          }

          // 中序遍历--采用递归实现
          function inOrder(node) {
            if (node) {
              inOrder(node.left)
              console.log(node.show())
              inOrder(node.right)
            }
          }
          // 先序遍历
        function preOrder(node) {
          if (!(node == null)) {
            console.log(node.show());
            preOrder(node.left);
            preOrder(node.right);
          }
        }
        // 后序遍历
        function postOrder(node) {
          if (!(node == null)) {
            postOrder(node.left);
            postOrder(node.right);
            console.log(node.show());
          }
        }

        // 查找最小值
        function getMin() {
          var current = this.root;
          while (current.left) {
            current = current.left
          }
          return current.data;
        }
        // 查找最大值
        function getMax() {
          var current = this.root;
          while (current.right) {
            current = current.right
          }
          return current.data;
        }
        // 查找指定值
        function find(data) {
          var current = this.root;
          while (current) {
            if (current.data === data) {
              return current;
            } else if (current.data > data) {
              current = current.left
            } else {
              current = current.right
            }
          }
          return null
        }

        //查找树最大深度
        function getDeep (node, deep) {
          let deep = deep || 0;
          if (node === null) {
            return deep;
          }
          deep++;
          var leftDeep = getDeep(node.left, deep);
          var rightDeep = getDeep(node.right, deep);
          return Math.max(leftDeep, rightDeep)
        }

          var nums = new BST()
          nums.insert(8)
          nums.insert(5)
          nums.insert(10)
          nums.insert(6)
          nums.inOrder()
          nums.getMin()
          nums.find(6)
                `,
        twoBug: `
        function BinaryTree() {
          var Node = function(key) {
            this.key = key;
            this.left = null;
            this.right = null;
          }
          var root = null;
      // 插入
          this.insert = function(key) {
            var newNode = new Node(key);
            if (root === null) {
              root = newNode
            } else {
              insertNode(root, newNode)
            }
          }
          var insertNode = function(node, newNode) {
            if (node.key > newNode.key) {
              if (node.left === null) {
                node.left = newNode
              } else {
                insertNode(node.left, newNode)
              }
            } else {
              if (node.right === null) {
                node.right = newNode
              } else {
                insertNode(node.right, newNode)
              }
            }
          }
          // 中序遍历
          this.inOrderTraverse = function() {
            inOrderTraverseNode(root)
          }
          var inOrderTraverseNode= function(root) {
            if (root !== null) {
              inOrderTraverseNode(root.left)
              console.log(root.key)
              inOrderTraverseNode(root.right)
            }
          }
          // 前序遍历
          this.preOrderTraverse = function() {
            preOrderTraverseNode(root)
          }
          var preOrderTraverseNode= function(root) {
            if (root !== null) {
              console.log(root.key)
              preOrderTraverseNode(root.left)
              preOrderTraverseNode(root.right)
            }
          }
          // 后序遍历
          this.postOrderTraverse = function() {
            postOrderTraverseNode(root)
          }
          var postOrderTraverseNode= function(root) {
            if (root !== null) {
              postOrderTraverseNode(root.left)
              postOrderTraverseNode(root.right)
              console.log(root.key)
            }
          }
          // 最小值
          this.min = function() {
            return minNode(root)
          }
          var minNode = function(node) {
            if(node) {
              while (node && node.left !== null) {
                node = node.left
              }
              return node.key;
            }
            return null;
          }
          // 最大值
          this.max = function() {
            return maxNode(root)
          }
          var maxNode = function(node) {
            if(node) {
              while (node && node.right !== null) {
                node = node.right
              }
              return node.key;
            }
            return null;
          }

          // 查找节点
          this.seach = function(key) {
            return serchNode(root, key)
          }
          serchNode = function(node, key) {
            if (node === null) {
              return false
            } 
            if (node.key > key) {
              return serchNode(node.left, key)
            } else if (node.key< key) {
              return serchNode(node.right, key)
            } else {
              return true
            }
          }

          // 删除节点
          this.remove = function(key) {
            removeNode(root, key)
          };
          var findMinNode = function(node) {
            if(node) {
              while (node && node.left !== null) {
                node = node.left
              }
              return node;
            }
          }
          var removeNode = function(node, key){
            if (node === null) {
              return null;
            }
            if (node.key > key) {
              node.left = removeNode(node.left, key)
              return node;
            } else if (node.key < key) {
              node.right = removeNode(node.right, key)
              return node;
            } else {
              if (node.left === null && node.right === null) {
                node = null
                return node;
              } else if (node.left === null) {
                node = node.right 
                return node;
              } else if (node.right === null) {
                node = node.left
                return null;
              } else {
                var aux = findMinNode(node.right)
                node.key = aux.key;
                node.right = removeNode(node.raight, aux.key)
                return node;
              }
            }
          }
        }
        
        var nodes = [8,3,1,6,14,4,7,13]
        var binaryTree = new BinaryTree()
        // 插入
        nodes.forEach(function(key){
          binaryTree.insert(key)
        })
        // 中序遍历
        binaryTree.inOrderTraverse() //1，3，4，6，7，8，13，14
        // 前序遍历
        binaryTree.preOrderTraverse() //8，3，1，6，4，7，14，13
        // 后序遍历
        binaryTree.postOrderTraverse() //1,4,7,6,3,13,14,8
        // 最小值
        console.log(binaryTree.min())
        // 最大值
        console.log(binaryTree.max())
        // 查找节点
        console.log(binaryTree.seach(7))
        // 删除节点
        binaryTree.remove(4)
        `,
      }
    }
  };
</script>