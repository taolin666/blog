const menuList = [
    {
        title: '首页',
        key: '/',
        idx: '0',
    },
    {
        title: 'CSS',
        // key: '/CSS',
        idx: '1',
        children: [
            {
                title: 'flex布局',
                key: '/CSS/flex',
                idx: '1-1',
            },
        ]
    },
    {
        title: 'HTML',
        key: '/html',
        idx: '2',
    },
    {
        title: 'JavaScript',
        // key: '/JavaScript',
        idx: '3',
        children: [
            {
                title: '字符串的方法',
                key: '/JavaScript/string',
                idx: '3-1',
            },
            {
                title: '数组的方法',
                key: '/JavaScript/array',
                idx: '3-2',
            }
        ]
    },
    {
        title: 'BUG总结',
        // key: '/rich'
        idx: '4',
        children: [
            {
                title: '全局安装vue',
                key: '/BUG/installGolbalVue',
                idx: '4-1',
            },
            {
                title: '七鱼客服连接',
                key: '/BUG/qiyukf',
                idx: '4-2',
            },
            {
                title: '兼容性问题',
                idx: '4-3',
                // key: ''
                children: [
                    {
                        title: 'iphoneX底部tab',
                        key: '/BUG/compatibility/iphoneX',
                        idx: '4-3-1',
                    },
                ]
            }
        ]
    },
    {
        title: '前端功能',
        // key: '/city'
        idx: '5',
        children: [
          {
            title: '随机数',
            key: '/functions/random',
            idx: '5-1',
          },
          {
            title: 'vue登录权限',
            key: '/functions/authority',
            idx: '5-2',
          },
          {
            title: 'Tools',
            key: '/functions/tools',
            idx: '5-3',
          },
        ]
    },
    {
        title: '数据结构',
        // key: '/order',
        idx: '6',
        children: [
            {
                title: '数据结构转化',
                key: '/algorithms/datas',
                idx: '6-1',
            },
            {
                title: 'js二叉树',
                key: '/algorithms/authority',
                idx: '6-2',
            },
            {
                title: 'js小游戏',
                key: '/algorithms/jsGame',
                idx: '6-3',
            },
            {
                title: 'leetcode',
                // key: ''
                idx: '6-4',
                children: [
                  {
                    title: '领扣题目',
                    key: '/algorithms/leetcode/questions',
                    idx: '6-4-1',
                  }
                ]
            },
        ]
    },
    {
        title: 'react',
        // key: '',
        idx: '7',
        children: [
          {
            title: '初学react',
            key: '/react/onceReact',
            idx: '7-1',
          },
          {
            title: '脚手架及less',
            key: '/react/cliAndLess',
            idx: '7-2',
          },
          {
            title: 'react路由',
            key: '/react/reactRoute',
            idx: '7-3',
          },
        ]
    },
    {
        title: '其他',
        // key: '/other'
        idx: '8',
        children: [
          {
            title: '面试题',
            key: '/other/interView',
            idx: '8-1',
          },
          {
            title: 'vueBus的使用',
            key: '/other/vueBus',
            idx: '8-2',
          },
          {
            title: 'h5金额键盘',
            key: '/other/keyBoard',
            idx: '8-3',
          },
        ]
    },
];
export default menuList;