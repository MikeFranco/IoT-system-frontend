<template>
  <v-snackbar top :color="color" timeout="2500" v-model="showSnack">
    {{ text }}
    <template v-slot:action="{ attrs }">
      <v-btn dark text v-bind="attrs" @click="showSnack = false">
        <v-icon>mdi-close-thick</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  props: ['color', 'text', 'snackbar'],
  data() {
    return {
      showSnack: false
    }
  },
  created () {
    this.showSnack = this.snackbar;
  },
};
</script>

<style>
</style>