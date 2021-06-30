<template>
  <div class="a">
    القطاع المالي
    <ul class="nested-menu">
      <li><nuxt-link to="/">قسم تنزيل التشغيل اليومي</nuxt-link></li>
      <li><nuxt-link to="/">قسم عمل الفواتير الشهريه</nuxt-link></li>
      <li><nuxt-link to="/">قسم التحصيلات الشهريه</nuxt-link></li>
      <li>
        <div class="a">
          قسم التكاليف والمصروفات

          <ul class="nested-menu">
            <li>
              <nuxt-link to="/">تحصيل نقدي</nuxt-link>
              <nuxt-link to="/">تحصيل شيكات</nuxt-link>
              <nuxt-link to="/">تحصيل تحويلات بنكيه</nuxt-link>
              <nuxt-link to="/">تحصيل أجل</nuxt-link>
              <nuxt-link to="/">تحصيل تحويلات اخرى</nuxt-link>
              <nuxt-link to="/">تقاير التحصيلات</nuxt-link>
            </li>
          </ul>
        </div>
      </li>
      <li><nuxt-link to="/">قسم التكاليف والمصروفات</nuxt-link></li>
      <li><nuxt-link to="/">قسم صرف السلف</nuxt-link></li>
      <li><nuxt-link to="/">قسم فوري أون لاين</nuxt-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Financial',
}
</script>
