<template>
  <fieldset>
    <legend>خاص بعمال مصر</legend>
    <div class="input_group">
      <div class="input_field">
        <label for="job">وظيفتي بالمؤسسه</label>
        <input id="job" type="text" placeholder="الوظيفه" v-model="job" />
      </div>

      <div class="input_field">
        <label for="factory_name">بمصنع</label>
        <input
          id="factory_name"
          type="text"
          placeholder="اسم المصنع"
          v-model="factory_name"
        />
      </div>

      <div class="input_field">
        <label for="city">بفرع</label>
        <input id="city" type="text" placeholder="محل الاقامه" v-model="city" />
      </div>
    </div>
  </fieldset>
</template>

<script>
export default {
  name: 'CompanyInfo',
  props: ['form_event'],
  data() {
    return { job: '', factory_name: '', city: '' }
  },
  watch: {
    // to reset the data on submit
    form_event() {
      Object.assign(this, this, { job: '', factory_name: '', city: '' })
    },
  },
}
</script>
