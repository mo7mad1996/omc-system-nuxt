<template>
  <AddWrkersForm formTitle="إستقــاله">
    <div>السيد الفاضل/ مدير عام مؤسسة عمال مصر</div>
    <center>تحيه طيبه وبعد...</center>

    <Personal />
    <hr />
    <CompanyInfo />

    <hr />
    <Reason />
  </AddWrkersForm>
</template>

<script>
// components
import AddWrkersForm from '~/components/baseForms/addWrkersForm/index'
import Personal from '~/components/hr/resignation/form/Personal'
import CompanyInfo from '~/components/hr/resignation/form/CompanyInfo'
import Reason from '~/components/hr/resignation/form/Reason'

export default {
  name: 'ResignationForm',
  components: { AddWrkersForm, Personal, CompanyInfo, Reason },
}
</script>
