<template>
  <section>
    <Devices />
  </section>
</template>

<script>
import Devices from '~/components/devices/Devices.vue';
export default {
  components: {
    Devices
  },
    data() {
    return {
      devices: [
        {
          id: '001',
          type: 'fan',
          label: 'Ventilador sala',
          manufacturer: 'Philips',
          room: 'lounge',
          state: {
            turnedOn: true,
            speed: 2
          }
        },
        {
          id: '002',
          type: 'fridge',
          label: 'Refrigerador',
          manufacturer: 'Samsung',
          room: 'kitchen',
          state: {
            turnedOn: false,
            temperature: 15
          }
        },
        {
          id: '003',
          type: 'television',
          label: 'Televisión sala',
          manufacturer: 'Samsung',
          room: 'lounge',
          state: {
            turnedOn: true,
            channel: 500,
            volumen: 50
          }
        },
        {
          id: '004',
          type: 'fan',
          label: 'Ventilador sala',
          manufacturer: 'Philips',
          room: 'lounge',
          state: {
            turnedOn: false,
            speed: 2
          }
        },
        {
          id: '005',
          type: 'gamepad-square',
          label: 'Switch',
          manufacturer: 'Nintendo',
          room: 'game',
          state: {
            turnedOn: true,
            temperature: 15
          }
        },
        {
          id: '006',
          type: 'television',
          label: 'Televisión juegos',
          manufacturer: 'Samsung',
          room: 'game',
          state: {
            turnedOn: true,
            temperature: 15
          }
        }
      ]
    };
  },
  created() {
    this.$store.commit('saveDevices', this.devices);
    /* this.$axios
      .get('/back/devices')
      .then(response => console.log('%c⧭', 'color: #00bf00', response))
      .catch(error => console.error(error)); */
  }
};
</script>

<style scoped>
section {
  background-color: #252850;
  height: 100%;
  padding-top: 0;
}
</style>