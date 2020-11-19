<template>
  <div class="loginBox">
    <el-container class="main">
      <el-col :span="12">
        <router-link to="/">
          <img src="../assets/enterzh.jpg" alt="">
        </router-link>
      </el-col>

      <el-col :span="12">
        <div>
          <!--          <div class="login_top">-->
          <!--            <h2>用户登录</h2>-->
          <!--          </div>-->

          <el-tabs class="loginfrom">
            <el-tab-pane label="账号密码登录">
              <el-form ref="form" status-icon :rules="rules" label-position="top" :model="form" label-width="80px">
                <el-form-item label="用户名" prop="username">

                  <el-input prefix-icon='el-icon-mobile-phone' clearable placeholder="请输入用户名"
                            v-model="form.username"></el-input>


                </el-form-item>

                <el-form-item label="密码" prop="password">

                  <el-input prefix-icon='el-icon-lock' type="password" clearable placeholder="请输入密码"
                            v-model="form.password"></el-input>


                </el-form-item>
                <el-form-item>
                  <el-row>
                    <el-col :span="12">
                      <el-checkbox v-model="re_checked">记住密码</el-checkbox>
                    </el-col>
                    <el-col :span="12">
                      <router-link to="/regist" style="float: right">没有账号？立即注册</router-link>
                    </el-col>
                  </el-row>
                </el-form-item>
                <el-form-item label="">

                  <el-button type="success" plain style="width: 100%" v-on:click="su_login">登录</el-button>

                </el-form-item>
              </el-form>
            </el-tab-pane>

            <el-tab-pane label="电话号码登录">
              <el-form ref="form1" status-icon :model="form1" :rules="rules" label-position="top" label-width="80px" >

                <el-form-item label="电话号码" prop="phone">

                  <el-input prefix-icon='el-icon-lock' type="text" status-icon clearable placeholder="请输入电话号码"
                            v-model="form1.phone" ></el-input>
                </el-form-item>

                <el-form-item label="短信验证码" prop="verify_code">

                      <el-input type="text" placeholder="验证码" status-icon clearable v-model="form1.verify_code" style="width: 55%;float: left"></el-input>

                      <el-button type="primary" :disabled="isDisable" style="width: 40%;float: left;margin-left: 5%" plain  @click="countDown()">{{content}}</el-button>

                </el-form-item>



                <el-form-item label="">

                  <el-button type="success" plain style="width: 100%" v-on:click="phone_login">确定</el-button>

                </el-form-item>

              </el-form>
            </el-tab-pane>

          </el-tabs>

        </div>

      </el-col>
    </el-container>
  </div>

</template>


