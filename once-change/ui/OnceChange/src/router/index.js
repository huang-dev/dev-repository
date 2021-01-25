import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/components/Login'
import Home from '@/components/home/Home'
import MenuManage from '@/components/home/components/system/menu/MenuManage'
import RoleManage from '@/components/home/components/system/role/RoleManage'

Vue.use(Router)

// 避免重复点击菜单报错 star
const VueRouterPush = Router.prototype.push
Router.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

//replace
const VueRouterReplace = Router.prototype.replace
Router.prototype.replace = function replace (to) {
  return VueRouterReplace.call(this, to).catch(err => err)
}
// 避免重复点击菜单报错 end

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
          path: 'menumanage',
          name: 'menumanage',
          component: MenuManage
        },
        {
          path: 'rolemanage',
          name: 'rolemanage',
          component: RoleManage
        }
      ]
    }
  ]
})