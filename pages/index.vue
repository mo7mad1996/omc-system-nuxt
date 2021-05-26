<template>
  <section>
    <h3 class="text-center mx-auto mt-1 mb-4 h1 heading">
      قاعــدة بيانات المجموعة
    </h3>
    <div class="container-fluid">
      <div class="row">
        <!-- links -->
        <div class="col-md-10 row">
          <div class="col-md-4 col-6 my-3" v-for="(link, n) in links" :key="n">
            <nuxt-link :to="link.to" class="home-link">
              <img :src="'/home/links/' + (n + 1) + '.png'" />
              <span v-text="link.title" />
            </nuxt-link>
          </div>
        </div>

        <!-- settings -->
        <div class="col-md-2 text-center settings">
          <nuxt-link v-for="(item, n) in settings" :key="n" :to="item.to">
            <div class="setting-item">
              <img :src="item.img" alt="" />
              <div v-text="item.title" />
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      settings: [
        {
          title: 'تقرير اسماء الحسابات',
          img: '/home/settings/report.png',
          to: '/',
        },
        { title: 'تغير كلمه المرور', img: '/home/settings/lock.png', to: '/' },
        {
          title: 'تفريغ البرنامج',
          img: '/home/settings/database.png',
          to: '/',
        },
        { title: 'عن البرنامج', img: '/home/settings/info.png', to: '/' },
      ],
      links: [
        { to: '/marketing', title: 'قسم التسويق', openTo: [''] },
        { to: '/marketing', title: 'قسم الاستقطاب', openTo: [''] },
        { to: '/customers', title: 'قسم العملاء', openTo: [''] },
        { to: '/HR', title: 'قسم HR', openTo: [''] },
        {
          to: '/marketing',
          title: 'قسم تقارير التشغيل',
          openTo: [''],
        },
        {
          to: '/marketing',
          title: 'قسم الإنشاءات الصناعيه',
          openTo: [''],
        },
        { to: '/marketing', title: 'قسم تنزيل التشغيل', img: '', openTo: [''] },
        {
          to: '/marketing',
          title: 'قسم الفواتير والتحصيلات',
          openTo: [''],
        },
        { to: '/marketing', title: 'قسم المرتبات', openTo: [''] },
        { to: '/marketing', title: 'قسم التكاليف', openTo: [''] },
        { to: '/marketing', title: 'البنوك والتحويلات', openTo: [''] },
        { to: '/marketing', title: 'قسم المشتريات', openTo: [''] },
        { to: '/marketing', title: 'قسم المخازن', openTo: [''] },
        { to: '/marketing', title: 'قسم  السكن', openTo: [''] },
        { to: '/marketing', title: 'قسم النقل', openTo: [''] },
        { to: '/marketing', title: 'قسم التقارير', openTo: [''] },
        { to: '/marketing', title: 'قسم المبيعات', openTo: [''] },
        {
          to: '/marketing',
          title: 'قسم انتاج مصانع OMC',
          openTo: [''],
        },
        {
          to: '/marketing',
          title: 'قسم المكتب الإعلامي',
          openTo: [''],
        },
      ],
    }
  },
  // async asyncData({ $axios }) {
  //   const users = await $axios.$get('/users')
  //   return { users }
  // },
  head() {
    return {
      title: 'الرئيسيه',
    }
  },
}
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
}
.heading {
  background: white;
  border: 0.2em solid;
  padding: 0.2em 1em;
  border-radius: 0.2em;
}

.home-link {
  font-size: 1.5em;
  background: #e7e7e7;
  border: 2px solid;
  padding: 2px 5px;
  margin: 0 3%;
  display: flex;
  align-items: center;
  gap: 4px;
  height: 100%;
}

.home-link img {
  width: 70px;
  height: 70px;
  object-fit: contain;
}

.settings {
  display: flex;
  flex-direction: column;
  gap: 2em;
  /* place-content: end; */
}

.settings .setting-item img {
  height: 70px;
  width: 70px;
  object-fit: contain;
  margin: auto;
  margin-bottom: 10px;
  display: block;
}
.settings .setting-item div {
  background: #6b9fde;
  padding: 5px 10px;
  border-radius: 4px;
  box-shadow: inset 0 -4px 2px #333, inset 0 4px 2px #fff8, 0px 3px 2px #723335;
}
</style>
