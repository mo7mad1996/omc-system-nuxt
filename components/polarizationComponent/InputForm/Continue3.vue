<template>
  <fieldset>
    <legend>متابعه 3</legend>
    <div class="input_group">
      <div class="input_field">
        <label for="continue3_date">تاريخ المتابعه</label>
        <input type="date" id="continue3_date" v-model="continue3_date" />
      </div>

      <div class="input_field">
        <label for="continue3">النتيجه</label>

        <select id="continue3" v-model="continue3">
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
    continue3_date: '',
    continue3: '',
  },
  watch = {
    form_event() {
      Object.assign(this, data)
    },
  },
  Mutations = []

for (let d in data) {
  const mutationName = d + 'Mutation'
  Mutations.push(mutationName)

  watch[d] = function () {
    console.log(d.padStart(60, '-'))
    this[mutationName](this[d])
  }
}

export default {
  name: 'Continue3',
  props: ['resData', 'form_event'],
  data() {
    return Object.assign({}, data)
  },
  watch,
  methods: mapMutations('workers', Mutations),
}
</script>
