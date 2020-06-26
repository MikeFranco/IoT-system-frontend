<template>
  <section>
    <DeviceActions />
  </section>
</template>

<script>
import DeviceActions from '~/components/devices/DeviceActions.vue';
export default {
  components: {
    DeviceActions,
  },
}
</script>

<style scoped>
section {
  background-color: #252850;
  height: 100%;
  padding-top: 10vh;
}
</style>