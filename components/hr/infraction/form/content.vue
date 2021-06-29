<template>
  <fieldset>
    <legend>بيانات خاصه بالموظف</legend>
    <div class="input_group">
      <div class="input_field">
        <label for="person_name">الاسم</label>
        <input id="person_name" type="text" v-model="person_name" />
      </div>

      <div class="input_field">
        <label for="job">الوظيفه</label>
        <input id="job" type="text" v-model="job" />
      </div>

      <div class="input_field">
        <label for="branch">الفرع</label>
        <input id="branch" type="text" v-model="branch" />
      </div>

      <div class="input_field">
        <label for="infraction_type">نوع المخالفه</label>
        <input id="infraction_type" type="text" v-model="infraction_type" />
      </div>

      <div class="input_field">
        <label for="infraction_reason">سبب المخالفه</label>
        <input id="infraction_reason" type="text" v-model="infraction_reason" />
      </div>

      <div class="input_field">
        <label>الجزاء الاداري</label>
        <div class="group">
          <label for="by_day">باليوم</label>
          <input type="number" id="by_day" v-model="by_day" />
          <label for="by_money">بالجنيه</label>
          <input type="number" id="by_money" v-model="by_money" />
        </div>
      </div>
    </div>
  </fieldset>
</template>

<script>
// vuex
import { mapMutations } from 'vuex'

/***************************
 *     Pure JS
 **************************/

const data = {
    person_name: '',
    job: '',
    branch: '',
    infraction_type: '',
    infraction_reason: '',
    by_day: 0,
    by_money: 0,
  },
  watch = {
    form_event() {
      Object.assign(this, data)
    },
  },
  Mutations = [] //

for (let d in data) {
  let mutationName = 'Infraction' + d + 'Mutation'
  Mutations.push(mutationName)

  watch[d] = function () {
    this[mutationName](this[d])
  }
}

export default {
  name: 'Content',
  props: ['form_event'],
  data() {
    return Object.assign({}, data)
  },
  watch,
  methods: mapMutations('hr', Mutations),
}
</script>
