<template>
  <form
    class="addForm"
    ref="form"
    @submit.prevent="submit"
    @reset.prevent="reset"
  >
    <FormHead formTitle="إستقــاله" />
    <div>السيد الفاضل/ مدير عام مؤسسة عمال مصر</div>
    <center>تحيه طيبه وبعد...</center>

    <Personal :form_event="form_event" />
    <hr />
    <CompanyInfo :form_event="form_event" />

    <hr />
    <Reason :form_event="form_event" />
    <Buttons />

    <Msg />
  </form>
</template>

<script>
// vuex
import { mapActions } from 'vuex'

// components
import FormHead from '~/components/baseForms/addWrkersForm/formHead'
import Personal from '~/components/hr/resignation/form/Personal'
import CompanyInfo from '~/components/hr/resignation/form/CompanyInfo'
import Reason from '~/components/hr/resignation/form/Reason'
import Buttons from '~/components/baseForms/addWrkersForm/Buttons'
import Msg from '~/components/baseForms/hrForms/msg'

export default {
  name: 'ResignationForm',
  components: { FormHead, Personal, CompanyInfo, Reason, Buttons, Msg },

  data() {
    return { form_event: false }
  },

  methods: {
    ...mapActions('hr', ['addResignation']),
    submit() {
      this.addResignation()
      this.reset()
    },
    reset() {
      this.form_event = !this.form_event
    },
  },
}
</script>
