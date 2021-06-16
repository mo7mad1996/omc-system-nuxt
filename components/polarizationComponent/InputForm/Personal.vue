<template>
  <fieldset>
    <legend>البيانات الشخصيه</legend>
    <div class="input_group">
      <div class="input_field">
        <label for="person_name">اسم العامل</label>

        <input id="person_name" type="text" v-model="person_name" />
      </div>

      <div class="input_field">
        <label for="qualification">المؤهل</label>

        <select id="qualification" v-model="qualification">
          <option v-for="q in qualifications" :key="q" :value="q" v-text="q" />
        </select>
      </div>

      <div class="input_field">
        <label for="phone">رقم الهاتف المحمول </label>

        <input id="phone" type="tel" v-model="phone" />
      </div>

      <div class="input_field">
        <label for="city">محافظه</label>

        <select id="city" v-model="city">
          <option v-for="c in cities" :key="c" :value="c" v-text="c" />
        </select>
      </div>

      <div class="input_field">
        <label for="age">السن</label>

        <input id="age" type="number" v-model="age" />
      </div>

      <div class="input_field">
        <label for="job_title">المهنه او الحرفه</label>

        <input id="job_title" type="text" v-model="job_title" />
      </div>
    </div>
  </fieldset>
</template>

<script>
// vuex
import { mapMutations } from 'vuex'

export default {
  name: 'Personal',
  props: ['cities', 'qualifications'],
  data() {
    return {
      person_name: '',
      qualification: '',
      phone: '',
      city: '',
      age: 21,
      job_title: '',
    }
  },
  watch: {
    person_name() {
      this.person_nameMutation(this.person_name)
    },
    qualification() {
      this.qualificationMutation(this.qualification)
    },
    phone() {
      this.phoneMutation(this.phone)
    },
    city() {
      this.cityMutation(this.city)
    },
    age() {
      this.ageMutation(this.age)
    },
    job_title() {
      this.job_titleMutation(this.job_title)
    },
  },
  methods: mapMutations('workers', [
    'person_nameMutation',
    'qualificationMutation',
    'phoneMutation',
    'cityMutation',
    'ageMutation',
    'job_titleMutation',
  ]),
}
</script>
