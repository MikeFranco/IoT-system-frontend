<template>
  <v-card>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>{{ subtitle }}</v-card-text>
    <v-card-actions
      ><v-btn icon>
        <v-icon>mdi-fan</v-icon>
      </v-btn></v-card-actions
    >
  </v-card>
</template>

<script>
export default {
  props: ['title', 'subtitle', 'actions']
};
</script>

<style>
</style>