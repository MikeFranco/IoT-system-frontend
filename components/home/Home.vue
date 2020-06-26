<template>
  <section>
    <v-app>
      <v-container fluid>
        <v-layout align-center justify-center row>
          <v-flex xs10 md5 class="main-title">
            <h1>Mi hogar</h1>
          </v-flex>
        </v-layout>
        <v-layout
          class="house-rooms"
          align-center
          justify-center
          justify-space-around
          row
        >
          <v-flex xs11 sm11 md12>
            <h2
              >Sala de estar <btn-icon icon="chevron-right" color="white"
            /></h2>
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
        </v-layout>
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
        <v-layout
          class="house-rooms"
          align-center
          justify-center
          justify-space-around
          row
        >
          <v-flex xs11 sm11 md12>
            <h2
              >Sala de juegos <btn-icon icon="chevron-right" color="white"
            /></h2>
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
        </v-layout>
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
      </v-container>
    </v-app>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import Card from '../Card.vue';
import BtnIcon from '../BtnIcon.vue';

export default {
  components: {
    Card,
    BtnIcon
  },
  computed: {
    ...mapGetters(['getAllDevices'])
    /* devices() {
      return this.getAllDevices;
    } */
  },
  data() {
    return {
      devices: []
    };
  },
  created() {
    this.devices = this.getAllDevices;
  },
  mounted() {
    this.devices = this.getAllDevices;
  }
};
</script>

<style>
.container {
  background-color: #252850;
  height: 100%;
  padding-top: 0;
}
.main-title {
  padding-top: 80px;
  text-align: center;
  font-size: 50px;
}

.house-rooms {
  margin-top: 5vh;
  margin-left: 1vh;
}

.text {
  color: black;
}

.card-generic {
  margin: 15px 15px;
}

.cards-wrapper {
  max-height: 38vh;
  overflow-y: auto;
}
</style>