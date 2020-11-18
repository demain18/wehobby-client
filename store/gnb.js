export const state = () => ({ // set state
  drawer: false,
})

export const getters = { // get state
  getToggleDrawer: (state) => {
    return state.drawer
  }
}

export const mutations = { // update state
  toggleDrawer: (state) => {
    state.drawer = !state.drawer
  },
}