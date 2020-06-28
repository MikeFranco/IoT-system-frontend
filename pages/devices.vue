<template>
  <section>
    <Devices />
  </section>
</template>

<script>
import Devices from '~/components/devices/Devices.vue';
export default {
  middleware: ['isLogged'],
  components: {
    Devices
  },
  created() {
    this.$axios
      .get('/back/devices')
      .then(response => {
        this.$store.commit('saveDevices', response.data.getDevices);
      })
      .catch(error => console.error(error));
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