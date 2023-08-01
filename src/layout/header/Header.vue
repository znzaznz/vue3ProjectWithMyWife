<template>
  <div class="header">
    <div class="container header_container">
      <div class="logo">
        <img src="../../assets/img/logo.png" alt="">
        <span>尚医通 预约挂号统一平台</span>
      </div>
      <div class="login">
        <span style="margin-right: 10px">帮助中心</span>
        <span>登录/注册</span>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@import "@/assets/styles/common.scss";

.header {
  z-index: 10;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;

  .header_container {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      img {
        height: 50px;
        margin-right: 10px;
      }

      span {
        font-size: 20px;
        color: #55a6fe;
      }
    }

    .login {
      font-size: 14px;
      color: #bbb;
    }
  }
}
</style>
