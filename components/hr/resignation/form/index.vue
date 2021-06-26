<template>
  <form class="addForm" ref="form">
    <FormHead formTitle="إستقــاله" />
    <div>السيد الفاضل/ مدير عام مؤسسة عمال مصر</div>
    <center>تحيه طيبه وبعد...</center>

    <Personal />
    <hr />
    <CompanyInfo />

    <hr />
    <Reason />
    <Buttons />
  </form>
</template>

<script>
// components
import FormHead from '~/components/baseForms/addWrkersForm/formHead'
import Personal from '~/components/hr/resignation/form/Personal'
import CompanyInfo from '~/components/hr/resignation/form/CompanyInfo'
import Reason from '~/components/hr/resignation/form/Reason'
import Buttons from '~/components/baseForms/addWrkersForm/Buttons'

export default {
  name: 'ResignationForm',
  components: { FormHead, Personal, CompanyInfo, Reason, Buttons },
}
</script>
