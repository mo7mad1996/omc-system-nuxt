const start = {
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
}

const state = () => start

const getters = {}

const mutations = {
  cityMutation(state, data) {
    state.city = data
  },
  areaMutation(state, data) {
    state.area = data
  },
  responsible_nameMutation(state, data) {
    state.responsible_name = data
  },
  phoneMutation(state, data) {
    state.phone = data
  },
  emailMutation(state, data) {
    state.email = data
  },
  jobMutation(state, data) {
    state.job = data
  },
  service_typeMutation(state, data) {
    state.service_type = data
  },
  res2_sentMutation(state, data) {
    state.res2_sent = data
  },
  res2_vistMutation(state, data) {
    state.res2_vist = data
  },
  res2_rejectMutation(state, data) {
    state.res2_reject = data
  },
  res2_acceptMutation(state, data) {
    state.res2_accept = data
  },
  next_continue_dateMutation(state, data) {
    state.next_continue_date = data
  },
  res1_vistMutation(state, data) {
    state.res1_vist = data
  },
  res1_offerMutation(state, data) {
    state.res1_offer = data
  },
  res1_calledMutation(state, data) {
    state.res1_called = data
  },
  LastCallDateMutation(state, data) {
    state.LastCallDate = data
  },
  notsMutation(state, data) {
    state.nots = data
  },
  cumpany_nameMutation(state, data) {
    state.cumpany_name = data
  },
  init_dateMutation(state, data) {
    state.init_date = data
  },
  company_typeMutation(state, data) {
    state.company_type = data
  },
}

const actions = {
  addCustomer({ state }, form) {
    console.log(state, form)
    this.$axios
      .$post('customers', state)
      .then((res) => console.log(res))
      .finally(() => form.submit())
  },
}

const store = {
  state,
  getters,
  mutations,
  actions,
}

export default store
