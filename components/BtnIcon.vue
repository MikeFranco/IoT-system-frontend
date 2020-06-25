<template>
  <v-btn icon>
    <v-icon :color="color">mdi-{{ icon }}</v-icon>
  </v-btn>
  <!-- <v-btn icon @click="execFunct">
    <v-icon :color="color">mdi-{{ icon }}</v-icon>
  </v-btn> -->
</template>

<script>
export default {
  props: ['icon', 'color', 'execFunct']
};
</script>

<style>
</style>