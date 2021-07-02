<template>
  <div :class="['top-menu', topBarEntered ? 'active-bar' : '']"
       @mouseenter="topBarEntered=true"
       @mouseleave="topBarEntered=false">
    <div class="container">
      <!-- for SEO -->
      <h1 class="title">永中云服务</h1>
      <ul>
        <li v-for="(item, index) in menus"
            :key="index"
            :class="{'active-li': index === currMenuIndex}"
            @mouseenter="menuItemEntered(index)"
            @mouseleave="menuItemLeft">
          {{ item }}
        </li>
      </ul>
      <span class="manage-center">管理中心</span>
      <div class="logo">
        <img src="../../../../assets/img/logo.jpg" alt="logo of yozo">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopMenu",
  data() {
    return {
      topBarEntered: false,
      menus: ['首页', '产品', '价格', '开发文档', '新闻资讯', '合作伙伴申请'],
      currMenuIndex: -1
    }
  },
  methods: {
    menuItemEntered(index) {
      this.currMenuIndex = index
    },
    // 任意一个离开，置currMenuIndex为-1
    menuItemLeft() {
      this.currMenuIndex = -1
    }
  }
}
</script>

<style scoped>
.top-menu {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 0.667rem;
  /* inherit property */
  line-height: 0.667rem;
  font-size: 0.167rem;
  text-align: center;
  background-color: rgba(255, 255, 255, 0);
  color: #ffffff;
  transition: background-color, color 1s ease;
}

.container {
  display: flex;
}

.active-bar {
  background-color: #ffffff;
  color: #000000;
}

.container .title {
  margin: 0;
  font-size: 0.26rem;
  width: 1.5625rem;
  font-weight: 400;
}

.container ul {
  flex: 1;
}

.container ul li {
  float: left;
  padding: 0 0.3125rem;
  height: 0.667rem;
  line-height: 0.667rem;
  cursor: pointer;
  transition: border-bottom-color, color .5s ease;
}

.active-li {
  border-bottom: 2px solid #0081ff;
  color: #0081ff;
}

.container .manage-center {
  width: 2.083rem;
  text-align: right;
}

.container .logo {
  width: 1.042rem;
}

.container img {
  width: 0.521rem;
  height: 0.521rem;
  vertical-align: middle;
}
</style>