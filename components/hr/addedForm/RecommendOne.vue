<template>
  <fieldset>
    <legend>رشح احد اصجابك للعمل بالشركه</legend>
    <div class="input_group">
      <div class="input_field">
        <label for="name">اسم صاحبك</label>
        <input id="name" type="text" v-model="RecommendName" />
      </div>

      <div class="input_field">
        <label for="name">رقم التلفون</label>
        <input id="name" type="text" v-model="RecommendPhone" />
      </div>
    </div>
  </fieldset>
</template>

<script>
export default {
  name: 'RecommendOne',
  data() {
    return {
      RecommendName: '',
      RecommendPhone: '',
    }
  },
}
</script>
