<template>
  <div class="edit">
    <scene-feature-card>
      <img src="https://open.yozocloud.cn/static/media/bg_jiaoyu.97902d22.png" alt="" slot="img">
      <div slot="title">教育教学</div>
      <div slot="desc">通过云编辑赋予的文档存储和编辑功能，实现对课件、讲义的集中管理，多终端查看与编辑，及时更新教案，保证内容的时效性。提升教师与学生的线上互动体验。</div>
    </scene-feature-card>
    <scene-feature-card>
      <img src="https://open.yozocloud.cn/static/media/bg_zhengqiOA.a4fc893d.png" alt="" slot="img">
      <div slot="title">政企OA</div>
      <div slot="desc">赋能企业OA系统，帮助企业实现PC、APP多端下内部文档资料的在线预览。</div>
    </scene-feature-card>
    <scene-feature-card>
      <img src="https://open.yozocloud.cn/static/media/bg_qiyeruanjian.493ff3ed.png" alt="" slot="img">
      <div slot="title">企业软件</div>
      <div slot="desc">各类CRM、SCRM系统、企业培训管理系统及费控平台软件轻松实现文档在线编辑，集成简单，无需二次开发。</div>
    </scene-feature-card>
    <scene-feature-card>
      <img src="https://open.yozocloud.cn/static/media/bg_wendang.7c0b7add.png" alt="" slot="img">
      <div slot="title">文档管理系统</div>
      <div slot="desc">Office流式文件转成图片或PDF版式文件，方便对文档进行分享和存档管理。</div>
    </scene-feature-card>
  </div>
</template>

<script>
// sub cpn
import SceneFeatureCard from "./SceneFeatureCard";
// mixins
// import globalListener from "../../../../mixin/globalListener";

export default {
  name: "Edit",
  components: {SceneFeatureCard},
  // mixins: [globalListener],
  data() {
    return {
      // hard-coding here
      numCards: 4,
      frontIndex: 0,
      rearIndex: 3
    }
  }
}
</script>

<style scoped>

</style>