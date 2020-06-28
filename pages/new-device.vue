<template>
  <section class="main-section">
    <NewDevice />
  </section>
</template>

<script>
import NewDevice from '~/components/devices/NewDevice.vue';
export default {
  middleware: ['isLogged'],
  components: {
    NewDevice
  }
};
</script>

<style>
.main-section {
  position: fixed;
  padding-top: 10vh;
  padding-left: 2%;
  height: 100%;
  width: 100%;
  background-color: #252850;
  left: 0;
}
</style>