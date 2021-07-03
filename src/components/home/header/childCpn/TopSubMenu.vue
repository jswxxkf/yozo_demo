<template>
  <ul class="top-menu-list">
    <li class="sub-menu-item" v-for="(item, index) in menuListItems" :key="index">
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "TopSubMenu",
  props: {
    menuListItems: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.top-menu-list {
  position: relative;
  z-index: 99;
  left: 50%;
  transform: translate(-50%, 0);
  margin-top: 0.052rem;
  border-radius: 0.05rem;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, .3);
  background-color: #ffffff;
  color: #000000;
}

.sub-menu-item {
  height: 0.4rem;
  line-height: 0.4rem;
  cursor: pointer;
}

.top-menu-list li:hover {
  background-color: #eeeeee;
}
</style>