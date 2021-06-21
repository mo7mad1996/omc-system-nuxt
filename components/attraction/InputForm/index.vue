<template>
  <form class="addForm my-4" ref="form" @submit.prevent="submit">
    <BaseData :typies="typies" :cities="cities" />

    <hr />
    <Location :zones="zones" :cities="cities" />

    <hr />
    <Responsible :service="service" :jobs="jobs" />

    <hr />
    <Res1 />

    <hr />
    <Res2 />

    <hr />
    <Nots />

    <hr />
    <!-- added by -->
    <!-- location -->

    <Buttons />
  </form>
</template>

<script>
// vuex
import { mapActions } from 'vuex'

// components
import Buttons from '~/components/attraction/InputForm/Buttons'
import Nots from '~/components/attraction/InputForm/Nots'
import Res2 from '~/components/attraction/InputForm/Res2'
import Res1 from '~/components/attraction/InputForm/Res1'
import Responsible from '~/components/attraction/InputForm/Responsible'
import Location from '~/components/attraction/InputForm/Location'
import BaseData from '~/components/attraction/InputForm/BaseData'

export default {
  name: 'InputForm',
  components: { Buttons, Nots, Res2, Res1, Responsible, Location, BaseData },
  data() {
    return {
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
      this.addCustomer(this.$refs.form)
    },
  },
}
</script>
