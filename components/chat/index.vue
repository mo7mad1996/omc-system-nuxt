<template>
  <div class="chat-section noPrint">
    <div v-if="chatOpen" class="chat-container">
      <h4 class="text-center">أهلاً بك في عمال مصر</h4>
    </div>
    <button class="btn" @click="toggle">
      <img src="/chat.png" alt="Chat" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'Chat',
  data() {
    return {
      chatOpen: false,
    }
  },
  methods: {
    toggle() {
      this.chatOpen = !this.chatOpen
    },
  },
}
</script>

<style scoped lang="scss">
.chat-section {
  position: fixed;
  right: 15px;
  bottom: 10vh;
  z-index: 3;

  button {
    width: 100px;
    z-index: 2;
    position: relative;

    img {
      width: 100%;
    }
  }

  .chat-container {
    z-index: 1;
    padding: 10px;
    border-radius: 5px;
    position: relative;
    box-shadow: 0 0 14px #333;
    width: 400px;
    // height: min(60vh, 350px); // sass can't work with that
    max-height: 350px;
    min-height: 60vh;
    background: rgba(255, 255, 255, 0.95);
    animation: fromDown 0.5s ease forwards;
  }
}

@keyframes fromDown {
  from {
    transform: translateY(30px);
    opacity: 0;
  }
}
</style>
