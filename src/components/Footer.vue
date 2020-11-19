<template>
  <div class="footer">
    <div class="footer_one">
      <span>关于我们</span>
      <el-divider direction="vertical"></el-divider>
      <span>加入我们</span>
      <el-divider direction="vertical"></el-divider>
      <span>作家签约</span>
      <el-divider direction="vertical"></el-divider>
      <span>服务协议</span>
      <el-divider direction="vertical"></el-divider>
      <span>客服中心</span>
      <el-divider direction="vertical"></el-divider>
      <span>联系我们</span>
      <el-divider direction="vertical"></el-divider>
      <span>举报中心</span>

    </div>

    <div class="copy-right">
      <p>
        <span>Copyright © 1999-2020 www.hengrenboyuan.com All Rights Reserved</span>版权所有 成都仁恒博远科技发展有限公司
      </p>
      <p>成都仁恒博远科技发展有限公司 蜀ICP证090200号
        <a href="http://beian.miit.gov.cn/publish/query/indexFirst.action" target="_blank" rel="nofollow">蜀ICP备09093681号-1</a>
        <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502030109"
           style="display: inline-block"
           target="_blank" rel="nofollow"><img src="//qidian.gtimg.com/hongxiu/images/beian.d0289.png"
                                               style="float: left">
          川公网安备 11010502030109号</a>川网文[2015]0006-006号新出网证（川）字204号
      </p>
      <p>请所有作者发布作品时务必遵守国家互联网信息管理办法规定，我们拒绝任何色情小说，一经发现，即作删除！客服电话：123-123-123456</p>
      <p>联系方式 总机 123-123-123456 地址：成都市温江区柳台大道东段208号</p>
      <p>本站所收录作品、社区话题、书库评论及本站所做之广告均属个人行为，且信息为虚假信息，仅为学习使用！</p></div>
  </div>

</template>

<script>
    export default {
        name: "Footer",
        data() {
            return {}
        },

    }

</script>

<style scoped>
  .footer {
    width: auto;
    background: #ffebee;
    padding: 40px;
  }

  .footer .footer_one {
    width: 50%;
    display: block;
    margin: 0 auto;
  }

  .footer .footer_one span {
    color: #a5545f;
    font-family: PingFangSC-Regular, '-apple-system', Simsun;
    font-size: 15px;
  }

  .footer .copy-right {
    width: 80%;
    margin: 0 auto;
  }

  .footer .copy-right p {
    -webkit-font-smoothing: antialiased;
    text-align: center;
    margin: 0;
    padding: 0;
    word-break: break-all;
    font: 12px/20px PingFangSC-Regular, '-apple-system', Simsun;
    overflow: hidden;
    height: 20px;
    color: #e5bdc3;
  }
</style>
