<template>
  <fieldset>
    <legend>بيانات خاصه بالمصنع</legend>
    <div class="input_group">
      <div class="input_field">
        <label for="factory_name">المصنع</label>
        <input id="factory_name" type="text" v-model="factory" />
      </div>

      <div class="input_field">
        <label for="shift">الوردية</label>
        <input id="shift" type="text" v-model="shift" />
      </div>

      <div class="input_field">
        <label for="join_date">تاريخ الانضمام</label>
        <input id="join_date" type="date" v-model="join_date" />
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
var data = { factory: '', shift: '', join_date: '' },
  watch = {
    form_event() {
      Object.assign(this, data)
    },
  },
  Mutations = []

for (let d in data) {
  var mutationName = d + 'Mutation'
  Mutations.push(mutationName)

  watch[d] = function () {
    this[mutationName](this[d])
  }
}

export default {
  name: 'Factory',
  props: ['form_event'],
  data() {
    return Object.assign({}, data)
  },
  watch,
  methods: mapMutations('workers', Mutations),
}
</script>
