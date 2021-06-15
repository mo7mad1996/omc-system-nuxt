<template>
  <form class="addWorkers">
    <fieldset>
      <legend>الميعاد</legend>
      <div class="input_group">
        <div class="input_field">
          <label for="the_day">يوم</label>

          <select id="the_day" name="the_day">
            <option value="1">السبت</option>
            <option value="2">الاحد</option>
            <option value="3">الاثنين</option>
            <option value="4">الثلاثاء</option>
            <option value="5">الاربعاء</option>
            <option value="6">الخميس</option>
            <option value="0">الجمعه</option>
          </select>
        </div>

        <div class="input_field">
          <label for="registr_date">تاريخ تسجيل العامل</label>

          <input name="registr_date" id="registr_date" type="date" />
        </div>
      </div>
    </fieldset>

    <hr />

    <fieldset>
      <legend>البيانات الشخصيه</legend>
      <div class="input_group">
        <div class="input_field">
          <label for="person_name">اسم العامل</label>

          <input name="person_name" id="person_name" type="text" />
        </div>

        <div class="input_field">
          <label for="qualification">المؤهل</label>

          <select id="qualification" name="qualification">
            <option value="1">لا يقرا و لا يكتب</option>
            <option value="2">بدون مؤهل</option>
            <option value="3">اعدادية</option>
            <option value="4">دبلوم صنايع</option>
            <option value="5">دبلوم تجارة</option>
            <option value="6">محو اميه</option>
            <option value="0">دبلوم زراعة</option>
            <option value="7">طالب</option>
            <option value="8">مؤهل عالي</option>
          </select>
        </div>

        <div class="input_field">
          <label for="phone">رقم الهاتف المحمول [11 رقم] </label>

          <input name="phone" id="phone" type="tel" pattern="[0-9]{11}" />
        </div>

        <div class="input_field">
          <label for="city">محافظه</label>
          <select id="city" name="city">
            <option value="1">الاسكندرية</option>
            <option value="2">الاسماعيلية</option>
            <option value="3">اسوان</option>
            <option value="4">اسيوط</option>
            <option value="5">الاقصر</option>
            <option value="6">البحر الاحمر</option>
            <option value="7">البحيرة</option>
            <option value="8">بني سويف</option>
            <option value="9">بورسعيد</option>
            <option value="10">جنوب سيناء</option>
            <option value="11">الجيزة</option>
            <option value="12">الدقهليه</option>
            <option value="13">دمياط</option>
            <option value="14">سوهاج</option>
            <option value="15">السويس</option>
            <option value="16">الشرقيه</option>
            <option value="17">شمال سيناء</option>
            <option value="18">الغربيه</option>
            <option value="19">الفيوم</option>
            <option value="20">القاهرة</option>
            <option value="21">القليوبية</option>
            <option value="22">قنا</option>
            <option value="23">كفرالشيخ</option>
            <option value="24">مطروح</option>
            <option value="25">المنوفيه</option>
            <option value="26">المنيا</option>
            <option value="0">الوادي الجديد</option>
          </select>
        </div>

        <div class="input_field">
          <label for="age">السن</label>
          <input name="age" id="age" type="number" value="21" />
        </div>

        <div class="input_field">
          <label for="job_title">المهنه او الحرفه</label>
          <input name="job_title" id="job_title" type="text" />
        </div>
      </div>
    </fieldset>

    <hr />

    <fieldset>
      <legend>بيانات اساسيه</legend>
      <div class="input_group">
        <div class="input_field">
          <label for="result">النتيجه</label>

          <select name="result" id="result">
            <option value="1">تجهيز اوراق</option>
            <option value="2">رافض</option>
            <option value="3">لم يتم الرد</option>
            <option value="4">الهاتف مغلق</option>
            <option value="5">غير مناسب للعمل</option>
            <option value="6">مقابة مؤهلات</option>
            <option value="0">اختبار سائقين</option>
          </select>
        </div>

        <div class="input_field">
          <label for="nots">ملاحظات</label>
          <input id="nots" name="nots" />
        </div>

        <div class="input_field">
          <label for="next_continue_date">تاريخ المتابعه المستقبليه</label>
          <input
            id="next_continue_date"
            name="next_continue_date"
            type="date"
          />
        </div>

        <div class="input_field">
          <label for="final_call">تاريخ اخر اتصال</label>
          <input id="final_call" name="final_call" type="date" />
        </div>

        <div class="input_field">
          <label for="get_from">مصدر المكالمه</label>
          <input name="get_from" id="get_from" type="text" />
        </div>
      </div>
    </fieldset>

    <hr />

    <fieldset>
      <legend>متابعه 1</legend>

      <div class="input_group">
        <div class="input_field">
          <label for="continue1_date">تاريخ المتابعه</label>
          <input type="date" id="continue1_date" name="continue1_date" />
        </div>

        <div class="input_field">
          <label for="continue1">النتيجه</label>

          <select name="continue1" id="continue1">
            <option value="1">تجهيز اوراق</option>
            <option value="2">رافض</option>
            <option value="3">لم يتم الرد</option>
            <option value="4">الهاتف مغلق</option>
            <option value="5">غير مناسب للعمل</option>
            <option value="6">مقابة مؤهلات</option>
            <option value="7">غير مناسب للعمل</option>
            <option value="0">اختبار سائقين</option>
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
          <input type="date" id="continue2_date" name="continue2_date" />
        </div>

        <div class="input_field">
          <label for="continue2">النتيجه</label>

          <select name="continue2" id="continue2">
            <option value="1">تجهيز اوراق</option>
            <option value="2">رافض</option>
            <option value="3">لم يتم الرد</option>
            <option value="4">الهاتف مغلق</option>
            <option value="5">غير مناسب للعمل</option>
            <option value="6">مقابة مؤهلات</option>
            <option value="7">غير مناسب للعمل</option>
            <option value="0">اختبار سائقين</option>
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
          <input type="date" id="continue3_date" name="continue3_date" />
        </div>

        <div class="input_field">
          <label for="continue3">النتيجه</label>

          <select name="continue3" id="continue3">
            <option value="1">تجهيز اوراق</option>
            <option value="2">رافض</option>
            <option value="3">لم يتم الرد</option>
            <option value="4">الهاتف مغلق</option>
            <option value="5">غير مناسب للعمل</option>
            <option value="6">مقابة مؤهلات</option>
            <option value="7">غير مناسب للعمل</option>
            <option value="0">اختبار سائقين</option>
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
          <input name="factory" id="factory" />
        </div>
      </div>
    </fieldset>

    <input type="hidden" name="added_by" value="2" />
    <input
      type="hidden"
      name="location"
      id="location"
      value="http://localhost/laborRecruitmentManager/"
    />

    <div class="buttons">
      <button type="submit">إضافه</button>
      <button type="reset">إلغاء</button>
    </div>
  </form>
