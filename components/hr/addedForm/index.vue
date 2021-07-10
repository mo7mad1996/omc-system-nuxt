<template>
  <AddWrkersForm formTitle="قسم نموذج تقديم">
    <template v-slot:default="slotProps">
      <Personal :form_event="slotProps.form_event" />
      <hr />
      <Education :form_event="slotProps.form_event" />
      <hr />
      <Experiences :form_event="slotProps.form_event" />
      <hr />
      <Important :form_event="slotProps.form_event" />

      <hr />
      <RecommendOne :form_event="slotProps.form_event" />

      <!-- خاص يإدارة التعاقدات -->
      <Private :form_event="slotProps.form_event" />
    </template>
  </AddWrkersForm>
</template>

<script>
// components
import AddWrkersForm from '~/components/baseForms/addWrkersForm/index'
import Personal from '~/components/hr/addedForm/Personal'
import Education from '~/components/hr/addedForm/Education'
import Important from '~/components/hr/addedForm/Experiences'
import Experiences from '~/components/hr/addedForm/Important'
import RecommendOne from '~/components/hr/addedForm/RecommendOne'
import Private from '~/components/hr/addedForm/private/index'

export default {
  components: {
    AddWrkersForm,
    Personal,
    Education,
    Experiences,
    Important,
    RecommendOne,
    Private,
  },
  name: 'HrAddedForm',
}
</script>
