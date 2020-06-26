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
      ¿Estás seguro de borrar {{ title }}?
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
      <v-card-title class="text card-title">{{ title }} </v-card-title>
      <v-card-text>
        <p class="text">
          {{ subtitle }}
        </p>
        <!-- <v-container fluid class="card-text-container">
          <v-layout>
            <v-flex xs10 md3>
              <p class="text">
                {{ subtitle }}
              </p>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs1 md2>
              <span @click="editDevice">
                  <btn-icon :color="isOn ? '#00C892' : 'error'" icon="power" />
                </span>
                <span @click="editDevice">
                  <btn-icon color="#252850" icon="pencil" />
                </span>
                <span @click="tryDeleteDevice">
                  <btn-icon color="#252850" icon="delete" />
                </span>
            </v-flex>
          </v-layout>
        </v-container> -->
      </v-card-text>
      <v-card-actions>
        <span @click="editDevice">
          <btn-icon :color="isOn ? '#00C892' : 'error'" icon="power" />
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
  props: ['device', 'title', 'subtitle', 'type', 'actions', 'isOn', 'id'],
  components: {
    BtnIcon,
    Snackbar
  },
  data() {
    return {
      actualDevice: {},
      showSnackbar: false,
      deleteSnackbar: false,
      errorDeleteSnackbar: false
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
    deleteDevice() {
      this.deleteSnackbar = false;
      /* this.$axios.delete('/back/device)
        .then(() => this.showSnackbar = true)
        .catch(error => {
          this.errorDeleteSnackbar = true
          console.error(error)
        })
      */
      this.showSnackbar = true;
      console.log('%c⧭', 'color: #1d5673', 'Deleting device');
    },
    tryDeleteDevice() {
      this.deleteSnackbar = true;
    }
  },
  created() {
    this.updateActualDevice();
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