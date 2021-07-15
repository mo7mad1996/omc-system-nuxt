<template>
  <div class="col-3">
    <div class="a">
      القطاع التصنيعي

      <ul class="nested-menu">
        <li><nuxt-link to="/"> بيان طلب تصنيع منتجات</nuxt-link></li>
        <li><nuxt-link to="/">بيان تسليم منتجات</nuxt-link></li>
        <li><nuxt-link to="/">بيان طلب خامات</nuxt-link></li>
        <li><nuxt-link to="/">بيان طلب مستلزمات انتاج</nuxt-link></li>
        <li><nuxt-link to="/">بيان حالة منتج</nuxt-link></li>
        <li><nuxt-link to="/">بيان طلب مشتريات</nuxt-link></li>
        <li><nuxt-link to="/">بيان تسليم مشتريات</nuxt-link></li>
        <li><nuxt-link to="/">تصريح خروج منتجات</nuxt-link></li>
      </ul>
    </div>

    <div class="a">
      القطاع الإعلامي

      <ul class="nested-menu">
        <li><nuxt-link to="/"> تسجيل مصادر صحفيه</nuxt-link></li>
        <li><nuxt-link to="/"> تقرير عمل يومي</nuxt-link></li>
        <li><nuxt-link to="/"> تقرير خبر للنشر</nuxt-link></li>
        <li><nuxt-link to="/"> طلب اعلان</nuxt-link></li>
      </ul>
    </div>

    <nuxt-link :to="user && user.name ? '/reports' : '/'">
      تقارير عامة
    </nuxt-link>
  </div>
</template>

<script>
// vuex
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters('user', ['user']),
  name: 'Third',
}
</script>
