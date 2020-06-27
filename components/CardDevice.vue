<template>
  <section>
    <v-snackbar top color="#4F1A1C" timeout="3000" v-model="deleteSnackbar">
      ¿Estás seguro de borrar {{ device.title }}?
      <template v-slot:action="{ attrs }">
        <v-btn dark text v-bind="attrs" @click="deleteDevice">
          Si
        </v-btn>
        <v-btn dark text v-bind="attrs" @click="deleteSnackbar = false">
          No
        </v-btn>
      </template>
    </v-snackbar>

    <v-card color="#F0EDFF">
      <v-card-title class="text card-title">
        <btn-icon color="#252850" :icon="device.type" />{{ device.label }}
      </v-card-title>
      <v-card-text>
        <p class="text">
          {{ device.manufacturer }}
        </p>
      </v-card-text>
      <v-card-actions>
        <span @click="toggleTurnOff">
          <v-switch
            color="#00C892"
            v-model="actualDeviceIsOn"
            :true-value="true"
            :false-value="false"
          ></v-switch>
        </span>
        <span @click="goToMoreActions">
          <btn-icon color="#252850" icon="dots-horizontal" />
        </span>
        <span @click="editDevice">
          <btn-icon color="#252850" icon="pencil" />
        </span>
        <span @click="tryDeleteDevice">
          <btn-icon color="#252850" icon="delete" />
        </span>
      </v-card-actions>
    </v-card>
  </section>
</template>

<script>
import BtnIcon from './BtnIcon.vue';
export default {
  props: ['device', 'isOn'],
  components: {
    BtnIcon
  },
  data() {
    return {
      actualDevice: {},
      actualDeviceIsOn: false,
      deleteSnackbar: false
    };
  },
  methods: {
    toggleTurnOff() {
      const body = {
        id: this.actualDevice._id,
        turnOnValue: this.actualDeviceIsOn
      };
      
        this.$axios.put('/back/toggle-turn-off', body)
          .then(response => {
            this.$noty.success(`The device: ${this.actualDevice.label} is now ${this.actualDeviceIsOn ? 'On' : 'Off'}`)
          })
          .catch(error => console.error(error))
     
      console.log(
        '%c⧭',
        'color: #ff0000',
        `${this.actualDevice.label} turned off`
      );
    },
    editDevice() {
      this.$store.commit('setOneDevice', this.actualDevice);
      this.$router.push({
        path: '/edit-device'
      });
    },
    setActualDevice() {
      this.actualDevice = this.device;
      this.actualDeviceIsOn = this.isOn;
    },
    deleteDevice() {
      this.deleteSnackbar = false;
      const config = {
        params: {
          id: 'this.actualDevice._id'
        }
      };

      this.$axios
        .delete(`/back/device/${this.actualDevice._id}`, config)
        .then(() => {
          this.$noty.success('Device deleted successfully');
        })
        .catch(error => {
          this.$noty.error('Error deleting device');
          console.error('El error: ', error);
        });
    },
    tryDeleteDevice() {
      this.deleteSnackbar = true;
    },
    goToMoreActions() {
      this.$store.commit('setOneDevice', this.actualDevice);
      this.$router.push({
        path: '/actions'
      });
    }
  },
  created() {
    this.setActualDevice();
  }
};
</script>

<style scoped>
.card-title {
  font-size: 30px;
}
.text {
  color: #252850;
}
.card-text-container {
  background-color: #f0edff;
}
</style>