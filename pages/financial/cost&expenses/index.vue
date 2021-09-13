<template>
  <CostAndExpenses />
</template>
<script>
// components
import CostAndExpenses from '~/components/financial/CostAndExpenses/index'

export default {
  components: { CostAndExpenses },
  head: () => ({
    title: 'قسم التكاليف والمصروفات',
  }),
}
</script>
