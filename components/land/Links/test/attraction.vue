<template>
  <div class="a">
    قطاع العملاء
    <ul class="nested-menu">
      <li v-for="link in links" :key="link.title">
        <nuxt-link :to="link.to" v-text="link.title" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Attraction',
  data() {
    return {
      links: [
        { title: 'قطاع الصناعات البلاستيكيه والزجاجيه', to: '/attraction' },
        { title: ' قطاع الصناعات الدوائية والمنظفات', to: '/attraction' },
        { title: 'قطاع الصناعات النسيجيه والجلدية', to: '/attraction' },
        { title: 'قطاع صناعات العصائر والالبان', to: '/attraction' },
        { title: 'قطاع الصناعات الغذائية ', to: '/attraction' },
        { title: 'قطاع الصناعات المعدنيه الثقيله', to: '/attraction' },
        { title: 'قطاع الصناعات الكهربيه والهندسيه', to: '/attraction' },
        { title: 'قطاع الصناعات الخشبيه والاثاث', to: '/attraction' },
        { title: 'قطاع صناعة مواد البناء', to: '/attraction' },
        { title: 'قطاع صناعات مستحضرات التجميل والعنايه', to: '/attraction' },
        { title: 'قطاع الصناعات الكميائيه', to: '/attraction' },
        { title: 'قطاع الصناعات الورقيه والكارتون', to: '/attraction' },
        { title: 'قطاع الطباعه والاحبار', to: '/attraction' },
        { title: 'قطاع الملابس', to: '/attraction' },
        { title: 'قطاع المزارع', to: '/attraction' },
        { title: 'قطاع البترول والطاقه', to: '/attraction' },
      ],
    }
  },
}
</script>
