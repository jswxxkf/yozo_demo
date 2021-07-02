<template>
  <div class="my-header">
    <top-menu/>
    <bottom-nav/>
  </div>
</template>

<script>
import BottomNav from "./childCpn/BottomNav";
import TopMenu from "./childCpn/TopMenu";
export default {
  name: "MyHeader",
  components: {TopMenu, BottomNav}
}
</script>

<style scoped>
.my-header {
  position: relative;
  width: 100%;
  height: 5.958rem;
  z-index: 1;
  background: url("../../../assets/img/bg1.png") no-repeat 0/cover;
}
</style>