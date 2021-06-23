<template>
  <fieldset>
    <legend>بيانات خاصه بالعامل</legend>
    <div class="input_group">
      <div class="input_field">
        <label for="person_name">الاسم</label>
        <input id="person_name" type="text" v-model="person_name" />
      </div>

      <div class="input_field">
        <label for="person_name">الرقم القومي</label>
        <input id="person_name" type="text" v-model="id_card" />
      </div>

      <div class="input_field">
        <label for="person_name">تاريخ الميلاد</label>
        <input id="person_name" type="date" v-model="birth_day" />
      </div>

      <div class="input_field">
        <label for="phone">رقم التلفون</label>
        <input id="phone" type="text" v-model="phone" />
      </div>
      <div class="input_field">
        <label for="qualification">المؤهل</label>

        <select id="qualification" v-model="qualification">
          <option v-for="q in qualifications" :key="q" :value="q" v-text="q" />
        </select>
      </div>

      <div class="input_field">
        <label for="city">المحافظه</label>

        <select id="city" v-model="city">
          <option v-for="c in cities" :key="c" :value="c" v-text="c" />
        </select>
      </div>

      <div class="input_field">
        <label for="visa">ڨيزا</label>
        <input id="visa" type="text" v-model="visa" />
      </div>
    </div>
  </fieldset>
</template>

<script>
// vuex
import { mapGetters } from 'vuex'

export default {
  name: 'PersonalData',
  computed: mapGetters(['cities', 'qualifications']),
  data() {
    return {
      person_name: '',
      id_card: '',
      birth_day: '',
      phone: '',
      city: '',
      qualification: '',
      visa: '',
    }
  },
}
</script>
