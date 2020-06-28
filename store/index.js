export const state = () =>({
  devices: [],
  oneDevice: {},
  oneDeviceActions: {},
  userName: ''
})

export const getters = {
  getAllDevices(state){
    return state.devices;
  },
  getOneDevice(state){
    return state.oneDevice;
  },
  getOneDeviceActions(state){
    return state.oneDeviceActions
  },
  getUserName(state){
    return state.userName;
  }
}

export const mutations = {
  saveDevices(state, devices) {
    state.devices = devices;
  },
  setOneDevice(state, value){
    state.oneDevice = value;
  },
  setOneDeviceActions(state, value){
    state.oneDeviceActions = value;
  },
  setUserName(state, value){
    state.userName = value;
  }
}
