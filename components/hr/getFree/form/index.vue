<template>
  <form class="addForm" @submit.prevent="submit" @reset.prevent="reset">
    <FormHead formTitle="إخلاء طرف" />

    <FormMain />

    <hr />

    <div class="text-center fs-5">
      وقد قام الموظف بتسليم كل المهمات والعهد المسنده إليه في كل الادارات
      المسؤوله عنه
      <br />
      وليس له أي مستحقات ماليه في المؤسسه واستلم جميع اوراقه هذا بناء على توقيع
      الساده مسؤولي الإداره في الاسفل وتوقيعه
    </div>

    <Buttons />

    <Msg />
  </form>
</template>

<script>
import { mapActions } from 'vuex'

// components
import FormMain from '~/components/hr/getFree/form/main'
import FormHead from '~/components/baseForms/addWrkersForm/formHead'
import Buttons from '~/components/baseForms/addWrkersForm/Buttons'
import Msg from '~/components/baseForms/hrForms/msg'

export default {
  name: 'GetFreeForm',
  components: { FormMain, FormHead, Buttons, Msg },
  data() {
    return { form_event: false }
  },

  methods: {
    ...mapActions('hr', ['addGetFree']),
    submit() {
      this.addGetFree()
      this.reset()
    },
    reset() {
      this.form_event = !this.form_event
    },
  },
}
</script>
