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

export default {
  name: 'Experiences',
  data() {
    return {
      history_work: '',
      last_place: '',
      why_left_last_job: '',
      job_title: '',
    }
  },
  watch: {
    history_work() {
      this.history_workMutation(this.history_work)
    },
    last_place() {
      this.last_placeMutation(this.last_place)
    },
    why_left_last_job() {
      this.why_left_last_jobMutation(this.why_left_last_job)
    },
    job_title() {
      this.job_titleMutation(this.job_title)
    },
  },
  methods: mapMutations('workers', [
    'history_workMutation',
    'last_placeMutation',
    'why_left_last_jobMutation',
    'job_titleMutation',
  ]),
}
</script>
