<template>
  <div class="header">
    <header>
      <img class="user-img" src="/header/users/1.jpg" alt="User name" />

      <button class="header-button">
        <img src="/header/button.png" alt="icon" />
      </button>
    </header>

    <MarqueeComponent />
  </div>
</template>

<script>
// component
import MarqueeComponent from '@/components/header/marquee'

export default {
  name: 'HeaderComponent',
  components: { MarqueeComponent },
}
</script>

<style scoped>
.header {
  position: relative;
  z-index: 1;
}

header {
  background-image: url('/header/BG.png');
  background-size: cover;
  height: 166px;
}

.user-img {
  position: absolute;
  height: 150px;
  right: 30vw;
  top: 16px;
}

.header-button {
  height: 90px;
  border: none;
  background: none;
  cursor: pointer;
}
.header-button img {
  height: 100%;
}
</style>
