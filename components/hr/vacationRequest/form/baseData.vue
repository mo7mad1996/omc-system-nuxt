<template>
  <fieldset>
    <legend>بيانات أساسيه</legend>

    <div class="input_group">
      <div class="input_field">
        <label for="person_name">التاريخ</label>
        <input id="person_name" type="date" />
      </div>

      <div class="input_field">
        <label for="id_card">الاسم</label>
        <input id="id_card" type="text" />
      </div>

      <div class="input_field">
        <label for="id_card">المصنع</label>
        <input id="id_card" type="text" />
      </div>

      <div class="input_field">
        <label for="id_card">المنطقه</label>
        <input id="id_card" type="text" />
      </div>

      <div class="input_field">
        <label for="id_card">الوظيفه</label>
        <input id="id_card" type="text" />
      </div>
    </div>
  </fieldset>
</template>

<script>
export default {
  name: 'BaseData',
}
</script>
