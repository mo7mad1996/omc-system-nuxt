<template>
  <fieldset>
    <legend>بيانات خاصه بالمصنع</legend>
    <div class="input_group">
      <div class="input_field">
        <label for="factory_name">المصنع</label>
        <input id="factory_name" type="text" v-model="factory" />
      </div>

      <div class="input_field">
        <label for="shift">الوردية</label>
        <input id="shift" type="text" v-model="shift" />
      </div>

      <div class="input_field">
        <label for="join_date">تاريخ الانضمام</label>
        <input id="join_date" type="date" v-model="join_date" />
      </div>
    </div>
  </fieldset>
</template>

<script>
// vuex
import { mapMutations } from 'vuex'

export default {
  name: 'Factory',
  data() {
    return { factory: '', shift: '', join_date: '' }
  },
  watch: {
    factory() {
      this.factoryMutation(this.factory)
    },
    shift() {
      this.shiftMutation(this.shift)
    },
    join_date() {
      this.join_dateMutation(this.join_date)
    },
  },
  methods: mapMutations('workers', [
    'factoryMutation',
    'shiftMutation',
    'join_dateMutation',
  ]),
}
</script>
