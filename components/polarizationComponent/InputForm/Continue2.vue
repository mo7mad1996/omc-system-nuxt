<template>
  <fieldset>
    <legend>متابعه 2</legend>

    <div class="input_group">
      <div class="input_field">
        <label for="continue2_date">تاريخ المتابعه</label>
        <input type="date" id="continue2_date" v-model="continue2_date" />
      </div>

      <div class="input_field">
        <label for="continue2">النتيجه</label>

        <select id="continue2" v-model="continue2">
          <option v-for="l in resData" :key="l" :value="l" v-text="l" />
        </select>
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
    continue2_date: '',
    continue2: '',
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
    console.log(d.padStart(60, '-'))
    this[mutationName](this[d])
  }
}

export default {
  name: 'Continue2',
  props: ['resData', 'form_event'],
  data() {
    return Object.assign({}, data)
  },
  watch,
  methods: mapMutations('workers', Mutations),
}
</script>
