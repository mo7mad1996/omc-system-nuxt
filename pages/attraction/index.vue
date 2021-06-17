<template>
  <Attraction />
</template>

<script>
// components
import Attraction from '~/components/attraction/index'

export default {
  head() {
    return {
      title: 'موظف استقطاب عملاء',
    }
  },
  components: {
    Attraction,
  },
}
</script>
