<template>
  <form ref="form" class="addForm">
    <FormHead formTitle="تصريح خروج" />

    <hr />

    <FormMain />

    <Buttons />
  </form>
</template>

<script>
// components
import FormHead from '~/components/baseForms/addWrkersForm/formHead'
import FormMain from '~/components/hr/exitPermit/form/main/index'
import Buttons from '~/components/baseForms/addWrkersForm/Buttons'

export default {
  name: 'ExitPermitForm',
  components: { FormHead, FormMain, Buttons },
}
</script>
