<template>
  <div :class="['top-menu', topBarEntered ? 'active-bar' : '']"
       @mouseenter="topBarEntered=true"
       @mouseleave="topBarEntered=false">
    <div class="container">
      <!-- for SEO -->
      <h1 class="title">永中云服务</h1>
      <ul>
        <li><span>首页</span></li>
        <li @mouseenter="productSubMenuShown = true" @mouseleave="productSubMenuShown = false">
          <span>产品</span>
          <top-sub-menu
              v-if="productSubMenuShown"
              class="top-sub-menu"
              :menu-list-items="productMenus"/>
        </li>
        <li><span>价格</span></li>
        <li @mouseenter="docSubMenuShown = true" @mouseleave="docSubMenuShown = false">
          <span>开发文档</span>
          <top-sub-menu
              v-if="docSubMenuShown"
              class="top-sub-menu"
              :menu-list-items="docMenus"/>
        </li>
        <li><span>新闻资讯</span></li>
        <li><span>合作伙伴申请</span></li>
      </ul>
      <span class="manage-center">管理中心</span>
      <div class="logo">
        <i>
          <img src="../../../../assets/img/logo.jpg" alt="">
        </i>
      </div>
    </div>
  </div>
</template>

<script>
import TopMenuList from "./TopSubMenu";
import TopSubMenu from "./TopSubMenu";

export default {
  name: "TopMenu",
  components: {TopSubMenu, TopMenuList},
  data() {
    return {
      topBarEntered: false,
      productSubMenuShown: false,
      docSubMenuShown: false,
      menus: ['首页', '产品', '价格', '开发文档', '新闻资讯', '合作伙伴申请'],
      productMenus: ['云预览', '云编辑', '格式转换'],
      docMenus: ['快速入门', '云预览', '云编辑', '格式转换'],
      currMenuIndex: -1
    }
  },
  methods: {
    // menuItemEntered(index) {
    //   this.currMenuIndex = index
    // },
    // // 任意一个离开，置currMenuIndex为-1
    // menuItemLeft() {
    //   this.currMenuIndex = -1
    // }
  }
}
</script>

<style scoped>
.top-menu {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  height: 0.667rem;
  line-height: 0.667rem;
  font-size: 0.167rem;
  text-align: center;
  background-color: rgba(255, 255, 255, 0);
  color: #ffffff;
  transition: background-color .7s ease, color .7s ease;
}

.container {
  display: flex;
}

.active-bar {
  background-color: #ffffff;
  color: #000000;
}

.container .title {
  cursor: pointer;
  margin: 0;
  font-size: 0.26rem;
  width: 1.5625rem;
  font-weight: 400;
}

.container ul > li {
  position: relative;
  width: 1.25rem;
  float: left;
  padding: 0 0.1rem;
  /*height: 0.667rem;*/
  line-height: 0.667rem;
  cursor: pointer;
}

.container ul > li:last-child {
  width: 1.5625rem;
}

.container ul > li span {
  display: inline-block;
  transition: border-bottom-color .7s ease, color .7s ease;
}

.container ul > li:hover span {
  border-bottom: 4px solid #0081ff;
  color: #0081ff;
}

.container .manage-center {
  flex: 1;
  cursor: pointer;
  width: 1.042rem;
  text-align: right;
  transition: color .7s ease;
}

.container .manage-center:hover {
  color: #0081ff;
}

.container .logo {
  width: 1.042rem;
}

.container .logo i {
  display: inline-block;
  width: 0.4rem;
  height: 0.4rem;
  transform: translate(0, 25%);
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
}

.container .logo i img {
  width: 100%;
  height: 100%;
}

/*.yozo-enter-from,*/
/*.yozo-leave-to {*/
/*  height: 0;*/
/*}*/

/*.yozo-enter-to,*/
/*.yozo-leave-from {*/
/*  height: auto;*/
/*}*/

/*.yozo-enter-active,*/
/*.yozo-leave-active {*/
/*  transition: height 1s ease;*/
/*}*/
</style>