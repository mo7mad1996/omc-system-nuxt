/*
 * this constante start made to,
 * reset state after every form submit
 */
const start = {
  personData: {
    id: null,

    person_name: '', // اسم الشخص
    age: 21, // سن الشخص
    phone: '', // تلفون الشخص
    id_card: '', // الرقم القومي
    city: '', // المحافظه
    home: '', // المدينه اللي ساكن فيها
    job_title: '', // المسمى الوظيفي
    education: '', // التعليم
    qualification: '', // المؤهل
    somke: false, // بيدخن
    army: '', // الجيش
    whatsApp: '', // رقم الواتس
    drivingLicense: '', // رخصه السواقه
    birth_day: '', // تاريخ الميلاد
    visa: '', // فيزا

    the_day: '', // اليوم
    registr_date: '', // تاريخ التسجيل
    nots: '', // ملاحظات
    result: '', // النتيجه
    final_call: '', // اخر اتصال
    get_from: '', // عن طريق ايه وصلنا

    next_continue_date: '', //
    continue1: '', // نتيجه اول متابعه
    continue1_date: '', // تاريخ اول متابعه
    continue2: '', // نتيجه ثان متابعه
    continue2_date: '', // تاريخ ثان متابعه
    continue3: '', // نتيجه ثالث متابعه
    continue3_date: '', // تاريخ ثالث متابعه

    factory: '', // المصنع
    added_by: '', // اضيف بواسطه

    // HR
    HrReject: '', // سبب رفض الموارد البشريه
    PersonReject: '', //  سبب رفض العامل

    look: true, // مظهر العامل
    talk: true, // اسلوب العامل
    body: true, // جسم العامل مع الشغل
    drugs: false, // بيتعاطى مخدرات
    mind: true, // بيفهم ويستوعب

    history_work: '', // اشتغل فين قبل كده
    last_place: '', // اخر مكان كان فين
    why_left_last_job: '', // ليه ساب الشغل اللي فات

    companyHome: false, // هيسكن في سكن الشركه
    useBus: false, // هيستعمل الاتوبيس
    rideBus: false, // هيركبه لو شافه

    shift: '', // الورديه
    join_date: '', // تاريه الالتحاق

    hired_date: '', //
    file_no: '', // رقم الملف
    isWorking: false, // على قيد العمل

    // الاستقاله
    insurance: false, // مؤمن عليه
    resignation_reason: '', // سبب الاستقاله
    resignation_date: '', // تاريخ الاستقاله

    // الاوراق
    qualificationFile: false, // الشهاده العلميه
    armyFile: false, // شهاده الجيش
    criminal_record: false, //
    birth_certificate: false, // اصل الميلاد
    id_card_Copy: false, // صوره البطاقه
    photos: false, // الصور الشخصيه
    business_certificate: false, // كعب عمل
    security_inquiry: false, // فيش
    form111: false, // نموزج 111
  },
  msg: { active: false, status: false, text: '' },
}

const state = () => start

const getters = {
  msg: (state) => state.msg,
}

let mutations = {
  // to reset the data
  reset(state) {
    state.personData = start.personData
  },
  setMsgActive(state, active) {
    state.msg.active = active
  },
  setMsgStatus(state, status) {
    state.msg.status = status
  },
  setMsgTest(state, text) {
    state.msg.text = text
  },
}

for (let i in start.personData) {
  mutations[i + 'Mutation'] = function (state, data) {
    state.personData[i] = data
  }
}

const actions = {
  addWorkers({ commit, state }) {
    this.$axios
      .$post('workers', state.personData)
      .then(() => {
        commit('reset')
        commit('setMsgActive', true)
        commit('setMsgTest', 'تم الاضافه')
        commit('setMsgStatus', true)
      })
      .catch((err) => {
        commit('setMsgActive', true)
        commit('setMsgStatus', false)
        commit('setMsgTest', 'حدث خطأ ما')
        console.log('an Error', err)
      })
      .finally(() => {
        setTimeout(() => commit('setMsgActive', false), 3000)
      })
  },
}

const store = { state, getters, mutations, actions }
export default store
