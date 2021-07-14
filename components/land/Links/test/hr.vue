<template>
  <div class="a">
    قطاع الHR
    <ul class="nested-menu">
      <li v-for="link in links" :key="link.title" :title="link.title">
        <nuxt-link
          :to="
            user && link.openOn.filter((el) => el == user.permission).length
              ? link.to
              : '/'
          "
          v-text="link.title"
        />
      </li>
    </ul>
  </div>
</template>

<script>
// vuex
import { mapGetters } from 'vuex'

export default {
  name: 'HR',
  computed: mapGetters('user', ['user']),
  data() {
    return {
      links: [
        {
          title: 'قسم نموذج تقديم ملئ بيانات',
          openOn: ['chairman', 'hr_employee', 'hr_manager'],
          to: '/hr/submission-form',
        },
        {
          title: 'قسم التعينات',
          openOn: ['chairman', 'hr_employee', 'hr_manager'],
          to: '/hr/appointments',
        },
        {
          openOn: ['chairman', 'hr_employee', 'hr_manager'],
          title: 'قسم الاستقالات',
          to: '/hr/resignation',
        },
        {
          openOn: ['chairman', 'hr_employee', 'hr_manager'],
          title: 'قسم الاجازات',
          to: '/hr/vacationRequest',
        },
        {
          openOn: ['chairman', 'hr_employee', 'hr_manager'],
          title: 'قسم إخلاء الطرف',
          to: '/hr/getFree',
        },
        {
          openOn: ['chairman', 'hr_employee', 'hr_manager'],
          title: 'قسم تصاريح الخروج',
          to: '/hr/exitpermit',
        },
        {
          openOn: ['chairman', 'hr_employee', 'hr_manager'],
          title: 'قسم حضور وانصراف موظفين',
          to: '/hr/attending-and-leaving',
        },
        {
          openOn: ['chairman', 'hr_employee', 'hr_manager'],
          title: 'قسم المخالفات الادراية',
          to: '/hr/infraction',
        },
        {
          openOn: ['chairman', 'hr_employee', 'hr_manager'],
          title: 'قسم التدريب والتأهيل',
          to: '/',
        },
      ],
    }
  },
}
</script>
