<template>
  <div class="col">
    <img src="/header/brand.png" />
    <h1>
      ERP
      <br />
      SYSTEM
      <br />
      OMAL MASR
    </h1>
  </div>
</template>

<script>
export default {
  name: 'Fourth',
}
</script>

<style lang="scss" scoped>
.col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  position: relative;

  img {
    width: 100%;
    opacity: 0.12;
    scale: 1.2;
    user-select: none;
    pointer-events: none;
  }
  h1 {
    opacity: 0.3;
    user-select: none;
    pointer-events: none;
    font-family: Mohammad;
  }
}
</style>
