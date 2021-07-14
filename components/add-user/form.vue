<template>
  <div class="add">
    <form @submit.prevent="submit">
      <div class="form-head text-center">
        <h4>مستخدم جديد</h4>
      </div>

      <!-- inputs -->
      <div class="input-group">
        <img src="/forms/eagle.png" />
        <div class="input-filed">
          <label for="name">الاسم</label>
          <input id="name" v-model="form.name" type="text" required />
        </div>

        <div class="input-filed">
          <label for="password">كلمه المرور</label>
          <input
            id="password"
            v-model="form.password"
            type="password"
            required
          />
        </div>

        <div class="input-filed">
          <label for="code">الكود</label>
          <input id="code" v-model="form.code" type="number" />
        </div>

        <div class="input-filed">
          <label for="permission">الوظيفه</label>
          <select id="permission" v-model="form.permission">
            <option
              :value="item.name"
              v-for="item in jobs"
              :key="item.name"
              v-text="item.title"
              :title="item.title"
            />
          </select>
        </div>
      </div>

      <!-- buttons -->
      <div class="form-actions">
        <button type="submit" :disabled="loading">
          <span v-if="!loading"> إضافه </span>
          <Loading v-else />
        </button>
      </div>
    </form>
    <Msg :msg="msg" />
  </div>
</template>

<script>
// components
import Msg from '~/components/baseForms/msg'
import Loading from '~/components/add-user/loading'

const form = {
  id: null,
  name: '',
  password: '',
  code: '',
  permission: '',
  img: null,
}

export default {
  name: 'AddUserForm',
  components: { Loading, Msg },
  data() {
    return {
      form: Object.assign({}, form),
      jobs: [
        { title: 'مدير استقطاب عمال', name: 'polarization_manager' },
        { title: 'موظف استقطاب عمال', name: 'polarization_employee' },
        { title: 'مدير استفطاب عملاء', name: 'attraction_manager' },
        { title: 'موظف استقطاب عملاء', name: 'attraction_employee' },
        { title: 'مدير موارد بشريه', name: 'hr_manager' },
        { title: 'مساعد مدير موارد بشريه', name: 'hr_employee' },
      ],
      loading: false,
      msg: {
        Active: false,
        Status: false,
        Text: '',
      },
    }
  },
  methods: {
    submit() {
      this.loading = true
      this.$axios
        .$post('users', this.form)
        .then(() => {
          this.msg = {
            Active: true,
            Status: true,
            Text: 'تم الاضافه',
          }
          this.form = Object.create(form)
        })
        .catch(() => {
          this.msg = {
            Active: true,
            Status: false,
            Text: 'تعذر الاتصال',
          }
        })
        .finally(() => {
          this.loading = false
          setTimeout(() => (this.msg.Active = false), 3000)
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.add {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
form {
  max-width: 370px;
  border-radius: 5px;
  overflow: hidden;
  z-index: 0;

  .form-head {
    padding: 5px;
    background: #cd2121;
    color: white;
  }

  .input-group {
    background: rgb(255, 255, 255);
    padding: 10px;
    background-size: cover;
    position: relative;

    img {
      position: absolute;
      opacity: 0.2;
      object-fit: contain;
      width: 100%;
      height: 100%;
      z-index: 1;
    }

    .input-filed {
      z-index: 2;
      margin: 5px 0;
      display: block;
      width: 100%;

      label {
        margin-bottom: 5px;
      }

      input,
      select,
      label {
        display: block;
        width: 100%;
        font-weight: bold;
      }

      input,
      select {
        padding: 3px 5px;
        border: 2px solid #bda3ff;
        border-radius: 4px;
      }
    }
  }

  .form-actions button {
    display: block;
    color: white;
    width: 100%;
    border: none;
    background: black;
    font-size: 20px;
    padding: 10px;
  }
}
</style>
