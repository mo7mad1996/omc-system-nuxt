<template>
  <fieldset>
    <legend>المكان</legend>

    <div class="input_group">
      <div class="input_field">
        <label for="factory">المصنع</label>
        <input id="factory" v-model="factory" />
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
var data = { factory: '' },
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
    console.log(d.padStart(60, '-'))
    this[mutationName](this[d])
  }
}

export default {
  name: 'Place',
  props: ['form_event'],
  data() {
    return Object.assign({}, data)
  },
  watch,
  methods: mapMutations('workers', Mutations),
}
</script>
