<template>
  <fieldset>
    <legend>بيانات اساسيه</legend>
    <div class="input_group">
      <div class="input_field">
        <label for="result">النتيجه</label>

        <select id="result" v-model="result">
          <option v-for="l in resData" :key="l" :value="l" v-text="l" />
        </select>
      </div>

      <div class="input_field">
        <label for="nots">ملاحظات</label>
        <input id="nots" v-model="nots" />
      </div>

      <div class="input_field">
        <label for="next_continue_date">تاريخ المتابعه المستقبليه</label>
        <input
          id="next_continue_date"
          type="date"
          v-model="next_continue_date"
        />
      </div>

      <div class="input_field">
        <label for="final_call">تاريخ اخر اتصال</label>
        <input id="final_call" type="date" v-model="final_call" />
      </div>

      <div class="input_field">
        <label for="get_from">مصدر المكالمه</label>
        <input id="get_from" type="text" v-model="get_from" />
      </div>

      <div class="input_field">
        <label for="added_by">أضيف بواسطة</label>
        <input id="added_by" type="text" v-model="added_by" />
      </div>
    </div>
  </fieldset>
</template>

<script>
// vuex
import { mapMutations } from 'vuex'

/*****************************
 *   pure Js
 ****************************/

// to reset the Form when form Actions
var data = {
    result: '',
    nots: '',
    next_continue_date: '',
    final_call: '',
    get_from: '',
    added_by: '',
  },
  watch = {
    form_event() {
      Object.assign(this, data)
    },
  },
  Mutations = []

for (let d in data) {
  const mutationName = d + 'Mutation'
  Mutations.push(mutationName)

  watch[d] = function () {
    console.log(d.padStart(60, '-'))
    this[mutationName](this[d])
  }
}

export default {
  name: 'BasicsData',
  props: ['resData', 'form_event'],
  data() {
    return Object.assign({}, data)
  },
  watch,
  methods: mapMutations('workers', Mutations),
}
</script>
