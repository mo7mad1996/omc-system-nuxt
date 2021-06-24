<template>
  <fieldset>
    <legend>خاص بالعامل</legend>
    <div class="input_group">
      <div class="input_field">
        <label for="person_name">مقدم لسيادتكم</label>
        <input
          id="person_name"
          type="text"
          placeholder="اسم المستقيل"
          v-model="person_name"
        />
      </div>

      <div class="input_field">
        <label for="id_card">أحمل رقم بطاقه</label>
        <input
          id="id_card"
          type="text"
          placeholder="رقم قومي"
          v-model="id_card"
        />
      </div>

      <div class="input_field">
        <label for="city">المقيم في</label>
        <input id="city" type="text" placeholder="محل الاقامه" v-model="city" />
      </div>
    </div>
  </fieldset>
</template>

<script>
export default {
  name: 'Personal',
  data() {
    return { person_name: '', id_card: '', city: '' }
  },
}
</script>
