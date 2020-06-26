<template>
  <section>
    <Home />
  </section>
</template>

<script>
import Home from '../components/home/Home';
export default {
  components: {
    Home
  },
  data() {
    return {
      devices: [
        {
          id: '001',
          type: 'fan',
          label: 'Ventilador sala',
          manufacturer: 'Philips',
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
          state: {
            turnedOn: false,
            speed: 2
          }
        },
        {
          id: '005',
          type: 'fridge',
          label: 'Refrigerador',
          manufacturer: 'Samsung',
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
  }
};
</script>
