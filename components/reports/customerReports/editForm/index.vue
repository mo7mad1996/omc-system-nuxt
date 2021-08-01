<template>
  <div>
    <form data-v-314f53c6="" class="addForm">
      <FormHead formTitle="تعديل بيانات عميل" />
      <hr />

      <fieldset>
        <legend>بيانات اساسيه</legend>
        <div class="input_group">
          <div class="input_field">
            <label for="init_date">تاريخ تسجيل العميل</label>
            <input id="init_date" type="date" />
          </div>
          <div class="input_field">
            <label for="cumpany_name">اسم العميل</label>
            <input id="cumpany_name" type="text" />
          </div>
          <div class="input_field">
            <label for="company_type">نوع القطاع الصناعي</label>
            <select id="company_type">
              <option value="بلاستيك">بلاستيك</option>
              <option value="دوائي">دوائي</option>
              <option value="طباعة و تغليف">طباعة و تغليف</option>
              <option value="غذائي">غذائي</option>
              <option value="كهرباء و الكترونيات">كهرباء و الكترونيات</option>
              <option value="مخازن و لوجيستيات">مخازن و لوجيستيات</option>
              <option value="مزارع">مزارع</option>
              <option value="معدنية ومواد بناء">معدنية ومواد بناء</option>
              <option value="ورقي و كرتون">ورقي و كرتون</option>
              <option value="سيارات">سيارات</option>
              <option value="اخرى">اخرى</option>
            </select>
            <input type="text" class="d-none" />
          </div>
        </div>
      </fieldset>
      <hr />

      <fieldset>
        <legend>العنوان</legend>
        <div class="input_group">
          <div class="input_field">
            <label for="city">المدينه</label>
            <select id="city">
              <option value="الاسكندرية">الاسكندرية</option>
              <option value="الاسماعيلية">الاسماعيلية</option>
              <option value="السادات">السادات</option>
              <option value="السادس من أكتوبر">السادس من أكتوبر</option>
              <option value="العاشر">العاشر</option>
              <option value="العبور">العبور</option>
              <option value="العين السخنة">العين السخنة</option>
              <option value="الفيوم">الفيوم</option>
              <option value="أبورواش">أبورواش</option>
              <option value="بني سويف">بني سويف</option>
              <option value="اخرى">اخرى</option>
            </select>
            <input type="text" class="d-none" />
          </div>
          <div class="input_field">
            <label for="area">المنطقه</label>
            <select id="area">
              <option value="الاولى">الاولى</option>
              <option value="الثانية">الثانية</option>
              <option value="الثالثة">الثالثة</option>
              <option value="الرابعة">الرابعة</option>
              <option value="الخامسة">الخامسة</option>
              <option value="السادسة">السادسة</option>
              <option value="مجمع">مجمع</option>
              <option value="اخرى">اخرى</option>
            </select>
            <input type="text" class="d-none" />
          </div>
        </div>
      </fieldset>
      <hr />

      <fieldset>
        <legend>المسؤول</legend>
        <div class="input_group">
          <div class="input_field">
            <label for="responsible_name">اسم المسؤول</label>
            <input id="responsible_name" type="text" />
          </div>
          <div class="input_field">
            <label for="job">الوظيفه</label>
            <select id="job">
              <option value="HR">HR</option>
              <option value="رئيس مجلس إدارة">رئيس مجلس إدارة</option>
              <option value="مدير انتاج">مدير انتاج</option>
              <option value="مدير عام">مدير عام</option>
              <option value="مدير تنفيذي">مدير تنفيذي</option>
              <option value="مدير إداري">مدير إداري</option>
              <option value="مدير جودة">مدير جودة</option>
              <option value="مدير مالي">مدير مالي</option>
              <option value="مدير مبيعات">مدير مبيعات</option>
              <option value="مدير مشتريات">مدير مشتريات</option>
              <option value="اخرى">اخرى</option>
            </select>
            <input type="text" class="d-none" />
          </div>
          <div class="input_field">
            <label for="phone">رقم التليفون</label>
            <input id="phone" type="tel" />
          </div>
          <div class="input_field">
            <label for="email">الايميل</label> <input id="email" type="text" />
          </div>
          <div class="input_field">
            <label for="service_type">نوع الخدمه المطلوبه</label>
            <select id="service_type">
              <option value="يونيفورم">يونيفورم</option>
              <option value="تشغيل عمال">تشغيل عمال</option>
              <option value="مستلزمات طبية">مستلزمات طبية</option>
              <option value="إنشاءات صناعية">إنشاءات صناعية</option>
              <option value="تعبئة وتغليف">تعبئة وتغليف</option>
              <option value="الاستيراد وتصدير">الاستيراد وتصدير</option>
              <option value="اخرى">اخرى</option>
            </select>
            <input type="text" class="d-none" />
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
              <input type="checkbox" id="res1_called" />
              <label for="res1_called"></label>
            </div>
          </div>
          <div class="input_field">
            <label for="res1_offer">طلب عرض</label>
            <div class="squaredThree">
              <input type="checkbox" id="res1_offer" />
              <label for="res1_offer"></label>
            </div>
          </div>
          <div class="input_field">
            <label for="res1_vist">طلب زياره</label>
            <div class="squaredThree">
              <input type="checkbox" id="res1_vist" />
              <label for="res1_vist"></label>
            </div>
          </div>
          <div class="input_field">
            <label for="next_continue_date">تاريخ المتابعه المستقبليه</label>
            <input id="next_continue_date" type="date" />
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
              <input type="checkbox" id="res2_sent" />
              <label for="res2_sent"></label>
            </div>
          </div>
          <div class="input_field">
            <label for="res2_vist">تم الزياره</label>
            <div class="squaredThree">
              <input type="checkbox" id="res2_vist" />
              <label for="res2_vist"></label>
            </div>
          </div>
          <div class="input_field">
            <label for="res2_reject">تم رفض العرض</label>
            <div class="squaredThree">
              <input type="checkbox" id="res2_reject" />
              <label for="res2_reject"></label>
            </div>
          </div>
          <div class="input_field">
            <label for="res2_accept">تم قبول العرض</label>
            <div class="squaredThree">
              <input type="checkbox" id="res2_accept" />
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
            <label for="nots">ملاحظات</label> <input id="nots" type="text" />
          </div>
          <div class="input_field">
            <label for="LastCallDate">تاريخ اخر اتصال</label>
            <input id="LastCallDate" type="date" />
          </div>
        </div>
      </fieldset>
      <hr />

      <div class="buttons noPrint">
        <button type="submit">إضافه</button>
        <button type="reset">إلغاء</button>
      </div>
    </form>

    <Msg />
  </div>
</template>

<script>
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
    }
  },
  mounted() {
    this.$axios.$get('customers/' + this.id).then((res) => (this.company = res))
  },
}
</script>
