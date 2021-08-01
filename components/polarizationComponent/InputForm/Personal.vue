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

      <div class="input_field">
        <label for="id_card">الرقم القومي</label>

        <input id="id_card" type="text" v-model="id_card" />
      </div>
    </div>
  </fieldset>
</template>

<script>
// vuex
import { mapMutations } from 'vuex'

/*****************************
 *   pure Js
 ****************************/

// to reset the Form when form Actions
var data = {
    person_name: '',
    qualification: '',
    phone: '',
    city: '',
    age: '',
    job_title: '',
    id_card: '',
  },
  watch = {
    form_event() {
      Object.assign(this, data)
    },
  },
  Mutations = []

for (let d in data) {
  let mutationName = d + 'Mutation'
  Mutations.push(mutationName)

  watch[d] = function () {
    this[mutationName](this[d])
  }
}

export default {
  name: 'Personal',
  props: ['cities', 'qualifications', 'form_event'],
  data() {
    return Object.assign({}, data)
  },
  watch,
  methods: mapMutations('workers', Mutations),
}
</script>
