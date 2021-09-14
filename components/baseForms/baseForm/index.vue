<template>
  <form class="addForm">
    <FormHead :formTitle="formTitle" />

    <hr />
    <!-- form body -->
    <slot />

    <Buttons />
  </form>
</template>

<script>
// components
import FormHead from '@/components/baseForms/addWrkersForm/formHead.vue'
import Buttons from '@/components/baseForms/addWrkersForm/Buttons.vue'

export default {
  props: ['formTitle'],
  name: 'BaseForm',
  components: {
    FormHead,
    Buttons,
  },
}
</script>
