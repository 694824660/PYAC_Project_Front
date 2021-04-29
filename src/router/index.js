import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//在首页点击退出登录后，页面将重定向到首页，防止报错对VueRouter进行err回收
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Index'),
      meta: {title: '主页'}
    },
    {
      path: '/post',
      name: 'post',
      component: () => import('@/views/Post'),
      meta: {title: '博文'}
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/auth/Register'),
      meta: {title: '注册页面'}
    },
    {
      path: '/404',
      name: '404',
      component: () => import('@/views/error/404'),
      meta: {title: '404-NotFound'}
    },
      // 登录
    {
      name: 'login',
      path: '/login',
      component: () => import('@/views/auth/Login'),
      meta: { title: '登录'}
    },
      // 发布
    {
      name: 'post-create',
      path: '/post/create',
      component: () => import('@/views/post/Create'),
      meta: { title: '信息发布', requireAuth: true }
    },
      // 编辑
    {
      name: 'topic-edit',
      path: '/topic/edit/:id',
      component: () => import('@/views/post/Edit'),
      meta: { title: '编辑' , requireAuth: true}
    },
    {
      name: "post-detail",
      path: "/post/:id",
      component: () => import("@/views/post/Detail"),
      meta: { title: "详情" },
    },
    {
      name: 'tag',
      path: '/tag/:name',
      component: () => import('@/views/tag/Tag'),
      meta: { title: '主题列表' }
    },
      // 检索
    {
      name: 'search',
      path: '/search',
      component: () => import('@/views/Search'),
      meta: { title: '检索' }
    },
      // 用户主页
    {
      name: 'user',
      path: '/member/:username/home',
      component: () => import('@/views/user/Profile'),
      meta: { title: '用户主页' }
    },
      // 用户设置
    {
      name: 'user-setting',
      path: '/member/:username/setting',
      component: () => import('@/views/user/Setting'),
      meta: { title: '设置' , requireAuth: true}
    },
    {
      path: '*', //当输入地址非上述地址时定向到404页面
      redirect: '/404',
      hidden: true
    }
  ]
  
})
