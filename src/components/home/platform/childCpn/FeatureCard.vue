<template>
  <div class="feature-card">
    <!-- 为遮罩层预留插槽 -->
    <slot></slot>
    <div class="top">
      <slot name="top"></slot>
    </div>
    <div class="mid">
      <slot name="mid"></slot>
    </div>
    <div class="bottom">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeatureCard"
}
</script>

<style scoped>
.feature-card {
  width: 3.854rem;
  height: 2.604rem;
  padding: 0.5rem 0.333rem 0;
  line-height: 0.229rem;
  border: 0.021rem solid #cccccc;
  border-radius: 0.052rem;
  /*box-shadow: 1px 1px 1px rgba(0, 0, 0, .9);*/
}

.top,
.bottom {
  font-size: 0.1875rem;
}

.top {
  margin-bottom: 0.333rem;
}

.mid {
  font-size: 0.146rem;
  height: 1.042rem;
  text-align: left;
}

.bottom {
  text-align: left;
  color: #838688;
}

strong {
  font-size: 0.417rem;
  color: #0081ff;
  font-weight: 400;
}

span {
  color: #0081ff;
}
</style>