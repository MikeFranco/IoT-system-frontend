<template>
  <v-app>
    <v-form v-model="valid">
      <v-container fluid>
        <v-layout align-center justify-center justify-space-around row>
          <v-flex xs10 md2>
            <v-text-field
              v-model="label"
              label="Nombre del dispositivo"
              filled
              color="#F0EDFF"
              background-color="#555582"
              :rules="nameRules"
              required
            ></v-text-field>
          </v-flex>
          <v-flex xs10 md2>
            <v-select
              :items="typeDevices"
              v-model="type"
              label="Tipo"
              filled
              color="#F0EDFF"
              background-color="#555582"
              :rules="typeRules"
              required
            >
            </v-select>
          </v-flex>
          <v-flex xs10 md2>
            <v-text-field
              v-model="manufacturer"
              label="Compañía"
              filled
              color="#F0EDFF"
              background-color="#555582"
              :rules="manufacturerRules"
              required
            ></v-text-field>
          </v-flex>
          <!-- <v-flex xs10 md2>
            <v-select
              :items="rooms"
              v-model="room"
              label="Habitación"
              filled
              color="#F0EDFF"
              background-color="#555582"
            >
            </v-select>
          </v-flex> -->
        </v-layout>
        <v-layout align-center justify-center justify-space-around row>
          <v-flex xs10 md2>
            <v-btn outlined block @click="addDevice">
              <v-icon class="btn-icon">mdi-content-save-outline</v-icon>
              Guardar cambios
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['getAllDevices'])
  },
  data() {
    return {
      typeDevices: [
        { text: 'Television', value: 'television' },
        { text: 'Altavoz', value: 'speaker' },
        { text: 'Refrigerador', value: 'fridge' },
        { text: 'Ventilador', value: 'fan' },
        { text: 'Iluminación', value: 'lightbulb' },
        { text: 'Robot aspirador', value: 'robot-vacuum-variant' },
        { text: 'Purificador de aire', value: 'air-filter' }
      ],
      nameRules: [v => !!v || 'Name is required'],
      typeRules: [v => !!v || 'Type is required'],
      manufacturerRules: [v => !!v || 'Manufacturer is required'],
      /* rooms: [
        { text: 'Sala', value: 'lounge' },
        { text: 'Cuarto de juegos', value: 'game' },
        { text: 'Cocina', value: 'kitchen' },
        { text: 'Habitación 1', value: 'room 1' },
        { text: 'Habitación 2', value: 'room 2' },
        { text: 'Habitación 3', value: 'room 3' }
      ], */
      label: '',
      type: '',
      manufacturer: '',
      valid: false,
      showSnackbar: false
    };
  },
  methods: {
    addDevice() {
      if (this.valid) {
        const deviceState = this.getDeviceState();
        const device = {
          label: this.label,
          type: this.type,
          manufacturer: this.manufacturer,
          state: deviceState
        };
        const body = {
          device
        };

        this.$axios
          .post('/back/device', body)
          .then(response => {
            const newDevices = [...this.getAllDevices, device];
            this.$store.commit('saveDevices', newDevices);
            this.$noty.success('Device added successfully')
            this.$router.push({
              path: '/devices'
            });
          })
          .catch(error => {
            this.$noty.error('Error creating device');
            console.error(error)
          });
      }
    },
    getDeviceState() {
      return this.type == 'television'
        ? { turnedOn: false, volumen: 0, channel: 1 }
        : this.type == 'speaker'
        ? { turnedOn: false, volumen: 0 }
        : this.type == 'fridge'
        ? { turnedOn: false, temperature: 0 }
        : this.type == 'fan'
        ? { turnedOn: false, speed: 0 }
        : { turnedOn: false };
    }
  }
};
</script>

<style scoped>
.container {
  position: absolute;
  background-color: #252850;
  height: 100%;
}
.btn-icon {
  padding-right: 15px;
}
</style>