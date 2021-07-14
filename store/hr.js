let data = {
  forms: {
    // الاجازه
    VacationRequest: {
      vacation_date: '', // تاريخ الاجازه
      Person_name: '', // اسم الشخص
      factory: '', // اسم المصنع
      branch: '', // منطقة
      job: '', // وظيفة الموظف
      start_date: '', // تبدأ من
      end_date: '', // تنتهي في
      vacation_reason: '', // سبب الاجازه
    },

    // مخالفه اداريه
    Infraction: {
      person_name: '', // اسم المخالف
      job: '', // الوظيفه
      branch: '', // الفرع
      infraction_type: '', // نوع المخالفه
      infraction_reason: '', // سبب المخالفه
      by_day: 0, // الخصم باليوم
      by_money: 0, // الخصم بالمال
    },

    // تصريح خروج
    Exitpermit: {
      person_name: '', // اسم الشخص
      administration: '', // إدارة
      time: '', // وقت
      reason: '', // سبب
    },

    // إستقاله
    Resignation: {
      job: '',
      factory_name: '',
      factory_place: '',
      person_name: '',
      id_card: '',
      city: '',
      resignation_reason: '',
    },

    // إخلاء طرف
    GetFree: {
      date: '',
      person_name: '',
      branch: '',
      city: '',
      job: '',
    },

    Attending: {
      list: [],
      date: new Date().toDateString(),
    },
  },

  // change values when form submit
  // to make notfications
  msg: { Active: false, Status: false, Text: '' },
}

const state = () => data

const getters = {
  msg: (state) => state.msg,
}

const mutations = {
  reset(state) {
    state.forms = data.forms
  },
}
const actions = {}

for (let b in data.forms) {
  // mutations
  for (let d in data.forms[b]) {
    mutations[b + d + 'Mutation'] = function (state, c) {
      state.forms[b][d] = c
    }
  }

  // actions
  actions['add' + b] = function ({ commit, state }) {
    let subLink = b + 's'
    this.$axios
      .$post(subLink, state.forms[b])
      .then(() => {
        commit('setMsgActive', true)
        commit('setMsgStatus', true)
        commit('setMsgText', 'تم بنجاح')
        commit('reset')
      })
      .catch((err) => {
        commit('setMsgActive', true)
        commit('setMsgStatus', false)
        commit('setMsgText', 'حدث خطأ')
        console.log(err)
      })
      .finally(
        setTimeout(function () {
          commit('setMsgActive', false)
        }, 3000)
      )
  }
}

// msg mutations
for (let b in data.msg) {
  mutations['setMsg' + b] = function (state, v) {
    state.msg[b] = v
  }
}

mutations.updateAttendingList = function (state, list) {
  state.forms.Attending.list = Object.assign([], list)
}
actions.updateAttendingList = function ({ commit, state }, list) {
  commit('updateAttendingList', list)

  this.$axios
    .$get('Attendings?date=' + state.forms.Attending.date)
    .then((res) => {
      this.$axios.$patch('Attendings/' + res[0].id, {
        list: state.forms.Attending.list,
      })
    })
}

const store = { state, getters, mutations, actions }
export default store
