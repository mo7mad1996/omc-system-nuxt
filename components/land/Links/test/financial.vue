<template>
  <div class="a">
    القطاع المالي
    <ul class="nested-menu">
      <li v-for="link in links" :key="link.title" :title="link.title">
        <div class="a" v-if="link.hasOwnProperty('subLinks')">
          {{ link.title }}
          <ul class="nested-menu">
            <li
              v-for="nested in link.subLinks"
              :key="link.title + nested.title"
            >
              <nuxt-link
                :to="
                  user &&
                  nested.openOn.filter((el) => el == user.permission).length
                    ? nested.to
                    : '/'
                "
                v-text="nested.title"
              />
            </li>
          </ul>
        </div>

        <nuxt-link
          v-else
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
  name: 'Financial',
  computed: mapGetters('user', ['user']),
  data() {
    return {
      links: [
        {
          title: 'قسم تنزيل التشغيل اليومي',
          openOn: ['chairman', 'Financial_Manager'],
          to: '/',
        },
        {
          title: 'قسم عمل الفواتير الشهريه',
          openOn: ['chairman', 'Financial_Manager'],
          to: '/',
        },
        {
          title: 'قسم التحصيلات',
          openOn: ['chairman', 'Financial_Manager'],
          to: '/',
          subLinks: [
            {
              title: 'تحصيل نقدي',
              openOn: ['chairman', 'Financial_Manager'],
              to: '/',
            },
            {
              title: 'تحصيل شيكات',
              openOn: ['chairman', 'Financial_Manager'],
              to: '/',
            },
            {
              title: 'تحصيل تحويلات بنكيه',
              openOn: ['chairman', 'Financial_Manager'],
              to: '/',
            },
            {
              title: 'تحصيل أجل',
              openOn: ['chairman', 'Financial_Manager'],
              to: '/',
            },
            {
              title: 'تحصيل تحويلات اخرى',
              openOn: ['chairman', 'Financial_Manager'],
              to: '/',
            },
            {
              title: 'تقاير التحصيلات',
              openOn: ['chairman', 'Financial_Manager'],
              to: '/',
            },
          ],
        },
        {
          title: 'قسم التكاليف والمصروفات',
          openOn: ['chairman', 'Financial_Manager'],
          to: '/financial/cost&expenses',
        },
        {
          title: 'قسم صرف السلف',
          openOn: ['chairman', 'Financial_Manager'],
          to: '/',
        },
        {
          title: 'قسم فوري أون لاين',
          openOn: ['chairman', 'Financial_Manager'],
          to: '/',
        },
      ],
    }
  },
}
</script>
