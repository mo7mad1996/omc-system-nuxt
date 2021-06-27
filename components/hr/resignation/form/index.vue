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
  </form>
</template>

<script>
// components
import FormHead from '~/components/baseForms/addWrkersForm/formHead'
import Personal from '~/components/hr/resignation/form/Personal'
import CompanyInfo from '~/components/hr/resignation/form/CompanyInfo'
import Reason from '~/components/hr/resignation/form/Reason'
import Buttons from '~/components/baseForms/addWrkersForm/Buttons'

export default {
  name: 'ResignationForm',
  data() {
    return { form_event: false }
  },
  components: { FormHead, Personal, CompanyInfo, Reason, Buttons },
  methods: {
    submit() {
      this.reset()
    },
    reset() {
      /*
        to reset the data on Form Actions
        by props
      */
      this.form_event = !this.form_event
    },
  },
}
</script>
