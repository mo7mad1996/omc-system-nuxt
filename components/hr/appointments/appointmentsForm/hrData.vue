<template>
  <fieldset>
    <legend>بيانات خاصه بقطاع الموارد البشريه</legend>
    <div class="input_group">
      <div class="input_field">
        <label for="hired_date">تاريخ التعين</label>
        <input id="hired_date" type="date" v-model="hired_date" />
      </div>

      <div class="input_field">
        <label for="file_no">رقم الملف</label>
        <input id="file_no" type="text" v-model="file_no" />
      </div>

      <div class="input_field">
        <label for="get_from">كودالتسويق</label>
        <input id="get_from" type="text" v-model="get_from" />
      </div>

      <div class="input_field">
        <label>الحالة</label>

        <div class="radio-group">
          <input
            type="radio"
            id="isWorkingTrue"
            :value="true"
            v-model="isWorking"
          />
          <label for="isWorkingTrue" class="mark" />
          <label for="isWorkingTrue">على قيد العمل</label>
          <input
            type="radio"
            id="isWorkingFalse"
            :value="false"
            v-model="isWorking"
          />
          <label for="isWorkingFalse" class="mark" />
          <label for="isWorkingFalse">استقالة</label>
        </div>
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
    get_from: '',
    hired_date: '',
    file_no: '',
    isWorking: false,
  },
  watch = {
    form_event() {
      Object.assign(this, data)
    },
  },
  Mutations = []

for (let d in data) {
  var mutationName =  d + 'Mutation'
  Mutations.push(mutationName)

  watch[d] = function () {
    this[mutationName](this[d])
  }
}

export default {
  name: 'HrData',
  props: ['form_event'],
  data() {
    return Object.assign({}, data)
  },
  watch,
  methods: mapMutations('workers', Mutations),
}
</script>
