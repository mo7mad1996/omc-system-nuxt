const start = {
  result: '',
  nots: '',
  next_continue_date: '',
  final_call: '',
  get_from: '',
  registr_date: '',
  the_day: '',
  continue1: '',
  continue1_date: '',
  continue2: '',
  continue2_date: '',
  continue3: '',
  continue3_date: '',
  factory: '',
  person_name: '',
  qualification: '',
  phone: '',
  city: '',
  age: '',
  job_title: '',
}
const state = () => start

const getters = {}

const mutations = {
  resultMutation(state, data) {
    state.result = data
  },

  notsMutation(state, data) {
    state.nots = data
  },

  next_continue_dateMutation(state, data) {
    state.next_continue_date = data
  },

  final_callMutation(state, data) {
    state.final_callm = data
  },

  get_fromMutation(state, data) {
    state.get_from = data
  },

  registr_dateMutation(state, data) {
    state.registr_date = data
  },

  the_dayMutation(state, data) {
    state.the_day = data
  },
  continue1Mutation(state, data) {
    state.continue1 = data
  },
  continue1_dateMutation(state, data) {
    state.continue1_date = data
  },
  continue2Mutation(state, data) {
    state.continue2 = data
  },
  continue2_dateMutation(state, data) {
    state.continue2_date = data
  },
  continue3Mutation(state, data) {
    state.continue3 = data
  },
  continue3_dateMutation(state, data) {
    state.continue3_date = data
  },

  factoryMutation(state, data) {
    state.factory = data
  },

  person_nameMutation(state, data) {
    state.person_name = data
  },

  qualificationMutation(state, data) {
    state.qualification = data
  },

  phoneMutation(state, data) {
    state.phone = data
  },

  cityMutation(state, data) {
    state.city = data
  },

  ageMutation(state, data) {
    state.age = data
  },

  job_titleMutation(state, data) {
    state.job_title = data
  },
  Reset(state) {
    Object.assign(state, start)
  },
}

export const actions = {
  addWorkers({ commit, state }, form) {
    this.$axios
      .$post('workers', Object.assign({}, state))
      .then((res) => console.log(res, ctx))
      .finally((_) => {
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
