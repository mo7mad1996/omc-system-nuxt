<template>
  <fieldset>
    <legend>بيانات أساسيه</legend>

    <div class="input_group">
      <div class="input_field">
        <label for="vacation_date">التاريخ</label>
        <input id="vacation_date" type="date" v-model="vacation_date" />
      </div>

      <div class="input_field">
        <label for="Person_name">الاسم</label>
        <input id="Person_name" type="text" v-model="Person_name" />
      </div>

      <div class="input_field">
        <label for="factory">المصنع</label>
        <input id="factory" type="text" v-model="factory" />
      </div>

      <div class="input_field">
        <label for="branch">المنطقه</label>
        <input id="branch" type="text" v-model="branch" />
      </div>

      <div class="input_field">
        <label for="job">الوظيفه</label>
        <input id="job" type="text" v-model="job" />
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
    vacation_date: '',
    Person_name: '',
    factory: '',
    branch: '',
    job: '',
  },
  watch = {
    form_event() {
      Object.assign(this, data)
    },
  },
  Mutations = []

for (let d in data) {
  var mutationName = 'resignation' + d + 'Mutation'
  Mutations.push(mutationName)

  watch[d] = function () {
    this[mutationName](this[d])
  }
}

export default {
  name: 'BaseData',
  props: ['form_event'],
  data() {
    return Object.assign({}, data)
  },
  watch,
  methods: mapMutations('hr', Mutations),
}
</script>
