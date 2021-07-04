<template>
  <div class="preview">
    <scene-feature-card>
      <img src="https://open.yozocloud.cn/static/media/bg_zaixianjiaoyu.1c9b8da3.png" alt="" slot="img">
      <div slot="title">在线教育</div>
      <div slot="desc">通过云预览能力实现课件、讲义等文档的在线预览，降低学生使用门槛，增强体验。并且可以设置文本防复制等保护文档内容不被窃取。</div>
    </scene-feature-card>
    <scene-feature-card>
      <img src="https://open.yozocloud.cn/static/media/bg_zhengqiOA.a4fc893d.png" alt="" slot="img">
      <div slot="title">政企OA</div>
      <div slot="desc">赋能企业OA系统，帮助企业实现PC、APP多端下内部文档资料的在线预览。</div>
    </scene-feature-card>
    <scene-feature-card>
      <img src="https://open.yozocloud.cn/static/media/bg_wangzhanyunyong.780fc9fb.png" alt="" slot="img">
      <div slot="title">网站运用</div>
      <div slot="desc">政府、教育类网站通常有大量公告教育类网站通常有大量公告通知通知、学习资料，在线预览能显著提高用户的阅读体验，手机端查看也更方便。</div>
    </scene-feature-card>
    <scene-feature-card>
      <img src="https://open.yozocloud.cn/static/media/bg_qiyeruanjian.493ff3ed.png" alt="" slot="img">
      <div slot="title">企业软件</div>
      <div slot="desc">各类CRM、SCRM系统、企业培训管理系统及费控平台软件轻松实现文档在线预览，集成简单，无需二次开发。</div>
    </scene-feature-card>
    <scene-feature-card>
      <img src="https://open.yozocloud.cn/static/media/bg_yidong.39100262.png" alt="" slot="img">
      <div slot="title">移动端</div>
      <div slot="desc">集成到APP、小程序及微信公众号等，实现移动端文档预览，用户体验更好，更省流量。</div>
    </scene-feature-card>
    <scene-feature-card>
      <img src="https://open.yozocloud.cn/static/media/bg_mail.72817893.png" alt="" slot="img">
      <div slot="title">电子邮箱</div>
      <div slot="desc">邮件附件无需下载至本地，直接点击即可在线查看附件内容。</div>
    </scene-feature-card>
  </div>
</template>

<script>
// sub cpn
import SceneFeatureCard from "./SceneFeatureCard";
// mixins
import globalListener from "../../../../mixin/globalListener";

export default {
  name: "Preview",
  components: {SceneFeatureCard},
  mixins: [globalListener],
  data() {
    return {
      // hard-coding here
      numCards: 6,
      frontIndex: 0,
      rearIndex: 3
    }
  }
}
</script>

<style scoped>

</style>