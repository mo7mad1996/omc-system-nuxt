<template>
  <form class="addForm" @submit.prevent="submit" @reset.prevent="reset">
    <FormHead formTitle="تصريح خروج" />

    <hr />

    <FormMain :form_event="form_event" />

    <Buttons />
  </form>
</template>

<script>
// vuex
import { mapActions } from 'vuex'

// components
import FormHead from '~/components/baseForms/addWrkersForm/formHead'
import FormMain from '~/components/hr/exitPermit/form/main/index'
import Buttons from '~/components/baseForms/addWrkersForm/Buttons'

export default {
  name: 'ExitPermitForm',
  components: { FormHead, FormMain, Buttons },

  data() {
    return { form_event: false }
  },

  methods: {
    ...mapActions('hr', ['addexitpermit']),
    submit() {
      this.addexitpermit()
      this.reset()
    },
    reset() {
      this.form_event = !this.form_event
    },
  },
}
</script>
