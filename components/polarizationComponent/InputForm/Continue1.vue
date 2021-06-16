<template>
  <fieldset>
    <legend>متابعه 1</legend>

    <div class="input_group">
      <div class="input_field">
        <label for="continue1_date">تاريخ المتابعه</label>
        <input type="date" id="continue1_date" v-model="continue1_date" />
      </div>

      <div class="input_field">
        <label for="continue1">النتيجه</label>

        <select id="continue1" v-model="continue1">
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
  name: 'Continue1',
  props: ['resData'],

  data() {
    return {
      continue1_date: '',
      continue1: '',
    }
  },
  watch: {
    continue1_date() {
      this.continue1_dateMutation(this.continue1)
    },
    continue1() {
      this.continue1Mutation(this.continue1)
    },
  },
  methods: mapMutations('workers', [
    'continue1Mutation',
    'continue1_dateMutation',
  ]),
}
</script>
