<template>
  <section>
    <Devices />
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import Devices from '~/components/devices/Devices.vue';
export default {
  middleware: ['isLogged'],
  components: {
    Devices
  },
  computed: {
    ...mapGetters(['getUserId'])
  },
  created() {
    this.$axios
      .get(`/back/devices?userId=${this.getUserId}`)
      .then(response => {
        console.log('%c⧭', 'color: #731d6d', response)
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