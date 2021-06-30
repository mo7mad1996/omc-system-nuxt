<template>
  <fieldset>
    <legend>الميعاد</legend>
    <div class="input_group">
      <div class="input_field">
        <label for="the_day">يوم</label>

        <select id="the_day" v-model="the_day">
          <option v-for="d in week" :key="d" v-text="d" :value="d" />
        </select>
      </div>

      <div class="input_field">
        <label for="registr_date">تاريخ تسجيل العامل</label>

        <input id="registr_date" type="date" v-model="registr_date" />
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
    the_day: '',
    registr_date: '',
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
  name: 'Time',
  props: ['week', 'form_event'],
  data() {
    return Object.assign({}, data)
  },
  watch,
  methods: mapMutations('workers', Mutations),
}
</script>
