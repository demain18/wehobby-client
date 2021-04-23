export const state = () => ({ // set state
  cityDialogActive: false,
  slideDialogActive: false,
  shareDialogActive: false,
  reportDialogActive: false,
  contactDialogActive: false,
  verifyDialogActive: false,
  data: {
    slide: {
      index: null,
      list: []
    },
    report: {
      tableName: null,
      tableId: null
    },
    contact: {
      mail: false,
      kakao: false
    }
  }
})

export const getters = {} // get state

export const mutations = { // update state
  toggleCityDialogActive: (state) => {
    state.cityDialogActive = !state.cityDialogActive;
  },
  toggleSlideDialogActive: (state) => {
    state.slideDialogActive = !state.slideDialogActive;
  },
  toggleShareDialogActive: (state) => {
    state.shareDialogActive = !state.shareDialogActive;
  },
  toggleReportDialogActive: (state) => {
    state.reportDialogActive = !state.reportDialogActive;
  },
  toggleContactDialogActive: (state) => {
    state.contactDialogActive = !state.contactDialogActive;
  },
  toggleVerifyDialogActive: (state) => {
    state.verifyDialogActive = !state.verifyDialogActive;
  },
  setDataSlideIndex: (state, index) => {
    state.data.slide.index = index;
  },
  setDataSlideList: (state, content) => {
    state.data.slide.list = content;
  },
  setDataReport: (state, content) => {
    state.data.report = {
      tableName: content.tableName,
      tableId: content.tableId
    }
  },
  setDataContact: (state, content) => {
    state.data.contact = {
      mail: content.mail,
      kakao: content.kakao
    }
  },
}