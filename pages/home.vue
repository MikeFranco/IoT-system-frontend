<template>
  <section>
    <Home />
  </section>
</template>

<script>
import Home from '../components/home/Home';
export default {
  middleware: ['isLogged'],
  components: {
    Home
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
