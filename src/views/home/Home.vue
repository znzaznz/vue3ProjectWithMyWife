<template>
  <el-carousel height="350px">
    <el-carousel-item v-for="item in 4" :key="item">
      <img class="banner_img" src="../../assets/img/web-banner-1.png">
    </el-carousel-item>
  </el-carousel>
  <div class="search_bar">
    <el-autocomplete
      placeholder="请输入医院的名称"
      @select="handleSelect"
    />
    <el-button type="primary" :icon="Search"></el-button>
  </div>
</template>

<script setup lang="ts">
import { Search } from "@element-plus/icons-vue";

const handleSelect = () => {
};
</script>

<style lang="scss" scoped>
.banner_img {
  width: 100%;
  height: 350px;
  //object-fit: cover;
}

.search_bar {
  display: flex;
  justify-content: center;
  padding: 20px;

  ::v-deep(.el-autocomplete) {
    width: 600px;
    margin-right: 10px;
  }
}
</style>
