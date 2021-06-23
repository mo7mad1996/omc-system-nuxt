<template>
  <form class="addForm" @submit.prevent="submit" ref="form">
    <Time :week="week" />

    <hr />
    <Personal :cities="cities" :qualifications="qualifications" />

    <hr />
    <BasicsData :resData="resData" />

    <hr />
    <Continue1 :resData="resData" />

    <hr />
    <Continue2 :resData="resData" />

    <hr />
    <Continue3 :resData="resData" />

    <hr />
    <Place :week="week" />

    <!-- added By -->
    <!-- Get Url -->

    <Buttons />
  </form>
</template>

<script>
// vuex
import { mapActions, mapGetters } from 'vuex'

// components
import Time from '~/components/polarizationComponent/InputForm/Time'
import BasicsData from '~/components/polarizationComponent/InputForm/BasicsData'
import Personal from '~/components/polarizationComponent/InputForm/Personal'
import Continue1 from '~/components/polarizationComponent/InputForm/Continue1'
import Continue2 from '~/components/polarizationComponent/InputForm/Continue2'
import Continue3 from '~/components/polarizationComponent/InputForm/Continue3'
import Place from '~/components/polarizationComponent/InputForm/Place'
import Buttons from '~/components/polarizationComponent/InputForm/Buttons'

export default {
  name: 'InputForm',
  components: {
    Time,
    BasicsData,
    Personal,
    Continue1,
    Continue2,
    Continue3,
    Place,
    Buttons,
  },
  methods: {
    ...mapActions('workers', ['addWorkers']),
    submit() {
      this.addWorkers(this.$refs.form)
    },
  },
  computed: mapGetters(['resData', 'week', 'cities', 'qualifications']),
}
</script>
