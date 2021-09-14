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
          v-for="(a, n) in workers
            .filter((obj) => {
              if (
                Object.values(obj).filter(
                  (el) => el.toString().search(search) > -1
                ).length
              ) {
                return obj
              }
            })
            .reverse()
            .splice(100 * (pageNum - 1), 50)"
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

    <nav
      v-if="workers.length > 100"
      class="d-flex justify-content-center mt-3 gap-2"
    >
      <div class="nav">
        <button @click="pageNum--" :disabled="pageNum < 2" class="minus" />
        <input
          class="text-center"
          type="number"
          v-model="pageNum"
          min="1"
          width="20"
        />
        <button @click="pageNum++" class="plus" />
      </div>
    </nav>

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
    pageNum: 1,
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
      if (confirm('هل انت متأكد من حدف العامل؟')) {
        this.$axios.$delete('workers/' + id).then(() => {
          this.workers.forEach((el, n) => {
            if (el.id === id) {
              this.workers.splice(n, 1)
            }
          })
        })
      }
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

<style lang="scss" scoped>
nav {
  position: relative;

  font-weight: bold;
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    top: -0.5em;
    left: 0;
    display: block;
    height: 2px;
    width: 100%;
    text-align: center;
    background-image: linear-gradient(
      90deg,
      red,
      gold,
      aqua,
      brown,
      blue,
      green,
      red
    );
    animation: anm 3s linear infinite;
  }

  .nav {
    padding: 3px;
    border-radius: 7px;
    box-shadow: 2px 4px 8px rgb(116, 116, 116);
    background: #dfebf9;
    display: flex;
    gap: 4px;

    button,
    input {
      height: 30px;
      width: 30px;
      padding: 4px;
      background: none;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      background: none;
    }
    input {
      width: 70px;
      background: white;
      appearance: none;
      border: 2px solid #bfdbfe;
    }

    button {
      position: relative;

      &:focus,
      &:hover {
        background: rgba(255, 255, 255, 0.6);
      }

      &::after,
      &::before {
        content: '';
        width: 15px;
        height: 3px;
        background: #215f23;
        display: block;
        position: absolute;
        transform-origin: center center;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 4px;
      }

      &.plus::before {
        height: 15px;
        width: 3px;
      }

      &:disabled {
        cursor: no-drop;

        &::after,
        &::before {
          background: #bbb;
        }
      }
    }
  }
}
</style>
