export const state = () => ({
  drawer: false,
  count: null,
})

export const mutations = {
  toggleDrawer: (state) => {
    state.drawer = !state.drawer
    state.count++
  },
}