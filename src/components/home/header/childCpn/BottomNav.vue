<template>
  <div class="bottom-nav">
    <p class="ad-title container">{{ currentAdTitle }}</p>
  </div>
</template>

<script>
export default {
  name: "BottomNav",
  data() {
    return {
      adTitles: [],
      currentIndex: 0
    }
  },
  created() {
    this.requestAdTitles()
    setInterval(() => {
      this.currentIndex += 1
      if (this.currentIndex >= this.adTitles.length) {
        this.currentIndex = 0
      }
    }, 2000);
  },
  computed: {
    currentAdTitle() {
      return this.adTitles[this.currentIndex]
    }
  },
  methods: {
    // 模拟请求数据
    requestAdTitles() {
      let adTitles = [
        '政务便民服务的诀窍是？永中云预览来解答',
        '永中云服务平台，优质体验',
        '永中云预览近期动态抢先看'
      ]
      this.adTitles.push(...adTitles);
    }
  }
}
</script>

<style scoped>
.bottom-nav {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 0.5rem;
  font-size: 0.208rem;
  z-index: -9;
  color: #ffffff;
  background-color: rgba(255, 255, 255, .1);
}

.ad-title {
  height: 0.5rem;
  line-height: 0.5rem;
  cursor: pointer;
}
</style>