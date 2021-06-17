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

export default {
  name: 'Res2',
  data() {
    return {
      res2_sent: false,
      res2_vist: false,
      res2_reject: false,
      res2_accept: false,
    }
  },
  watch: {
    res2_sent() {
      this.res2_sentMutation(this.res2_sent)
    },
    res2_vist() {
      this.res2_vistMutation(this.res2_vist)
    },
    res2_reject() {
      this.res2_rejectMutation(this.res2_reject)
    },
    res2_accept() {
      this.res2_acceptMutation(this.res2_accept)
    },
  },
  methods: mapMutations('customers', [
    'res2_sentMutation',
    'res2_vistMutation',
    'res2_rejectMutation',
    'res2_acceptMutation',
  ]),
}
</script>
