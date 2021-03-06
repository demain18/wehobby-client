export const state = () => ({ // set state
  list: {
    category: {},
    city: {},
    area: {},
    post: {}
  }
})

export const mutations = { // update state
  setList: (state, content) => {
    state.list = {
      category: content.category,
      city: content.city,
      area: content.area,
      post: content.post
    }
  },
  emptyList: (state, content) => {
    state.list = {}
  },
}