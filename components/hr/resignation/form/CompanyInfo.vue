<template>
  <fieldset>
    <legend>خاص بعمال مصر</legend>
    <div class="input_group">
      <div class="input_field">
        <label for="job">وظيفتي بالمؤسسه</label>
        <input id="job" type="text" placeholder="الوظيفه" v-model="job" />
      </div>

      <div class="input_field">
        <label for="factory_name">بمصنع</label>
        <input
          id="factory_name"
          type="text"
          placeholder="اسم المصنع"
          v-model="factory_name"
        />
      </div>

      <div class="input_field">
        <label for="factory_place">بفرع</label>
        <input
          id="factory_place"
          type="text"
          placeholder="محل الاقامه"
          v-model="factory_place"
        />
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
var data = { job: '', factory_name: '', factory_place: '' },
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
  name: 'CompanyInfo',
  props: ['form_event'],
  data() {
    return Object.assign({}, data)
  },
  watch,
  methods: mapMutations('hr', Mutations),
}
</script>
