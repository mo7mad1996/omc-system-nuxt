const start = {
  companyData: {
    city: '',
    area: '',
    responsible_name: '',
    phone: '',
    email: '',
    job: '',
    service_type: '',
    res2_sent: false,
    res2_vist: false,
    res2_reject: false,
    res2_accept: false,
    next_continue_date: '',
    res1_vist: false,
    res1_offer: false,
    res1_called: false,
    LastCallDate: '',
    nots: '',
    init_date: '',
    cumpany_name: '',
    company_type: '',
  },
}

const state = () => start

const getters = {}

let mutations = {}
for (let i in start.personData) {
  mutations[i + 'Mutation'] = function (state, data) {
    state.companyData[i] = data
  }
}

// to reset the data
mutations.reset = function (state) {
  state.companyData = start.companyData
}

const actions = {
  addCustomer({ state }, form) {
    this.$axios
      .$post('customers', state)
      .then((res) => {
        console.log(res)
      })
      .finally(() => {
        commit('Reset')
        form.submit()
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