</template>

<style lang="scss" scoped>
.addWorkers {
  background-color: #e4dff0;
  margin: 10px 40px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 10px 20px #999;
  box-shadow: 0px 10px 20px #999;

  fieldset {
    margin: 0 15px;
    border: 1px solid #a4a5a8;
    border-radius: 10px;

    legend {
      width: auto;
      font-size: 1.2rem;
      float: unset;
      margin: 0 20px;
      line-height: 1.2rem;
      padding: 10px;
      color: #656a83;
    }
  }

  .input_group {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    color: #de0124;

    .input_field {
      padding: 10px;
      width: 30%;

      select,
      input:not([type='checkbox']) {
        padding: 5px 8px;
        display: block;
        width: 100%;
        border-radius: 5px;
        border: 2px solid #bda3ff;
        background-color: #f5f1ff;
        color: #5b4fa0;
      }

      label {
        display: block;
        margin-bottom: 10px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
      }

      select {
        color: #4d4677;
        appearance: none;
      }
    }
  }

  .buttons {
    display: flex;
    gap: 10px;
    padding: 10px;
    padding-bottom: 10px;
    padding-bottom: 3rem;
    flex-flow: row-reverse;

    button {
      color: #9486b8;
      background-color: #ffffff;
      padding: 5px 20px;
      border: none;
      border-radius: 5px;

      &[type='submit'] {
        background-color: #8c71cf;
        color: #fff;
      }
    }
  }
}
</style>
