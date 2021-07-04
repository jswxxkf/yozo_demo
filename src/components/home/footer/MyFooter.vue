<template>
  <div class="my-footer clear-fix">
    <div class="container">
      <dl>
        <dt>开发文档</dt>
        <dd><a href="#">快速入门</a></dd>
        <dd><a href="#">文档云预览</a></dd>
        <dd><a href="#">文档云编辑</a></dd>
        <dd><a href="#">文档格式转换</a></dd>
      </dl>
      <dl>
        <dt>更多服务</dt>
        <dd><a href="#">永中DCS文档预览</a></dd>
        <dd><a href="#">永中Web Office在线编辑</a></dd>
        <dd><a href="#">永中Office</a></dd>
        <dd><a href="#">永中优云</a></dd>
        <dd><a href="#">柚墨</a></dd>
        <dd><a href="#">永中PDF工具集</a></dd>
      </dl>
      <dl>
        <dt>联系我们</dt>
        <dd>客服电话：153-7022-9479</dd>
        <dd>商务电话：180-5158-6982</dd>
        <dd>交流QQ群：1095015295</dd>
      </dl>
      <dl>
        <dt>永中软件股份有限公司</dt>
        <dd>地址：无锡市新吴区震泽路18号</dd>
        <dd>国家软件园三期 飞鱼座永中大厦</dd>
      </dl>
    </div>
    <copyright-bar/>
  </div>
</template>

<script>
import CopyrightBar from "./childCpn/CopyrightBar";

export default {
  name: "MyFooter",
  components: {CopyrightBar}
}
</script>

<style scoped>
.my-footer {
  position: relative;
  padding: 0.65rem 0;
  text-align: left;
  background-color: #1d1f37;
}

.my-footer dl {
  width: 25%;
  float: left;
}

dl dt {
  color: #ffffff;
  font-size: 0.167rem;
  margin-bottom: 0.26rem;
}

dl dd {
  color: #9397a5;
  font-size: 0.146rem;
  margin-bottom: 0.208rem;
}

dl dd a {
  color: #9397a5;
}

dl dd a:hover {
  color: #0081ff;
}

dl dd a {
  transition: color .5s ease;
}
</style>