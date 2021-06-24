<template>
  <form class="addForm" @submit.prevent="submit" ref="form">
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
// vuex
import { mapActions } from 'vuex'

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
  methods: {
    ...mapActions('workers', ['addWorkers']),
    submit() {
      this.addWorkers(this.$refs.form)
    },
  },
}
</script>
