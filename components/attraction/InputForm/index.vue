<template>
  <form class="addForm" @submit.prevent="submit" @reset.prevent="reset">
    <FormHead formTitle="نموزج إضافه عميل" />
    <hr />

    <BaseData :typies="typies" :form_event="form_event" />

    <hr />
    <Location
      :zones="zones"
      :cities="company_cities"
      :form_event="form_event"
    />

    <hr />
    <Responsible :service="service" :jobs="jobs" :form_event="form_event" />

    <hr />
    <Res1 :form_event="form_event" />

    <hr />
    <Res2 :form_event="form_event" />

    <hr />
    <Nots :form_event="form_event" />

    <hr />
    <!-- added by -->
    <!-- location -->

    <Buttons />

    <Msg />
  </form>
</template>

<script>
// vuex
import { mapActions, mapGetters } from 'vuex'

// components
import FormHead from '~/components/baseForms/addWrkersForm/formHead'
import Buttons from '~/components/baseForms/addWrkersForm/Buttons'
import Nots from '~/components/attraction/InputForm/Nots'
import Res2 from '~/components/attraction/InputForm/Res2'
import Res1 from '~/components/attraction/InputForm/Res1'
import Responsible from '~/components/attraction/InputForm/Responsible'
import Location from '~/components/attraction/InputForm/Location'
import BaseData from '~/components/attraction/InputForm/BaseData'
import Msg from '~/components/attraction/InputForm/msg'

export default {
  name: 'InputForm',
  components: {
    FormHead,
    Buttons,
    Nots,
    Res2,
    Res1,
    Responsible,
    Location,
    BaseData,
    Msg,
  },
  data() {
    return {
      form_event: false, // to reset the form when Action
    }
  },
  methods: {
    ...mapActions('customers', ['addCustomer']),

    submit() {
      this.addCustomer()
      this.reset()
    },
    reset() {
      this.form_event = !this.form_event // to reset the form values
    },
  },
  computed: mapGetters(['company_cities']),
}
</script>
