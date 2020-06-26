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
        <span @click="getOneDevice">
          <btn-icon color="#555582" :icon="type" />
        </span>
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
  data() {
    return {
      actualDevice: {}
    };
  },
  methods: {
    turnOff() {
      console.log('%c⧭', 'color: #ff0000', `${this.title} turned off`);
    },
    getOneDevice() {
      console.log('%c⧭', 'color: #00e600', this.actualDevice);
      this.$store.commit('getOneDevice', this.actualDevice);
    },
    updateActualDevice() {
      console.log('%c⧭', 'color: #733d00', this.device)
      this.actualDevice = this.device;
      console.log('%c⧭', 'color: #00a3cc', this.actualDevice);
    }
  },
  created() {
    this.updateActualDevice();
  },
  /* watch: {
    device: 'updateActualDevice'
  } */
};
</script>

<style>
.card-title {
  font-size: 30px;
}
</style>