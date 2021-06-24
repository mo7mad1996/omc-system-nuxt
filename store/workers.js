/*
 * this constante start made to,
 * reset state after every form submit
 */
const start = {
  personData: {
    id: null,

    person_name: '',
    age: 21,
    phone: '',
    id_card: '',
    city: '',
    home: '',
    job_title: '',
    education: '',
    qualification: '',
    somke: false,
    army: '',
    whatsApp: '',
    drivingLicense: '',
    birth_day: '',
    visa: '',

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

    shift: '',
    join_date: '',

    hired_date: '',
    file_no: '',
    isWorking: false,

    // الاستقاله
    insurance: false,
    resignation_reason: '',
    resignation_date: '',

    // الاوراق
    qualificationFile: false,
    armyFile: false,
    criminal_record: false,
    birth_certificate: false,
    id_card_Copy: false,
    photos: false,
    business_certificate: false,
    security_inquiry: false,
    form111: false,
  },
}

const state = () => start

const getters = {}

let mutations = {}
for (let i in start.personData) {
  mutations[i + 'Mutation'] = function (state, data) {
    state.personData[i] = data
  }
}

// to reset the data
mutations.reset = function (state) {
  state.personData = start.personData
}

const actions = {
  addWorkers({ commit, state }, form) {
    this.$axios
      .$post('workers', Object.assign({}, state.personData))
      .then((res) => console.log(res))
      .catch((err) => console.log('an Error', err))
      .finally((_) => {
        commit('reset')
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
