<template>
  <div id="app">
    <my-header/>
    <platform/>
    <fixed-logo :is-back-to-top-shown="isBackToTopShown"/>
    <!-- hack -->
    <top-menu class="hack-top-menu" v-if="isBackToTopShown"/>
  </div>
</template>

<script>
import MyHeader from "./components/home/header/MyHeader";
import Platform from "./components/home/platform/Platform";
import FixedLogo from "./components/home/FixedLogo";
import TopMenu from "./components/home/header/childCpn/TopMenu";

export default {
  components: {
    TopMenu,
    FixedLogo,
    Platform,
    MyHeader
  },
  data() {
    return {
      isBackToTopShown: false
    }
  },
  created() {
    window.addEventListener("scroll", () => {
      this.isBackToTopShown = (window.scrollY || window.pageYOffset) >= 400;
    });
  }
}
</script>

<style>
@import "./assets/css/normalize.css";
@import "./assets/css/common.css";

.hack-top-menu {
  position: fixed !important;
  background-color: #ffffff !important;
  color: #000000 !important;
}
</style>
