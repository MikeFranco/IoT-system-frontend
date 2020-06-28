export const state = () => ({
  devices: [],
  oneDevice: {},
  oneDeviceActions: {},
  userName: '',
  userId: ''
});

export const getters = {
  getAllDevices(state) {
    return state.devices;
  },
  getOneDevice(state) {
    return state.oneDevice;
  },
  getOneDeviceActions(state) {
    return state.oneDeviceActions;
  },
  getUserName(state) {
    return state.userName;
  },
  getUserId(state) {
    return state.userId;
  }
};

export const mutations = {
  saveDevices(state, devices) {
    state.devices = devices;
  },
  setOneDevice(state, value) {
    state.oneDevice = value;
  },
  setOneDeviceActions(state, value) {
    state.oneDeviceActions = value;
  },
  setUserName(state, value) {
    state.userName = value;
  },
  setUserId(state, value) {
    state.userId = value;
  }
};
