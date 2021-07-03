<template>
  <div class="platform container">
    <div class="platform-intro">
      <p class="platform-title">永中云服务平台</p>
      <p class="platform-desc">多终端、多平台的文档服务解决方案提供商</p>
    </div>
    <div class="platform-features">
      <feature-card class="feature">
        <p slot="top">
          文档云预览
        </p>
        <p slot="mid">
          基于永中DCS文档在线预览能力，无需下载，文档原样展现，轻松实现高效、安全的文档在线预览功能
        </p>
        <div slot="bottom">
          <strong>￥0</strong>元试用&nbsp;&nbsp;开通即享<span>7</span>天VIP权益
        </div>
        <cover class="cover-layer"/>
      </feature-card>
      <feature-card class="feature">
        <img class="new-sale" src="https://open.yozocloud.cn/static/media/newTag.2974ab20.svg" alt="">
        <p slot="top">
          文档云编辑
        </p>
        <p slot="mid">
          基于永中WeOffice文档在线编辑能力，无需安装本地Office及插件，多种文档实时查看编辑
        </p>
        <div slot="bottom">
          <strong>￥0</strong>元试用&nbsp;&nbsp;开通即享<span>7</span>天VIP权益
        </div>
        <cover class="cover-layer"/>
      </feature-card>
      <feature-card class="feature">
        <p slot="top">
          文档格式转换
        </p>
        <p slot="mid">
          基于永中DCS文档格式转换能力，极速转换，效果出色，多种格式文档高质量互转
        </p>
        <div slot="bottom">
          <strong>￥0</strong>开通即送<span>20</span>次免费转换次数
        </div>
        <cover class="cover-layer"/>
      </feature-card>
    </div>
  </div>
</template>

<script>
import FeatureCard from "./childCpn/FeatureCard";
import Cover from "./childCpn/Cover";

export default {
  name: "Platform",
  components: {Cover, FeatureCard}
}
</script>

<style scoped>
.platform {
  text-align: center;
}

.platform-intro {
  padding: 0.521rem 0;
}

.platform-intro .platform-title {
  font-size: 0.365rem;
}

.platform-intro .platform-desc {
  margin-top: 0.3125rem;
  font-size: 0.208rem;
  color: #a0a0a0;
}

.platform-features {
  display: flex;
  justify-content: space-between;
}

.feature {
  position: relative;
}

.feature:hover .cover-layer {
  display: block;
}

.cover-layer {
  display: none;
}

.new-sale {
  position: absolute;
  z-index: 999;
  left: -0.03125rem;
  top: -0.052rem;
}
</style>