<template>
  <form class="addForm" @submit.prevent="submit" @reset.prevent="reset">
    <FormHead formTitle="نموذج استقطاب عملاء" />

    <BaseData :typies="typies" :form_event="form_event" />

    <hr />
    <Location :zones="zones" :cities="cities" :form_event="form_event" />

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
import { mapActions } from 'vuex'

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
      typies: [
        'بلاستيك',
        'دوائي',
        'طباعة و تغليف',
        'غذائي',
        'كهرباء و الكترونيات',
        'مخازن و لوجيستيات',
        'مزارع',
        'معدنية ومواد بناء',
        'ورقي و كرتون',
        'سيارات',
        'اخرى',
      ],
      zones: [
        'الاولى',
        'الثانية',
        'الثالثة',
        'الرابعة',
        'الخامسة',
        'السادسة',
        'مجمع',
        'اخرى',
      ],
      cities: [
        'الاسكندرية',
        'الاسماعيلية',
        'السادات',
        'السادس من أكتوبر',
        'العاشر',
        'العبور',
        'العين السخنة',
        'الفيوم',
        'أبورواش',
        'بني سويف',
        'اخرى',
      ],
      service: [
        'يونيفورم',
        'تشغيل عمال',
        'مستلزمات طبية',
        'إنشاءات صناعية',
        'تعبئة وتغليف',
        'الاستيراد وتصدير',
        'اخرى',
      ],
      jobs: [
        'HR',
        'رئيس مجلس إدارة',
        'مدير انتاج',
        'مدير عام',
        'مدير تنفيذي',
        'مدير إداري',
        'مدير جودة',
        'مدير مالي',
        'مدير مبيعات',
        'مدير مشتريات',
        'اخرى',
      ],
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
}
</script>
