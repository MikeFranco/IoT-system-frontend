<template>
  <v-app class="app">
    <v-container fluid>
      <v-layout align-center justify-center row>
        <v-flex xs10 md5>
          <h1>Todos los dispositivos</h1>
        </v-flex>
        <v-flex xs11 sm11 md12 v-if="devices.length == 0">
          <v-card color="#F0EDFF">
            <v-card-text class="text">
              <p>
                No hay dispositivos
              </p>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-layout align-center justify-center row wrap class="cards-wrapper">
          <v-flex
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
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import Card from '~/components/Card.vue';
export default {
  components: {
    Card
  },
  computed: {
    ...mapGetters(['getAllDevices']),
    devices() {
      return this.getAllDevices;
    }
  }
};
</script>

<style scoped>
.container {
  position: fixed;
  padding-top: 10vh;
  padding-left: 2%;
  height: 100%;
  width: 100%;
  background-color: #252850;
  left: 0;
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
</style>
