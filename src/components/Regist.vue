<template>
  <div class="mainbox">
    <el-container class="box_container">
      <el-header style="margin-top: 80px">
        <el-steps :active="active" finish-status="success">
          <el-step title="步骤 1"><p>1</p></el-step>
          <el-step title="步骤 2"><p>2</p></el-step>
          <el-step title="步骤 3"><p>3</p></el-step>
        </el-steps>
      </el-header>
      <el-main>
        <el-row v-show="active==0">
          <el-col :span="24">
            <el-form ref="form1" status-icon :model="form1" :rules="rules" label-position="top" label-width="80px">
                 <el-form-item label="电话号码" prop="phone">

                  <el-input prefix-icon='el-icon-phone-outline' type="text" status-icon clearable placeholder="请输入电话号码"
                            v-model="form1.phone" ></el-input>
                </el-form-item>

                <el-form-item label="短信验证码" prop="verify_code">

                      <el-input type="text" placeholder="验证码" status-icon clearable v-model="form1.verify_code" style="width: 55%;float: left"></el-input>

                      <el-button type="primary" style="width: 40%;float: left;margin-left: 5%" plain :disabled="isDisable" ref="count_button" @click="countDown()">{{content}}</el-button>

                </el-form-item>



                <el-form-item label="">

                  <el-button type="success" plain style="width: 100%" v-on:click="one">下一步</el-button>

                </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <!--第一个表单结束-->
        <!--第二个表单开始-->
        <el-row v-show="active==1">
          <el-col :span="24">
            <el-form ref="form2" status-icon :model="form1" :rules="rules" label-position="top" label-width="80px">
              <el-form-item label="设置用户名">
                <el-input type="text" prefix-icon='el-icon-mobile-phone' placeholder="输入用户名" v-model="form1.username"></el-input>
              </el-form-item>

              <el-form-item label="设置密码">
                <el-input type="password" prefix-icon='el-icon-lock' placeholder="输入密码" v-model="form1.password"></el-input>
              </el-form-item>

              <el-form-item label="确认密码">
                <el-input type="password" prefix-icon='el-icon-lock' placeholder="确认密码" v-model="form1.que"></el-input>
              </el-form-item>

              <el-form-item label="">

                  <el-button type="success" plain style="width: 100%" v-on:click="one">下一步</el-button>

                </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <!--第二个结束-->
        <!--第三个开始-->
        <el-row v-show="active==2">
          <el-col :span="24">
            <div class="back">
              <img src="../assets/sucess.png" alt="">
            </div>
            <p class="regist_tip">注册成功</p>
             <el-button type="success" plain style="width: 100%" >返回首页</el-button>
          </el-col>
        </el-row>
      </el-main>
    </el-container>


  </div>
</template>


<script>
    export default {
        name: "Regist",
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
                active: 0,


                form1: {
                    phone: '',
                    verify_code:'',
                    mm:'',
                    username:'',
                    password:'',
                    que:''


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
            next() {
                if (this.active++ > 2) this.active = 0;
            },

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

            one:function () {

                this.$refs['form1'].validate((valid)=>{
                    if (valid){
                       if (this.active++ > 2) this.active = 0;
                    }
                })
            }
        }
    }
</script>
<style scoped>
  .box_container {
    width: 30%;
    margin: 0 auto;
    margin-bottom: 20px;
    min-height: 600px;
    height: 500px;
    height: auto;

  }
  .back{
    width: 300px;
    height: 300px;
    margin: 0 auto;

  }
  .back img{
    width: 100%;
    height: 100%
  }
  .regist_tip{
    width: 300px;
    text-align: center;
    margin: 0 auto;
    font-size: 25px;
    margin-bottom: 30px;
  }
</style>
