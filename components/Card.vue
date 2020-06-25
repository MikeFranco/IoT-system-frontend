<template>
  <v-card color="#F0EDFF">
    <v-card-title class="text"
      >{{ title }} <v-spacer></v-spacer>
      <btn-icon
        color="black"
        icon="power"
      />
    </v-card-title>
    <v-card-text>
      <p class="text">
        {{ subtitle }}
      </p>
    </v-card-text>
    <v-card-actions
      >
      <btn-icon
        color="black"
        :icon="type"
      />
      </v-card-actions
    >
  </v-card>
</template>

<script>
import BtnIcon from './BtnIcon.vue';
export default {
  props: ['title', 'subtitle', 'type', 'actions'],
  components: {
    BtnIcon,
  },
  computed: {
    getIcon() {
      return this.type ? `mdi-${this.type}` : `mdi-alert-circle-outline`;
    }
  }
};
</script>

<style>
</style>