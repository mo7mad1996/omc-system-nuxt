<template>
  <fieldset>
    <legend>المستلم</legend>
    <div class="input_group">
      <div class="input_field">
        <label for="the_recipient">اسم المستلم</label>
        <input id="the_recipient" v-model="the_recipient" />
      </div>

      <div class="input_field">
        <label for="the_branch">الفرع</label>

        <select id="the_branch" v-model="the_branch">
          <option v-for="d in branch_list" :key="d" v-text="d" :value="d" />
        </select>
      </div>
    </div>
  </fieldset>
</template>
<script>
export default {
  name: 'Recipient',
  data() {
    return {
      the_recipient: '',
      the_branch: '',
      branch_list: ['اكتوبر', 'العاشر'],
    }
  },
}
</script>
