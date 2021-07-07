const data = {
  user: {},
}
const state = () => data

const getters = {
  user: (state) => state.user,
}
const mutations = {
  setUser(state, user) {
    state.user = user
  },
}
const actions = {}

const store = { state, getters, mutations, actions }
export default store
