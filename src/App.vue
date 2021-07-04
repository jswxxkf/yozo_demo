<template>
  <div id="app">
    <my-header/>
    <platform/>
    <process/>
    <client/>
    <moment/>
    <my-footer/>
    <fixed-aside :is-back-to-top-shown="isBackToTopShown"/>
    <!-- hack -->
    <top-menu class="hack-top-menu" v-if="isBackToTopShown"/>
  </div>
</template>

<script>
import MyHeader from "./components/home/header/MyHeader";
import Platform from "./components/home/platform/Platform";
import TopMenu from "./components/home/header/childCpn/TopMenu";
import FixedAside from "./components/home/FixedAside";
import Process from "./components/home/process/Process";
import Client from "./components/home/client/Client";
import Moment from "./components/home/moment/Moment";
import MyFooter from "./components/home/footer/MyFooter";

export default {
  components: {
    MyFooter,
    Moment,
    Client,
    Process,
    FixedAside,
    TopMenu,
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
