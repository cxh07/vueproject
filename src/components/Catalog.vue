<template xmlns:el-col="http://www.w3.org/1999/html">
  <div class="box">
    <el-container class="ca_container">
      <el-main>
        <!--顶部面包屑导航-->
        <el-row class="one">
          <el-col :span="24">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>活动管理</el-breadcrumb-item>
              <el-breadcrumb-item>活动列表</el-breadcrumb-item>
              <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
          </el-col>
        </el-row>
        <!--小说详情-->
        <el-row class="two info">
          <el-col :span="24">
            <el-card class="box-card" :body-style="{padding:'10px'}">
              <div class="text item">
                <div class="picture_info">
                  <div>
                    <img src="https://bookcover.yuewen.com/qdbimg/349573/c_18079463908608404/180" alt="图片">
                  </div>
                </div>
                <div class="content-excerpt">
                  <h1><em>被陆先生宠成小祖宗</em> <a class="writer default" target="_blank">云嘉洛 著</a></h1>
                  <p class="tag-box">
                      <span class="tag">
                        <i>连载中</i>
                        <i>签约</i>
                        <i>现代言情</i>
                        <i>豪门世家</i>
                      </span>
                  </p>
                  <p class="intro" v-bind:class="{'show': class_show}">

                    “陆总，娱乐圈都在传太太和小鲜肉在谈恋爱！”
                    <br>陆宇深：“胡说八道！”
                    <br>下一秒陆氏夫妇的恩爱上了热搜头条。
                    <br>“陆总，太太和您青梅打架了！”
                    <br>陆宇深：“太太手疼吗？”
                    <br>随后就将青梅发小打包送出了国。
                    <br>“陆总，xx公司打压太太公司！”
                    <br>陆宇深：“欺负我女人！”
                    <br>第二天xx公司因涉及偷税漏税等各种经济犯罪被查封。
                    <br>陆宇深努力将小妻子宠上天，就是为了让离不开他。
                    <br>没想到就眨眼的功夫，小妻子就有了个白月光。
                    <br>黑化的陆宇深将乔绾禁锢，“乔绾，不管是生是死，你都只能是我的！”
                    <br>乔绾泪眼婆娑：“你吼我！”
                    <br>不可一世的陆宇深瞬间破功。
                    <br>乔绾最幸福的就是嫁给了陆宇深，被他宠成了小祖宗。
                    <br>遇见你之后，往后余生，皆是你。
                  </p>
                  <!--底部按钮-->
                  <p class="btn">
                    <a class="border-btn J-getJumpUrl "
                       id="readBtn">免费试读</a>
                    <a class="border-btn add-book" id="addBookBtn">加入书架</a>


                  </p>

                  <a class="down" href="javascript:" v-on:click="checkdown">
                    <b></b>
                    <span>
                      <i class="el-icon-arrow-up"></i><cite>{{down_text}}</cite>
                    </span>
                  </a>

                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <!--小说详情结束-->
        <!--章节目录开启-->
        <el-row class="three">
          <el-col :span="24">
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="目录(778)" name="first">

                <div class="mulu">
                  <el-col :span="24">
                    <ul class="mulu_ul">
                      <li v-for="(i,index) in 300" :key="index"><a>第{{i}}章 第{{index}}次使用主角光环</a></li>
                    </ul>
                  </el-col>

                </div>
              </el-tab-pane>
              <el-tab-pane label="作品讨论区" name="second">
                <el-card class="box-card" :body-style="{'padding':'10px'}">
                  <div slot="header" class="clearfix">
                    <span>作品评论</span>

                  </div>
                  <div class="card_item">
                    <el-row>
                      <el-col :span="2">
                      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" size="medium" class="pic"></el-avatar>
                      </el-col>
                      <el-col :span="20">

                          <el-input v-model="pinglun" class="pinglun_input" v-on:input="descInput" clearable></el-input>


                      </el-col>
                      <el-col :span="2">
                        <div class="maxlenth">
                        <span ref="max_zi">{{maxnumber}}/60字</span></div>
                      </el-col>
                    </el-row>

                    <el-row class="btn_red">
                      <a class="red-btn " id="j-sendCommentBtn" href="javascript:">发表</a>
                    </el-row>
                  </div>

                  <!--评论列表-->
                  <div class="card_item">

                   <el-row style="border-bottom: 1px solid #ebebeb">
                     <el-col :span="24" >
                        <span style="margin-left: 15px">用户评论</span>
                     </el-col>
                   </el-row>

                    <el-row class="row-ping">
                        <ul>
                          <li v-for="i in 4">
                            <el-row>
                              <el-col :span="2">
                                <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" class="pic"></el-avatar>
                              </el-col>
                              <el-col :span="18" >
                                <span class="username_ping" v-rainbow>石头写作业</span>
                                <p class="text_ping">这个傻叉写的什么狗屁小说哦！  屎一样！</p>
                              </el-col>
                              <el-col :span="4"></el-col>
                            </el-row>
                          </li>
                        </ul>
                    </el-row>

                  </div>
                </el-card>

              </el-tab-pane>

            </el-tabs>
          </el-col>
        </el-row>
        <!--章节目录结束-->
      </el-main>
    </el-container>
  </div>
