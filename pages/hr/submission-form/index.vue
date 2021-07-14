<template>
  <HrAddedForm />
</template>

<script>
// components
import HrAddedForm from '~/components/hr/addedForm/index'

export default {
  head() {
    return {
      title: 'نموزج تقديم ملئ بيانات',
    }
  },
  components: {
    HrAddedForm,
  },
}
</script>
