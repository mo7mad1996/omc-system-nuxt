<template>
  <div class="report">
    <h2 class="text-center">تقرير عمال</h2>

    <div class="mb-3 container">
      <label class="form-label">بحث</label>
      <input v-model="search" placeholder="بحث ..." class="form-control" />
    </div>
    <table>
      <thead>
        <th>م</th>
        <th v-for="d in myData" :key="d.code" v-text="d.title" />
        <th>حذف</th>
      </thead>
      <tbody>
        <tr
          v-for="(a, n) in workers.filter((obj) => {
            if (
              Object.values(obj).filter(
                (el) => el.toString().search(search) > -1
              ).length
            ) {
              return obj
            }
          })"
          :key="n"
          @click="edit(a.id, n)"
        >
          <td>{{ n + 1 }}</td>
          <td v-for="s in myData" :key="n + s.title" :title="s.title">
            {{ istrue(a[s.code]) }}
          </td>
          <td>
            <button
              type="button"
              @click.stop="del(a.id)"
              class="btn btn-danger"
            >
              حذف
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <EditForm
      :id="id"
      :n="n"
      @done="done($event)"
      @close="openEdit = false"
      v-if="openEdit"
    />
  </div>
</template>

<script>
// components
import EditForm from '~/components/reports/workersReports/editForm/index'

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
      { title: 'تليفون', code: 'phone' },
      { title: 'محافظه', code: 'city' },
      { title: 'السن', code: 'age' },
      { title: 'المهنه او الحرفه', code: 'job_title' },
      { title: 'الرقم القومي', code: 'id_card' },
      { title: 'النتيجه', code: 'result' },
      { title: 'مصدر المكالمه', code: 'get_from' },
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
    openEdit: false,
    id: null,
    n: null,
    search: '',
  }),
  methods: {
    istrue(d) {
      if (d === true) {
        return '<span class=done />'
      }
      if (d === false) {
        return ''
      }
      return d
    },

    // edit methods
    edit(id, n) {
      this.id = id
      this.n = n
      this.openEdit = true
    },

    done($event) {
      // this.workers[n] = $event
      this.workers.forEach((el, n) => {
        if (el.id === $event.id) {
          this.workers[n] = $event
        }
      })
    },

    del(id) {
      this.$axios.$delete('workers/' + id).then(() => {
        this.workers.forEach((el, n) => {
          if (el.id === id) {
            this.workers.splice(n, 1)
          }
        })
      })
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

  components: { EditForm },
}
</script>
