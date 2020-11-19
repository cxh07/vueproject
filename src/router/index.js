import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Index from "../components/Index";
import Login from "../components/Login";
import Regist from "../components/Regist";
import Error from "../components/Error";
import Catalog from "../components/Catalog";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path:'/login',

      component:Login
    },
    {
      path:'/regist',

      component:Regist
    },
    {
      path:'/catalog',
      component:Catalog
    },
    {
      path:'*',
      name:'404',
      component:Error
    }
  ]
})
