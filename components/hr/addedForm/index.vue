<template>
  <form class="addForm">
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
    <Buttons />
  </form>
</template>

<script>
// components
import Personal from '~/components/hr/addedForm/Personal'
import Education from '~/components/hr/addedForm/Education'
import Important from '~/components/hr/addedForm/Experiences'
import Experiences from '~/components/hr/addedForm/Important'
import RecommendOne from '~/components/hr/addedForm/RecommendOne'
import Private from '~/components/hr/addedForm/private/index'
import Buttons from '~/components/hr/addedForm/Buttons'

export default {
  components: {
    Personal,
    Education,
    Experiences,
    Important,
    RecommendOne,
    Private,
    Buttons,
  },
  name: 'HrAddedForm',
}
</script>
