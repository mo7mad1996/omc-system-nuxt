<template>
  <form class="addForm" ref="form">
    <FormHead formTitle="طلب أجازه" />

    <BaseData />
    <hr />

    <VacationInfo />

    <div class="text-center">ولسيادتكم جزيل الشكر</div>
    <Buttons />
  </form>
</template>

<script>
// components

import BaseData from '~/components/hr/vacationRequest/form/baseData'
import VacationInfo from '~/components/hr/vacationRequest/form/vacationInfo'

import FormHead from '~/components/baseForms/addWrkersForm/formHead'
import Buttons from '~/components/baseForms/addWrkersForm/Buttons'
export default {
  name: 'VacationForm',

  components: { Buttons, FormHead, BaseData, VacationInfo },
}
</script>
