<template>
  <form @submit.prevent="submit" @click.stop>
    <div class="text-center">
      بسم الله الرحمن الرحيم
      <br />
      تسجيل دخول
    </div>

    <div class="input-group">
      <div class="input-felid">
        <label for="username">اسم المستخدم</label>
        <input autocomplete="off" id="username" v-model="user.name" required />
      </div>
      <div class="input-felid">
        <label for="password">كلمه المرور</label>
        <input type="password" id="password" v-model="user.password" required />
      </div>
    </div>
    <div class="form-actions">
      <button type="submit">دخول</button>
    </div>

    <div
      class="msg"
      :class="{ active: msg.active }"
      @click="msg.active = false"
      v-text="msg.text"
    />
  </form>
</template>

<script>
// vuex
import { mapMutations } from 'vuex'

export default {
  name: 'LoginForm',
  data() {
    return {
      user: {
        name: '',
        password: '',
      },

      msg: {
        active: false,
        text: '',
      },
    }
  },
  methods: {
    ...mapMutations('user', ['setUser']),
    stop(e) {
      e.stopPropagation()
    },

    submit() {
      this.$axios
        .$get('users?name=' + this.user.name)
        .then((res) => {
          if (res.length) {
            if (res[0].password == this.user.password) {
              sessionStorage.setItem('user', JSON.stringify(res[0]))
              this.setUser(res[0])
              this.$emit('toggleForm')
            } else {
              this.msg = {
                active: true,
                text: 'كلمه المرور خاطئه',
              }
            }
          } else {
            this.msg = {
              active: true,
              text: 'اسم المستخدم غير موجود',
            }
          }
        })
        .catch((err) => {
          this.msg = {
            active: true,
            text: 'مشكله في الاتصال',
          }
          console.log(err)
        })
        .finally(() =>
          setTimeout(() => {
            this.msg.active = false
          }, 3000)
        )
    },
  },
}
</script>

<style lang="scss" scoped>
form {
  padding: 10px;
  background: #e4e4e4;
  border-radius: 5px;
  color: #333;

  header::after {
    content: '';
    margin-bottom: 10px;
    position: relative;
    display: block;
    top: 5px;
    width: 100%;
    height: 1px;
    background-image: linear-gradient(
      to left,
      transparent,
      #bda3ff,
      transparent
    );
  }

  .input-group {
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .input-felid {
      label {
        display: block;
        font-size: 13px;
        margin-bottom: 5px;
      }

      input {
        display: block;
        width: 320px;
        padding: 5px;
        border-radius: 5px !important;
        border: 2px solid #bda3ff;
      }
    }
  }
  .form-actions {
    padding: 10px;

    button {
      width: 100%;
      padding: 5px;
      text-align: center;
      display: block;
      background: #bda3ff;
    }
  }
}

.msg {
  background: #fe0000;
  color: white;
  position: fixed;
  padding: 10px;
  text-align: center;
  bottom: -4em;
  left: 2vw;
  transition: 0.3s;
  cursor: pointer;

  &.active {
    box-shadow: 0 0 14px #fe0000;
    bottom: 2vh;
    left: 2vw;
  }
}
</style>
