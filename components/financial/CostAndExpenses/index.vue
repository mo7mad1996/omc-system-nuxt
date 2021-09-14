<template>
  <BaseForm formTitle="تكاليف مجموعة عمال مصر">
    <template>
      <DaySection />
      <Exchange />
      <Recipient />
      <Flattening />
    </template>
  </BaseForm>
</template>

<script>
// components
import BaseForm from '@/components/baseForms/baseForm/index'
import DaySection from '@/components/financial/CostAndExpenses/day/index'
import Exchange from '@/components/financial/CostAndExpenses/exchange/index'
import Recipient from '@/components/financial/CostAndExpenses/recipient/index'
import Flattening from '@/components/financial/CostAndExpenses/flattening/index'

export default {
  name: 'CostAndExpenses',
  components: {
    BaseForm,
    DaySection,
    Exchange,
    Recipient,
    Flattening,
  },
}
</script>
