<template>
  <fieldset>
    <legend>متابعه 3</legend>
    <div class="input_group">
      <div class="input_field">
        <label for="continue3_date">تاريخ المتابعه</label>
        <input type="date" id="continue3_date" v-model="continue3_date" />
      </div>

      <div class="input_field">
        <label for="continue3">النتيجه</label>

        <select id="continue3" v-model="continue3">
          <option v-for="l in resData" :key="l" :value="l" v-text="l" />
        </select>
      </div>
    </div>
  </fieldset>
</template>

<script>
// vuex
import { mapMutations } from 'vuex'

export default {
  name: 'Continue3',
  props: ['resData'],

  data() {
    return {
      continue3_date: '',
      continue3: '',
    }
  },
  watch: {
    continue3_date() {
      this.continue3_dateMutation(this.continue3)
    },
    continue3() {
      this.continue3Mutation(this.continue3)
    },
  },
  methods: mapMutations('workers', [
    'continue3Mutation',
    'continue3_dateMutation',
  ]),
}
</script>
