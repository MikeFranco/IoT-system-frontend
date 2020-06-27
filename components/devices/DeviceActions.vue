<template>
  <v-app>
    <v-container fluid>
      <v-layout align-center justify-center justify-space-around row>
        <v-flex xs10 md2>
          <v-switch
            color="#00C892"
            v-model="deviceActions.turnedOn"
            :label="deviceActions.turnedOn ? 'Encendido' : 'Apagado'"
            :true-value="true"
            :false-value="false"
          ></v-switch>
        </v-flex>
        <v-flex xs10 md2 v-show="deviceActions.speed">
          <v-slider
            v-model="deviceActions.speed"
            :label="`Speed: ${deviceActions.speed}`"
            min="0"
            max="5"
          ></v-slider>
        </v-flex>
        <v-flex
          xs10
          md2
          v-show="deviceActions.channel && device.type == 'television'"
        >
          <v-text-field
            v-model="deviceActions.channel"
            label="Canal"
            filled
            color="#F0EDFF"
            background-color="#555582"
          ></v-text-field>
        </v-flex>
        <v-flex
          xs10
          md2
          v-show="deviceActions.temperature && device.type == 'fridge'"
        >
          <v-slider
            v-model="deviceActions.temperature"
            :label="`Temperature: ${deviceActions.temperature}`"
            min="-100"
            max="100"
          ></v-slider>
        </v-flex>
        <v-flex
          xs10
          md2
          v-show="
            deviceActions.volumen >= 0 &&
              (device.type == 'television' || device.type == 'speaker')
          "
        >
          <v-slider
            v-model="deviceActions.volumen"
            :label="`Volumen: ${deviceActions.volumen}`"
            min="0"
            max="100"
          ></v-slider>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['getOneDevice'])
  },
  data() {
    return {
      device: {},
      deviceActions: {}
    };
  },
  methods: {
    validateNumer() {}
  },
  created() {
    this.device = this.getOneDevice;
    const {
      speed,
      turnedOn,
      temperature,
      channel,
      volumen
    } = this.device.state;
    console.log('%c⧭', 'color: #ffcc00', this.device.state);

    this.deviceActions = { speed, turnedOn, temperature, channel, volumen };

    console.log('%c⧭', 'color: #bfffc8', this.deviceActions);
    console.log('%c⧭', 'color: #997326', this.device);
  }
};
</script>

<style scoped>
.container {
  background-color: #252850;
  height: 100%;
  color: #555582;
}
</style>