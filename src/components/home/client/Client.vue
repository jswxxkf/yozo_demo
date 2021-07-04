<template>
  <div class="client">
    <div class="container">
      <div class="title">客户案例</div>
      <div class="clients">
        <img
            class="client-item"
            v-for="index in 24"
            :src="`http://xkfwuxi.top:8060/img/client_${index}.png`"
            alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Client"
}
</script>

<style scoped>
.client {
  padding: 0.65rem 0;
  text-align: center;
  background-color: #f3f6fa;
}

.client .title {
  font-size: 0.375rem;
  line-height: 0.375rem;
  margin-bottom: 0.573rem;
  font-weight: 400;
}

.clients {
  display: flex;
  flex-wrap: wrap;
  height: 4.167rem;
  align-items: center;
  justify-content: space-between;
}

.clients img {
  width: 1.667rem;
  height: 0.667rem;
}

.client-item {
  margin-right: 0.208rem;
}
</style>