<template>
  <fieldset>
    <legend>بيانات تصريح خروج</legend>
    <div class="input_group">
      <div class="input_field">
        <label for="person_name">يصرح بخروج السيد</label>
        <input id="person_name" type="text" v-model="person_name" />
      </div>

      <div class="input_field">
        <label for="administration">إدارة</label>
        <input id="administration" type="text" v-model="administration" />
      </div>

      <div class="input_field">
        <label for="time">الساعه</label>
        <input id="time" type="time" v-model="time" />
      </div>

      <div class="input_field">
        <label for="reason">بسبب</label>
        <input id="reason" type="text" v-model="reason" />
      </div>
    </div>
  </fieldset>
</template>

<script>
// vuex
import { mapMutations } from 'vuex'

// vanella Js
var data = {
    person_name: '',
    administration: '',
    time: '',
    reason: '',
  },
  watch = {
    form_event() {
      Object.assign(this, data)
    },
  },
  Mutations = []

for (let d in data) {
  var mutationName = 'exitpermit' + d + 'Mutation'
  Mutations.push(mutationName)

  watch[d] = function () {
    this[mutationName](this[d])
  }
}

export default {
  name: 'FormMain',
  props: ['form_event'],
  data() {
    return Object.assign({}, data)
  },
  watch,
  methods: mapMutations('hr', Mutations),
}
</script>
