<template>
  <div class="editForm" @click="close" @submit.prevent="edit">
    <form @submit.prevent="" class="addForm" @click.stop>
      <FormHead formTitle="تعديل بيانات" />

      <fieldset>
        <legend>الميعاد</legend>
        <div class="input_group">
          <div class="input_field">
            <label for="the_day">يوم</label>
            <select id="the_day" v-model="personData.the_day">
              <option v-for="n in week" :key="n" :value="n" v-text="n" />
            </select>
          </div>
          <div class="input_field">
            <label for="registr_date">تاريخ تسجيل العامل</label>
            <input
              id="registr_date"
              type="date"
              v-model="personData.registr_date"
            />
          </div>
        </div>
      </fieldset>
      <hr />

      <fieldset>
        <legend>البيانات الشخصيه</legend>
        <div class="input_group">
          <div class="input_field">
            <label for="person_name">اسم العامل</label>
            <input
              id="person_name"
              type="text"
              v-model="personData.person_name"
            />
          </div>
          <div class="input_field">
            <label for="qualification">المؤهل</label>
            <select id="qualification" v-model="personData.qualification">
              <option
                v-for="n in qualifications"
                :key="n + 'ee'"
                :value="n"
                v-text="n"
              />
            </select>
          </div>
          <div class="input_field">
            <label for="phone">رقم الهاتف المحمول </label>
            <input id="phone" type="tel" v-model="personData.phone" />
          </div>
          <div class="input_field">
            <label for="city">محافظه</label>
            <select id="city" v-model="personData.city">
              <option
                v-for="n in cities"
                :key="'ss' + n"
                :value="n"
                v-text="n"
              />
            </select>
          </div>
          <div class="input_field">
            <label for="age">السن</label>
            <input id="age" type="number" v-model="personData.age" />
          </div>
          <div class="input_field">
            <label for="job_title">المهنه او الحرفه</label>
            <input id="job_title" type="text" v-model="personData.job_title" />
          </div>
          <div class="input_field">
            <label for="id_card">الرقم القومي</label>
            <input id="id_card" type="text" v-model="personData.id_card" />
          </div>
        </div>
      </fieldset>
      <hr />

      <fieldset>
        <legend>بيانات اساسيه</legend>
        <div class="input_group">
          <div class="input_field">
            <label for="result">النتيجه</label>
            <select v-model="personData.result" id="result">
              <option
                v-for="s in resData"
                :key="s + 'r'"
                :value="s"
                v-text="s"
              />
            </select>
          </div>
          <div class="input_field">
            <label for="nots">ملاحظات</label>
            <input id="nots" v-model="personData.nots" />
          </div>
          <div class="input_field">
            <label for="next_continue_date">تاريخ المتابعه المستقبليه</label>
            <input
              id="next_continue_date"
              type="date"
              v-model="personData.next_continue_date"
            />
          </div>
          <div class="input_field">
            <label for="final_call">تاريخ اخر اتصال</label>
            <input
              id="final_call"
              type="date"
              v-model="personData.final_call"
            />
          </div>
          <div class="input_field">
            <label for="get_from">مصدر المكالمه</label>
            <input id="get_from" type="text" v-model="personData.get_from" />
          </div>
          <div class="input_field">
            <label for="added_by">أضيف بواسطة</label>
            <input
              id="added_by"
              type="text"
              required="required"
              v-model="personData.added_by"
            />
          </div>
        </div>
      </fieldset>
      <hr />

      <fieldset>
        <legend>متابعه 1</legend>
        <div class="input_group">
          <div class="input_field">
            <label for="continue1_date">تاريخ المتابعه</label>
            <input
              type="date"
              id="continue1_date"
              v-model="personData.continue1_date"
            />
          </div>
          <div class="input_field">
            <label for="continue1">النتيجه</label>
            <select id="continue1" v-model="personData.continue1">
              <option
                v-for="n in resData"
                :value="n"
                :key="n + 'l'"
                v-text="n"
              />
            </select>
          </div>
        </div>
      </fieldset>
      <hr />

      <fieldset>
        <legend>متابعه 2</legend>
        <div class="input_group">
          <div class="input_field">
            <label for="continue2_date">تاريخ المتابعه</label>
            <input
              type="date"
              id="continue2_date"
              v-model="personData.continue2_date"
            />
          </div>
          <div class="input_field">
            <label for="continue2">النتيجه</label>
            <select id="continue2" v-model="personData.continue2">
              <option
                v-for="n in resData"
                :value="n"
                :key="n + 'll'"
                v-text="n"
              />
            </select>
          </div>
        </div>
      </fieldset>
      <hr />

      <fieldset>
        <legend>متابعه 3</legend>
        <div class="input_group">
          <div class="input_field">
            <label for="continue3_date">تاريخ المتابعه</label>
            <input
              type="date"
              id="continue3_date"
              v-model="personData.continue3_date"
            />
          </div>
          <div class="input_field">
            <label for="continue3">النتيجه</label>
            <select id="continue3" v-model="personData.continue3">
              <option
                v-for="n in resData"
                :value="n"
                :key="n + 'lll'"
                v-text="n"
              />
            </select>
          </div>
        </div>
      </fieldset>
      <hr />

      <fieldset>
        <legend>المكان</legend>
        <div class="input_group">
          <div class="input_field">
            <label for="factory">المصنع</label>
            <input v-model="personData.factory" id="factory" />
          </div>
        </div>
      </fieldset>

      <div class="buttons noPrint">
        <button type="submit">تعديل</button>
        <button @click="close">إلغاء</button>
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
  name: 'EditForm',
  props: ['id'],
  computed: mapGetters(['resData', 'week', 'cities', 'qualifications']),

  data() {
    return { personData: {}, msg: { Active: false, Status: false, Text: '' } }
  },

  methods: {
    close() {
      this.$emit('close')
    },

    edit() {
      this.$axios
        .$patch('workers/' + this.id, this.personData)
        .then((res) => {
          this.msg = {
            Active: true,
            Status: true,
            Text: 'تم التعديل بنجاح',
          }
          this.close()
          this.$emit('done', res)
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
  mounted() {
    this.$axios.$get('workers/' + this.id).then((res) => {
      this.personData = res
    })
  },
}
</script>

<style lang="scss" scoped>
.editForm {
  overflow: auto;
  position: fixed;
  z-index: 5;
  inset: 0;
  width: 100%;
  height: 100%;
  background: #3e3e3e43;
}
</style>
