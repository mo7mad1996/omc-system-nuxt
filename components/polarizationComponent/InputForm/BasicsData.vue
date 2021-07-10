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
    </div>
  </fieldset>
</template>

<script>
// vuex
import { mapMutations, mapGetters } from 'vuex'

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
  },
  watch = {
    form_event() {
      Object.assign(this, data)
    },
  },
  Mutations = ['added_byMutation']

for (let d in data) {
  let mutationName = d + 'Mutation'
  Mutations.push(mutationName)

  watch[d] = function () {
    this[mutationName](this[d])
  }
  watch.added_by = function () {
    this.added_byMutation(this.added_by)
  }
}

export default {
  computed: mapGetters('user', ['user']),
  mounted() {
    this.added_by = this.user.name
  },
  name: 'BasicsData',
  props: ['resData', 'form_event'],
  data() {
    return Object.assign({ added_by: '' }, data)
  },
  watch,
  methods: mapMutations('workers', Mutations),
}
</script>
