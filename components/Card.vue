<template>
  <section>
    <v-card color="#F0EDFF">
      <v-card-title class="text card-title"
        >{{ title }}
        <v-spacer></v-spacer>
        <btn-icon
          :color="isOn ? '#00C892' : 'error'"
          icon="power"
          :execFunct="turnOff"
        />
      </v-card-title>
      <v-card-text>
        <p class="text">
          {{ subtitle }}
        </p>
      </v-card-text>
      <v-card-actions>
        <btn-icon color="#555582" :icon="type" />
      </v-card-actions>
    </v-card>
  </section>
</template>

<script>
import BtnIcon from './BtnIcon.vue';
export default {
  props: ['device', 'title', 'subtitle', 'type', 'actions', 'isOn', 'id'],
  components: {
    BtnIcon
  },
  methods: {
    turnOff() {
      console.log('%c⧭', 'color: #ff0000', `${this.title} turned off`);
    },
    showMoreDevice(){
      this.$store.commit('editDevice', )
    }
  }
};
</script>

<style>
.card-title {
  font-size: 30px;
}
</style>