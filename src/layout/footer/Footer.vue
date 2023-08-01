<template>
  <div class="footer">
    <div class="container">
      <div class="left">
        京ICP备 13018369号 电话挂号010-56253825
      </div>
      <div class="right">
        <span>联系我们</span>
        <span>合作伙伴</span>
        <span>用户协议</span>
        <span>隐私协议</span>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@import "@/assets/styles/common.scss";

.footer {
  display: flex;
  justify-content: center;
  background-color: #f0f2f5;
  font-size: 14px;

  > div {
    padding: 14px 0;
    display: flex;
    justify-content: space-between;

    .right {
      > span {
        margin-left: 10px;
      }
    }
  }
}
</style>
