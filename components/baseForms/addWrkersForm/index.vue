<template>
  <form class="addForm" ref="form" @submit.prevent="submit">
    <!-- form Head -->
    <section class="row text-center formHead">
      <div class="col-4">
        <div>
          <h2>مؤسسة عمال مصر</h2>
          <p>لإدارة وتشغيل المنشئات الصناعيه وإدارة المشروعات</p>
        </div>
      </div>
      <div class="col-4">
        <h2 class="title">{{ formTitle }}</h2>
      </div>
      <div class="col-4">
        <div class="logo">
          <img src="/header/logo.png" alt="" />
        </div>
      </div>
    </section>
    <hr />

    <!-- form body -->
    <slot />

    <!-- Form Actions -->
    <Buttons />
  </form>
</template>

<script>
// vuex
import { mapActions } from 'vuex'

// components
import Buttons from '~/components/baseForms/addWrkersForm/Buttons'

export default {
  name: 'AddWrkersForm',
  props: ['formTitle'],
  methods: {
    ...mapActions('workers', ['addWorkers']),
    submit() {
      this.addWorkers(this.$refs.form)
    },
  },
  components: {
    Buttons,
  },
}
</script>

<style lang="scss" scoped>
.formHead {
  padding: 10px;

  .col-4 {
    display: grid;
    place-items: center;

    .title {
      padding: 3px 10px;
      background: rgba(103, 190, 212, 0.26);
    }

    .logo img {
      width: 200px;
      max-width: 100%;
      margin: auto;
      background: #fefefe;
      padding: 10px;
    }
  }
}
</style>
