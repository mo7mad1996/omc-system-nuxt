<template>
  <AddWrkersForm formTitle="قسم نموزج تقديم">
    <Personal />
    <hr />
    <Education />
    <hr />
    <Experiences />
    <hr />
    <Important />

    <hr />
    <RecommendOne />

    <!-- خاص يإدارة التعاقدات -->
    <Private />
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