</template>

<script>
    export default {
        name: "Catalog",
        data() {
            return {
                pinglun:'',
                circleUrl:'./../assets/touxiangfang.png',
                class_show: false,
                down_text: '展开',
                activeName: 'first',
                maxnumber:0
            }
        },
        methods: {
            checkdown: function () {
                this.class_show = !this.class_show
                if (this.down_text == '展开') {
                    this.down_text = '收起'
                } else if (this.down_text == '收起') {
                    this.down_text = '展开'
                }
            },
            handleClick(tab, event) {
                console.log(tab, event);
            },
            descInput:function () {
                this.maxnumber=this.pinglun.length
                if (this.maxnumber>=60){
                    this.pinglun=String(this.pinglun).slice(0, 59)

                }
            }
        },
        filters:{
            touxiang:function (value) {
                if (value==''){
                    return './../assets/touxiangyuan.png'
                }
            }
        },

        //指令
        directives:{
            rainbow:{
              inserted(el){
                el.style.color='#'+Math.random().toString(16).slice(2,8)
              }
            }
        }
    }
</script>

<style scoped>
  .box {
    width: 100%;
    background: #fff5f4
  }

  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  .ca_container {
    width: 70%;
    margin: 0 auto;

  }

  .one, .two, .three {
    padding-bottom: 20px;
  }

  <!--
  详情页面样式-- >
  .info {
    margin-top: 20px;
  }

  .info .box-card {
    position: relative;
    background: #fff;
    border-radius: 6px;
    padding-bottom: 20px;
  }

  .info .box-card .picture_info {
    float: left;
    width: 180px;
    height: 240px;
    border: none;
    margin-top: 20px;
    margin-right: 20px;
    margin-left: 10px;
    margin-bottom: 10px;
  }

  .info .box-card .picture_info div {
    position: relative;

    display: block;
    overflow: hidden;
    width: 100%;
    height: 100%;
    box-shadow: 0 1px 6px rgba(0, 0, 0, .3), 0 0 5px #f9f2e9 inset;
  }

  .info .box-card .picture_info div img {
    width: 100%;
    height: 100%;
    cursor: pointer;
    transition: all 0.5s;
    color: #fcfcfa;
  }

  .info .box-card .picture_info div img:hover {
    transform: scale(1.2);
  }

  .content-excerpt {
    position: relative;

    float: left;
    width: 780px;
    min-height: 246px;

    text-align: justify;
  }

  .content-excerpt h1 {
    font: 700 28px/38px PingFangSC-Regular, HelveticaNeue-Light, 'Helvetica Neue Light', 'Microsoft YaHei', sans-serif;
    overflow: hidden;
    height: 38px;
    margin-bottom: 8px;
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }

  .content-excerpt h1 em {
    font-style: normal
  }

  .content-excerpt h1 a {
    -webkit-font-smoothing: antialiased;
    text-align: justify;
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: #262626;
    outline: 0;
    cursor: text;
    transition: color .3s, background-color .3s, border .3s;
    font: 14px/38px PingFangSC-Regular, '-apple-system', Simsun;
    margin-left: 3px;
  }

  .content-excerpt .tag-box {
    margin-bottom: 5px;
  }

  .content-excerpt .tag-box .tag {
    margin: 6px 12px 0 0;
    font-size: 0;
    overflow: hidden;
    height: 16px;
  }

  .content-excerpt .tag-box .tag i {
    font: 12px/18px PingFangSC-Regular, '-apple-system', Simsun;
    display: inline-block;
    height: 18px;
    margin-right: 6px;
    padding: 0 4px;
    text-align: center;
    vertical-align: top;
    color: #f01742;
    border-width: 1px;
    border-style: solid;
    border-color: #f01742;
    border-radius: 2px;
  }

  .info .intro {
    -webkit-font-smoothing: antialiased; /**抗锯齿渲染*/
    text-align: justify;
    margin: 0;
    padding: 0;
    word-break: break-all;
    font: 14px/24px PingFangSC-Regular, '-apple-system', Simsun;
    overflow: hidden;
    height: 72px;
    margin-top: 10px;
    margin-bottom: 34px;
  }

  .info .show {
    overflow: auto;
    height: auto;
    padding-bottom: 30px;
  }

  .info .btn a {
    font: 14px/34px PingFangSC-Regular, '-apple-system', Simsun;
    display: inline-block;
    width: 120px;
    height: 34px;
    margin-right: 30px;
    text-align: center;
    vertical-align: middle;
    border-width: 1px;
    border-style: solid;
    position: relative;
    overflow: hidden;
    transform: translate3d(0, 0, 0);
    text-align: center;
    color: #f01742;
    border: 1px solid #f01742;
    border-radius: 100px !important;
  }

  .info .down {
    position: absolute;

    right: 10px;
    bottom: 73px;
    width: 50px;
    height: 22px;

    text-align: right;
  }

  .info .down span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .info .down cite {
    font: 12px/1 PingFangSC-Regular, '-apple-system', Simsun;
    color: #2972cc;
  }

  /*详情页面样式结束 */

  .el-tabs__item {
    font-family: PingFangSC-Regular, HelveticaNeue-Light, 'Helvetica Neue Light', 'Microsoft YaHei', sans-serif;
    font-size: 30px;
  }
  .card_item{
    padding-bottom: 20px;
  }

  .mulu {
    width: 100%;
    overflow: hidden;
    position: relative;
    padding: 20px;
  }

  .mulu .mulu_ul {
    padding: 0;
    margin: 0;
  }

  .mulu .mulu_ul li {
    font: 14px/40px PingFangSC-Regular, '-apple-system', Simsun;
    float: left;
    overflow: hidden;
    width: 286px;
    height: 40px;
    padding-right: 40px;
    border-bottom: 1px solid #ebebeb;

  }

  .mulu .mulu_ul li a {
    float: left;
    overflow: hidden;
    max-width: 240px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .card_item .pic{
    float: right;
    margin-right: 10px;
  }
  .maxlenth{
    height: 30px;
    position: relative;
  }
  .maxlenth span{
    font-family: PingFangSC-Regular, HelveticaNeue-Light, 'Helvetica Neue Light', 'Microsoft YaHei', sans-serif, Simsun;
    font-size: 10px;
    line-height: 40px;
  }
  .btn_red{
    margin-top: 10px;
  }
  .red-btn{
    position: relative;
    text-align: center;
    color: #fff;
    border-color: #f01742;
    background: #f01742;
    font: 14px/32px PingFangSC-Regular,'-apple-system',Simsun;
    display: inline-block;
    width: 76px;
    height: 32px;
    vertical-align: middle;
    border-radius: 100px!important;
    float: right;
    margin-right: 90px;
  }
  .row-ping ul li{
    min-height: 50px;
    height: auto;
    border-bottom: 1px solid #ebebeb;
    padding-top: 5px;
  }
   .row-ping ul li span,.row-ping ul li p{
     margin: 0;
     padding: 0;
   }
  .row-ping ul li span,.row-ping ul li .username_ping{
    font-size: 14px;
    font-family: PingFangSC-Regular, HelveticaNeue-Light, 'Helvetica Neue Light', 'Microsoft YaHei', sans-serif, Simsun;
  }
  .row-ping ul li span,.row-ping ul li .text_ping{
    font-size: 10px;
    text-align: left;
    line-height: 20px;

  }
</style>
