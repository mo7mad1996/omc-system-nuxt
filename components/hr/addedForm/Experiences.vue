<template>
  <fieldset>
    <legend>الخبرات العمليه والمهنيه السابقة</legend>
    <div class="input_group">
      <div class="input_field">
        <label for="where">اشتغلت فين قبل كده</label>
        <input id="where" v-model="where" />
      </div>

      <div class="input_field">
        <label for="last">أخر مكان عمل إشتغلت فين</label>
        <input id="last" v-model="last" />
      </div>

      <div class="input_field">
        <label for="why">ليه سيبت شغلك السابق</label>
        <input id="why" v-model="why" />
      </div>

      <div class="input_field">
        <label for="job">عندك حرفة او مهنه تعرفها</label>
        <input id="job" v-model="job" />
      </div>
    </div>
  </fieldset>
</template>

<script>
export default {
  name: 'Experiences',
  data() {
    return { where: '', last: '', why: '', job: '' }
  },
}
</script>
