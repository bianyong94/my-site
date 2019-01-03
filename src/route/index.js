import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router) // 注册路由

// 引入hellworld组件
const table = (resolve => {
  require.ensure(['@/components/main/children/table.vue'], () => {
    resolve(require('@/components/main/children/table.vue'))
  })
})
//  第二种写法动态import进行代码分块

const filmSearch = (resolve => {
  require.ensure(['@/components/main/children/filmSearch.vue'], () => {
    resolve(require('@/components/main/children/filmSearch.vue'))
  })
})

const upload = (resolve => {
  require.ensure(['@/components/main/children/upload.vue'], () => {
    resolve(require('@/components/main/children/upload.vue'))
  })
})

const test = (resolve => {
  require.ensure(['@/components/main/children/test.vue'], () => {
    resolve(require('@/components/main/children/test.vue'))
  })
})

const login = (resolve => {
  require.ensure(['@/components/login'], () => {
    resolve(require('@/components/login'))
  })
})

export default new Router({
  routes: [
    {
      path: '/upload/:id',
      props: true,
      name: 'upload',
      component: upload,
      meta: {
        title: 'this is upload',
        description: 'this is description'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/table',
      name: 'table',
      component: table
    },
    {
      path: '/filmSearch',
      name: 'filmSearch',
      component: filmSearch
    }
  ]
})
