<template>
  <fieldset>
    <legend>بيانات تصريح خروج</legend>
    <div class="input_group">
      <div class="input_field">
        <label for="person_name">يصرح بخروج السيد</label>
        <input id="person_name" type="text" />
      </div>

      <div class="input_field">
        <label for="person_name">إدارة</label>
        <input id="person_name" type="text" />
      </div>

      <div class="input_field">
        <label for="person_name">الساعه</label>
        <input id="person_name" type="time" />
      </div>

      <div class="input_field">
        <label for="person_name">بسبب</label>
        <input id="person_name" type="text" />
      </div>
    </div>
  </fieldset>
</template>

<script>
export default {
  name: 'FormMain',
}
</script>
