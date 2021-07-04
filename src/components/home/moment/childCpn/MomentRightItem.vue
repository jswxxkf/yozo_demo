<template>
  <div class="moment-right-item clear-fix">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="desc fl">
      <slot name="desc"></slot>
    </div>
    <div class="date fr">
      <slot name="date"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MomentRightItem"
}
</script>

<style scoped>
.moment-right-item {
  padding: 0.125rem 0;
  border-bottom: 1px solid #cccccc;
}

.moment-right-item .title {
  margin-bottom: 0.125rem;
  font-size: 0.146rem;
}

.moment-right-item .desc,
.moment-right-item .date {
  font-size: 0.125rem;
  color: #6d7175;
}

.moment-right-item .desc div {
  width: 6.771rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.moment-right-item a {
  transition: color .5s ease;
}

.moment-right-item a:hover {
  color: #0081ff;
}
</style>