<template>
  <div class="a">
    قطاع العملاء
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
  name: 'Attraction',
  computed: mapGetters('user', ['user']),
  data() {
    return {
      links: [
        {
          title: 'قطاع الصناعات البلاستيكيه والزجاجيه',
          openOn: ['chairman', 'attraction_employee', 'attraction_manager'],
          to: '/attraction',
        },
        {
          openOn: ['chairman', 'attraction_employee', 'attraction_manager'],
          title: ' قطاع الصناعات الدوائية والمنظفات',
          to: '/attraction',
        },
        {
          openOn: ['chairman', 'attraction_employee', 'attraction_manager'],
          title: 'قطاع الصناعات النسيجيه والجلدية',
          to: '/attraction',
        },
        {
          openOn: ['chairman', 'attraction_employee', 'attraction_manager'],
          title: 'قطاع صناعات العصائر والالبان',
          to: '/attraction',
        },
        {
          openOn: ['chairman', 'attraction_employee', 'attraction_manager'],
          title: 'قطاع الصناعات الغذائية ',
          to: '/attraction',
        },
        {
          openOn: ['chairman', 'attraction_employee', 'attraction_manager'],
          title: 'قطاع الصناعات المعدنيه الثقيله',
          to: '/attraction',
        },
        {
          openOn: ['chairman', 'attraction_employee', 'attraction_manager'],
          title: 'قطاع الصناعات الكهربيه والهندسيه',
          to: '/attraction',
        },
        {
          openOn: ['chairman', 'attraction_employee', 'attraction_manager'],
          title: 'قطاع الصناعات الخشبيه والاثاث',
          to: '/attraction',
        },
        {
          openOn: ['chairman', 'attraction_employee', 'attraction_manager'],
          title: 'قطاع صناعة مواد البناء',
          to: '/attraction',
        },
        {
          openOn: ['chairman', 'attraction_employee', 'attraction_manager'],
          title: 'قطاع صناعات مستحضرات التجميل والعنايه',
          to: '/attraction',
        },
        {
          openOn: ['chairman', 'attraction_employee', 'attraction_manager'],
          title: 'قطاع الصناعات الكميائيه',
          to: '/attraction',
        },
        {
          openOn: ['chairman', 'attraction_employee', 'attraction_manager'],
          title: 'قطاع الصناعات الورقيه والكارتون',
          to: '/attraction',
        },
        {
          openOn: ['chairman', 'attraction_employee', 'attraction_manager'],
          title: 'قطاع الطباعه والاحبار',
          to: '/attraction',
        },
        {
          openOn: ['chairman', 'attraction_employee', 'attraction_manager'],
          title: 'قطاع الملابس',
          to: '/attraction',
        },
        {
          openOn: ['chairman', 'attraction_employee', 'attraction_manager'],
          title: 'قطاع المزارع',
          to: '/attraction',
        },
        {
          openOn: ['chairman', 'attraction_employee', 'attraction_manager'],
          title: 'قطاع البترول والطاقه',
          to: '/attraction',
        },
      ],
    }
  },
}
</script>
