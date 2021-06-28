<template>
  <fieldset>
    <legend>الخبرات العمليه والمهنيه السابقة</legend>
    <div class="input_group">
      <div class="input_field">
        <label for="where">اشتغلت فين قبل كده</label>
        <input id="where" v-model="history_work" />
      </div>

      <div class="input_field">
        <label for="last">أخر مكان عمل إشتغلت فين</label>
        <input id="last" v-model="last_place" />
      </div>

      <div class="input_field">
        <label for="why">ليه سيبت شغلك السابق</label>
        <input id="why" v-model="why_left_last_job" />
      </div>

      <div class="input_field">
        <label for="job_title">عندك حرفة او مهنه تعرفها</label>
        <input id="job_title" v-model="job_title" />
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
    history_work: '',
    last_place: '',
    why_left_last_job: '',
    job_title: '',
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
  name: 'Experiences',
  props: ['form_event'],
  data() {
    return Object.assign({}, data)
  },
  watch,
  methods: mapMutations('workers', Mutations),
}
</script>
