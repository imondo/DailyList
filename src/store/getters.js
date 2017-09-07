const getters = {
  popupState: state => state.states.popupState,
  popupMsg: state => state.states.popupMsg,
  progress: state => state.states.progress,
  token: state => state.user.token,
  userInfo: state => state.user.info
};

export default getters;