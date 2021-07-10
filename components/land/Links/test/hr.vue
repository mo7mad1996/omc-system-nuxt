<template>
  <div class="a">
    قطاع الHR
    <ul class="nested-menu">
      <li v-for="link in links" :key="link.title">
        <nuxt-link :to="link.to" v-text="link.title" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HR',
  data() {
    return {
      links: [
        { title: 'قسم نموذج تقديم ملئ بيانات', to: '/hr/submission-form' },
        { title: 'قسم التعينات', to: '/hr/appointments' },
        { title: 'قسم الاستقالات', to: '/hr/resignation' },
        { title: 'قسم الاجازات', to: '/hr/vacationRequest' },
        { title: 'قسم إخلاء الطرف', to: '/hr/getFree' },
        { title: 'قسم تصاريح الخروج', to: '/hr/exitpermit' },
        { title: 'قسم حضور وانصراف موظفين', to: '/hr/attending-and-leaving' },
        { title: 'قسم المخالفات الادراية', to: '/hr/infraction' },
        { title: 'قسم التدريب والتأهيل', to: '/' },
      ],
    }
  },
}
</script>
