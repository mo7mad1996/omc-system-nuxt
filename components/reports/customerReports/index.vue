<template>
  <div class="report">
    <h2 class="text-center">تقرير عملاء</h2>
    <table>
      <thead>
        <th>م</th>
        <th v-for="d in myData" :key="d.code" v-text="d.title" />
      </thead>
      <tbody>
        <tr v-for="(a, n) in customers" :key="n" @click="edit(a.id, n)">
          <td>{{ n + 1 }}</td>
          <td
            v-for="s in myData"
            :key="n + s.title"
            :title="s.title"
            v-html="istrue(a[s.code])"
          />
        </tr>
      </tbody>
    </table>

    <EditCustomerForm
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
import EditCustomerForm from '~/components/reports/customerReports/editForm/index'

export default {
  name: 'CustomerReports',
  props: ['user'],
  data: () => ({
    myData: [
      {
        title: 'رقم تسجيله',
        code: 'id',
      },
      {
        title: 'اسم العميل',
        code: 'company_name',
      },
      {
        title: 'نوع القطاع الصناعي',
        code: 'company_type',
      },
      {
        title: 'تاريخ تسجيل العميل',
        code: 'init_date',
      },
      {
        title: 'المدينه',
        code: 'city',
      },
      {
        title: 'المنطقه',
        code: 'area',
      },
      {
        title: 'اسم المسؤول',
        code: 'responsible_name',
      },
      {
        title: 'الوظيفه',
        code: 'job',
      },
      {
        title: 'رقم التليفون',
        code: 'phone',
      },
      {
        title: 'الايميل',
        code: 'email',
      },
      {
        title: 'نوع الخدمه المطلوبه',
        code: 'service_type',
      },
      {
        title: 'تم الاتصال',
        code: 'res1_called',
      },
      {
        title: 'طلب عرض',
        code: 'res1_offer',
      },
      {
        title: 'طلب زياره',
        code: 'res1_vist',
      },
      {
        title: 'تاريخ المتابعه المستقبليه',
        code: 'next_continue_date',
      },
      {
        title: 'تم ارسال العرض',
        code: 'res2_sent',
      },
      {
        title: 'تم الزياره',
        code: 'res2_vist',
      },
      {
        title: 'تم رفض العرض',
        code: 'res2_reject',
      },
      {
        title: 'تم قبول العرض',
        code: 'res2_accept',
      },
      {
        title: 'ملاحظات',
        code: 'nots',
      },
      {
        title: 'تاريخ اخر اتصال',
        code: 'LastCallDate',
      },
      {
        title: 'أضيف بواسطه',
        code: 'added_by',
      },
    ],
    customers: [],

    openEdit: false,
    id: null,
    n: null,
  }),
  methods: {
    istrue(d) {
      if (d === true) {
        return '<b class=done > </b>'
      }
      if (d === false) {
        return ''
      }
      return d
    },

    edit(id, n) {
      this.id = id
      this.n = n
      this.openEdit = true
    },

    done($event) {
      // this.workers[n] = $event

      console.log($event.id)
      this.customers.forEach((el, n) => {
        console.log(el.id)
        if (el.id === $event.id) {
          this.customers[n] = $event
        }
      })
    },
  },
  beforeMount() {
    switch (this.user.permission) {
      case 'chairman':
        this.$axios.$get('customers').then((res) => (this.customers = res))
        break

      case 'attraction_manager':
        this.$axios.$get('customers').then((res) => (this.customers = res))
        break

      case 'attraction_employee':
        this.$axios
          .$get('customers?added_by=' + this.user.name)
          .then((res) => (this.customers = res))
        break
    }
  },
  components: { EditCustomerForm },
}
</script>

<style lang="scss">
b.done {
  display: block;
  margin: auto;
  border: 2px solid #0000;
  width: 15px;
  height: 7px;
  transform: rotate(-45deg);
  position: relative;
  border-left-color: #333;
  border-bottom-color: #333;
}
</style>
