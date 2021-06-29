<template>
  <fieldset>
    <legend>بيانات خاصه بالعامل</legend>
    <div class="input_group">
      <div class="input_field">
        <label for="person_name">الاسم</label>
        <input id="person_name" type="text" v-model="person_name" />
      </div>

      <div class="input_field">
        <label for="person_name">الرقم القومي</label>
        <input id="person_name" type="text" v-model="id_card" />
      </div>

      <div class="input_field">
        <label for="person_name">تاريخ الميلاد</label>
        <input id="person_name" type="date" v-model="birth_day" />
      </div>

      <div class="input_field">
        <label for="phone">رقم التليفون</label>
        <input id="phone" type="text" v-model="phone" />
      </div>
      <div class="input_field">
        <label for="qualification">المؤهل</label>

        <select id="qualification" v-model="qualification">
          <option v-for="q in qualifications" :key="q" :value="q" v-text="q" />
        </select>
      </div>

      <div class="input_field">
        <label for="city">المحافظه</label>

        <select id="city" v-model="city">
          <option v-for="c in cities" :key="c" :value="c" v-text="c" />
        </select>
      </div>

      <div class="input_field">
        <label for="visa">ڨيزا</label>
        <input id="visa" type="text" v-model="visa" />
      </div>
    </div>
  </fieldset>
</template>

<script>
// vuex
import { mapGetters, mapMutations } from 'vuex'

/*****************************
 *   pure Js
 ****************************/

// to reset the Form when form Actions
var data = {
    person_name: '',
    id_card: '',
    phone: '',
    city: '',
    qualification: '',
    birth_day: '',
    visa: '',
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
  name: 'PersonalData',
  props: ['form_event'],
  data() {
    return Object.assign({}, data)
  },
  computed: mapGetters(['cities', 'qualifications']),
  watch,
  methods: mapMutations('workers', Mutations),
}
</script>
