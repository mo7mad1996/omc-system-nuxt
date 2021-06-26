<template>
  <form class="addForm" ref="form" @submit.prevent="submit">
    <FormHead :formTitle="formTitle" />

    <hr />
    <!-- form body -->
    <slot />

    <!-- Form Actions -->
    <Buttons />
  </form>
</template>

<script>
// vuex
import { mapActions } from 'vuex'

// components
import Buttons from '~/components/baseForms/addWrkersForm/Buttons'
import FormHead from '~/components/baseForms/addWrkersForm/formHead'

export default {
  name: 'AddWrkersForm',
  props: ['formTitle'],
  methods: {
    ...mapActions('workers', ['addWorkers']),
    submit() {
      this.addWorkers(this.$refs.form)
    },
  },
  components: {
    Buttons,
    FormHead,
  },
}
</script>
