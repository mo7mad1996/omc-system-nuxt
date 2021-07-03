<template>
  <AttendingAndLeaving />
</template>

<script>
// components
import AttendingAndLeaving from '~/components/hr/attendingAndLeaving/index'

export default {
  head() {
    return {
      title: 'حضور وانصراف الموظفين',
    }
  },
  components: { AttendingAndLeaving },
}
</script>
