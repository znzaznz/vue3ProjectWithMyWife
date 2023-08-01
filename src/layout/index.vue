<template>
  <Header />
  <div class="router_container">
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
  <Footer />
</template>

<script setup lang="ts">
import Header from "@/layout/header/Header.vue";
import Footer from "@/layout/footer/Footer.vue";
</script>

<style lang="scss" scoped>
@import "@/assets/styles/common.scss";

.router_container {
  display: flex;
  justify-content: center;
  margin-top: 70px;
  min-height: 1500px;
}
</style>
