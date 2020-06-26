<template>
  <v-snackbar top :color="color" timeout="2000" v-model="snackbar">
    {{ text }}
    <template v-slot:action="{ attrs }">
      <v-btn dark text v-bind="attrs" @click="snackbar = false">
        <v-icon>mdi-close-thick</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  props: ['color', 'text'],
  data() {
    return {
      snackbar: true
    };
  }
};
</script>

<style>
</style>