<template>
  <fieldset>
    <legend>اليوم</legend>
    <div class="input_group">
      <div class="input_field">
        <label for="the_day">يوم</label>

        <select id="the_day" v-model="the_day">
          <option v-for="d in week" :key="d" v-text="d" :value="d" />
        </select>
      </div>

      <div class="input_field">
        <label for="registr_date">تاريخ تسجيل العامل</label>

        <input id="registr_date" type="date" v-model="the_date" />
      </div>
    </div>
  </fieldset>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'DaySection',
  computed: mapGetters(['week']),
  data() {
    return {
      the_day: '',
      the_date: '',
    }
  },
}
</script>
