/*
 * this constante start made to,
 * reset state after every form submit
 */
const start = {
  personInfo: {
    id: null,
    person_name: '',
    age: 21,
    phone: '',
    id_card: '',
    city: '',
    job_title: '',
    qualification: '',
    education: '',

    home: '',
    somke: false,
    army: '',
    drivingLicense: '',
    whatsApp: '',

    the_day: '',
    registr_date: '',
    nots: '',
    result: '',
    final_call: '',
    get_from: '',

    next_continue_date: '',
    continue1: '',
    continue1_date: '',
    continue2: '',
    continue2_date: '',
    continue3: '',
    continue3_date: '',

    factory: '',
    added_by: '',

    // HR
    HrReject: '',
    PersonReject: '',

    look: true,
    talk: true,
    body: true,
    drugs: false,
    mind: true,

    history_work: '',
    last_place: '',
    why_left_last_job: '',

    companyHome: false,
    useBus: false,
    rideBus: false,
  },
}

const state = () => start

const getters = {}

const mutations = {
  resultMutation(state, data) {
    state.personInfo.result = data
  },

  notsMutation(state, data) {
    state.personInfo.nots = data
  },

  next_continue_dateMutation(state, data) {
    state.personInfo.next_continue_date = data
  },

  final_callMutation(state, data) {
    state.personInfo.final_callm = data
  },

  get_fromMutation(state, data) {
    state.personInfo.get_from = data
  },

  registr_dateMutation(state, data) {
    state.personInfo.registr_date = data
  },

  the_dayMutation(state, data) {
    state.personInfo.the_day = data
  },
  continue1Mutation(state, data) {
    state.personInfo.continue1 = data
  },
  continue1_dateMutation(state, data) {
    state.personInfo.continue1_date = data
  },
  continue2Mutation(state, data) {
    state.personInfo.continue2 = data
  },
  continue2_dateMutation(state, data) {
    state.personInfo.continue2_date = data
  },
  continue3Mutation(state, data) {
    state.personInfo.continue3 = data
  },
  continue3_dateMutation(state, data) {
    state.personInfo.continue3_date = data
  },

  factoryMutation(state, data) {
    state.personInfo.factory = data
  },

  person_nameMutation(state, data) {
    state.personInfo.person_name = data
  },

  qualificationMutation(state, data) {
    state.personInfo.qualification = data
  },

  phoneMutation(state, data) {
    state.personInfo.phone = data
  },

  cityMutation(state, data) {
    state.personInfo.city = data
  },

  ageMutation(state, data) {
    state.personInfo.age = data
  },

  job_titleMutation(state, data) {
    state.personInfo.job_title = data
  },

  id_cardMutation(state, data) {
    state.personInfo.id_card = data
  },

  added_byMutation(state, data) {
    state.personInfo.added_by = data
  },

  // HR mutations
  HrRejectMutation(state, data) {
    state.personInfo.HrReject = data
  },
  PersonRejectMutation(state, data) {
    state.personInfo.PersonReject = data
  },

  lookMutation(state, data) {
    state.personInfo.look = data
  },
  talkMutation(state, data) {
    state.personInfo.talk = data
  },
  bodyMutation(state, data) {
    state.personInfo.body = data
  },
  drugsMutation(state, data) {
    state.personInfo.drugs = data
  },
  mindMutation(state, data) {
    state.personInfo.mind = data
  },
  educationMutation(state, data) {
    state.personInfo.education = data
  },
  history_workMutation(state, data) {
    state.personInfo.history_work = data
  },
  last_placeMutation(state, data) {
    state.personInfo.last_place = data
  },
  why_left_last_jobMutation(state, data) {
    state.personInfo.why_left_last_job = data
  },

  companyHomeMutation(state, data) {
    state.personInfo.companyHome = data
  },
  useBusMutation(state, data) {
    state.personInfo.useBus = data
  },
  rideBusMutation(state, data) {
    state.personInfo.rideBus = data
  },
  homeMutation(state, data) {
    state.personInfo.home = data
  },
  somkeMutation(state, data) {
    state.personInfo.somke = data
  },
  armyMutation(state, data) {
    state.personInfo.army = data
  },
  drivingLicenseMutation(state, data) {
    state.personInfo.drivingLicense = data
  },
  whatsAppMutation(state, data) {
    state.personInfo.whatsApp = data
  },

  // to reset the data
  Reset(state) {
    console.log('in reset')
    state.personInfo = start.personInfo
    console.log('Done')
  },
}

export const actions = {
  addWorkers({ commit, state }, form) {
    this.$axios
      .$post('workers', Object.assign({}, state.personInfo))
      .then((res) => console.log(res, ctx))
      .catch((err) => console.log('an Error', err.stateu))
      .finally((_) => {
        commit('Reset')
        // form.submit()
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
