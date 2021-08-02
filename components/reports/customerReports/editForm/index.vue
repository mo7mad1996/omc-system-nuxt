<template>
  <div class="editForm" @click="close" @submit.prevent="edit">
    <form class="addForm" @click.stop>
      <FormHead formTitle="تعديل بيانات عميل" />
      <hr />

      <fieldset>
        <legend>بيانات اساسيه</legend>
        <div class="input_group">
          <div class="input_field">
            <label for="init_date">تاريخ تسجيل العميل</label>
            <input id="init_date" type="date" v-model="company.init_date" />
          </div>
          <div class="input_field">
            <label for="company_name">اسم العميل</label>
            <input
              id="company_name"
              type="text"
              v-model="company.company_name"
            />
          </div>
          <div class="input_field">
            <label for="company_type">نوع القطاع الصناعي</label>
            <select id="company_type" v-model="company.company_type">
              <option
                v-for="type in typies"
                :key="type + '1'"
                :value="type"
                v-text="type"
              />
            </select>
            <input type="text" class="d-none" v-model="company.company_type" />
          </div>
        </div>
      </fieldset>
      <hr />

      <fieldset>
        <legend>العنوان</legend>
        <div class="input_group">
          <div class="input_field">
            <label for="city">المدينه</label>
            <select id="city" v-model="company.city">
              <option
                v-for="c in company_cities"
                :value="c"
                v-text="c"
                :key="c + '1'"
              ></option>
            </select>

            <input type="text" class="d-none" v-model="company.city" />
          </div>
          <div class="input_field">
            <label for="area">المنطقه</label>
            <select id="area" v-model="company.area">
              <option v-for="z in zones" :value="z" :key="z + 'z'" v-text="z" />
            </select>
            <input type="text" class="d-none" v-model="company.area" />
          </div>
        </div>
      </fieldset>
      <hr />

      <fieldset>
        <legend>المسؤول</legend>
        <div class="input_group">
          <div class="input_field">
            <label for="responsible_name">اسم المسؤول</label>
            <input
              id="responsible_name"
              type="text"
              v-model="company.responsible_name"
            />
          </div>
          <div class="input_field">
            <label for="job">الوظيفه</label>
            <select id="job" v-model="company.job">
              <option
                :value="job"
                :key="job + 'job'"
                v-text="job"
                v-for="job in jobs"
              />
            </select>
            <input type="text" class="d-none" v-model="company.job" />
          </div>
          <div class="input_field">
            <label for="phone">رقم التليفون</label>
            <input id="phone" type="tel" v-model="company.phone" />
          </div>
          <div class="input_field">
            <label for="email">الايميل</label>
            <input id="email" type="text" v-model="company.email" />
          </div>
          <div class="input_field">
            <label for="service_type">نوع الخدمه المطلوبه</label>
            <select id="service_type" v-model="company.service_type">
              <option
                :value="ser"
                v-text="ser"
                :key="ser + 'ser'"
                v-for="ser in service"
              />
            </select>
            <input type="text" class="d-none" v-model="company.service_type" />
          </div>
        </div>
      </fieldset>
      <hr />

      <fieldset>
        <legend>نتيجه (1)</legend>
        <div class="input_group">
          <div class="input_field">
            <label for="res1_called">تم الاتصال</label>
            <div class="squaredThree">
              <input
                type="checkbox"
                id="res1_called"
                v-model="company.res1_called"
              />
              <label for="res1_called"></label>
            </div>
          </div>
          <div class="input_field">
            <label for="res1_offer">طلب عرض</label>
            <div class="squaredThree">
              <input
                type="checkbox"
                id="res1_offer"
                v-model="company.res1_offer"
              />
              <label for="res1_offer"></label>
            </div>
          </div>
          <div class="input_field">
            <label for="res1_vist">طلب زياره</label>
            <div class="squaredThree">
              <input
                type="checkbox"
                id="res1_vist"
                v-model="company.res1_vist"
              />
              <label for="res1_vist"></label>
            </div>
          </div>
          <div class="input_field">
            <label for="next_continue_date">تاريخ المتابعه المستقبليه</label>
            <input
              id="next_continue_date"
              type="date"
              v-model="company.next_continue_date"
            />
          </div>
        </div>
      </fieldset>
      <hr />

      <fieldset>
        <legend>نتيجه (2)</legend>
        <div class="input_group">
          <div class="input_field">
            <label for="res2_sent">تم ارسال العرض</label>
            <div class="squaredThree">
              <input
                type="checkbox"
                id="res2_sent"
                v-model="company.res2_sent"
              />
              <label for="res2_sent"></label>
            </div>
          </div>
          <div class="input_field">
            <label for="res2_vist">تم الزياره</label>
            <div class="squaredThree">
              <input
                type="checkbox"
                id="res2_vist"
                v-model="company.res2_vist"
              />
              <label for="res2_vist"></label>
            </div>
          </div>
          <div class="input_field">
            <label for="res2_reject">تم رفض العرض</label>
            <div class="squaredThree">
              <input
                type="checkbox"
                id="res2_reject"
                v-model="company.res2_reject"
              />
              <label for="res2_reject"></label>
            </div>
          </div>
          <div class="input_field">
            <label for="res2_accept">تم قبول العرض</label>
            <div class="squaredThree">
              <input
                type="checkbox"
                id="res2_accept"
                v-model="company.res2_accept"
              />
              <label for="res2_accept"></label>
            </div>
          </div>
        </div>
      </fieldset>
      <hr />

      <fieldset>
        <legend>ملاحظات</legend>
        <div class="input_group">
          <div class="input_field">
            <label for="nots">ملاحظات</label>
            <input id="nots" type="text" v-model="company.nots" />
          </div>
          <div class="input_field">
            <label for="LastCallDate">تاريخ اخر اتصال</label>
            <input
              id="LastCallDate"
              type="date"
              v-model="company.LastCallDate"
            />
          </div>
        </div>
      </fieldset>
      <hr />

      <div class="buttons noPrint">
        <button type="submit">إضافه</button>
        <button type="reset" @click="close">إلغاء</button>
      </div>
    </form>

    <Msg :msg="msg" />
  </div>
</template>

<script>
// vuex
import { mapGetters } from 'vuex'

// components
import FormHead from '~/components/baseForms/addWrkersForm/formHead'
import Msg from '~/components/baseForms/msg'

export default {
  components: {
    FormHead,
    Msg,
  },

  name: 'EditCustomerForm',
  props: ['id', 'n'],
  data() {
    return {
      company: {},
      msg: { Active: false, Status: false, Text: '' },
    }
  },
  mounted() {
    this.$axios.$get('customers/' + this.id).then((res) => (this.company = res))
  },
  methods: {
    close() {
      this.$emit('close')
    },
    edit() {
      this.$axios
        .$patch('customers/' + this.id, this.company)
        .then((res) => {
          this.msg = {
            Active: true,
            Status: true,
            Text: 'تم التعديل بنجاح',
          }
          this.$emit('done', res)
          this.close()
        })
        .catch(() => {
          this.msg = {
            Active: true,
            Status: false,
            Text: 'مشكله في الاتصال',
          }
        })
        .finally(() => setTimeout(() => (this.msg.Active = false), 3000))
    },
  },
  computed: mapGetters([
    'typies',
    'company_cities',
    'zones',
    'jobs',
    'service',
  ]),
}
</script>
