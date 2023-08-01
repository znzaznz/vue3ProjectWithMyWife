<script setup lang="ts">
import Layout from "@/layout/index.vue";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";

// 处理一下dayjs
dayjs.locale("zh-cn");
</script>

<template>
  <el-config-provider :lang="zhCn">
    <Layout />
  </el-config-provider>
</template>

<style lang="scss" scoped>
</style>
