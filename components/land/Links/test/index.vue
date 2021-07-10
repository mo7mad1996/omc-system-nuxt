<template>
  <div class="col-3">
    <Polarization />

    <Attraction />

    <HR />

    <Operating />

    <div class="a">
      قطاع النقل
      <ul class="nested-menu">
        <li><nuxt-link to="/">قسم تسجيل حركه النقل</nuxt-link></li>
        <li><nuxt-link to="/">طلب سيارة لمأموريه</nuxt-link></li>
        <li><nuxt-link to="/">طلب شراء سياره</nuxt-link></li>
        <li><nuxt-link to="/">طلب بيع سياره</nuxt-link></li>
        <li><nuxt-link to="/">استخراج التقارير</nuxt-link></li>
      </ul>
    </div>

    <div class="a">
      قطاع السكن

      <ul class="nested-menu">
        <li><nuxt-link to="/">بيان تسجيل الوحدات السكنيه</nuxt-link></li>
        <li><nuxt-link to="/">بيان محتويات وحدة سكيه</nuxt-link></li>
        <li><nuxt-link to="/">تسجيل افراد وحده سكنيه</nuxt-link></li>
        <li><nuxt-link to="/">بيان طلب ايجار وحدة سكنيه</nuxt-link></li>
        <li><nuxt-link to="/">استخراج التقارير</nuxt-link></li>
      </ul>
    </div>

    <Financial />

    <div class="a">
      قطاع الاتصال والدورة المستنديه

      <ul class="nested-menu">
        <li><nuxt-link to="/">بيان صرف دورة مستندية</nuxt-link></li>
        <li><nuxt-link to="/">بيان استلام دورة مستندية</nuxt-link></li>
        <li><nuxt-link to="/">بيان طلب دورة مستندية</nuxt-link></li>
        <li><nuxt-link to="/">بيان طلب جهاز كمبيوتر</nuxt-link></li>
        <li><nuxt-link to="/">بيان صرف جهاز كمبيوتر</nuxt-link></li>
        <li><nuxt-link to="/">بيان طلب تليفون</nuxt-link></li>
        <li><nuxt-link to="/">بيان صرف تليفون</nuxt-link></li>
        <li><nuxt-link to="/">بيان طلب خط تليفون</nuxt-link></li>
        <li><nuxt-link to="/">بيان صرف خط تليفون</nuxt-link></li>
        <li><nuxt-link to="/">بيان رصيد</nuxt-link></li>
        <li><nuxt-link to="/">بيان تقديم شكوى عطل جهاز</nuxt-link></li>
        <li><nuxt-link to="/">بيان تقديم شكوى انقطاع انترنت</nuxt-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
// components
import Polarization from '~/components/land/Links/test/polarization'
import Attraction from '~/components/land/Links/test/attraction'
import HR from '~/components/land/Links/test/hr'
import Operating from '~/components/land/Links/test/operating'
import Financial from '~/components/land/Links/test/financial'

export default {
  name: 'First',
  components: { Polarization, Attraction, HR, Operating, Financial },
}
</script>
