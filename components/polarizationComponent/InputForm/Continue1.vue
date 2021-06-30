<template>
  <fieldset>
    <legend>متابعه 1</legend>

    <div class="input_group">
      <div class="input_field">
        <label for="continue1_date">تاريخ المتابعه</label>
        <input type="date" id="continue1_date" v-model="continue1_date" />
      </div>

      <div class="input_field">
        <label for="continue1">النتيجه</label>

        <select id="continue1" v-model="continue1">
          <option v-for="l in resData" :key="l" :value="l" v-text="l" />
        </select>
      </div>
    </div>
  </fieldset>
</template>

<script>
// vuex
import { mapMutations } from 'vuex'

export default {
  name: 'Continue1',
  props: ['resData', 'form_event'],

  data() {
    return {
      continue1_date: '',
      continue1: '',
    }
  },
  watch: {
    continue1_date() {
      this.continue1_dateMutation(this.continue1)
    },
    continue1() {
      this.continue1Mutation(this.continue1)
    },
  },
  methods: mapMutations('workers', [
    'continue1Mutation',
    'continue1_dateMutation',
  ]),
}
</script>

<script>
// vuex
import { mapMutations } from 'vuex'

/*****************************
 *   pure Js
 ****************************/

// to reset the Form when form Actions
var data = {
    continue1_date: '',
    continue1: '',
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
  name: 'Continue1',
  props: ['resData', 'form_event'],

  data() {
    return Object.assign({}, data)
  },
  watch,
  methods: mapMutations('workers', Mutations),
}
</script>
