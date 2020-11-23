<template>
  <div class="box">
    <el-container class="el-container" id="aa">

      <el-main>
        <el-row class="row reding_row">
          <el-col :sm="24">
            <div class="redtext">
              <div class="redtext_header">
                <h2>{{novel.page_name}}</h2>
              </div>
              <div class="redtext_ion">
                <i class="el-icon-document">{{novel.book_name}}</i>
                <el-divider direction="vertical"></el-divider>
                <i class="el-icon-edit">{{novel.writer}}</i>

              </div>


              <div class="reding" v-html="novel.text">

              </div>
            </div>
          </el-col>
        </el-row>
        <el-row class="row next_btns">
          <el-col :sm="8" class="next_col">
            <a>上一章</a>

          </el-col>

          <el-col :sm="8" class="next_col">

            <a>目录</a>

          </el-col>
          <el-col :sm="8" class="next_col">

            <a>下一章</a>
          </el-col>
        </el-row>

      </el-main>
    </el-container>


    <div class="set_up" ref="set_up">
      <ul>
        <li>
          <el-popover
            visible-arrow

            placement="right"
            title="目录"
            width="750"
            trigger="click">

            <div class="mulu" style="padding: 20px;width: 100%">
              <el-col :sm="24">
                <ul class="mulu_ul">
                  <li v-for="(i,index) in 100" :key="index">
                    <a>第{{i}}章 第{{index}}次使用主角光环</a>
                  </li>
                </ul>
              </el-col>

            </div>
            <el-button class="popover_btn" slot="reference"><i class="el-icon-s-fold"></i>目录</el-button>
          </el-popover>
        </li>
        <li>


          <el-button class="popover_btn" id="add_btn" :disabled="add_btn" v-on:click="addshujia(123)"><i
            class="el-icon-document-add"></i>书架
          </el-button>

        </li>
        <li>
          <el-popover
            visible-arrow
            placement="right"
            title="设置"
            width="450"
            trigger="click">
            <div class="setup_popover">
              <el-row class="setup_row">
                <el-col :sm="4">阅读主题</el-col>
                <el-col :sm="20">
                  <ul class="theme_ul">
                    <li>
                      <div title="默认" v-bind:class="{themeactive:theme==1}" class="theme  default "
                           v-on:click="showtheme(1)"></div>
                    </li>
                    <li>
                      <div title="牛皮纸" v-bind:class="{themeactive:theme==2}" class="theme kraft_paper"
                           v-on:click="showtheme(2)"></div>
                    </li>
                    <li>
                      <div title="淡绿色" v-bind:class="{themeactive:theme==3}" class="theme  light_green"
                           v-on:click="showtheme(3)"></div>
                    </li>
                    <li>
                      <div title="淡蓝色" v-bind:class="{themeactive:theme==4}" class="theme light_blue"
                           v-on:click="showtheme(4)"></div>
                    </li>
                    <li>
                      <div title="淡粉色" v-bind:class="{themeactive:theme==5}" class="theme light_pink"
                           v-on:click="showtheme(5)"></div>
                    </li>
                    <li>
                      <div title="灰色" v-bind:class="{themeactive:theme==6}" class="theme  grey"
                           v-on:click="showtheme(6)"></div>
                    </li>
                    <li>
                      <div title="黑色" v-bind:class="{themeactive:theme==7}" class="theme  blank"
                           v-on:click="showtheme(7)"></div>
                    </li>
                  </ul>
                </el-col>
              </el-row>
              <el-row class="setup_row  font_setup">
                <el-col :sm="4">正文字体</el-col>
                <el-col :sm="20">
                  <ul>
                    <li class="font_li font_border" v-bind:class="{font_active:font==1}" v-on:click="showfont(1)">微软雅黑
                    </li>

                    <li class="font_li font_border" v-bind:class="{font_active:font==2}" v-on:click="showfont(2)">
                      华文行楷
                    </li>
                    <li class="font_li font_border" v-bind:class="{font_active:font==3}" v-on:click="showfont(3)">新宋体
                    </li>
                    <li class="font_li font_border" v-bind:class="{font_active:font==4}" v-on:click="showfont(4)">仿宋
                    </li>
                  </ul>
                </el-col>
              </el-row>
              <el-row class="setup_row">
                <el-col :sm="4">字体大小</el-col>
                <el-col :sm="20">
                  <el-input-number v-model="fontsize" @change="fontsizeChange" :min="10" :max="40"></el-input-number>
                </el-col>
              </el-row>
              <el-row class="setup_row">
                <el-col :sm="4">页面宽度</el-col>
                <el-col :sm="20">
                  <el-input-number v-model="continerWidth" :min="60" :max="90" :step="5"
                                   @change="ContinerWidthChange"></el-input-number>
                </el-col>
              </el-row>
            </div>
            <el-button class="popover_btn" slot="reference"><i class="el-icon-setting"></i>设置</el-button>
          </el-popover>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
    import elementResizeDetectorMaker from "element-resize-detector";

    export default {
        name: "Reding",
        data() {
            return {
                theme: 1,
                screenWidth: document.body.clientWidth,//屏幕宽度
                continerWidth: 80,  //阅读页面宽度
                novel: {
                    book_name: '川东的日常生活',
                    page_name: '第一章  川东的主角光环',
                    writer: '李川西',
                    text: '    一本读|ＷｗんＷ．『yb→du→．co<br>    杨明摇了摇头，将对蓝凌的思念放了下来，一转头，看见似笑非笑的陈梦妍，杨明顿时有些窘迫，似乎被陈梦妍看穿了心事一般。<br>\n' +
                        '                <br>\n' +
                        '                    “怎么，想蓝凌了？”陈梦妍剜了杨明一眼，问道。<br>\n' +
                        '                <br>\n' +
                        '                    “呵，是啊，第一次来干爹家里，就是蓝凌一起的。”杨明倒是也没否认，反正自己和蓝凌的事情，陈梦妍也都是知道的。<br>\n' +
                        '                <br>\n' +
                        '                    “你这次去云南，要是找到她，就带她回来吧。”陈梦妍叹了口气，说道：“我会尽量和她好好相处的……”<br>\n' +
                        '                <br>\n' +
                        '                    “梦妍，你？”杨明有些惊讶，没想到陈梦妍会突然说出这些话来。<br>\n' +
                        '                <br>\n' +
                        '                    “看什么，没见过？”陈梦妍瞪了杨明一眼：“都已经发生了的事情，我逃避又怎么样？还不是要面对现实？不过，这是最后一个了，家里的别墅，已经快住满了！”<br>\n' +
                        '                <br>\n' +
                        '                    “呵呵……”杨明也只能苦笑了，最后一个？他能说什么呢？难道和陈梦妍说，外面还有好几个呢？那不是让陈梦妍暴走么？<br>\n' +
                        '                <br>\n' +
                        '                    不过，陈梦妍能接受蓝凌，也是个好现象，虽然她是早就知道蓝凌的存在的，但是至少这是一个好的开端，证明陈梦妍的思想观念是在一点一点的转变的。<br>\n' +
                        '                <br>\n' +
                        '                    刘唯山家的门打开了，来开门的是刘唯山的妻子楚慧芳，也是杨明的干妈。<br>\n' +
                        '                <br>\n' +
                        '                    “干妈！”杨明亲切的叫道。<br>\n' +
                        '                <br>\n' +
                        '                    “大明，你来了，快进屋来，你干爹说你要来，让我准备了饭菜，我这刚刚准备下厨，你就来了，我还没准备好呢……咦，这三位是……”楚慧芳有些惊讶的看着杨明身后的三位佳丽。<br>\n' +
                        '                <br>\n' +
                        '                    “干妈，我给您介绍一下，这三位分别是陈梦妍、林芷韵和周佳佳，她们……”杨明说到这里顿时有些不好意思了，毕竟一下子介绍三个女朋友，这倒是有些匪夷所思了！<br>\n' +
                        '                <br>\n' +
                        '                    但是，杨明又不能不介绍，毕竟他是男人，脸皮还是比较厚的，总不能让陈梦妍她们自我介绍吧？于是硬着头皮继续说道：“她们都是我的女朋友……肖晴姐和她们都很熟悉的……”<br>\n' +
                        '                <br>\n' +
                        '                    “呵呵，都是大明的女朋友啊？”楚慧芳对于杨明的事情，也是了解一二的，从肖晴嘴里面也听说过一些事情，所以对于杨明这三个女朋友的名字也不太陌生，虽然没有见过真人，不过这不影响什么。<br>\n' +
                        '                <br>\n' +
                        '                    “干妈……”陈梦妍三人也是有些不好意思，不过还是跟着杨明叫了楚慧芳干妈！<br>\n' +
                        '                <br>\n' +
                        '                    “干妈，她们都已经见过我的父母了，而且已经给了改口钱的，所以都算是我的妻子了，也算是您的干儿媳了！”杨明说道：“您也不用客气了，以后有什么事情，就叫她们做就行了！她们和肖晴姐也很熟悉的！”<br>\n' +
                        '                <br>\n' +
                        '                    “这……那干妈也得给改口钱的！”楚慧芳有些惊喜的说道：“这家里好久没有这么热闹了，大明有了媳妇，而且一下子又有了三个，我这真是太高兴了！”<br>\n' +
                        '                <br>\n' +
                        '                    自从儿子和儿媳消失了之后，楚慧芳是很抑郁的，虽然有肖晴和杨明弥补了心中的伤痛，但是这家里面总感觉少了些什么，毕竟肖晴和杨明都是单身，一起能来家里的时候还是少数，所以楚慧芳就总是觉得家里面不够热闹！<br>\n' +
                        '                <br>\n' +
                        '                    而现在好了，杨明这一下子带回来三个媳妇，这家里面，以后可是有的热闹了！<br>\n' +
                        '                <br>\n' +
                        '                    “干妈，您就不用给了吧？哈哈，当初我叫干妈的时候，您已经给过我红包了啊！”杨明笑着说道：“这就包含她们三个的了！”<br>\n' +
                        '                <br>\n' +
                        '                    “所以说，我都给你了，就更要给她们了！”楚慧芳摆了摆手，道：“你们先进屋来，等一下，我这就给你们封红包去！”<br>\n' +
                        '                <br>\n' +
                        '                    说完，楚慧芳就快步走进了房间里，杨明也只能无奈的苦笑了，毕竟这是长辈的规矩，他也不能强行阻止不是？<br>\n' +
                        '                <br>\n' +
                        '                    倒是陈梦妍和林芷韵、周佳佳三人十分的惊喜，她们之前来的时候，是很忐忑的，她们也怕杨明的干爹干妈不那么开明，一下子接受不了她们三个都是杨明的女人的事实，到时候要是只认陈梦妍一个，那就尴尬了，这也不是陈梦妍希望看到的！<br>\n' +
                        '                <br>\n' +
                        '                    虽然林芷韵和周佳佳也不会有什么怨言，但是陈梦妍却也不会舒服，她早就将两人当成了姐妹了，怎么能够不管她们呢？<br>\n' +
                        '                <br>\n' +
                        '                    现在看来，楚慧芳是早已知道了她们三个的事情了，而且是从肖晴姐那边知道的，那就应该没有什么问题了，还要给自己三人改口钱，三人悬着的心，也算是落了下来！<br>\n' +
                        '                <br>\n' +
                        '                    楚慧芳走进房间没多久，就拿出了三个大红包了，看里面的薄厚程度，应该至少有一万块的，和当初给杨明的那个大红包差不多！<br>\n' +
                        '                <br>\n' +
                        '                    “陈梦妍，这是给你的！”楚慧芳将其中的一个红包递给了陈梦妍，又将两外的两个分别给了林芷韵和周佳佳，才道：“以后你们也要都改口叫我干妈了，这里也是你们的家了，以后常来做客！”<br>\n' +
                        '                <br>\n' +
                        '                    “好的，谢谢干妈！”楚梦瑶、周佳佳和林芷韵异口同声的道谢道，也收下了红包，毕竟这代表着楚慧芳的心意，况且楚慧芳家里并不困难，这一万块钱也不算什么。<br>\n' +
                        '                <br>\n' +
                        '                    “我去厨房里面做饭了，你们干爹可能也要回来了！”楚慧芳说道：“我这刚刚开始准备，也不知道什么时候能弄好，晚点儿吃饭，没问题吧？我之前没有考虑到梦妍她们，所以准备的有些少了，现在要再加一些菜才行！”<br>\n' +
                        '                <br>\n' +
                        '                    “干妈，我们刚吃完饭不久，不着急的，这就当是夜宵了吧？”杨明说道。<br>\n' +
                        '                <br>\n' +
                        '                    “那就好，你干爹晚上也是吃了工作餐的，我也煮了面条吃了，只要你们不着急就好！”楚慧芳点头说道：“那我去忙了，你们先去客厅看电视吧？”<br>\n' +
                        '                <br>\n' +
                        '                    “干妈，我们帮您吧？”楚梦瑶哪里肯看电视？和周佳佳、林芷韵一起要跟着楚慧芳去厨房。<br>\n' +
                        '                <br>\n' +
                        '                    “别……我自己弄就好了，你们去看电视吧，不用你们的！”楚慧芳却是摆了摆手，拒绝了陈梦妍的提议。<br>\n' +
                        '                <br>\n' +
                        '                    “我们哪能让您一个人忙呀，我们也帮您吧？”陈梦妍还以为楚慧芳是客气呢，于是不由分说的就要一起去厨房。<br>\n' +
                        '                <br>\n' +
                        '                    （未完待续）<br>\n' +
                        '                <br>\n' +
                        '                    〖 〗汉语拼音“”简单好记\n' +
                        '              '

                },
                fontsize: 25,
                font: 1,
                add_btn:false
            }
        },
        methods: {
            menu: function () {
                var scroll = document.documentElement.scrollTop || document.body.scrollTop;
                if (scroll > 70) {
                    document.getElementsByClassName('set_up')[0].style.top = scroll + 'px'
                } else {
                    document.getElementsByClassName('set_up')[0].style.top = '70px'
                }
            },

            showtheme: function (index) {

                this.theme = index

                if (index == 1) {
                    document.getElementsByClassName('box')[0].style.background = '#ebe5d8'
                    document.getElementsByClassName('row')[0].style.background = '#f7f2e8'
                    document.getElementsByClassName('row')[1].style.background = '#f7f2e8'
                    document.getElementsByClassName('popover_btn')[0].style.background = '#f7f2e8'
                    document.getElementsByClassName('popover_btn')[1].style.background = '#f7f2e8'
                    document.getElementsByClassName('popover_btn')[2].style.background = '#f7f2e8'
                } else if (index == 2) {
                    document.getElementsByClassName('box')[0].style.background = '#decea2'
                    document.getElementsByClassName('row')[0].style.background = '#f1e7c6'
                    document.getElementsByClassName('row')[1].style.background = '#f1e7c6'
                    document.getElementsByClassName('popover_btn')[0].style.background = '#f1e7c6'
                    document.getElementsByClassName('popover_btn')[1].style.background = '#f1e7c6'
                    document.getElementsByClassName('popover_btn')[2].style.background = '#f1e7c6'
                } else if (index == 3) {
                    document.getElementsByClassName('box')[0].style.background = '#cddfcd'
                    document.getElementsByClassName('row')[0].style.background = '#e1ede1'
                    document.getElementsByClassName('row')[1].style.background = '#e1ede1'
                    document.getElementsByClassName('popover_btn')[0].style.background = '#e1ede1'
                    document.getElementsByClassName('popover_btn')[1].style.background = '#e1ede1'
                    document.getElementsByClassName('popover_btn')[2].style.background = '#e1ede1'
                } else if (index == 4) {
                    document.getElementsByClassName('box')[0].style.background = '#ccdade'
                    document.getElementsByClassName('row')[0].style.background = '#e1eef2'
                    document.getElementsByClassName('row')[1].style.background = '#e1eef2'
                    document.getElementsByClassName('popover_btn')[0].style.background = '#e1eef2'
                    document.getElementsByClassName('popover_btn')[1].style.background = '#e1eef2'
                    document.getElementsByClassName('popover_btn')[2].style.background = '#e1eef2'
                } else if (index == 5) {
                    document.getElementsByClassName('box')[0].style.background = '#ebcece'
                    document.getElementsByClassName('row')[0].style.background = '#f5e4e4'
                    document.getElementsByClassName('row')[1].style.background = '#f5e4e4'
                    document.getElementsByClassName('popover_btn')[0].style.background = '#f5e4e4'
                    document.getElementsByClassName('popover_btn')[1].style.background = '#f5e4e4'
                    document.getElementsByClassName('popover_btn')[2].style.background = '#f5e4e4'
                } else if (index == 6) {
                    document.getElementsByClassName('box')[0].style.background = '#d0d0d0'
                    document.getElementsByClassName('row')[0].style.background = '#dddddd'
                    document.getElementsByClassName('row')[1].style.background = '#dddddd'
                    document.getElementsByClassName('popover_btn')[0].style.background = '#dddddd'
                    document.getElementsByClassName('popover_btn')[1].style.background = '#dddddd'
                    document.getElementsByClassName('popover_btn')[2].style.background = '#dddddd'
                } else if (index == 7) {
                    document.getElementsByClassName('box')[0].style.background = '#111315'
                    document.getElementsByClassName('row')[0].style.background = '#1c1e1f'
                    document.getElementsByClassName('row')[1].style.background = '#1c1e1f'
                    document.getElementsByClassName('popover_btn')[0].style.background = '#1c1e1f'
                    document.getElementsByClassName('popover_btn')[1].style.background = '#1c1e1f'
                    document.getElementsByClassName('popover_btn')[2].style.background = '#1c1e1f'

                }


            },

            showfont: function (index) {
                this.font = index
                if (index == 1) {
                    document.getElementsByClassName('reding')[0].style.fontFamily = '微软雅黑'
                } else if (index == 2) {
                    document.getElementsByClassName('reding')[0].style.fontFamily = '华文行楷'
                } else if (index == 3) {
                    document.getElementsByClassName('reding')[0].style.fontFamily = '新宋体'
                } else if (index == 4) {
                    document.getElementsByClassName('reding')[0].style.fontFamily = '仿宋'
                }
            },

            fontsizeChange: function () {
                document.getElementsByClassName('reding')[0].style.fontSize = this.fontsize + 'px'
            },


            ContinerWidthChange: function () {

                document.getElementById('aa').style.width = this.continerWidth + '%'

            },
            addshujia: function (id) {
                this.$message({
                    message: '添加成功',
                    type: 'success'
                });
                document.getElementById('add_btn').innerHTML='已添加'
                this.add_btn=true
            }

        },
        mounted() {
            window.addEventListener('scroll', this.menu);
            window.onresize = function () {
                console.log(document.body.clientWidth)
            };
            const erd = elementResizeDetectorMaker();
            erd.listenTo(document.getElementById("aa"), element => {
                this.$nextTick(() => {
                    //监听到事件后执行的业务逻辑
                    console.log(document.getElementById("aa").clientWidth)
                    var m = document.getElementsByClassName('box')[0].clientWidth - document.getElementById("aa").clientWidth
                    m = m / 2 - 105
                    console.log('变化：' + m)
                    document.getElementsByClassName('set_up')[0].style.left = m + 'px'
                });
            });

        }
    }
