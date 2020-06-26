export const state = () =>({
  devices: []
})

export const getters = {
  getAllDevices(state){
    return state.devices;
  }
}

export const mutations = {
  saveDevices(state, devices) {
    state.devices = devices;
  },
}
