let data = {
  // الاجازه
  vacationRequest: {
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
  infraction: {
    person_name: '', // اسم المخالف
    job: '', // الوظيفه
    branch: '', // الفرع
    infraction_type: '', // نوع المخالفه
    infraction_reason: '', // سبب المخالفه
    by_day: 0, // الخصم باليوم
    by_money: 0, // الخصم بالمال
  },

  // تصريح خروج
  exitpermit: {
    person_name: '', // اسم الشخص
    administration: '', // إدارة
    time: '', // وقت
    reason: '', // سبب
  },

  // إستقاله
  resignation: {
    job: '',
    factory_name: '',
    factory_place: '',
    person_name: '',
    id_card: '',
    city: '',
    resignation_reason: '',
  },
}

const state = () => data

const getters = {}

const mutations = {
  reset({ state }) {
    state = data
  },
}
const actions = {}

for (let b in data) {
  // mutations
  for (let d in data[b]) {
    mutations[b + d + 'Mutation'] = function (state, c) {
      state[b][d] = c
    }
  }

  // actions
  actions['add' + b] = function ({ commit, state }) {
    let subLink = b + 's'
    this.$axios
      .$post(subLink, state[b])
      .then(() => {
        commit('reset')
      })
      .catch((err) => console.log(err))
      .finally()
  }
}

const store = { state, getters, mutations, actions }
export default store
