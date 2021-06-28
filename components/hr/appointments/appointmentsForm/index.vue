<template>
  <AddWrkersForm formTitle="قسم التعينات">
    <template v-slot:default="slotProps">
      <Factory :form_event="slotProps.form_event" />
      <hr />

      <HrData :form_event="slotProps.form_event" />
      <hr />

      <PersonalData :form_event="slotProps.form_event" />
      <hr />

      <Papers :form_event="slotProps.form_event" />
      <hr />

      <IandR :form_event="slotProps.form_event" />
    </template>
  </AddWrkersForm>
</template>

<script>
// components
import AddWrkersForm from '~/components/baseForms/addWrkersForm/index'
import Factory from '~/components/hr/appointments/appointmentsForm/factory'
import HrData from '~/components/hr/appointments/appointmentsForm/hrData'
import PersonalData from '~/components/hr/appointments/appointmentsForm/personalData'
import Papers from '~/components/hr/appointments/appointmentsForm/papers'
import IandR from '~/components/hr/appointments/appointmentsForm/IandR'

export default {
  name: 'AppointmentsForm',
  components: {
    AddWrkersForm,
    Factory,
    HrData,
    PersonalData,
    Papers,
    IandR,
  },
}
</script>
