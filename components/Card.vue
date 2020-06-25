<template>
  <v-card color="#F0EDFF">
    <v-card-title class="text">{{ title }}</v-card-title>
    <v-card-text>
      <p class="text">
        {{ subtitle }}
      </p>
    </v-card-text>
    <v-card-actions
      ><v-btn icon>
        <v-icon color="black">{{ getIcon }}</v-icon>
      </v-btn></v-card-actions
    >
  </v-card>
</template>

<script>
export default {
  props: ['title', 'subtitle', 'type', 'actions'],
  computed: {
    getIcon() {
      return this.type ? `mdi-${this.type}` : `mdi-alert-circle-outline`;
    }
  }
};
</script>

<style>
</style>