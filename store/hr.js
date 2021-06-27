let data = {
  // الاجازه
  resignation: {
    id: null,
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
    id: null,
    person_name: '', // اسم المخالف
    job: '', // الوظيفه
    branch: '', // الفرع
    infraction_type: '', // نوع المخالفه
    infraction_reason: '', // سبب المخالفه
    by_day: 0, // الخصم باليوم
    by_money: 0, // الخصم بالمال
  },
}

const state = () => data

const getters = {}

const mutations = {
  reset({ state }) {
    state = data
  },
}

// اجازاه
for (let d in data.resignation) {
  mutations[d + 'Mutation'] = function (state, c) {
    state.resignation[d] = c
  }
}

// مخالفه
for (let d in data.infraction) {
  mutations[d + 'Mutation'] = function (state, c) {
    state.infraction[d] = c
  }
}

const actions = {
  // طلب اجازه
  addResignation({ commit, state }) {
    this.$axios
      .$post('resignations', state.resignation)
      .then(() => {
        commit('reset')
      })
      .catch((err) => console.log(err))
      .finally()
  },
  // مخالفه اداريه
  addinfraction({ commit, state }) {
    this.$axios
      .$post('infractions', state.infraction)
      .then(() => {
        commit('reset')
      })
      .catch((err) => console.log(err))
      .finally()
  },
}

const store = { state, getters, mutations, actions }
export default store
