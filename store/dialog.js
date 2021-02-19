export const state = () => ({ // set state
  dialogActive: false,
})

export const getters = { // get state
  getDialogActive: (state) => {
    return state.dialogActive;
  }
}

export const mutations = { // update state
  toggleDialogActive: (state) => {
    state.dialogActive = !state.dialogActive;
  },
}