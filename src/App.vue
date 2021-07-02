<template>
  <div id="app">
    <my-header/>
    <platform/>
  </div>
</template>

<script>
import MyHeader from "./components/home/header/MyHeader";
import Platform from "./components/home/platform/Platform";

export default {
  components: {Platform, MyHeader}
}
</script>

<style>
@import "./assets/css/normalize.css";
@import "./assets/css/common.css";
</style>
