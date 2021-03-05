export const state = () => ({ // set state
  cityDialogActive: false,
  shareDialogActive: false,
  reportDialogActive: false,
  data: {
    report: {
      tableName: null,
      tableId: null
    }
  }
})

export const getters = { // get state
  setReportDialogData: (state) => {
    return state.cityDialogActive;
  }
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
  setDataReport: (state, content) => {
    state.data.report.tableName = content.tableName;
    state.data.report.tableId = content.tableId;
    // state.reportDialogActive = !state.reportDialogActive;
  },
}