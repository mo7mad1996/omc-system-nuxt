<template>
  <div class="marquee" @mouseenter="stop" @mouseleave="play">
    <span class="fs-4">رسالة رئيس مجلس الإداره اليوميه:</span>
    <marquee ref="marquee" direction="right">
      <div class="marquee-content">
        <span>
          على جميع العاملين بمجموعه عمال مصر دوام التواصل المستمر بين طاقم
          الإداره ومصنع OMC للصناعات المتخصصه
        </span>
        <span
          >Two Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
          fugiat voluptatum eligendi incidunt ea fuga voluptatem tenetur officia
          eveniet? Suscipit ipsam est laudantium a ex debitis animi odit
          exercitationem? Aspernatur!</span
        >
      </div>
    </marquee>
    <div class="buttons">
      <button @click="toggleForm">
        دخول
        <img src="/header/login.png" />
      </button>
      <button>
        إنهاء
        <img src="/header/logout.png" />
      </button>
    </div>

    <div class="loginForm" @click="toggleForm" v-if="open_login_form">
      <LoginForm @toggleForm="toggleForm" />
    </div>
  </div>
</template>

<script>
// components
import LoginForm from '~/components/header/loginForm/index'

export default {
  name: 'MarqueeComponent',
  components: { LoginForm },
  data() {
    return {
      open_login_form: false,
    }
  },
  methods: {
    stop() {
      this.$refs.marquee.stop()
    },
    play() {
      this.$refs.marquee.start()
    },

    // login form
    toggleForm() {
      this.open_login_form = !this.open_login_form
    },
  },
}
</script>

<style scoped lang="scss">
.marquee {
  background-color: #251843;
  color: white;
  display: flex;
  align-items: center;
  white-space: nowrap;
  padding: 5px 10px;

  marquee {
    position: relative;

    &::before,
    &::after {
      content: '';
      height: 100%;
      width: 70px;
      position: absolute;
      top: 0;
      left: -2px;
      background-image: linear-gradient(to left, transparent, #251843);
      z-index: 2;
    }
    &::before {
      left: auto;
      right: -2px;
      background-image: linear-gradient(to right, transparent, #251843);
    }
  }
}

.buttons button {
  padding: 5px 10px;
  margin: 0 5px;
  background: #943534;
  border: none;
  color: white;
  border-radius: 5px;
  box-shadow: inset 0 -2px 5px #0008;

  img {
    height: 25px;
    margin: 0 5px;
  }
}

.marquee-content span {
  margin: 0 15px;
}

.loginForm {
  position: fixed;
  z-index: 4;
  background: #0008;
  inset: 0;
  display: grid;
  place-items: center;
}
</style>
