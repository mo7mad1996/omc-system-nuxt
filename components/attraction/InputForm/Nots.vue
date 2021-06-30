<template>
  <fieldset>
    <legend>ملاحظات</legend>

    <div class="input_group">
      <div class="input_field">
        <label for="nots">ملاحظات</label>
        <input id="nots" type="text" v-model="nots" />
      </div>

      <div class="input_field">
        <label for="LastCallDate">تاريخ اخر اتصال</label>
        <input id="LastCallDate" type="date" v-model="LastCallDate" />
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
    LastCallDate: '',
    nots: '',
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
  name: 'Nots',
  props: ['form_event'],
  data() {
    return Object.assign({}, data)
  },
  watch,
  methods: mapMutations('customers', Mutations),
}
</script>
