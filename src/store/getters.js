const getters = {
  popupState: state => state.states.popupState,
  popupMsg: state => state.states.popupMsg,
  progress: state => state.states.progress,
  bottomSheet: state => state.states.bottomSheet,
  calendarData: state => state.states.calendarData,
  token: state => state.user.token,
  userInfo: state => state.user.info
};

export default getters;