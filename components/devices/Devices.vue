<template>
  <v-app class="app">
    <v-container fluid>
      <v-layout justify-space-between align-center>
        <v-flex xs10 md5>
          <h1>Todos los dispositivos </h1>
        </v-flex>
        <v-flex xs1 md1>
          <span @click="addNewDevice">
            <btn-icon class="header-icon" icon="plus" color="white" />
          </span>
        </v-flex>
      </v-layout>
      <v-layout align-center justify-center row wrap class="cards-wrapper">
        <v-flex xs11 sm12 md5 v-if="devices.length == 0">
          <v-card color="#F0EDFF">
            <v-card-text>
              <p class="text">
                No hay dispositivos
              </p>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex
          v-else
          xs12
          sm5
          md2
          v-for="device in devices"
          :key="device.id"
          class="card-generic"
        >
          <Card
            :device="device"
            :title="device.label"
            :subtitle="device.manufacturer"
            :type="device.type"
            :isOn="device.state.turnedOn"
            :id="device.id"
          />
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import Card from '~/components/Card.vue';
import BtnIcon from '~/components/BtnIcon.vue';
export default {
  components: {
    Card,
    BtnIcon
  },
  computed: {
    ...mapGetters(['getAllDevices']),
    devices() {
      return this.getAllDevices;
    }
  },
  methods: {
    addNewDevice() {
      this.$router.push({
        path: '/new-device'
      });
    }
  }
};
</script>

<style scoped>
.container {
  position: fixed;
  padding-top: 10vh;
  padding-left: 2%;
  padding-bottom: 0;
  height: 100%;
  width: 100%;
  background-color: #252850;
  left: 0;
  overflow-y: hidden;
}
.app {
  background-color: #252850;
}

.text {
  color: black;
}

.card-generic {
  margin: 15px 15px;
}

/* .header-icon {
  padding-left: 10vw;
} */
</style>
