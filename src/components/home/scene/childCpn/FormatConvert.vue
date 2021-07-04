<template>
  <div class="format-convert">
    <scene-feature-card>
      <img src="https://open.yozocloud.cn/static/media/bg_wendangguanli.5795f0d2.png" alt="" slot="img">
      <div slot="title">文档管理</div>
      <div slot="desc">Office流式文件转成图片或PDF版式文件，方便对文档进行分享和存档管理。</div>
    </scene-feature-card>
    <scene-feature-card>
      <img src="https://open.yozocloud.cn/static/media/bg_wendangchuli.05ece6a0.png" alt="" slot="img">
      <div slot="title">文档处理</div>
      <div slot="desc">图片或PDF版式文件转成Office流式文件，方便对文档进行进一步编辑加工处理。</div>
    </scene-feature-card>
  </div>
</template>

<script>
// sub cpn
import SceneFeatureCard from "./SceneFeatureCard";
// mixins
// import globalListener from "../../../../mixin/globalListener";

export default {
  name: "FormatConvert",
  components: {SceneFeatureCard},
  // mixins: [globalListener],
  data() {
    return {
      // hard-coding here
      numCards: 2,
      frontIndex: 0,
      rearIndex: 1
    }
  }
}
</script>

<style scoped>

</style>