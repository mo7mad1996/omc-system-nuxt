<template>
  <fieldset>
    <legend>حالات الرفض</legend>

    <div class="input_group">
      <div class="textarea-group">
        <label for="HrReject"> في حالة الرفض من جانبنا سبب ذلك</label>
        <textarea id="HrReject" v-model="HrReject"></textarea>
      </div>

      <div class="textarea-group">
        <label for="PersonReject">في حالة الرفض من حانب العامل سبب ذلك</label>
        <textarea id="PersonReject" v-model="PersonReject"></textarea>
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
var data = { HrReject: '', PersonReject: '' },
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
  name: 'Results',
  props: ['form_event'],
  data() {
    return Object.assign({}, data)
  },
  watch,
  methods: mapMutations('workers', Mutations),
}
</script>
