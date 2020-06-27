<template>
  <v-app>
    <v-container fluid>
      <v-layout align-center justify-center row>
        <v-flex xs10 md5 class="device-title">
          <h1>Actions for: {{ device.label }}</h1>
        </v-flex>
      </v-layout>
      <v-layout align-center justify-center justify-space-around row>
        <v-flex xs10 md2>
          <v-switch
            color="#00C892"
            v-model="deviceActions.turnedOn"
            @change="updateState('turnedOn')"
            :label="deviceActions.turnedOn ? 'Encendido' : 'Apagado'"
            :true-value="true"
            :false-value="false"
          ></v-switch>
        </v-flex>
        <v-flex xs10 md2 v-if="device.type == 'fan'">
          <v-slider
            color="#F0EDFF"
            v-model="deviceActions.speed"
            @change="updateState('speed')"
            :label="`Speed: ${deviceActions.speed}`"
            min="0"
            max="5"
          ></v-slider>
        </v-flex>
        <v-flex xs10 md2 v-if="device.type == 'television'">
          <v-text-field
            v-model="deviceActions.channel"
            @change="updateState('channel')"
            label="Canal"
            filled
            color="#F0EDFF"
            background-color="#555582"
          ></v-text-field>
        </v-flex>
        <v-flex xs10 md2 v-if="device.type == 'fridge'">
          <v-slider
            color="#F0EDFF"
            v-model="deviceActions.temperature"
            @change="updateState('temperature')"
            :label="`Temperature: ${deviceActions.temperature}`"
            min="-100"
            max="100"
          ></v-slider>
        </v-flex>
        <v-flex
          xs10
          md2
          v-if="device.type == 'television' || device.type == 'speaker'"
        >
          <v-slider
            color="#F0EDFF"
            v-model="deviceActions.volumen"
            @change="updateState('volumen')"
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
    updateState(action) {
      if (action == 'channel' && /\D/.test(this.deviceActions.channel)) {
        this.$noty.error('Only numbers are acepted');
        return;
      }
      const body = {
        id: this.device._id,
        deviceState: this.deviceActions
      };
      this.$axios
        .put('/back/update-state', body)
        .then(response => {
          console.log(`%cDevice action changed: ${action}`, 'color: #40fff2');
        })
        .catch(error => {
          this.$noty.error('Error ocurred');
          console.error(error);
        });
    }
  },
  created() {
    if (this.getOneDevice) {
      this.device = this.getOneDevice;
      const getDeviceState = Object.entries(this.device.state).reduce(
        (carry, [key, value]) => {
          carry[key] = value;
          return carry;
        },
        {}
      );
      this.deviceActions = getDeviceState;
    }
  }
};
</script>

<style scoped>
.container {
  background-color: #252850;
  height: 100%;
  color: #555582;
}
.device-title {
  color: #f0edff;
  font-size: 40px;
  padding-bottom: 4vh;
  text-align: center;
}
</style>