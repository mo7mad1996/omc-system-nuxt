<template>
  <fieldset>
    <legend>البيانات الشخصيه</legend>
    <div class="input_group">
      <div class="input_field">
        <label for="name">الأسم</label>
        <input id="name" type="text" v-model="name" />
      </div>

      <div class="input_field">
        <label for="home">مكان الإقامه الحالي</label>
        <input id="home" type="text" v-model="home" />
      </div>

      <div class="input_field">
        <label for="age">السن</label>
        <input id="age" type="number" v-model="age" />
      </div>

      <div class="input_field">
        <label>مدخن</label>

        <div class="radio-group">
          <input type="radio" id="yes" :value="true" v-model="somke" />
          <label for="yes" class="mark" />
          <label for="yes">نعم</label>
          <input type="radio" id="no" :value="false" v-model="somke" />
          <label for="no" class="mark" />
          <label for="no">لا</label>
        </div>
      </div>

      <div class="input_field">
        <label for="army">الموقف من التجنيد</label>
        <input id="army" type="text" v-model="army" />
      </div>

      <div class="input_field">
        <label for="drivingLicense">رخصة قياده</label>
        <input id="drivingLicense" type="text" v-model="drivingLicense" />
      </div>

      <div class="input_field">
        <label for="phone">رقم التليفون</label>
        <input id="phone" type="text" v-model="phone" />
      </div>

      <div class="input_field">
        <label for="whatsApp">رقم الواتساب</label>
        <input id="whatsApp" type="text" v-model="whatsApp" />
      </div>
    </div>
  </fieldset>
</template>

<script>
export default {
  name: 'Personal',
  data() {
    return {
      name: '',
      home: '',
      age: 21,
      somke: false,
      army: '',
      drivingLicense: '',
      phone: '',
      whatsApp: '',
    }
  },
}
</script>
