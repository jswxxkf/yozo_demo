<template>
  <div class="process container">
    <div class="title">接入流程</div>
    <div class=""><img src="https://open.yozocloud.cn/static/media/processImage.a6dacb56.svg" alt=""></div>
    <div class="operator">
      <button class="apply">申请加入</button>
      <span class="quick">快速入门&nbsp;&gt;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Process"
}
</script>

<style scoped>
.process {
  padding: 0.65rem 0;
  text-align: center;
}

.process .title {
  font-size: 0.375rem;
  line-height: 0.375rem;
  margin-bottom: 0.573rem;
  font-weight: 400;
}

.process img {
  width: 9.292rem;
  height: 2.083rem;
  vertical-align: middle;
  margin-bottom: 0.573rem;
}

.process .operator {
  font-size: 0.208rem;
}

.apply {
  width: 1.458rem;
  height: 0.458rem;
  line-height: 0.458rem;
  margin-right: 0.8125rem;
  border-radius: 0.0625rem;
  background-color: #3199ff;
  color: #ffffff;
  border-width: 0;
  padding: 0;
  cursor: pointer;
}

.apply:hover {
  background-color: #0081ff;
}

.quick {
  color: #0081ff;
  cursor: pointer;
}
</style>