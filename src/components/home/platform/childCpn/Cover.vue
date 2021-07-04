<template>
  <!-- 遮罩层 -->
  <div class="cover">
    <div class="operation">
      <a href="javascript:">免费试用</a>
      <span class="sep">|</span>
      <a href="javascript:">查看详情</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cover"
}
</script>

<style scoped>
.cover {
  position: absolute;
  left: -0.01rem;
  top: -0.01rem;
  width: 3.854rem;
  height: 2.604rem;
  border: 0.021rem solid #0081ff;
  border-radius: 0.052rem;
  /*box-shadow: 2px 2px 1px rgba(0, 129, 255, .9);*/
}

.operation {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0.573rem;
  line-height: 0.573rem;
  background-color: #0081ff;
  color: #ffffff;
  font-size: 0.1875rem;
}

.operation a {
  color: #ffffff;
  font-size: 0.1875rem;
}

.sep {
  margin: 0 0.5rem;
}
</style>