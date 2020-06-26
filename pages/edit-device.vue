<template>
  <section class="main-section">
    <EditDevice />
  </section>
</template>

<script>
import EditDevice from '~/components/devices/EditDevice.vue';
export default {
  components: {
    EditDevice,
  },
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