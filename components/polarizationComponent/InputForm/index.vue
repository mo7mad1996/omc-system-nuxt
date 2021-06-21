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
import { mapActions } from 'vuex'

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
  data() {
    return {
      resData: [
        'تجهيز اوراق',
        'رافض',
        'لم يتم الرد',
        'الهاتف مغلق',
        'غير مناسب للعمل',
        'مقابة مؤهلات',
        'اختبار سائقين',
      ],
      week: [
        'السبت',
        'الاحد',
        'الاثنين',
        'الثلاثاء',
        'الاربعاء',
        'الخميس',
        'الجمعه',
      ],
      cities: [
        'الوادي الجديد',
        'الاسكندرية',
        'الاسماعيلية',
        'اسوان',
        'اسيوط',
        'الاقصر',
        'البحر الاحمر',
        'البحيرة',
        'بني سويف',
        'بورسعيد',
        'جنوب سيناء',
        'شمال سيناء',
        'الجيزة',
        'الدقهليه',
        'دمياط',
        'سوهاج',
        'السويس',
        'الشرقيه',
        'الغربيه',
        'الفيوم',
        'القاهرة',
        'القليوبية',
        'قنا',
        'كفرالشيخ',
        'مطروح',
        'المنوفيه',
        'المنيا',
      ],

      qualifications: [
        'لا يقرا و لا يكتب',
        'بدون مؤهل',
        'محو اميه',
        'اعدادية',
        'دبلوم صنايع',
        'دبلوم تجارة',
        'دبلوم زراعة',
        'طالب',
        'مؤهل عالي',
      ],
    }
  },
  methods: {
    ...mapActions('workers', ['addWorkers']),
    submit() {
      this.addWorkers(this.$refs.form)
    },
  },
}
</script>
