<template>
  <section class="main-section">
    <MainLogin/>
  </section>
</template>

<script>
import MainLogin from '../components/logReg/MainLogin.vue';
export default {
  components: {
    MainLogin
  }
};
</script>

<style scoped>
.main-section {
  position: fixed;
  padding-left: 2%;
  padding-top: 5%;
  height: 100%;
  width: 100%;
  background-color: #252850;
  left: 0;
}
</style>