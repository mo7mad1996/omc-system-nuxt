<template>
  <form class="addForm" ref="form">
    <FormHead formTitle="مخالفه إداريه" />
    <hr />

    <Content />
    <hr />
    <Buttons />
  </form>
</template>

<script>
// components
import FormHead from '~/components/baseForms/addWrkersForm/formHead'
import Content from '~/components/hr/infraction/form/content'
import Buttons from '~/components/baseForms/addWrkersForm/Buttons'

export default {
  components: { FormHead, Content, Buttons },
  name: 'InfractionForm',
}
</script>
