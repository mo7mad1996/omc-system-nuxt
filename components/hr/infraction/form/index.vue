<template>
  <form class="addForm" @submit.prevent="submit" @reset.prevent="reset">
    <FormHead formTitle="مخالفه إداريه" />
    <hr />

    <Content :form_event="form_event" />
    <hr />

    <Buttons />
  </form>
</template>

<script>
// vuex
import { mapActions } from 'vuex'

// components
import FormHead from '~/components/baseForms/addWrkersForm/formHead'
import Content from '~/components/hr/infraction/form/content'
import Buttons from '~/components/baseForms/addWrkersForm/Buttons'

export default {
  components: { FormHead, Content, Buttons },
  name: 'InfractionForm',
  data() {
    return { form_event: false }
  },
  methods: {
    ...mapActions('hr', ['addinfraction']),
    submit() {
      this.addinfraction()
      this.reset()
    },
    reset() {
      this.form_event = !this.form_event
    },
  },
}
</script>
