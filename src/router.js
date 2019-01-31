import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import Home from './components/Home'
import Faq from './components/Faq'
import Login from './components/Login'
const routes=[
    {path:'/',name:'home','component':Home},
    {path:'/faq',name:'faq','component':Faq},
    {path:'/login',name:'login','component':Login},
];
const router=new VueRouter({routes,mode:'history'});
export default router;