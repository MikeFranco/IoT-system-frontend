<template>
  <section>
    <Snackbar
      color="#00C892"
      :snackbar="showSnackbar"
      text="Device deleted successfully"
    />
    <Snackbar
      color="#00C892"
      :snackbar="errorDeleteSnackbar"
      text="Error deleting device"
    />
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
        <span @click="turnOff">
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
import Snackbar from './Snackbar.vue';
export default {
  props: ['device', 'isOn'],
  components: {
    BtnIcon,
    Snackbar
  },
  data() {
    return {
      actualDevice: {},
      actualDeviceIsOn: {},
      showSnackbar: false,
      deleteSnackbar: false,
      errorDeleteSnackbar: false
    };
  },
  methods: {
    turnOff() {
      /* 
        this.$axios.put('/back/device)
          .then(response => console.log(response))
          .catch(error => console.error(error))
      */
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
      const body = {
        id: this.device._id
      };

      this.$axios
        .delete('/back/device', body)
        .then(() => {
          this.showSnackbar = true;
        })
        .catch(error => {
          this.errorDeleteSnackbar = true;
          console.error(error);
        });

      /* this.showSnackbar = true;
      console.log('%c⧭', 'color: #1d5673', 'Deleting device'); */
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