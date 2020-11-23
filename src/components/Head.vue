<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    router
    id="nav">
    <!--    logo-->
    <div class="logo"></div>
    <!--    导航-->
    <el-menu-item index="/">首页</el-menu-item>
    <el-menu-item index="2">玄幻</el-menu-item>
    <el-menu-item index="3">仙侠</el-menu-item>
    <el-menu-item index="4">言情</el-menu-item>
    <el-menu-item index="5">历史</el-menu-item>
    <el-menu-item index="hello">网页</el-menu-item>
    <el-menu-item index="7">女生</el-menu-item>
    <el-menu-item index="8">恐怖</el-menu-item>
    <el-submenu index="9">
      <template slot="title">更多</template>
      <el-menu-item index="9-1">总排行榜</el-menu-item>
      <el-menu-item index="9-2">月排行榜</el-menu-item>
      <el-menu-item index="9-3">周排行榜</el-menu-item>
    </el-submenu>


    <el-menu-item index="regist" class="regist_right" v-if="!this.$store.state.login_state"> 注册</el-menu-item>
    <el-menu-item index="login" class="login_right" v-if="!this.$store.state.login_state">登录</el-menu-item>

     <el-submenu class="user_right" index="geren"  v-if="this.$store.state.login_state">
      <template slot="title" >{{this.$store.state.user.username}}</template>
      <el-menu-item v-bind:index="this.$global.user.id+'/geren'">个人中心</el-menu-item>
      <el-menu-item v-bind:index="this.$global.user.id+'/shujia'">我的书架</el-menu-item>
      <el-menu-item index="#" v-on:click="signOut">退出登录</el-menu-item>
    </el-submenu>

    <div class="sea_btn hidden-xs-only">
      <el-button type="primary" plain size="medium" v-on:click="book_search">搜索</el-button>
    </div>

    <!--搜索框-->
    <div class="search  hidden-xs-only" v-on:keyup.enter="book_search">
      <el-input
        size="medium"
        placeholder="请输入内容"
        v-model="search"
        clearable>

      </el-input>
    </div>


    <!--登录注册按钮-->

  </el-menu>
</template>

<script>
    export default {
        name: "header-vue",
        data() {
            return {
                activeIndex: '', //激活的导航的index


                search: '' ,//搜索内容

            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            book_search:function () {
                console.log('搜索内容：'+this.search)
            },
            signOut:function () {
              this.$store.state.login_state=false;
              this.$store.state.user={}
            }
        },

    }
</script>

<style scoped>
  #nav {
    max-width: 100%;
    height: auto;
    box-sizing: border-box;
  }

  #nav .logo {
    width: 143px;
    height: 31px;
    margin-left: 20px;
    margin-right: 15px;
    margin-top: 15px;
    background: url("./../assets/mylogo.png") no-repeat;
    float: left;
  }

  .search {
    float: right;
    width: 150px;
    height: 35px;
    margin-top: 15px;
    margin-right: 10px;
  }

  .sea_btn {
    float: right;
    margin-right: 250px;
    margin-top: 15px;

  }
  .login_right,.regist_right,.user_right{
    float: right;

  }
  .regist_right,.user_right{
    margin-right: 50px;
  }
</style>
