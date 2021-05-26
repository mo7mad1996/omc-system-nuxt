<template>
  <div>
    <div class="flex">
      <HeaderComponent />
      <div class="BG">
        <Nuxt />

        <Chat />
      </div>
      <FooterComponent />
    </div>
  </div>
</template>

<style scoped>
.BG {
  background-image: url('/baseBG.png');
  background-size: cover;
  background-position: center;
  flex: 1;
}
.flex {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>

<script>
// components
import HeaderComponent from '@/components/header/index'
import FooterComponent from '@/components/footer/index'
import Chat from '@/components/chat/index'

export default {
  components: {
    HeaderComponent,
    FooterComponent,
    Chat,
  },
  created() {
    console.log('this system build by Mohammed Ibrahem')
  },
}
</script>
