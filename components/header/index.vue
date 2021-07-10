<template>
  <div class="header noPrint">
    <nuxt-link to="/">
      <header>
        <div class="f">قاعده بيانات المجموعة</div>

        <div class="logo">
          <img src="/header/brand.png" />
        </div>

        <div class="text">
          <div>مجمع عمال مصر</div>
          <div>خدمي . صناعي . تعليمي</div>
        </div>
      </header>
    </nuxt-link>

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

<style scoped lang="scss">
.header {
  position: relative;
  z-index: 4;

  header {
    background-image: url('/header/BG.png');
    background-size: 100% 118%;
    background-position: center;
    display: flex;
    padding: 20px;
  }

  .logo {
    border: 5px solid black;
    background: white;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    padding: 5px;

    img {
      width: 160px;
      height: 160px;
      border: 5px solid red;
      padding: 5px;
      object-fit: contain;
      border-radius: 50%;
    }
  }

  * {
    font-family: Jawad !important;
  }

  .f,
  .text {
    flex: 1;
    font-size: 3vw;
    text-shadow: 0 0 9px gold;
  }

  .f {
    display: flex;
    align-items: flex-end;
  }

  .text {
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: -20px 0;

    > div:first-of-type {
      font-size: 4vw;
    }

    > div:last-of-type {
      font-size: 2vw;
    }
  }
}
</style>
