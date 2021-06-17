<template>
  <fieldset>
    <legend>ملاحظات</legend>

    <div class="input_group">
      <div class="input_field">
        <label for="nots">ملاحظات</label>
        <input id="nots" type="text" v-model="nots" />
      </div>

      <div class="input_field">
        <label for="LastCallDate">تاريخ اخر اتصال</label>
        <input id="LastCallDate" type="date" v-model="LastCallDate" />
      </div>
    </div>
  </fieldset>
</template>

<script>
// vuex
import { mapMutations } from 'vuex'

export default {
  name: 'Nots',
  data() {
    return {
      LastCallDate: '',
      nots: '',
    }
  },
  watch: {
    LastCallDate() {
      this.LastCallDateMutation(this.LastCallDate)
    },
    nots() {
      this.notsMutation(this.nots)
    },
  },
  methods: mapMutations('customers', ['LastCallDateMutation', 'notsMutation']),
}
</script>
