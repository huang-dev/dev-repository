import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/components/Login'
import Home from '@/components/home/Home'
import MenuManage from '@/components/home/components/system/menu/MenuManage'
import RoleManage from '@/components/home/components/system/role/RoleManage'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [{
          path: '/menumanage',
          name: 'menumanage',
          component: MenuManage
        },
        {
          path: '/rolemanage',
          name: 'rolemanage',
          component: RoleManage
        }
      ]
    }
  ]
})