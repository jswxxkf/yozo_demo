<template>
  <div class="copyright-bar">
    <div class="container">
      <div class="fl">
        版权所有：永中软件股份有限公司 All Rights Reserved.&nbsp;&nbsp;
        <a href="javascript:">苏 ICP 备 10095690号-9</a>
      </div>
      <div class="fr">
        <a href="javascript:">隐私条款</a>
        <span class="sep">|</span>
        <a href="javascript:">知识产权声明</a>
        <span class="sep">|</span>
        <a href="javascript:">用户协议</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CopyrightBar"
}
</script>

<style scoped>
.copyright-bar {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0.385rem;
  line-height: 0.385rem;
  font-size: 0.125rem;
  color: #9397a5;
  background-color: #11132b;
}

.copyright-bar a {
  color: #9397a5;
  transition: color 1s ease;
}

.copyright-bar a:hover {
  color: #0081ff;
}

.sep {
  margin: 0 0.104rem;
}
</style>