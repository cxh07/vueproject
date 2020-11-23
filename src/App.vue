<template>
  <div id="app">
    <header-vue v-show="$route.name!='404'"></header-vue>
    <router-view/>
    <Footer v-show="$route.name!='404'&&$route.name!='Reding'"></Footer >

  </div>
</template>

<script>

import HeaderVue from "./components/Head";
import Footer from "./components/Footer";
export default {

    name: 'App',
    components: {Footer, HeaderVue},

    created() {
        //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("store") ) {
        this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
    }

    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload",()=>{
        sessionStorage.setItem("store",JSON.stringify(this.$store.state))
    })
    }
}


</script>

<style>
  #app{
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  a{
    text-decoration: none;
  }
  ul{
    list-style: none;

  }
.el-popover{
  height: 500px;
  overflow: auto;
  margin-top: 70px;
   -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
</style>
