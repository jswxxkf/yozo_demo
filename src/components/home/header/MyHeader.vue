<template>
  <div class="my-header" ref="myHeader" :style="bgi">
    <top-menu/>
    <div class="header-middle">
      <transition name="yozo" :appear="true">
        <float-ad left="0" top="1.5rem" text-align="left" v-if="0 === currentIndex">
          <p slot="top">新人专享 VIP免费送</p>
          <p slot="mid">云服务新用户专享福利, 申请应用, 开通即送VIP <a>活动规则</a></p>
          <div slot="bottom">
            <button>立即参与</button>
            <span>完成<a>开发者申请</a>, 即可参加活动</span>
          </div>
        </float-ad>
      </transition>
      <transition name="yozo">
        <float-ad left="0.5rem" top="1rem" text-align="center" v-if="1 === currentIndex">
          <p slot="top">永中云服务平台 文档业务能力专家</p>
          <p slot="mid">永中云服务平台基于永中软件股份有限公司十多年自主研发的Office核心技术，
            提供多种文档处理加工Saas服务，助力您的网站（系统）实现文档在线预览、文档在线编辑、文档格式转换等功能。</p>
          <div slot="bottom">
            <button>申请加入</button>
          </div>
        </float-ad>
      </transition>
    </div>
    <div class="indicator container">
      <i v-for="index in numSwiper"
         :key="index"
         :class="{'active-i': (index - 1) === currentIndex}"
         @click="changeIndex(index - 1)"></i>
    </div>
    <bottom-nav/>
  </div>
</template>

<script>
import BottomNav from "./childCpn/BottomNav";
import TopMenu from "./childCpn/TopMenu";
import FloatAd from "./childCpn/FloatAd";

export default {
  name: "MyHeader",
  components: {FloatAd, TopMenu, BottomNav},
  data() {
    return {
      numSwiper: 2,
      currentIndex: 0,
      bgiUrls: [
        "https://open.yozocloud.cn/static/media/bg_banner3.dd1f0967.png",
        "https://open.yozocloud.cn/static/media/bg_banner4.9a7ebc3d.png"
      ],
      interval: null
    }
  },
  computed: {
    bgi() {
      return {
        backgroundImage: `url(${this.bgiUrls[this.currentIndex]}`
      }
    }
  },
  mounted() {
    this.interval = setInterval(this.intervalHandler, 3000);
  },
  methods: {
    intervalHandler() {
      this.currentIndex += 1
      if (this.currentIndex >= this.numSwiper) {
        this.currentIndex = 0
      }
    },
    changeIndex(index) {
      this.currentIndex = index
      // 重新开启interval
      clearInterval(this.interval);
      this.interval = setInterval(this.intervalHandler, 3000)
    }
  }
}
</script>

<style scoped>
.my-header {
  position: relative;
  width: 100%;
  height: 5.958rem;
  font-size: 0.208rem;
  z-index: 1;
  background-repeat: no-repeat;
  background-size: cover;
}

.header-middle {
  /* 依据absolute计算公式 */
  position: absolute;
  width: 12.5rem;
  margin: auto;
  left: 0;
  right: 0;
  top: 0.667rem;
  bottom: 0.5rem;
  color: #ffffff;
}

.yozo-enter {
  transform: translate(0, 0.66rem);
}

.yozo-enter-active {
  transition: transform 1s ease;
}

.indicator i {
  display: inline-block;
  margin-right: 0.104rem;
  width: 0.167rem;
  height: 0.052rem;
  background-color: #ffffff;
  opacity: .75;
  transition: width 1s ease;
}

.active-i {
  width: 0.333rem !important;
}

.indicator {
  position: absolute;
  z-index: 9;
  width: 12.5rem;
  margin: auto;
  left: 0;
  right: 0;
  bottom: 0.5rem;
  height: 0.521rem;
  cursor: pointer;
  text-align: center;
}
</style>