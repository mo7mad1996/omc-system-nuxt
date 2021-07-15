<template>
  <div class="report">
    <h2 class="text-center">تقرير عمال</h2>
    <table>
      <thead>
        <th>م</th>
        <th v-for="d in myData" :key="d.code" v-text="d.title" />
      </thead>
      <tbody>
        <tr v-for="(a, n) in workers" :key="n">
          <td>{{ n + 1 }}</td>
          <td v-for="s in myData" :key="n + s.title" :title="s.title">
            {{ istrue(a[s.code]) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'WorkersReports',
  props: ['user'],
  data: () => ({
    myData: [
      { title: 'رقم التسجيل', code: 'id' },
      { title: 'يوم', code: 'the_day' },
      { title: 'تاريخ التسجيل', code: 'registr_date' },
      { title: 'اسم العامل', code: 'person_name' },
      { title: 'المؤهل', code: 'qualification' },
      { title: 'تلفون', code: 'phone' },
      { title: 'محافظه', code: 'city' },
      { title: 'السن', code: 'age' },
      { title: 'المهنه او الحرفه', code: 'job_title' },
      { title: 'الرقم القومي', code: 'id_card' },
      { title: 'النتيجه', code: 'result' },
      { title: 'ملاحظات', code: 'nots' },
      { title: 'تاريخ المتابعه 1', code: 'continue1_date' },
      { title: 'نتيجه متابعه 1', code: 'continue1' },
      { title: 'تاريخ المتابعه 2', code: 'continue2_date' },
      { title: 'نتيجه متابعه 2', code: 'continue2' },
      { title: 'تاريخ المتابعه 3', code: 'continue3_date' },
      { title: 'نتيجه متابعه 3', code: 'continue3' },
      { title: 'المصنع', code: 'factory' },
      { title: 'أضيف بواسطة', code: 'added_by' },
    ],
    workers: [],
  }),
  methods: {
    istrue(d) {
      if (d == 'true') {
        return '<span class=done ></span>'
      }
      if (d == 'false') {
        return ''
      }
      return d
    },
  },
  beforeMount() {
    switch (this.user.permission) {
      case 'chairman':
        this.$axios.$get('workers').then((res) => (this.workers = res))
        break

      case 'polarization_manager':
        this.$axios.$get('workers').then((res) => (this.workers = res))
        break

      case 'polarization_employee':
        this.$axios
          .$get('workers?added_by=' + this.user.name)
          .then((res) => (this.workers = res))
        break
    }
  },
}
</script>
