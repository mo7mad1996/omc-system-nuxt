<template>
  <fieldset>
    <legend>التعليم</legend>
    <div class="input_group">
      <div class="input_field">
        <label for="education">المؤهل</label>
        <input id="education" v-model="education" />
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
var data = { education: '' },
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
  name: 'Education',
  props: ['form_event'],
  data() {
    return Object.assign({}, data)
  },
  watch,
  methods: mapMutations('workers', Mutations),
}
</script>
