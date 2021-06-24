<template>
  <AddWrkersForm formTitle="قسم التعينات">
    <Factory />
    <hr />

    <HrData />
    <hr />

    <PersonalData />
    <hr />

    <Papers />
    <hr />

    <InsurancesAndResignations />
  </AddWrkersForm>
</template>

<script>
// components
import AddWrkersForm from '~/components/baseForms/addWrkersForm/index'
import Factory from '~/components/hr/appointments/appointmentsForm/factory'
import HrData from '~/components/hr/appointments/appointmentsForm/hrData'
import PersonalData from '~/components/hr/appointments/appointmentsForm/personalData'
import Papers from '~/components/hr/appointments/appointmentsForm/papers'
import InsurancesAndResignations from '~/components/hr/appointments/appointmentsForm/insurancesAndResignations'

export default {
  name: 'AppointmentsForm',
  components: {
    AddWrkersForm,
    Factory,
    HrData,
    PersonalData,
    Papers,
    InsurancesAndResignations,
  },
}
</script>
