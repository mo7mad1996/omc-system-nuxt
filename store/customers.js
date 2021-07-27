const data = {
  companyData: {
    id: null,
    cumpany_name: '',
    company_type: '',
    init_date: '',
    city: '',
    area: '',
    responsible_name: '',
    job: '',
    phone: '',
    email: '',
    service_type: '',
    res1_called: false,
    res1_offer: false,
    res1_vist: false,
    next_continue_date: '',
    res2_sent: false,
    res2_vist: false,
    res2_reject: false,
    res2_accept: false,
    nots: '',
    LastCallDate: '',
    added_by: '',
  },
  msg: { Active: false, Status: false, Text: '' },
}

const state = () => data

const getters = {
  msg: (state) => state.msg,
  companyData: (state) => state.companyData,
}

let mutations = {}

// the mutations

// companyData mutations
for (let i in data.companyData) {
  mutations[i + 'Mutation'] = function (state, data) {
    state.companyData[i] = data
  }
}

// msg mutations
for (let b in data.msg) {
  mutations['setMsg' + b] = function (state, v) {
    state.msg[b] = v
  }
}

// to reset the data
mutations.reset = function (state) {
  state.companyData = data.companyData
  state.companyData.added_by = JSON.parse(sessionStorage.getItem('user')).name
}

const actions = {
  addCustomer({ state, commit }) {
    this.$axios
      .$post('customers', state.companyData)
      .then(() => {
        commit('reset')
        commit('setMsgActive', true)
        commit('setMsgText', 'تم الاضافه')
        commit('setMsgStatus', true)
      })
      .catch((err) => {
        commit('setMsgActive', true)
        commit('setMsgStatus', false)
        commit('setMsgText', 'حدث خطأ ما')
        console.log('an Error', err)
      })
      .finally(() => {
        setTimeout(() => commit('setMsgActive', false), 3000)
      })
  },
}

const store = {
  state,
  getters,
  mutations,
  actions,
}

export default store
