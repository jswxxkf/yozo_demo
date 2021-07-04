<template>
  <div class="moment container clear-fix">
    <div class="title">云平台服务动态</div>
    <moment-left class="fl"/>
    <moment-right class="fr"/>
  </div>
</template>

<script>
import MomentLeft from "./childCpn/MomentLeft";
import MomentRight from "./childCpn/MomentRight";

export default {
  name: "Moment",
  components: {MomentRight, MomentLeft}
}
</script>

<style scoped>
.moment {
  padding: 0.65rem 0;
  text-align: center;
}

.moment .title {
  font-size: 0.375rem;
  line-height: 0.375rem;
  margin-bottom: 0.573rem;
  font-weight: 400;
}
</style>