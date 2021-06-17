<template>
  <fieldset>
    <legend>بيانات اساسيه</legend>
    <div class="input_group">
      <div class="input_field">
        <label for="init_date">تاريخ تسجيل العميل</label>
        <input id="init_date" type="date" v-model="init_date" />
      </div>

      <div class="input_field">
        <label for="cumpany_name">اسم العميل</label>
        <input id="cumpany_name" type="text" v-model="cumpany_name" />
      </div>

      <div class="input_field">
        <label for="company_type">نوع القطاع الصناعي</label>
        <select id="company_type" v-model="company_type" ref="a">
          <option v-for="t in typies" :key="t" :value="t" v-text="t" />
        </select>
        <input type="text" class="d-none" />
      </div>
    </div>
  </fieldset>
</template>

<script>
// vuex
import { mapMutations } from 'vuex'

export default {
  name: 'BaseData',
  props: ['typies'],
  data() {
    return {
      init_date: '',
      cumpany_name: '',
      company_type: '',
    }
  },
  watch: {
    company_type() {
      if (this.company_type == 'اخرى') {
        this.$refs.a.classList.toggle('d-none')
        this.$refs.a.nextElementSibling.classList.toggle('d-none')
        this.$refs.a.nextElementSibling.focus()

        this.company_type = ''
      }
      this.company_typeMutation(this.company_type)
    },
    init_date() {
      this.init_dateMutation(this.init_date)
    },
    cumpany_name() {
      this.cumpany_nameMutation(this.cumpany_name)
    },
  },
  methods: mapMutations('customers', [
    'cumpany_nameMutation',
    'init_dateMutation',
    'company_typeMutation',
  ]),
}
</script>
