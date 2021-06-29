<template>
  <form class="addForm" @submit.prevent="submit" @reset.prevent="reset">
    <FormHead :formTitle="formTitle" />

    <hr />
    <!-- form body -->
    <slot :form_event="form_event" />

    <!-- Form Actions -->
    <Buttons />

    <!-- form status -->
    <Msg />
  </form>
</template>

<script>
// vuex
import { mapActions } from 'vuex'

// components
import Buttons from '~/components/baseForms/addWrkersForm/Buttons'
import FormHead from '~/components/baseForms/addWrkersForm/formHead'
import Msg from '~/components/baseForms/addWrkersForm/msg'

export default {
  name: 'AddWrkersForm',
  props: ['formTitle'],
  methods: {
    ...mapActions('workers', ['addWorkers']),
    submit() {
      this.addWorkers()
      this.reset()
    },
    reset() {
      console.log('reset')
      this.form_event = !this.form_event // to reset the form values
    },
  },
  components: {
    Buttons,
    FormHead,
    Msg,
  },
  data() {
    return {
      form_event: false, // to reset the form when Action
    }
  },
}
</script>
