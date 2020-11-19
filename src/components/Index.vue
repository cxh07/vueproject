<template xmlns:el-col="http://www.w3.org/1999/html">
  <div class="box"><el-container class="main">
    <el-main>

      <!--轮播图  和全站公告-->
      <el-row :gutter="10" class="one">

        <el-col :span="18">
          <el-carousel height="303px">
            <el-carousel-item v-for="url in imgList" :key="url">
              <img v-bind:src="url" alt="">
            </el-carousel-item>
          </el-carousel>
        </el-col>

        <el-col :span="6">
          <el-card class="box-card  Notice" shadow="hover">
            <div slot="header" class="clearfix">
              <span style="font-size: 25px"><i class="el-icon-bell"></i>&nbsp;<strong>全站公告</strong></span>

            </div>

            <div class="text item Notice_list" v-for="notice in notices">
              <router-link to="hello">[公告]&nbsp;&nbsp;{{notice}}</router-link>
            </div>


          </el-card>
        </el-col>
      </el-row>
      <!--第一部分结束-->


      <!--第二部分开始-->
      <el-row style="margin-top: 40px" clas="two" :gutter="10">
        <!--第二部分左边-->
        <el-col :span="18">
          <div class="recommend">
            <el-card class="box-card" :body-style="{ padding: '0px' ,background:'#eee'}">
              <div slot="header" class="clearfix">
                <span><strong>编辑推荐</strong></span>

              </div>
              <div>
                <ul>
                  <li v-for="(obj,index) in recommends" :key="index">
                    <div class="book-img" style="border: 1px solid #e6e6e6;">
                      <router-link to="#">
                        <img v-bind:src="obj.url" alt=""></router-link>
                    </div>
                    <div class="book-info">
                      <h4>
                        <a href="#" v-bind:title="obj.title">
                          {{obj.title}}
                        </a>
                      </h4>
                      <p v-bind:title="obj.dec|snippet">
                        {{obj.dec}}
                      </p>
                      <div class="state-box">
                        <i>{{obj.leixing}}</i>
                        <router-link to="#">

                          {{obj.author}}
                        </router-link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </el-card>
          </div>
        </el-col>
        <!--第二部分右边-->
        <el-col :span="6">
          <div class="two_right">
            <el-card class="box-card" :body-style="{ padding: '0px' }">
              <div slot="header" class="clearfix">
                <span><strong>创世排行榜</strong></span>
                <i style="float: right; padding: 3px 0;font-size: 10px" type="text">阅读量</i>
              </div>
              <div class="text item">
                <ul>

                  <li v-for="(obj,index) in two_right" v-bind:key="index" v-on:mouseenter="enter(index)"
                      v-bind:class="{'active':obj.selected}">
                    <div class="hoverHide" ref="hoverHide">
                      <em>{{obj.click|snippet1}}</em><span class="num3">{{index+1}}</span>
                      <router-link to="#">{{obj.title}}</router-link>
                    </div>
                    <div class="detailWrap" ref="detailWrap1">
                      <span class="num3">{{index+1}}</span>
                      <router-link to="#">
                        <img v-bind:src="obj.imgurl" width="55" height="74" v-bind:alt="obj.title">
                      </router-link>
                      <div class="detailInfo">
                        <h4>
                          <router-link to="#">{{obj.title}}</router-link>
                        </h4>
                        <p>作者：
                          <router-link to="#">{{obj.autour}}</router-link>
                        </p>
                        <p>分类：
                          <router-link to="#">{{obj.fenlei}}</router-link>
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
      <!--第二部分结束-->
      <!--广告-->
      <el-row style="margin-top: 40px">
        <el-col :span="24" class="ad-long">
          <img
            src="https://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/e728786a3dcabe990755a24f58f17aed.jpg"
            alt="">
        </el-col>
      </el-row>
      <!--第三部分开始-->
      <el-row class="three" :gutter="10">
        <el-col :span="6">
          <el-card class="box-card" shadow="hover" :body-style="{ padding: '0px' }">
            <div slot="header" class="clearfix">
              <span><strong>热销榜</strong></span>
              <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
            </div>
               <div class="text item">
                <ul>

                  <li v-for="(obj,index) in three_first" v-bind:key="index" v-on:mouseenter="enter1(index)"
                      v-bind:class="{'active':obj.selected}">
                    <div class="hoverHide">
                      <em>{{obj.autour}}</em><span class="num3">{{index+1}}</span>
                      <router-link to="#">{{obj.title}}</router-link>
                    </div>
                    <div class="detailWrap">
                      <span class="num3">{{index+1}}</span>
                      <router-link to="#">
                        <img v-bind:src="obj.imgurl" width="55" height="74" v-bind:alt="obj.title">
                      </router-link>
                      <div class="detailInfo">
                        <h4>
                          <router-link to="#">{{obj.title}}</router-link>
                        </h4>
                        <p>作者：
                          <router-link to="#">{{obj.autour}}</router-link>
                        </p>
                        <p>分类：
                          <router-link to="#">{{obj.fenlei}}</router-link>
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="box-card" shadow="hover" :body-style="{ padding: '0px' }">
            <div slot="header" class="clearfix">
              <span><strong>周推荐榜</strong></span>
              <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
            </div>
               <div class="text item">
                <ul>

                  <li v-for="(obj,index) in three_seccend" v-bind:key="index" v-on:mouseenter="enter2(index)"
                      v-bind:class="{'active':obj.selected}">
                    <div class="hoverHide">
                      <em>{{obj.autour}}</em><span class="num3">{{index+1}}</span>
                      <router-link to="#">{{obj.title}}</router-link>
                    </div>
                    <div class="detailWrap">
                      <span class="num3">{{index+1}}</span>
                      <router-link to="#">
                        <img v-bind:src="obj.imgurl" width="55" height="74" v-bind:alt="obj.title">
                      </router-link>
                      <div class="detailInfo">
                        <h4>
                          <router-link to="#">{{obj.title}}</router-link>
                        </h4>
                        <p>作者：
                          <router-link to="#">{{obj.autour}}</router-link>
                        </p>
                        <p>分类：
                          <router-link to="#">{{obj.fenlei}}</router-link>
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="box-card" shadow="hover" :body-style="{ padding: '0px' }">
            <div slot="header" class="clearfix">
              <span><strong>收藏榜</strong></span>
              <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
            </div>
               <div class="text item">
                <ul>

                  <li v-for="(obj,index) in three_third" v-bind:key="index" v-on:mouseenter="enter3(index)"
                      v-bind:class="{'active':obj.selected}">
                    <div class="hoverHide">
                      <em>{{obj.autour}}</em><span class="num3">{{index+1}}</span>
                      <router-link to="#">{{obj.title}}</router-link>
                    </div>
                    <div class="detailWrap">
                      <span class="num3">{{index+1}}</span>
                      <router-link to="#">
                        <img v-bind:src="obj.imgurl" width="55" height="74" v-bind:alt="obj.title">
                      </router-link>
                      <div class="detailInfo">
                        <h4>
                          <router-link to="#">{{obj.title}}</router-link>
                        </h4>
                        <p>作者：
                          <router-link to="#">{{obj.autour}}</router-link>
                        </p>
                        <p>分类：
                          <router-link to="#">{{obj.fenlei}}</router-link>
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="box-card" shadow="hover" :body-style="{ padding: '0px' }">
            <div slot="header" class="clearfix">
              <span><strong>更新榜</strong></span>
              <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
            </div>
               <div class="text item">
                <ul>

                  <li v-for="(obj,index) in three_fourth" v-bind:key="index" v-on:mouseenter="enter4(index)"
                      v-bind:class="{'active':obj.selected}">
                    <div class="hoverHide">
                      <em>{{obj.autour}}</em><span class="num3">{{index+1}}</span>
                      <router-link to="#">{{obj.title}}</router-link>
                    </div>
                    <div class="detailWrap">
                      <span class="num3">{{index+1}}</span>
                      <router-link to="#">
                        <img v-bind:src="obj.imgurl" width="55" height="74" v-bind:alt="obj.title">
                      </router-link>
                      <div class="detailInfo">
                        <h4>
                          <router-link to="#">{{obj.title}}</router-link>
                        </h4>
                        <p>作者：
                          <router-link to="#">{{obj.autour}}</router-link>
                        </p>
                        <p>分类：
                          <router-link to="#">{{obj.fenlei}}</router-link>
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
          </el-card>
        </el-col>
      </el-row>

      <!--举报信息入口-->
      <el-row class="jubao">
        <el-col :span="24">
          <img src="https://qidian.gtimg.com/hongxiu/images/index/report.ca1c9.jpg" alt="">
        </el-col>
      </el-row>
    </el-main>
  </el-container>


  </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                imgList: ['http://static.zongheng.com/upload/recommend/d5/3b/d53b3fe055da263f942512ac5a29c502.jpeg',
                    'http://static.zongheng.com/upload/recommend/eb/db/ebdb5363be64a0d90ce5534495207176.jpeg',
                    'http://static.zongheng.com/upload/recommend/c5/bb/c5bb11cc92fd9d3648d917ec13176b36.jpeg',
                    'http://static.zongheng.com/upload/recommend/6e/97/6e97f29e93e58018ce00201c04d9333f.jpeg'], //轮播图片链接
                notices: ['我爱你5201314', '这是公告内容呀！', '世界其实很美好', '愿你此生遇不到良人', '我好想你啊'],//公告信息
                recommends: [{
                    'url': 'https://bookcover.yuewen.com/qdbimg/349573/c_17219412804845104/90',
                    'title': "酷帅少女马甲多",
                    'dec': '【扒马+爽文+双宠，男强女强】\n' +
                        '京城有些地位的人都知道权太子爷在白城看上了个十八岁的高中生，大家纷纷开始调查她的情况。\n' +
                        '“听说她从小打架考零分，档案上几页纸满满的都是记过。”\n' +
                        '“而且父母双亡，家族不要，在乡下生活了八年，是个小可怜。”\n' +
                        '……\n' +
                        '众人：权少能看上这样的？\n' +
                        '后来，当她的马甲一个一个被扒出来时——\n' +
                        '众人：权少眼光真好！',
                    'author': '桑佳',
                    'leixing': '浪漫青春',
                    'authorImg': 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
                    'navalid': '1'
                }],//小说信息 10个
                two_right: [
                    {
                        'title': '神医弃女',
                        'click': '28314000',
                        'autour': 'MS芙子',
                        'fenlei': '东方玄幻',
                        'imgurl': 'http://wfqqreader-1252317822.image.myqcloud.com/cover/991/607991/s_607991.jpg',
                        'selected': true
                    },
                    {
                        'title': '神医弃女',
                        'click': '28314000',
                        'autour': 'MS芙子',
                        'fenlei': '东方玄幻',
                        'imgurl': 'http://wfqqreader-1252317822.image.myqcloud.com/cover/991/607991/s_607991.jpg',
                        'selected': false
                    },
                    {
                        'title': '神医弃女',
                        'click': '28314000',
                        'autour': 'MS芙子',
                        'fenlei': '东方玄幻',
                        'imgurl': 'http://wfqqreader-1252317822.image.myqcloud.com/cover/991/607991/s_607991.jpg',
                        'selected': false
                    },
                    {
                        'title': '神医弃女',
                        'click': '28314000',
                        'autour': 'MS芙子',
                        'fenlei': '东方玄幻',
                        'imgurl': 'http://wfqqreader-1252317822.image.myqcloud.com/cover/991/607991/s_607991.jpg',
                        'selected': false
                    },
                    {
                        'title': '神医弃女',
                        'click': '28314000',
                        'autour': 'MS芙子',
                        'fenlei': '东方玄幻',
                        'imgurl': 'http://wfqqreader-1252317822.image.myqcloud.com/cover/991/607991/s_607991.jpg',
                        'selected': false
                    },
                    {
                        'title': '神医弃女',
                        'click': '28314000',
                        'autour': 'MS芙子',
                        'fenlei': '东方玄幻',
                        'imgurl': 'http://wfqqreader-1252317822.image.myqcloud.com/cover/991/607991/s_607991.jpg',
                        'selected': false
                    },
                    {
                        'title': '神医弃女',
                        'click': '28314000',
                        'autour': 'MS芙子',
                        'fenlei': '东方玄幻',
                        'imgurl': 'http://wfqqreader-1252317822.image.myqcloud.com/cover/991/607991/s_607991.jpg',
                        'selected': false
                    },
                    {
                        'title': '神医弃女',
                        'click': '28314000',
                        'autour': 'MS芙子',
                        'fenlei': '东方玄幻',
                        'imgurl': 'https://bookcover.yuewen.com/qdbimg/349573/c_16335202204882804/90',
                        'selected': false
                    },
                    {
                        'title': '神医弃女',
                        'click': '28314000',
                        'autour': 'MS芙子',
                        'fenlei': '东方玄幻',
                        'imgurl': 'http://wfqqreader-1252317822.image.myqcloud.com/cover/991/607991/s_607991.jpg',
                        'selected': false
                    },
                    {
                        'title': '神医弃女',
                        'click': '28314000',
                        'autour': 'MS芙子',
                        'fenlei': '东方玄幻',
                        'imgurl': 'http://wfqqreader-1252317822.image.myqcloud.com/cover/991/607991/s_607991.jpg',
                        'selected': false
                    },

                ],

                three_first: [
                    {
                        'title': '神医弃女',
                        'click': '28314000',
                        'autour': 'MS芙子',
                        'fenlei': '东方玄幻',
                        'imgurl': 'http://wfqqreader-1252317822.image.myqcloud.com/cover/991/607991/s_607991.jpg',
                        'selected': true
                    },
                    {
                        'title': '神医弃女',
                        'click': '28314000',
                        'autour': 'MS芙子',
                        'fenlei': '东方玄幻',
                        'imgurl': 'http://wfqqreader-1252317822.image.myqcloud.com/cover/991/607991/s_607991.jpg',
                        'selected': false
                    },
                    {
                        'title': '神医弃女',
                        'click': '28314000',
                        'autour': 'MS芙子',
                        'fenlei': '东方玄幻',
                        'imgurl': 'http://wfqqreader-1252317822.image.myqcloud.com/cover/991/607991/s_607991.jpg',
                        'selected': false
                    },
                    {
                        'title': '神医弃女',
                        'click': '28314000',
                        'autour': 'MS芙子',
                        'fenlei': '东方玄幻',
                        'imgurl': 'http://wfqqreader-1252317822.image.myqcloud.com/cover/991/607991/s_607991.jpg',
                        'selected': false
                    },
                    {
                        'title': '神医弃女',
                        'click': '28314000',
                        'autour': 'MS芙子',
                        'fenlei': '东方玄幻',
                        'imgurl': 'http://wfqqreader-1252317822.image.myqcloud.com/cover/991/607991/s_607991.jpg',
                        'selected': false
                    },
                    {
                        'title': '神医弃女',
                        'click': '28314000',
                        'autour': 'MS芙子',
                        'fenlei': '东方玄幻',
                        'imgurl': 'http://wfqqreader-1252317822.image.myqcloud.com/cover/991/607991/s_607991.jpg',
                        'selected': false
                    },
                    {
                        'title': '神医弃女',
                        'click': '28314000',
                        'autour': 'MS芙子',
                        'fenlei': '东方玄幻',
                        'imgurl': 'http://wfqqreader-1252317822.image.myqcloud.com/cover/991/607991/s_607991.jpg',
                        'selected': false
                    },
                    {
                        'title': '神医弃女',
                        'click': '28314000',
                        'autour': 'MS芙子',
                        'fenlei': '东方玄幻',
                        'imgurl': 'https://bookcover.yuewen.com/qdbimg/349573/c_16335202204882804/90',
                        'selected': false
                    },
                    {
                        'title': '神医弃女',
                        'click': '28314000',
                        'autour': 'MS芙子',
                        'fenlei': '东方玄幻',
                        'imgurl': 'http://wfqqreader-1252317822.image.myqcloud.com/cover/991/607991/s_607991.jpg',
                        'selected': false
                    },
                    {
                        'title': '神医弃女',
                        'click': '28314000',
                        'autour': 'MS芙子',
                        'fenlei': '东方玄幻',
                        'imgurl': 'http://wfqqreader-1252317822.image.myqcloud.com/cover/991/607991/s_607991.jpg',
                        'selected': false
                    },

                ],
                three_seccend: [
                    {
                        'title': '神医弃女',
                        'click': '28314000',
                        'autour': 'MS芙子',
                        'fenlei': '东方玄幻',
                        'imgurl': 'http://wfqqreader-1252317822.image.myqcloud.com/cover/991/607991/s_607991.jpg',
                        'selected': true
                    },
                    {
                        'title': '神医弃女',
                        'click': '28314000',
                        'autour': 'MS芙子',
                        'fenlei': '东方玄幻',
                        'imgurl': 'http://wfqqreader-1252317822.image.myqcloud.com/cover/991/607991/s_607991.jpg',
                        'selected': false
                    },
                    {
                        'title': '神医弃女',
                        'click': '28314000',
                        'autour': 'MS芙子',
                        'fenlei': '东方玄幻',
                        'imgurl': 'http://wfqqreader-1252317822.image.myqcloud.com/cover/991/607991/s_607991.jpg',
                        'selected': false
                    },
                    {
                        'title': '神医弃女',
                        'click': '28314000',
                        'autour': 'MS芙子',
                        'fenlei': '东方玄幻',
                        'imgurl': 'http://wfqqreader-1252317822.image.myqcloud.com/cover/991/607991/s_607991.jpg',
                        'selected': false
                    },
                    {
                        'title': '神医弃女',
                        'click': '28314000',
                        'autour': 'MS芙子',
                        'fenlei': '东方玄幻',
                        'imgurl': 'http://wfqqreader-1252317822.image.myqcloud.com/cover/991/607991/s_607991.jpg',
                        'selected': false
                    },
                    {
                        'title': '神医弃女',
                        'click': '28314000',
                        'autour': 'MS芙子',
                        'fenlei': '东方玄幻',
                        'imgurl': 'http://wfqqreader-1252317822.image.myqcloud.com/cover/991/607991/s_607991.jpg',
                        'selected': false
                    },
                    {
                        'title': '神医弃女',
                        'click': '28314000',
                        'autour': 'MS芙子',
                        'fenlei': '东方玄幻',
                        'imgurl': 'http://wfqqreader-1252317822.image.myqcloud.com/cover/991/607991/s_607991.jpg',
                        'selected': false
                    },
                    {
                        'title': '神医弃女',
                        'click': '28314000',
                        'autour': 'MS芙子',
                        'fenlei': '东方玄幻',
                        'imgurl': 'https://bookcover.yuewen.com/qdbimg/349573/c_16335202204882804/90',
                        'selected': false
                    },
                    {
                        'title': '神医弃女',
                        'click': '28314000',
                        'autour': 'MS芙子',
                        'fenlei': '东方玄幻',
                        'imgurl': 'http://wfqqreader-1252317822.image.myqcloud.com/cover/991/607991/s_607991.jpg',
                        'selected': false
                    },
                    {
                        'title': '神医弃女',
                        'click': '28314000',
                        'autour': 'MS芙子',
                        'fenlei': '东方玄幻',
                        'imgurl': 'http://wfqqreader-1252317822.image.myqcloud.com/cover/991/607991/s_607991.jpg',
                        'selected': false
                    },

                ],
                three_third: [
                    {
                        'title': '神医弃女',
                        'click': '28314000',
                        'autour': 'MS芙子',
                        'fenlei': '东方玄幻',
                        'imgurl': 'http://wfqqreader-1252317822.image.myqcloud.com/cover/991/607991/s_607991.jpg',
                        'selected': true
                    },
                    {
                        'title': '神医弃女',
                        'click': '28314000',
                        'autour': 'MS芙子',
                        'fenlei': '东方玄幻',
                        'imgurl': 'http://wfqqreader-1252317822.image.myqcloud.com/cover/991/607991/s_607991.jpg',
                        'selected': false
                    },
                    {
                        'title': '神医弃女',
                        'click': '28314000',
                        'autour': 'MS芙子',
                        'fenlei': '东方玄幻',
                        'imgurl': 'http://wfqqreader-1252317822.image.myqcloud.com/cover/991/607991/s_607991.jpg',
                        'selected': false
                    },
                    {
                        'title': '神医弃女',
                        'click': '28314000',
                        'autour': 'MS芙子',
                        'fenlei': '东方玄幻',
                        'imgurl': 'http://wfqqreader-1252317822.image.myqcloud.com/cover/991/607991/s_607991.jpg',
                        'selected': false
                    },
                    {
                        'title': '神医弃女',
                        'click': '28314000',
                        'autour': 'MS芙子',
                        'fenlei': '东方玄幻',
                        'imgurl': 'http://wfqqreader-1252317822.image.myqcloud.com/cover/991/607991/s_607991.jpg',
                        'selected': false
                    },
                    {
                        'title': '神医弃女',
                        'click': '28314000',
                        'autour': 'MS芙子',
                        'fenlei': '东方玄幻',
                        'imgurl': 'http://wfqqreader-1252317822.image.myqcloud.com/cover/991/607991/s_607991.jpg',
                        'selected': false
                    },
                    {
                        'title': '神医弃女',
                        'click': '28314000',
                        'autour': 'MS芙子',
                        'fenlei': '东方玄幻',
                        'imgurl': 'http://wfqqreader-1252317822.image.myqcloud.com/cover/991/607991/s_607991.jpg',
                        'selected': false
                    },
                    {
                        'title': '神医弃女',
                        'click': '28314000',
                        'autour': 'MS芙子',
                        'fenlei': '东方玄幻',
                        'imgurl': 'https://bookcover.yuewen.com/qdbimg/349573/c_16335202204882804/90',
                        'selected': false
                    },
                    {
                        'title': '神医弃女',
                        'click': '28314000',
                        'autour': 'MS芙子',
                        'fenlei': '东方玄幻',
                        'imgurl': 'http://wfqqreader-1252317822.image.myqcloud.com/cover/991/607991/s_607991.jpg',
                        'selected': false
                    },
                    {
                        'title': '神医弃女',
                        'click': '28314000',
                        'autour': 'MS芙子',
                        'fenlei': '东方玄幻',
                        'imgurl': 'http://wfqqreader-1252317822.image.myqcloud.com/cover/991/607991/s_607991.jpg',
                        'selected': false
                    },

                ],
                three_fourth: [
                    {
                        'title': '神医弃女',
                        'click': '28314000',
                        'autour': 'MS芙子',
                        'fenlei': '东方玄幻',
                        'imgurl': 'http://wfqqreader-1252317822.image.myqcloud.com/cover/991/607991/s_607991.jpg',
                        'selected': true
                    },
                    {
                        'title': '神医弃女',
                        'click': '28314000',
                        'autour': 'MS芙子',
                        'fenlei': '东方玄幻',
                        'imgurl': 'http://wfqqreader-1252317822.image.myqcloud.com/cover/991/607991/s_607991.jpg',
                        'selected': false
                    },
                    {
                        'title': '神医弃女',
                        'click': '28314000',
                        'autour': 'MS芙子',
                        'fenlei': '东方玄幻',
                        'imgurl': 'http://wfqqreader-1252317822.image.myqcloud.com/cover/991/607991/s_607991.jpg',
                        'selected': false
                    },
                    {
                        'title': '神医弃女',
                        'click': '28314000',
                        'autour': 'MS芙子',
                        'fenlei': '东方玄幻',
                        'imgurl': 'http://wfqqreader-1252317822.image.myqcloud.com/cover/991/607991/s_607991.jpg',
                        'selected': false
                    },
                    {
                        'title': '神医弃女',
                        'click': '28314000',
                        'autour': 'MS芙子',
                        'fenlei': '东方玄幻',
                        'imgurl': 'http://wfqqreader-1252317822.image.myqcloud.com/cover/991/607991/s_607991.jpg',
                        'selected': false
                    },
                    {
                        'title': '神医弃女',
                        'click': '28314000',
                        'autour': 'MS芙子',
                        'fenlei': '东方玄幻',
                        'imgurl': 'http://wfqqreader-1252317822.image.myqcloud.com/cover/991/607991/s_607991.jpg',
                        'selected': false
                    },
                    {
                        'title': '神医弃女',
                        'click': '28314000',
                        'autour': 'MS芙子',
                        'fenlei': '东方玄幻',
                        'imgurl': 'http://wfqqreader-1252317822.image.myqcloud.com/cover/991/607991/s_607991.jpg',
                        'selected': false
                    },
                    {
                        'title': '神医弃女',
                        'click': '28314000',
                        'autour': 'MS芙子',
                        'fenlei': '东方玄幻',
                        'imgurl': 'https://bookcover.yuewen.com/qdbimg/349573/c_16335202204882804/90',
                        'selected': false
                    },
                    {
                        'title': '神医弃女',
                        'click': '28314000',
                        'autour': 'MS芙子',
                        'fenlei': '东方玄幻',
                        'imgurl': 'http://wfqqreader-1252317822.image.myqcloud.com/cover/991/607991/s_607991.jpg',
                        'selected': false
                    },
                    {
                        'title': '神医弃女',
                        'click': '28314000',
                        'autour': 'MS芙子',
                        'fenlei': '东方玄幻',
                        'imgurl': 'http://wfqqreader-1252317822.image.myqcloud.com/cover/991/607991/s_607991.jpg',
                        'selected': false
                    },

                ],

            }
        },
        methods: {
            enter: function (index) {

                this.two_right.map(a => (a.selected = false))

                this.two_right[index].selected = true
            },

            enter1:function (index) {
                this.three_first.map(a => (a.selected = false))

                this.three_first[index].selected = true
            },

            enter2:function (index) {
                this.three_seccend.map(a => (a.selected = false))

                this.three_seccend[index].selected = true
            },

            enter3:function (index) {
                this.three_third.map(a => (a.selected = false))

                this.three_third[index].selected = true
            },
            enter4:function (index) {
                this.three_fourth.map(a => (a.selected = false))

                this.three_fourth[index].selected = true
            }

        },
        created(){

        },
        filters: {
            snippet: function (value) {
                return value.slice(0, 150) + "......"
            },
            snippet1: function (value) {
                return value.slice(0, 7) + "+"
            }
        }
    }