<script>
    /**
     * 登录模块
     * 2020/11/6
     * Mr 曹
     * 功能：正则验证，记住密码功能。
     * 用户名正则规则：以英文大小写字母和数字组成6-16位字符串
     * */
    let Base64 = require('js-base64').Base64;
    export default {
        name: "Login",
        data() {
            var checkUsername = (rule, value, callback) => {
                if (/^[a-zA-Z]\w/.test(value) === false) {
                    callback(new Error('以英文大小写字母和数字组成,以字母开头！'));
                } else {
                    callback()
                }
            };
            var checkPhone = (rule, value, callback) => {
                if (/^1[3456789]\d{9}$/.test(value) == false) {
                    callback(new Error('请输入正确的电话号码'));
                } else {
                    callback()
                }
            }
            return {

                re_checked: true,
                form: {
                    username: "",
                    password: ''
                },
                form1: {
                    phone: '',
                    verify_code:''

                },
                rules: {
                    username: [
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                        {min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur'},
                        {validator: checkUsername, trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                        {min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur'},
                    ],
                    phone: [
                        {required: true, message: '请输入电话号码', trigger: 'blur'},
                        {validator: checkPhone, trigger: 'blur'}
                    ],
                    verify_code:[
                        {required: true, message: '请输入验证码', trigger: 'blur'},
                        {min:4, max: 4, message: '请输入正确的验证码', trigger: 'blur'},
                        ]

                },

                content: '发送验证码',  // 按钮里显示的内容
                totalTime: 60 ,//倒计时
                canclick:true,
                isDisable:false
            }
        },
        methods: {
            countDown:function() {
                if(!this.canclick){
                    return
                }
                this.canclick=false
                 this.isDisable=true
                this.content = this.totalTime + 's后重新发送'
                let clock = window.setInterval(() => {
                        this.totalTime--
                        this.content = this.totalTime + 's后重新发送'
                        if(this.totalTime==0){
                            window.clearInterval(clock)
                            this.content='重新发送'
                            this.totalTime=60;
                            this.canclick=true
                             this.isDisable=false
                        }
                    }, 1000)
                this.$http.get('http://127.0.0.1:5000/suiji')
                    .then(
                    function (data) {
                        alert(data.body)
                    }
                )
                    },


            su_login: function () {
                console.log(this.form.username);
                console.log(this.form.password);
                if (this.re_checked == true) {
                    this.setCookie(this.form.username, Base64.encode(this.form.password), 7)
                } else {
                    this.clearCookie()
                }

                //提交表单
                this.$refs.form.validate((valid) => {
                    if (valid) {
                        this.$http.post('http://127.0.0.1:5000/login/', this.form, {emulateJSON: true})
                            .then((data) => {
                                console.log(data.body)
                                if (data.body != null) {
                                    if (data.body != 'error') {

                                        this.$store.state.user = data.body


                                        this.$store.state.login_state = true

                                        this.$router.push({path:'/'})  //登录成功跳转首页
                                    } else if (data.body == 'error') {
                                        this.$confirm('账号或者密码错误', '提示', {
                                            confirmButtonText: '确定',
                                            cancelButtonText: '忘记密码',
                                            type: 'warning'
                                        }).then(() => {
                                            this.$message({
                                                type: 'success',
                                                message: '删除成功!'

                                            });
                                        }).catch(() => {
                                            this.$router.push({path: '/'})
                                        });
                                    }

                                } else {
                                    alert('获取数据错误')
                                }
                            })

                    }
                })

            },


            //手机登录表单提交
            phone_login:function(){

            },


            //设置cookie
            setCookie: function (c_name, c_pwd, exdays) {
                var exdate = new Date(); //获取时间
                exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
                //字符串拼接cookie
                window.document.cookie =
                    "userName" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
                window.document.cookie =
                    "userPwd" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
            },

            //读取cookie
            getCookie: function () {
                if (document.cookie.length > 0) {
                    this.re_checked = true
                    var arr = document.cookie.split("; "); //这里显示的格式需要切割一下自己可输出看下
                    for (var i = 0; i < arr.length; i++) {
                        var arr2 = arr[i].split("="); //再次切割
                        //判断查找相对应的值
                        if (arr2[0] == "userName") {
                            this.form.username = arr2[1]; //保存到保存数据的地方
                        } else if (arr2[0] == "userPwd") {
                            let paw = arr2[1];
                            this.form.password = Base64.decode(paw);
                        }
                    }
                } else {
                    this.re_checked = false
                }
            },
            //清除cookie
            clearCookie: function () {
                this.setCookie("", "", -1); //修改2值都为空，天数为负1天就好了
            },

            test: function () {
                alert(this.$global.user.username)
            }
        },
        mounted() {
            this.getCookie()
        },
        computed: {
            getlogin_states: function () {
                return this.$store.state.count
            }
        }
    }
</script>

<style scoped>
  .loginBox {

    background: #f1f2f3;
    padding: 10px;
  }

  .loginBox .main {
    width: 80%;
    margin: 0 auto;
  }

  .loginBox .main img {
    width: 100%;
    height: 100%;
  }

  .loginBox .loginfrom {
    padding: 25px;
    height: 400px;
    position: relative;
    padding-bottom: 20px;
    background: #fff;
    width: 350px;
    float: left;
    padding: 25px;
    margin-left: 15px;
    margin-top: 15px;
    margin-bottom: 20px;
    border: 1px solid #d9d9d9;
  }
</style>
