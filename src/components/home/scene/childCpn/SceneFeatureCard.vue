<template>
  <div class="scene-feature-card fl">
    <div class="img">
      <slot name="img"></slot>
    </div>
    <div class="intro">
      <div class="title">
        <slot name="title"></slot>
      </div>
      <div class="desc">
        <slot name="desc"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SceneFeatureCard"
}
</script>

<style scoped>
.scene-feature-card {
  width: 2.875rem;
  height: 3.167rem;
  background-color: #ffffff;
  border-radius: 0.208rem;
  margin-right: 0.25rem;
}

img {
  width: 100%;
  vertical-align: middle;
  border-radius: 0.208rem 0.208rem 0 0;
}

.intro {
  padding: 0.167rem 0.167rem 0 0.208rem;
}

.title {
  font-size: 0.1875rem;
  margin-bottom: 0.104rem;
  text-align: left;
}

.desc {
  font-size: 0.125rem;
  line-height: 0.1875rem;
  color: #838688;
  text-align: justify;
}
</style>