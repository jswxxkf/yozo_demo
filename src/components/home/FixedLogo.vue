<template>
  <div class="fixed-logo">
    <img src="https://open.yozocloud.cn/static/media/phone.6943de90.svg" alt="">
    <img src="https://open.yozocloud.cn/static/media/kefu.fffebd7b.svg" alt="">
    <img
        src="https://open.yozocloud.cn/static/media/top.56fea108.svg"
        alt=""
        @click="backToTop"
        v-show="isBackToTopShown">
  </div>
</template>

<script>
export default {
  name: "FixedLogo",
  props: {
    isBackToTopShown: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    backToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }
  }
}
</script>

<style scoped>
.fixed-logo {
  position: fixed;
  top: 3rem;
  right: 0.25rem;
  z-index: 999;
}

.fixed-logo img {
  display: block;
  width: 0.5rem;
  height: 0.5rem;
  margin-bottom: 0.208rem;
  border: 2px solid #cccccc;
  border-radius: 50%;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, .1);
  cursor: pointer;
}

.fixed-logo img:hover {
  border: 2px solid #0081ff;
}
</style>