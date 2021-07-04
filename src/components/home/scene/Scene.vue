<template>
  <div class="scene">
    <div class="container">
      <div class="title">应用场景</div>
      <div class="tab-control">
        <a
            href="javascript:"
            v-for="(item, index) in tabs"
            :key="index"
            @click="itemClicked(index)">
          <span :class="{'active': index === currIndex}">{{ item }}</span>
        </a>
      </div>
      <!-- Dynamic Component -->
      <component :is="currentCpn" class="feature-cards clear-fix"/>
      <bottom-indicator/>
    </div>
  </div>
</template>

<script>
import Preview from "./childCpn/Preview";
import FormatConvert from "./childCpn/FormatConvert";
import Edit from "./childCpn/Edit";
import BottomIndicator from "./childCpn/BottomIndicator";

export default {
  name: "Scene",
  components: {
    BottomIndicator,
    Preview,
    FormatConvert,
    Edit
  },
  data() {
    return {
      currIndex: 0,
      tabs: ['云预览', '云编辑', '格式转换'],
      subCpnNames: ['preview', 'edit', 'format-convert']
    }
  },
  computed: {
    currentCpn() {
      return this.subCpnNames[this.currIndex]
    }
  },
  methods: {
    itemClicked(index) {
      this.currIndex = index
    }
  }
}
</script>

<style scoped>
.scene {
  height: 6.78125rem;
  padding: 0.65rem 0 0 0;
  text-align: center;
  background: url("https://open.yozocloud.cn/static/media/changjing1.4f9b6c18.png") no-repeat 0/cover;
}

.container {
  overflow: hidden;
}

.scene .title {
  font-size: 0.375rem;
  line-height: 0.375rem;
  margin-bottom: 0.5rem;
  font-weight: 400;
  color: #ffffff;
}

.tab-control {
  height: 0.625rem;
  line-height: 0.625rem;
  border-bottom: 1px solid #aaaaaa;
  font-size: 0.25rem;
}

.tab-control a {
  display: inline-block;
  padding: 0 0.417rem;
}

.tab-control a span {
  display: inline-block;
  color: #ffffff;
  transition: color .5s ease, border-bottom-color .5s ease;
  transform-origin: center;
}

.active {
  color: #3199ff !important;
  border-bottom: 2px solid #0081ff;
}

.feature-cards {
  width: 9999px;
  margin-top: 0.3125rem;
  transition: transform 1s ease;
}
</style>