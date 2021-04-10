export const state = () => ({
  currentBackground: null,
  userStatus: {
    name: '',
    gender: '',
    age: '',
    city: ''
  }
})

export const mutations = {
  changeBackground(state, newBackground) {
    state.currentBackground = newBackground
  },
  changeUserName(state, newState) {
    state.userStatus.name = newState
  },
  changeUserGender(state, newState) {
    state.userStatus.gender = newState
  },
  changeUserAge(state, newState) {
    state.userStatus.age = newState
  },
  changeUserCity(state, newState) {
    state.userStatus.name = newState
  }
}
