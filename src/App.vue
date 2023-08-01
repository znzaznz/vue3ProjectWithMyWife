<script setup lang="ts">
import Layout from "@/layout/index.vue";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import { ref } from "vue";

// 处理一下dayjs
dayjs.locale("zh-cn");

const show = ref(false);
const writeDemo = () => {
  show.value = !show.value;
};
</script>

<template>
  <el-config-provider :size="'large'" :lang="zhCn">
    <el-button @click="writeDemo" type="primary">测试</el-button>
    <Layout />
  </el-config-provider>
</template>

<style lang="scss" scoped>
</style>
