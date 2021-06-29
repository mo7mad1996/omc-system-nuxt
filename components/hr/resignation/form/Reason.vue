<template>
  <fieldset>
    <legend>سبب الاستقاله</legend>
    <div class="textarea-group">
      <label for="resignation_reason">
        وحيث توجد ظروف تمنعني من العمل لدى المؤسسه مُتمثلة في
      </label>
      <textarea
        id="resignation_reason"
        v-model="resignation_reason"
        placeholder="سبب الاستقالة"
      ></textarea>
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
var data = { resignation_reason: '' },
  watch = {
    form_event() {
      Object.assign(this, data)
    },
  },
  Mutations = []

for (let d in data) {
  let mutationName = 'Resignation' + d + 'Mutation'
  Mutations.push(mutationName)

  watch[d] = function () {
    this[mutationName](this[d])
  }
}

export default {
  name: 'Reason',
  props: ['form_event'],
  data() {
    return Object.assign({}, data)
  },
  watch,
  methods: mapMutations('hr', Mutations),
}
</script>
