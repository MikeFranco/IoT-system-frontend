export const state = () =>({
  devices: [],
  oneDevice: {},
  oneDeviceActions: {}
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
  }
}
