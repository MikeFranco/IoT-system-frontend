<template>
  <section>
    <v-card color="#F0EDFF">
      <v-card-title class="text card-title"
        >{{ title }}
        <v-spacer></v-spacer>
        <span @click="turnOff">
          <btn-icon :color="isOn ? '#00C892' : 'error'" icon="power" />
        </span>
      </v-card-title>
      <v-card-text>
        <p class="text">
          {{ subtitle }}
        </p>
        <span @click="editDevice">
          <btn-icon color="#252850" icon="pencil" />
        </span>
      </v-card-text>
      <v-card-actions>
        <span @click="deleteDevice">
          <btn-icon
            color="#252850"
            icon="delete"
          ></btn-icon>
        </span>
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
  data() {
    return {
      actualDevice: {}
    };
  },
  methods: {
    turnOff() {
      console.log('%c⧭', 'color: #ff0000', `${this.title} turned off`);
    },
    editDevice() {
      console.log('%c⧭', 'color: #00e600', this.actualDevice);
      this.$store.commit('getOneDevice', this.actualDevice);
      this.$router.push({
        path: '/edit-device'
      });
    },
    updateActualDevice() {
      this.actualDevice = this.device;
    },
    deleteDevice(){
      console.log('%c⧭', 'color: #1d5673', 'Deleting device')
    }
  },
  created() {
    this.updateActualDevice();
  }
};
</script>

<style>
.card-title {
  font-size: 30px;
}
.text {
  color: #252850;
}
</style>