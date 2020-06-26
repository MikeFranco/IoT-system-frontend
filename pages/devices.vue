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