<template>
  <fieldset>
    <legend>إخلاء الطرف</legend>
    <div class="input_group">
      <div class="input_field">
        <label for="date">التاريخ</label>
        <input id="date" type="date" v-model="date" />
      </div>

      <div class="input_field">
        <label for="person_name">أسم الموظف</label>
        <input id="person_name" type="text" v-model="person_name" />
      </div>

      <div class="input_field">
        <label for="branch">الفرع</label>
        <input id="branch" type="text" v-model="branch" />
      </div>

      <div class="input_field">
        <label for="city">المنطفه</label>
        <input id="city" type="text" v-model="city" />
      </div>

      <div class="input_field">
        <label for="job">الوظيفه</label>
        <input id="job" type="text" v-model="job" />
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
    date: '',
    person_name: '',
    branch: '',
    city: '',
    job: '',
  },
  watch = {
    form_event() {
      Object.assign(this, data)
    },
  },
  Mutations = []

for (let d in data) {
  let mutationName = 'GetFree' + d + 'Mutation'
  Mutations.push(mutationName)

  watch[d] = function () {
    this[mutationName](this[d])
  }
}

console.log(watch)

export default {
  name: 'FormMain',
  props: ['form_event'],
  data() {
    return Object.assign({}, data)
  },
  watch,
  methods: mapMutations('workers', Mutations),
}
</script>
