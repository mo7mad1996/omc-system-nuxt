<template>
  <fieldset>
    <legend>نتيجه (2)</legend>
    <div class="input_group">
      <div class="input_field">
        <label for="res2_sent">تم ارسال العرض</label>

        <div class="squaredThree">
          <input type="checkbox" id="res2_sent" v-model="res2_sent" />
          <label for="res2_sent"></label>
        </div>
      </div>

      <div class="input_field">
        <label for="res2_vist">تم الزياره</label>

        <div class="squaredThree">
          <input type="checkbox" id="res2_vist" v-model="res2_vist" />
          <label for="res2_vist"></label>
        </div>
      </div>

      <div class="input_field">
        <label for="res2_reject">تم رفض العرض</label>

        <div class="squaredThree">
          <input type="checkbox" id="res2_reject" v-model="res2_reject" />
          <label for="res2_reject"></label>
        </div>
      </div>

      <div class="input_field">
        <label for="res2_accept">تم قبول العرض</label>

        <div class="squaredThree">
          <input type="checkbox" id="res2_accept" v-model="res2_accept" />
          <label for="res2_accept"></label>
        </div>
      </div>
      <!-- 
        <div class="input_field">
            <label for="res2_continue_date">تاريخ المتابعه</label>
            <input id="res2_continue_date" type="date">
        </div> 
        -->
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
    res2_sent: false,
    res2_vist: false,
    res2_reject: false,
    res2_accept: false,
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
  name: 'Res2',
  props: ['form_event'],
  data() {
    return Object.assign({}, data)
  },
  watch,
  methods: mapMutations('customers', Mutations),
}
</script>
