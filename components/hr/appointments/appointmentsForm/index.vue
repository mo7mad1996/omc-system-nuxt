<template>
  <form class="addForm">
    <Factory />
    <hr />

    <HrData />
    <hr />

    <PersonalData />
    <hr />

    <Papers />
    <hr />

    <InsurancesAndResignations />

    <Buttons />
  </form>
</template>

<script>
// components
import Factory from '~/components/hr/appointments/appointmentsForm/factory'
import HrData from '~/components/hr/appointments/appointmentsForm/hrData'
import PersonalData from '~/components/hr/appointments/appointmentsForm/personalData'
import Papers from '~/components/hr/appointments/appointmentsForm/papers'
import InsurancesAndResignations from '~/components/hr/appointments/appointmentsForm/insurancesAndResignations'
import Buttons from '~/components/hr/appointments/appointmentsForm/buttons'

export default {
  name: 'AppointmentsForm',
  components: {
    Factory,
    HrData,
    PersonalData,
    Papers,
    InsurancesAndResignations,
    Buttons,
  },
}
</script>
