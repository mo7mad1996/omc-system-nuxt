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
        <input type="text" class="d-none" v-model="company_type" />
      </div>
    </div>
  </fieldset>
</template>

<script>
// vuex
import { mapMutations, mapGetters } from 'vuex'

/*****************************
 *   pure Js
 ****************************/

// to reset the Form when form Actions
var data = {
    init_date: '',
    cumpany_name: '',
    company_type: '',
  },
  watch = {
    form_event() {
      Object.assign(this, data)
    },
  },
  Mutations = ['added_byMutation']

for (let d in data) {
  let mutationName = d + 'Mutation'
  Mutations.push(mutationName)

  watch[d] = function () {
    this[mutationName](this[d])
  }
  watch.added_by = function () {
    this.added_byMutation(this.added_by)
  }
}

watch.company_type = function () {
  if (this.company_type == 'اخرى') {
    this.$refs.a.classList.toggle('d-none')
    this.$refs.a.nextElementSibling.classList.toggle('d-none')
    this.$refs.a.nextElementSibling.focus()

    this.company_type = ''
  }
  this.company_typeMutation(this.company_type)
}

export default {
  computed: mapGetters('user', ['user']),
  name: 'BaseData',
  props: ['typies', 'form_event'],
  mounted() {
    this.added_by = this.user.name
    this.added_byMutation(this.added_by)
  },
  data() {
    return Object.assign({ added_by: '' }, data)
  },
  watch,
  methods: mapMutations('customers', Mutations),
}
</script>