</script>

<style scoped>


  .box {
    background: #ede7da;
    position: relative;
    padding-bottom: 40px;

  }

  .el-container {
    width: 80%;
    margin: 0 auto;


  }

  .el-container .row {
    border: 1px solid #d9d9d9;
    margin-top: 20px;
    background: #f7f2e8
  }

  .el-container .reding_row {
    padding: 10px;
    padding-bottom: 50px;
  }

  .redtext_header {
    padding: 10px;
    padding-left: 20px;
    margin-buttom: 0px;
    padding-bottom: 0px;
    color: #666;
  }

  .redtext_ion {
    padding: 0;
    padding-left: 25px;
    margin-top: -15px;
    padding-bottom: 5px;
    margin-bottom: 20px;
    color: #666;
  }


  .reding {
    padding: 50px;
    padding-top: 10px;
    font-family: 微软雅黑;
    font-size: 25px;
    overflow: hidden;
    height: auto;
    color: #666;
  }

  .el-container .next_btns {
    min-height: 60px;
    height: auto;
    color: #666;
  }

  .el-container .next_btns .next_col {

    text-align: center;

  }

  .el-container .next_btns .next_col:nth-child(2) {
    border-left: 1px solid #999;
    border-right: 1px solid #999;
  }

  .el-container .next_btns .next_col:hover {
    background: #d9d9d9;
  }

  .el-container .next_btns a {

    line-height: 60px;
    text-align: center;
    margin: 0 auto;

  }

  .set_up {

    width: 15px;
    position: absolute;

    top: 70px;
  }

  .set_up li .popover_btn {
    background: #f7f2e8;
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

  .setup_popover {
    padding: 10px;
  }

  .setup_popover .setup_row {
    height: 40px;
    line-height: 40px;
    margin-top: 35px;
    margin-bottom: 15px;

    font-size: 15px;
  }


  .theme_ul {
    padding: 0;
    margin: 0;
  }

  .theme_ul li {
    width: 35px;
    height: 35px;
    float: left;
    margin-left: 10px;
  }

  .theme {
    width: 35px;
    height: 35px;

    border-radius: 50%;

  }

  .default {
    background: #f7f2e8;
  }

  .kraft_paper {
    background: #f1e7c6;
  }

  .light_green {
    background: #e1ede1;
  }

  .light_blue {
    background: #e1eef2;
  }

  .light_pink {
    background: #f5e4e4;
  }

  .grey {
    background: #dddddd;
  }

  .blank {
    background: #1c1e1f;
  }

  .themeactive {
    background: url("../assets/theme_active.png") no-repeat;
  }

  .font_setup ul {
    padding: 0;
    margin: 0;
  }

  .font_setup ul .font_li {
    width: 70px;
    height: 35px;
    float: left;
    margin-left: 10px;

    font-size: 15px;
    text-align: center;
    line-height: 35px;
    border-radius: 10px;

  }

  .font_border {
    border: 1px solid black;
  }

  .font_active {

    border: 1px solid red;
  }
</style>
