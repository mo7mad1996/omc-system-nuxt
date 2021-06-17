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

export default {
  name: 'Res1',
  data() {
    return {
      next_continue_date: '',
      res1_vist: false,
      res1_offer: false,
      res1_called: false,
    }
  },
  watch: {
    next_continue_date() {
      this.next_continue_dateMutation(this.next_continue_date)
    },
    res1_vist() {
      this.res1_vistMutation(this.res1_vist)
    },
    res1_offer() {
      this.res1_offerMutation(this.res1_offer)
    },
    res1_called() {
      this.res1_calledMutation(this.res1_called)
    },
  },
  methods: mapMutations('customers', [
    'next_continue_dateMutation',
    'res1_vistMutation',
    'res1_offerMutation',
    'res1_calledMutation',
  ]),
}
</script>
