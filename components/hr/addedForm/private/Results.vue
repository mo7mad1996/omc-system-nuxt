<template>
  <fieldset>
    <legend>حالات الرفض</legend>

    <div class="input_group">
      <div class="textarea-group">
        <label for="HrReject"> في حالة الرفض من جانبنا سبب ذلك</label>
        <textarea id="HrReject" v-model="HrReject"></textarea>
      </div>

      <div class="textarea-group">
        <label for="PersonReject">في حالة الرفض من حانب العامل سبب ذلك</label>
        <textarea id="PersonReject" v-model="PersonReject"></textarea>
      </div>
    </div>
  </fieldset>
</template>

<script>
// vuex
import { mapMutations } from 'vuex'

export default {
  name: 'Results',
  data() {
    return { HrReject: '', PersonReject: '' }
  },
  watch: {
    HrReject() {
      this.HrRejectMutation(this.HrReject)
    },
    PersonReject() {
      this.PersonRejectMutation(this.PersonReject)
    },
  },
  methods: mapMutations('workers', [
    'HrRejectMutation',
    'PersonRejectMutation',
  ]),
}
</script>
