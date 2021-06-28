<template>
  <fieldset>
    <legend>رشح احد اصجابك للعمل بالشركه</legend>
    <div class="input_group">
      <div class="input_field">
        <label for="name">اسم صاحبك</label>
        <input id="name" type="text" v-model="RecommendName" />
      </div>

      <div class="input_field">
        <label for="name">رقم التلفون</label>
        <input id="name" type="text" v-model="RecommendPhone" />
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
    RecommendName: '',
    RecommendPhone: '',
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
  name: 'RecommendOne',
  props: ['form_event'],
  data() {
    return Object.assign({}, data)
  },
  watch,
  methods: mapMutations('workers', Mutations),
}
</script>
