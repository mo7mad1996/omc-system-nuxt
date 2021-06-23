<template>
  <Appointments />
</template>

<script>
// components
import Appointments from '~/components/hr/appointments/index'

export default {
  components: { Appointments },
  head() {
    return {
      title: 'قسم التعينات',
    }
  },
}
</script>
