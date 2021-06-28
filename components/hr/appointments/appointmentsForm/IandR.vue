<template>
  <fieldset>
    <legend>التأمين والاستقاله</legend>
    <div class="input_group">
      <div class="input_field">
        <label>التأمين</label>
        <div class="radio-group">
          <input
            type="radio"
            id="insurance_yes"
            :value="true"
            v-model="insurance"
          />
          <label for="insurance_yes" class="mark"></label>
          <label for="insurance_yes">مؤمن عليه</label>
          <input
            type="radio"
            id="insurance_no"
            :value="false"
            v-model="insurance"
          />
          <label for="insurance_no" class="mark"></label>
          <label for="insurance_no">غير مؤمن عليه</label>
        </div>
      </div>

      <div class="input_field">
        <label for="resignation_date">تاريخ الإستقاله</label>
        <input id="resignation_date" type="date" v-model="resignation_date" />
      </div>
    </div>

    <div class="input_group">
      <div class="textarea-group">
        <label for="resignation_reason"> سبب الاستقاله</label>
        <textarea
          id="resignation_reason"
          v-model="resignation_reason"
        ></textarea>
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
var data = { insurance: false, resignation_date: '', resignation_reason: '' },
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
  name: 'IandR',
  props: ['form_event'],
  data() {
    return Object.assign({}, data)
  },
  watch,
  methods: mapMutations('workers', Mutations),
}
</script>
