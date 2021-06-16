<template>
  <fieldset>
    <legend>متابعه 2</legend>

    <div class="input_group">
      <div class="input_field">
        <label for="continue2_date">تاريخ المتابعه</label>
        <input type="date" id="continue2_date" v-model="continue2_date" />
      </div>

      <div class="input_field">
        <label for="continue2">النتيجه</label>

        <select id="continue2" v-model="continue2">
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
  name: 'Continue2',
  props: ['resData'],

  data() {
    return {
      continue2_date: '',
      continue2: '',
    }
  },
  watch: {
    continue2_date() {
      this.continue2_dateMutation(this.continue2)
    },
    continue2() {
      this.continue2Mutation(this.continue2)
    },
  },
  methods: mapMutations('workers', [
    'continue2Mutation',
    'continue2_dateMutation',
  ]),
}
</script>