</script>

<style scoped>
  .box{
    width: 100%;
    background:   #fff5f4;;
  }

  .main {
    width: 80%;
    margin: 0 auto;
    box-sizing: border-box;

  }

  a {
    color: black;
  }

  .el-carousel__item img {
    width: 100%;
    height: 100%;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .Notice {
    height: 300px;
  }

  .Notice .Notice_list {
    margin-bottom: 10px;
    box-sizing: border-box;
    padding: 5px;
    border-bottom: 1px solid #d3dce6;
    font-size: 14px;
    overflow: hidden;
  }

  .recommend >>> .el-card__header, .two_right >>> .el-card__header ,.three >>> .el-card__header{
    border-bottom: 1px solid black;

  }

  .recommend ul {

    list-style: none;
    width: 100%;
  }

  .recommend ul li {
    width: 230px;
    margin-right: 20px;
    padding: 24px 0;
    float: left;

  }

  .recommend ul li .book-img {
    width: 72px;
    height: 96px;
    margin-right: 12px;
    border: 1px solid red;
    float: left;
  }

  .recommend ul li .book-img a {
    position: relative;
    z-index: 1;
    display: block;
    overflow: hidden;
    width: 100%;
    height: 100%;
    box-shadow: 0 1px 6px rgba(0, 0, 0, .3), 0 0 5px #f9f2e9 inset;

  }

  .recommend ul li .book-img a img {
    width: 100%;
    height: 100%;
    cursor: pointer;
    transition: all 0.5s;
  }

  .recommend ul li .book-img a img:hover {
    transform: scale(1.2);
  }

  .recommend ul li .book-info {
    width: 144px;
    float: left;
    padding: 0;
    margin: 0;

  }

  .recommend ul li .book-info h4 {
    font: 16px/21px PingFangSC-Regular, HelveticaNeue-Light, 'Helvetica Neue Light', 'Microsoft YaHei', sans-serif;
    overflow: hidden;
    height: 21px;
    margin-top: -3px;
    margin-bottom: 8px;
    display: block;
  }

  .recommend ul li .book-info h4 a:hover {
    color: red;
  }

  .recommend ul li .book-info p {
    font: 12px/20px PingFangSC-Regular, '-apple-system', Simsun;
    overflow: hidden;
    height: 40px;
    margin-bottom: 10px;
    color: #666;
  }

  .state-box {
    font-family: PingFangSC-Regular, '-apple-system', Simsun;
    font-size: 12px;
    line-height: 18px;
  }

  .state-box i {
    font-family: PingFangSC-Regular, HelveticaNeue-Light, 'Helvetica Neue Light', 'Microsoft YaHei', sans-serif, Simsun;;
    float: right;
    overflow: hidden;
    max-width: 52px;
    height: 18px;
    padding: 0 3px;
    text-align: center;
    color: #a6a6a6;
    border: 1px solid #e7e7e7;
    border-radius: 1px;
  }

  .state-box a {
    display: block;
    overflow: hidden;
    height: 18px;
    margin-top: 1px;
    padding-right: 10px;
    white-space: nowrap;
    color: #a6a6a6;
  }

  .two_right .box-card ul {
    width: 100%;
    padding: 0;
    margin: 0;
    padding-top: 25px;
  }

  .two_right .box-card ul li {
    padding: 0 0 0 10px;
    border-bottom: 1px solid #DDD;
    line-height: 30px;
    vertical-align: bottom;
    width: 100%;
    position: relative;
    overflow: hidden;
    margin-bottom: 6px;
  }

  .two_right .box-card ul .active .hoverHide {
    display: none;
  }

  .two_right .box-card ul .active .detailWrap {
    display: block;
  }


  .two_right .box-card ul li .hoverHide {
    overflow: hidden;
    display: block;
    padding-left: 20px;
  }

  .two_right .box-card ul li .hoverHide em {
    float: right;
    color: #0773C0;
    font-family: arial;
    font-style: normal;
    max-width: 150%;
    font-size: 15px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: clip;
    margin-right: 15px;
    text-align: center;
  }

  .two_right .box-card ul li .hoverHide span {
    float: left;
    width: 16px;
    height: 16px;
    color: #FFF;
    text-align: center;
    margin-top: 7px;
    line-height: 16px;
    margin-right: 5px;
    background: #0773C0;
    position: absolute;
    left: 0;
    margin-left: 10px;
  }

  .two_right .box-card ul li .hoverHide a {
    display: block;
    float: left;
    width: 120px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-family: PingFangSC-Regular, HelveticaNeue-Light, 'Helvetica Neue Light', 'Microsoft YaHei', sans-serif, Simsun;
  }

  .two_right .box-card ul li .detailWrap {
    left: 10px;
    height: 100px;
    top: -4px;
    position: relative;
    line-height: 1.8;
    margin-left: 0;
    display: none;
  }

  .two_right .box-card ul li .detailWrap span {


    float: left;
    width: 16px;
    height: 16px;
    color: #FFF;
    text-align: center;
    margin-top: 7px;
    line-height: 16px;
    margin-right: 5px;
    background: #0773C0;
    position: absolute;
    left: -11px;
    top: 0px;

  }

  .two_right .box-card ul li .detailWrap a {
    width: auto;
    display: inline;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .two_right .box-card ul li .detailWrap img {
    position: absolute;
    left: 10px;
    top: 10px;
    border: none;
  }

  .two_right .box-card ul li .detailWrap .detailInfo {
    position: absolute;
    top: -10px;
    left: 80px;
    margin: 0;
    padding: 0;
  }

  .two_right .box-card ul li .detailWrap .detailInfo h4 {
    font-size: 15px;
    margin: 0;
    padding: 0;
    display: block;
    margin-block-start: 1.33em;
    margin-block-end: 1.33em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    margin-bottom: 0px;
  }

  .two_right .box-card ul li .detailWrap .detailInfo h4 a {
    float: none;
    white-space: normal;
    margin: 0;
    padding: 0;
  }

  .two_right .box-card ul li .detailWrap .detailInfo p {
    color: #666;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    margin: 0;
    padding: 0;
    font-size: 5px;
  }


  .ad-long img {
    width: 100%;
    height: 100%;

  }

  .three{
    margin-top: 40PX;
  }
  .three .box-card ul {
    width: 100%;
    padding: 0;
    margin: 0;
    padding-top: 25px;
  }

  .three .box-card ul li {
    padding: 0 0 0 10px;
    border-bottom: 1px solid #DDD;
    line-height: 30px;
    vertical-align: bottom;
    width: 100%;
    position: relative;
    overflow: hidden;
    margin-bottom: 6px;
  }

  .three .box-card ul .active .hoverHide {
    display: none;
  }

  .three .box-card ul .active .detailWrap {
    display: block;
  }


  .three .box-card ul li .hoverHide {
    overflow: hidden;
    display: block;
    padding-left: 20px;
  }

  .three .box-card ul li .hoverHide em {
    float: right;
    color: #bfbfbf;
    font-family: arial;
    font-style: normal;
    max-width: 150%;
    font-size: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: clip;
    margin-right: 15px;
    text-align: center;
  }

  .three .box-card ul li .hoverHide span {
    float: left;
    width: 16px;
    height: 16px;
    color: #FFF;
    text-align: center;
    margin-top: 7px;
    line-height: 16px;
    margin-right: 5px;
    background: #0773C0;
    position: absolute;
    left: 0;
    margin-left: 10px;
  }

  .three .box-card ul li .hoverHide a {
    display: block;
    float: left;
    width: 120px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-family: PingFangSC-Regular, HelveticaNeue-Light, 'Helvetica Neue Light', 'Microsoft YaHei', sans-serif, Simsun;
  }

  .three .box-card ul li .detailWrap {
    left: 10px;
    height: 100px;
    top: -4px;
    position: relative;
    line-height: 1.8;
    margin-left: 0;
    display: none;
  }

  .three .box-card ul li .detailWrap span {


    float: left;
    width: 16px;
    height: 16px;
    color: #FFF;
    text-align: center;
    margin-top: 7px;
    line-height: 16px;
    margin-right: 5px;
    background: #0773C0;
    position: absolute;
    left: -11px;
    top: 0px;

  }

  .three .box-card ul li .detailWrap a {
    width: auto;
    display: inline;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .three .box-card ul li .detailWrap img {
    position: absolute;
    left: 10px;
    top: 10px;
    border: none;
  }

  .three .box-card ul li .detailWrap .detailInfo {
    position: absolute;
    top: -10px;
    left: 80px;
    margin: 0;
    padding: 0;
  }

  .three .box-card ul li .detailWrap .detailInfo h4 {
    font-size: 15px;
    margin: 0;
    padding: 0;
    display: block;
    margin-block-start: 1.33em;
    margin-block-end: 1.33em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    margin-bottom: 0px;
  }

  .three .box-card ul li .detailWrap .detailInfo h4 a {
    float: none;
    white-space: normal;
    margin: 0;
    padding: 0;
  }

  .three .box-card ul li .detailWrap .detailInfo p {
    color: #666;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    margin: 0;
    padding: 0;
    font-size: 5px;
  }

  .jubao{
    margin-top: 40px;
    margin-bottom: 20px;
  }
  .jubao img{
    width: 100%;
    height: 100%;
  }
</style>
