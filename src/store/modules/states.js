const states = {
  state: {
    popupState: false,
    popupMsg: '',
    progress: false
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
    }
  },
  actions: {

  }
};

export default states;
