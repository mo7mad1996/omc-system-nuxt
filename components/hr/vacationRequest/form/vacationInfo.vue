<template>
  <fieldset>
    <legend>أرجو من سيادتكم الموافقه على منحي أجازه</legend>

    <div class="input_group">
      <div class="input_field">
        <label for="start_date">تبدأ من</label>
        <input id="start_date" type="date" v-model="start_date" />
      </div>

      <div class="input_field">
        <label for="end_date">وتنتهي في</label>
        <input id="end_date" type="date" v-model="end_date" />
      </div>
    </div>

    <div class="textarea-group">
      <label for="vacation_reason">وذلك للاسباب الاتيه</label>
      <textarea id="vacation_reason" v-model="vacation_reason"></textarea>
    </div>
  </fieldset>
</template>

<script>
// vuex
import { mapMutations } from 'vuex'

// use for reset on form Actions
const data = { start_date: '', end_date: '', vacation_reason: '' },
  watch = {
    form_event() {
      Object.assign(this, data)
    },
  },
  Mutations = []

for (let d in data) {
  let mutationName = 'VacationRequest' + d + 'Mutation'
  Mutations.push(mutationName)

  watch[d] = function () {
    this[mutationName](this[d])
  }
}

export default {
  name: 'VacationInfo',
  props: ['form_event'],
  data() {
    return Object.assign({}, data)
  },
  watch: Object.assign({}, watch),
  methods: mapMutations('hr', Mutations),
}
</script>
