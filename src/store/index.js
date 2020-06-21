export const state = () => ({
  stages: [],
  user: {
    name: ''
  },
  authenticated: false,
  currentBackground: null
})

export const mutations = {
  saveStages(state, stages) {
    state.stages = stages
  },
  completeStage(state, stageName) {
    const currentIndex = state.stages.findIndex(
      (stage) => stage.title === stageName
    )
    state.stages[currentIndex].isComplete = true
    state.stages[currentIndex + 1].isAvailable = true
  },
  newUser(state, newName) {
    state.user.name = newName
    state.authenticated = true
  },
  changeBackground(state, newBackground) {
    state.currentBackground = newBackground
  }
}
