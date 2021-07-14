<template>
  <AddWrkersForm formTitle="نموزج استقطاب عمال">
    <template v-slot:default="slotProps">
      <Time :week="week" :form_event="slotProps.form_event" />

      <hr />
      <Personal
        :form_event="slotProps.form_event"
        :cities="cities"
        :qualifications="qualifications"
      />

      <hr />
      <BasicsData :form_event="slotProps.form_event" :resData="resData" />

      <hr />
      <Continue1 :form_event="slotProps.form_event" :resData="resData" />

      <hr />
      <Continue2 :form_event="slotProps.form_event" :resData="resData" />

      <hr />
      <Continue3 :form_event="slotProps.form_event" :resData="resData" />

      <hr />
      <Place :week="week" />
      <!-- added By -->
      <!-- Get Url -->
    </template>
  </AddWrkersForm>
</template>

<script>
// vuex
import { mapGetters } from 'vuex'

// components
import AddWrkersForm from '~/components/baseForms/addWrkersForm/index'
import Time from '~/components/polarizationComponent/InputForm/Time'
import BasicsData from '~/components/polarizationComponent/InputForm/BasicsData'
import Personal from '~/components/polarizationComponent/InputForm/Personal'
import Continue1 from '~/components/polarizationComponent/InputForm/Continue1'
import Continue2 from '~/components/polarizationComponent/InputForm/Continue2'
import Continue3 from '~/components/polarizationComponent/InputForm/Continue3'
import Place from '~/components/polarizationComponent/InputForm/Place'

export default {
  name: 'InputForm',
  components: {
    AddWrkersForm,
    Time,
    BasicsData,
    Personal,
    Continue1,
    Continue2,
    Continue3,
    Place,
  },
  computed: mapGetters(['resData', 'week', 'cities', 'qualifications']),
}
</script>
