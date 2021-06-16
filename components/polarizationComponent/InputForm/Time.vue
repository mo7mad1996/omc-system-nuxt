<template>
  <fieldset>
    <legend>الميعاد</legend>
    <div class="input_group">
      <div class="input_field">
        <label for="the_day">يوم</label>

        <select id="the_day" v-model="the_day">
          <option v-for="d in week" :key="d" v-text="d" :value="d" />
        </select>
      </div>

      <div class="input_field">
        <label for="registr_date">تاريخ تسجيل العامل</label>

        <input id="registr_date" type="date" v-model="registr_date" />
      </div>
    </div>
  </fieldset>
</template>

<script>
// vuex
import { mapMutations } from 'vuex'

export default {
  name: 'Time',
  props: ['week'],
  data() {
    return {
      the_day: '',
      registr_date: '',
    }
  },
  watch: {
    the_day() {
      this.the_dayMutation(this.the_day)
    },
    registr_date() {
      this.registr_dateMutation(this.registr_date)
    },
  },
  methods: mapMutations('workers', ['the_dayMutation', 'registr_dateMutation']),
}
</script>
