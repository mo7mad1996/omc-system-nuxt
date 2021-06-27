<template>
  <div class="error">
    <div class="logo">404</div>
    <span>الصفحه المطلوبه غير موجوده </span>
    <nuxt-link to="/" class="mb-4">الرجوع للصفحه الرئيسيه</nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
.error {
  height: 100%;
  display: grid;
  place-items: center;
  min-height: 40vh;

  .logo {
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 300px;
    color: #e9407b;
  }
  span {
    font-size: 20px;
  }
  a {
    color: #407be9;
  }
}
</style>
