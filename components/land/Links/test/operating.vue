<template>
  <div class="a">
    قطاع التشغيل
    <ul class="nested-menu">
      <li v-for="link in links" :key="link.title">
        <nuxt-link :to="link.to" v-text="link.title" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Operating',
  data() {
    return {
      links: [
        { title: 'تسجيل حضور العماله اليومية', to: '/' },
        { title: 'طلبات الاجازات', to: '/' },
        { title: 'تقيم العمال', to: '/' },
        { title: 'المخالفات الادراية', to: '/' },
        { title: 'طلبات معاينه مشروع جديد', to: '/' },
        { title: 'تقارير الحضور اليومية', to: '/' },
      ],
    }
  },
}
</script>
