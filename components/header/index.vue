<template>
  <div class="header">
    <header></header>

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
</style>
