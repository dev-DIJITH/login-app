export const GET_NAME_DATA = 'name_data'
export const SET_NAME_DATA = 'set_name_data'
export const ACTION_LOGIN = 'login'
export default {
  namespaced: true,
  state: {
    user: null
  },
  getters: {
    [GET_NAME_DATA] (state) {
      return state.user
    }
  },
  actions: {
    [ACTION_LOGIN] ({state, commit}, loginData) {
      console.log(loginData.email);
      commit(state, loginData.email)
    }
  },
  mutations: {
    [SET_NAME_DATA] (state, data) {
      state.user = data
    }
  }
}
