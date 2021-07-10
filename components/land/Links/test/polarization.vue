<template>
  <div class="a">
    قسم الاستقطاب
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
  computed: mapGetters('user', ['user']),
  name: 'Polarization',
  data: () => ({
    links: [
      {
        title: 'استقطاب عمال بدون مؤهل',
        openOn: ['chairman', 'polarization_employee', 'polarization_manager'],
        to: '/polarization',
      },
      {
        title: 'استقطاب عمال الدبلومات الصناعيه',
        openOn: ['chairman', 'polarization_employee', 'polarization_manager'],
        to: '/polarization',
      },
      {
        title: 'استقطاب عمال الدبلومات التجاريه',
        openOn: ['chairman', 'polarization_employee', 'polarization_manager'],
        to: '/polarization',
      },
      {
        title: 'استقطاب عمال الدبلومات الزراعيه',
        openOn: ['chairman', 'polarization_employee', 'polarization_manager'],
        to: '/polarization',
      },
      {
        title: 'استقطاب السائقين',
        openOn: ['chairman', 'polarization_employee', 'polarization_manager'],
        to: '/polarization',
      },
      {
        title: 'استقطاب المشغلين والفنيين',
        openOn: ['chairman', 'polarization_employee', 'polarization_manager'],
        to: '/polarization',
      },
      {
        title: 'استقطاب المؤهلات العليا والإدارين',
        openOn: ['chairman', 'polarization_employee', 'polarization_manager'],
        to: '/polarization',
      },
      {
        title: 'استقطاب الحرف والهندسيه',
        openOn: ['chairman', 'polarization_employee', 'polarization_manager'],
        to: '/polarization',
      },
    ],
  }),
}
</script>
