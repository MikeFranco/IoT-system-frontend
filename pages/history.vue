<template>
  <section class="main-section">
    <HistoryDevices />
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import HistoryDevices from '../components/devices/HistoryDevices.vue';
export default {
  middleware: ['isLogged'],
  components: {
    HistoryDevices
  },
  computed: {
    ...mapGetters(['getUserId'])
  },
  created() {
    this.$axios
      .get(`/back/devices?userId=${this.getUserId}`)
      .then(response => {
        this.$store.commit('saveDevices', response.data.getDevices);
      })
      .catch(error => console.error(error));
  }
};
</script>

<style scoped>
.main-section {
  position: fixed;
  padding-left: 2%;
  height: 100%;
  width: 100%;
  background-color: #252850;
  left: 0;
}
</style>