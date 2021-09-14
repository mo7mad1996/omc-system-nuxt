<template>
  <fieldset>
    <legend>التسويه</legend>
    <div class="input_group">
      <div class="input_field">
        <label for="flattening_date">تاريخ التسويه</label>

        <input id="flattening_date" type="date" v-model="flattening_date" />
      </div>

      <div class="input_field">
        <label for="flattening_done">تم التسويه</label>

        <div class="squaredThree">
          <input
            type="radio"
            name="flattening"
            id="flattening_done"
            :value="true"
            v-model="flattening_done"
          />
          <label for="flattening_done"></label>
        </div>
      </div>

      <div class="input_field">
        <label for="no_flattening">لم تتم التسويه</label>

        <div class="squaredThree">
          <input
            type="radio"
            name="flattening"
            id="no_flattening"
            :value="false"
            v-model="flattening_done"
          />
          <label for="no_flattening"></label>
        </div>
      </div>
    </div>
  </fieldset>
</template>

<script>
export default {
  name: 'Flattening',
  data() {
    return {
      flattening_date: '',
      flattening_done: false,
    }
  },
}
</script>
