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

<script>
// vuex
import { mapMutations } from 'vuex'

// components
import HeaderComponent from '@/components/header/index'
import FooterComponent from '@/components/footer/index'
import Chat from '@/components/chat/index'

export default {
  methods: mapMutations('user', ['setUser']),
  beforeMount() {
    this.setUser(JSON.parse(sessionStorage.getItem('user')))
  },
  components: {
    HeaderComponent,
    FooterComponent,
    Chat,
  },
  created() {
    console.log('This system built by Mohammed Ibrahem')
  },
}
</script>

<style scoped>
.BG {
  background-image: url('/baseBG.png');
  background-repeat: no-repeat;
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
