<template>
  <Resignation />
</template>

<script>
import Resignation from '~/components/hr/resignation/index'

export default {
  components: { Resignation },
  head() {
    return {
      title: 'قسم الاستقالات',
    }
  },
}
</script>
