<template>
  <div class="bottom-indicator">
    <img src="https://open.yozocloud.cn/static/media/leftWhite.e9cd2694.svg"
         alt=""
         @click="imgClicked('prev')">
    <img src="https://open.yozocloud.cn/static/media/rightWhite.d078f60b.svg"
         alt=""
         @click="imgClicked('next')">
  </div>
</template>

<script>
export default {
  name: "BottomIndicator",
  methods:{
    imgClicked(type) {
      this.$bus.$emit("swipeTriggered", type);
    }
  }
}
</script>

<style scoped>
.bottom-indicator img {
  vertical-align: middle;
  margin: 0 0.25rem;
  cursor: pointer;
}
</style>