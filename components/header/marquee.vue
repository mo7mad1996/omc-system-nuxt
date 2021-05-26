<template>
  <div class="marquee" @mouseenter="stop" @mouseleave="play">
    <span class="fs-4">رسالة رئيس مجلس الإداره اليوميه:</span>
    <marquee :behavior="behavior">
      <div class="marquee-content">
        <span>One</span>
        <span>Two</span>
      </div>
    </marquee>
    <div class="buttons">
      <button>
        دخول
        <img src="/header/login.png" />
      </button>
      <button>
        إنهاء
        <img src="/header/logout.png" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MarqueeComponent',
  data() {
    return {
      behavior: 'scroll',
    }
  },
  methods: {
    stop() {
      this.behavior = 'slide'
    },
    play() {
      this.behavior = 'scroll'
    },
  },
}
</script>

<style scoped>
.marquee {
  background-color: #251843;
  color: white;
  display: flex;
  align-items: center;
  white-space: nowrap;
  padding: 5px 10px;
}

.marquee marquee {
  position: relative;
}

.marquee marquee::before,
.marquee marquee::after {
  content: '';
  height: 100%;
  width: 70px;
  position: absolute;
  top: 0;
  left: -2px;
  background-image: linear-gradient(to left, transparent, #251843);
  z-index: 2;
}
.marquee marquee::before {
  left: auto;
  right: -2px;
  background-image: linear-gradient(to right, transparent, #251843);
}

.buttons button {
  padding: 5px 10px;
  margin: 0 5px;
  background: #943534;
  border: none;
  color: white;
  border-radius: 5px;
  box-shadow: inset 0 -2px 5px #0008;
}

.buttons button img {
  height: 25px;
  margin: 0 5px;
}

.marquee-content span {
  margin: 0 15px;
}
</style>
