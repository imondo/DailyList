const states = {
  state: {
    popupState: false,
    popupMsg: '',
    progress: false,
    bottomSheet: false,
    calendarData: {}
  },
  mutations: {
    SET_POPUPSTATE: (state, popupState) => {
      state.popupState = popupState;
    },
    SET_POPUPMSG: (state, popupMsg) => {
      state.popupMsg = popupMsg;
    },
    SET_PROGRESS: (state, progress) => {
      state.progress = progress;
    },
    SET_SHEET: (state, bottomSheet) => {
      state.bottomSheet = bottomSheet;
      console.log(state.bottomSheet);
    },
    SET_CALENDAR: (state, calendarData) => {
      state.calendarData = calendarData;
    }
  },
  actions: {

  }
};

export default states;
