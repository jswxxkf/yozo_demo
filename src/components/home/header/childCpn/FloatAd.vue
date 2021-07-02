<template>
  <div class="float-ad" :style="{top, left, textAlign}">
    <div class="top">
      <slot name="top"></slot>
    </div>
    <div class="mid">
      <slot name="mid"></slot>
    </div>
    <div class="bottom">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "FloatAd",
  props: {
    left: {
      type: String,
      default: "0"
    },
    top: {
      type: String,
      default: "1.5rem"
    },
    textAlign: {
      type: String,
      default: "left"
    }
  }
}
</script>

<style scoped>
.float-ad {
  position: absolute;
  width: 12.5rem;
  height: 2.333rem;
}

.top {
  font-weight: 700;
  font-size: 0.365rem;
}

.mid {
  font-size: 0.208rem;
}

.bottom {
  font-size: 0.167rem;
}

.bottom,
.mid {
  margin-top: 0.3125rem;
}

button {
  margin-right: 0.208rem;
  font-weight: 700;
  outline: 0;
  cursor: pointer;
  width: 1.5625rem;
  height: 0.521rem;
  border-radius: 0.104rem;
  background-image: linear-gradient(to left, #dcaf84, #f3891d);
}

a {
  color: #f3891d;
  cursor: pointer;
}
</style>