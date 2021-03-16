export const state = () => ({ // set state
  cityDialogActive: false,
  shareDialogActive: false,
  reportDialogActive: false,
  contactDialogActive: false,
  verifyDialogActive: false,
  data: {
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

export const getters = { // get state
  // setReportDialogData: (state) => {
  //   return state.cityDialogActive;
  // }
}

export const mutations = { // update state
  toggleCityDialogActive: (state) => {
    state.cityDialogActive = !state.cityDialogActive;
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
  setDataReport: (state, content) => {
    state.data.report.tableName = content.tableName;
    state.data.report.tableId = content.tableId;
  },
  setDataContact: (state, content) => {
    state.data.contact.mail = content.mail;
    state.data.contact.kakao = content.kakao;
  },
}