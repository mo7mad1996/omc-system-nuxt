<template>
  <div class="header noPrint">
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
  z-index: 4;
}

header {
  background-image: url('/header/BG.png');
  background-size: cover;
  height: 166px;
}
</style>
