<template>
  <form class="addForm" @submit.prevent="submit" @reset.prevent="reset">
    <FormHead formTitle="طلب أجازه" />

    <BaseData :form_event="form_event" />
    <hr />

    <VacationInfo :form_event="form_event" />

    <div class="text-center">ولسيادتكم جزيل الشكر</div>
    <Buttons />
  </form>
</template>

<script>
// vuex
import { mapActions } from 'vuex'

// components
import BaseData from '~/components/hr/vacationRequest/form/baseData'
import VacationInfo from '~/components/hr/vacationRequest/form/vacationInfo'

import FormHead from '~/components/baseForms/addWrkersForm/formHead'
import Buttons from '~/components/baseForms/addWrkersForm/Buttons'

export default {
  name: 'VacationForm',

  components: { Buttons, FormHead, BaseData, VacationInfo },
  data() {
    return { form_event: false }
  },

  methods: {
    ...mapActions('hr', ['addvacationRequest']),
    submit() {
      this.addvacationRequest()
      this.reset()
    },
    reset() {
      this.form_event = !this.form_event
    },
  },
}
</script>
