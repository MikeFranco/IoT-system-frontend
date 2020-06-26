export const state = () =>({
  devices: [],
  oneDevice: {}
})

export const getters = {
  getAllDevices(state){
    return state.devices;
  },
  getOneDevice(state){
    return state.oneDevice;
  }
}

export const mutations = {
  saveDevices(state, devices) {
    state.devices = devices;
  },
  getOneDevice(state, value){
    state.oneDevice = value;
  }
}
