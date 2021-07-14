<template>
  <div class="col-2">
    <div class="user-img">
      <img src="/home/users/1.jpg" />
    </div>
    <ul class="links">
      <li v-for="(link, n) in list" :key="n">
        <nuxt-link
          :to="
            user && link.openOn.filter((el) => el == user.permission).length
              ? link.to
              : '/'
          "
          :title="link.title"
        >
          <figure>
            <img :src="`/home/settings/${link.img}.png`" :alt="link.title" />
            <figcaption v-text="link.title" />
          </figure>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
// vuex
import { mapGetters } from 'vuex'

export default {
  name: 'Edits',

  computed: mapGetters('user', ['user']),

  data: () => ({
    list: [
      {
        openOn: ['chairman'],
        to: '/add-user',
        title: 'إضافة مستحدمين',
        img: 'user',
      },
      {
        openOn: ['chairman'],
        to: '/',
        title: 'تقرير اسماء الحسابات',
        img: 'report',
      },
      {
        openOn: ['chairman'],
        to: '/',
        title: 'تفريغ البرنامج',
        img: 'lock',
      },
      {
        openOn: ['chairman'],
        to: '/',
        title: 'إضافة مستحدمين',
        img: 'database',
      },
      {
        openOn: ['chairman'],
        to: '/',
        title: 'عن البرنامج',
        img: 'info',
      },
    ],
  }),
}
</script>

<style scoped lang="scss">
.user-img {
  padding: 10px;

  img {
    width: 100%;
  }
}
.links {
  padding: none;
  list-style: none;
  text-align: center;

  li {
    margin-bottom: 20px;
  }
  figure {
    figcaption {
      background: #3d6dc7;
      box-shadow: inset 0 -4px 4px #333;
      padding: 5px 10px;
      border-radius: 5px;
    }
    img {
      height: 40px;
      margin-bottom: 10px;
    }
  }
}
</style>
