<template>
  <fieldset>
    <legend>نتيجه (1)</legend>
    <div class="input_group">
      <div class="input_field">
        <label for="res1_called">تم الاتصال</label>

        <div class="squaredThree">
          <input type="checkbox" id="res1_called" v-model="res1_called" />
          <label for="res1_called"></label>
        </div>
      </div>

      <div class="input_field">
        <label for="res1_offer">طلب عرض</label>

        <div class="squaredThree">
          <input type="checkbox" id="res1_offer" v-model="res1_offer" />
          <label for="res1_offer"></label>
        </div>
      </div>

      <div class="input_field">
        <label for="res1_vist">طلب زياره</label>

        <div class="squaredThree">
          <input type="checkbox" id="res1_vist" v-model="res1_vist" />
          <label for="res1_vist"></label>
        </div>
      </div>

      <!--
        <div class="input_field">
          <label for="res1_continue_date">تاريخ المتابعه</label>
          <input id="res1_continue_date" type="date">
        </div>
      -->

      <div class="input_field">
        <label for="next_continue_date">تاريخ المتابعه المستقبليه</label>
        <input
          id="next_continue_date"
          type="date"
          v-model="next_continue_date"
        />
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
    next_continue_date: '',
    res1_vist: false,
    res1_offer: false,
    res1_called: false,
  },
  watch = {
    form_event() {
      Object.assign(this, data)
    },
  },
  Mutations = []

for (let d in data) {
  let mutationName = d + 'Mutation'
  Mutations.push(mutationName)

  watch[d] = function () {
    this[mutationName](this[d])
  }
}

export default {
  name: 'Res1',
  props: ['form_event'],
  data() {
    return Object.assign({}, data)
  },
  watch,
  methods: mapMutations('customers', Mutations),
}
</script>
