<template>
  <fieldset>
    <legend>المسؤول</legend>
    <div class="input_group">
      <div class="input_field">
        <label for="responsible_name">اسم المسؤول</label>

        <input id="responsible_name" type="text" v-model="responsible_name" />
      </div>

      <div class="input_field">
        <label for="job">الوظيفه</label>

        <select id="job" v-model="job" ref="j">
          <option v-for="j in jobs" :key="j" :value="j" v-text="j" />
        </select>
        <input type="text" class="d-none" v-model="job" />
      </div>

      <div class="input_field">
        <label for="phone">رقم التليفون</label>

        <input id="phone" type="tel" v-model="phone" />
      </div>

      <div class="input_field">
        <label for="email">الايميل</label>

        <input id="email" type="text" v-model="email" />
      </div>

      <div class="input_field">
        <label for="service_type">نوع الخدمه المطلوبه</label>

        <select id="service_type" v-model="service_type" ref="s">
          <option v-for="s in service" :key="s" :value="s" v-text="s" />
        </select>
        <input type="text" class="d-none" v-model="service_type" />
      </div>
    </div>
  </fieldset>
</template>

<script>
// vuex
import { mapMutations } from 'vuex'

export default {
  name: 'Responsible',
  props: ['service', 'jobs'],
  data() {
    return {
      responsible_name: '',
      phone: '',
      email: '',
      job: '',
      service_type: '',
    }
  },
  watch: {
    job() {
      if (this.job == 'اخرى') {
        this.$refs.j.classList.toggle('d-none')
        this.$refs.j.nextElementSibling.classList.toggle('d-none')
        this.$refs.j.nextElementSibling.focus()
        this.job = ''
      }

      this.jobMutation(this.job)
    },
    service_type() {
      if (this.service_type == 'اخرى') {
        this.$refs.s.classList.toggle('d-none')
        this.$refs.s.nextElementSibling.classList.toggle('d-none')
        this.$refs.s.nextElementSibling.focus()
        this.service_type = ''
      }

      this.service_typeMutation(this.service_type)
    },
    responsible_name() {
      this.responsible_nameMutation(this.responsible_name)
    },
    phone() {
      this.phoneMutation(this.phone)
    },
    email() {
      this.emailMutation(this.email)
    },
  },
  methods: mapMutations('customers', [
    'responsible_nameMutation',
    'phoneMutation',
    'emailMutation',
    'jobMutation',
    'service_typeMutation',
  ]),
}
</script>
