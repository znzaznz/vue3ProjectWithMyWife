<template>
  <Header />
  <div>
    <router-view></router-view>
  </div>
  <Footer />
</template>

<script setup lang="ts">
import Header from "@/layout/header/Header.vue";
import Footer from "@/layout/footer/Footer.vue";
</script>

<style lang="scss" scoped>

</style>
