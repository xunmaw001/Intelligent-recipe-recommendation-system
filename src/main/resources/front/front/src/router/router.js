import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Messages from '../pages/messages/list'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import caishileixingList from '../pages/caishileixing/list'
import caishileixingDetail from '../pages/caishileixing/detail'
import caishileixingAdd from '../pages/caishileixing/add'
import caipuxinxiList from '../pages/caipuxinxi/list'
import caipuxinxiDetail from '../pages/caipuxinxi/detail'
import caipuxinxiAdd from '../pages/caipuxinxi/add'
import pingfenxinxiList from '../pages/pingfenxinxi/list'
import pingfenxinxiDetail from '../pages/pingfenxinxi/detail'
import pingfenxinxiAdd from '../pages/pingfenxinxi/add'
import aboutusList from '../pages/aboutus/list'
import aboutusDetail from '../pages/aboutus/detail'
import aboutusAdd from '../pages/aboutus/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'messages',
					component: Messages
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'caishileixing',
					component: caishileixingList
				},
				{
					path: 'caishileixingDetail',
					component: caishileixingDetail
				},
				{
					path: 'caishileixingAdd',
					component: caishileixingAdd
				},
				{
					path: 'caipuxinxi',
					component: caipuxinxiList
				},
				{
					path: 'caipuxinxiDetail',
					component: caipuxinxiDetail
				},
				{
					path: 'caipuxinxiAdd',
					component: caipuxinxiAdd
				},
				{
					path: 'pingfenxinxi',
					component: pingfenxinxiList
				},
				{
					path: 'pingfenxinxiDetail',
					component: pingfenxinxiDetail
				},
				{
					path: 'pingfenxinxiAdd',
					component: pingfenxinxiAdd
				},
				{
					path: 'aboutus',
					component: aboutusList
				},
				{
					path: 'aboutusDetail',
					component: aboutusDetail
				},
				{
					path: 'aboutusAdd',
					component: aboutusAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
