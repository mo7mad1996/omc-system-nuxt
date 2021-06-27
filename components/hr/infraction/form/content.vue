<template>
  <fieldset>
    <legend>بيانات خاصه بالموظف</legend>
    <div class="input_group">
      <div class="input_field">
        <label for="person_name">الاسم</label>
        <input id="person_name" type="text" />
      </div>

      <div class="input_field">
        <label for="person_name">الوظيفه</label>
        <input id="person_name" type="text" />
      </div>

      <div class="input_field">
        <label for="person_name">الفرع</label>
        <input id="person_name" type="text" />
      </div>

      <div class="input_field">
        <label for="person_name">نوع المخالفه</label>
        <input id="person_name" type="text" />
      </div>

      <div class="input_field">
        <label for="person_name">سبب المخالفه</label>
        <input id="person_name" type="text" />
      </div>

      <div class="input_field">
        <label>الجزاء الاداري</label>
        <div class="group">
          <label for="by_day">باليوم</label>
          <input type="number" id="by_day" />
          <label for="by_money">بالجنيه</label>
          <input type="number" id="by_money" />
        </div>
      </div>
    </div>
  </fieldset>
</template>

<script>
export default {
  name: 'Content',
}
</script>
