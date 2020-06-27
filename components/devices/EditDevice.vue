<template>
  <v-app>
    <v-container fluid>
      <v-layout align-center justify-center justify-space-around row>
        <v-flex xs10 md2>
          <v-text-field
            v-model="editingDevice.label"
            label="Nombre del dispositivo"
            filled
            color="#F0EDFF"
            background-color="#555582"
          ></v-text-field>
        </v-flex>
        <v-flex xs10 md2>
          <v-select
            :items="typeDevices"
            v-model="editingDevice.type"
            label="Tipo"
            filled
            color="#F0EDFF"
            background-color="#555582"
          >
          </v-select>
        </v-flex>
        <v-flex xs10 md2>
          <v-text-field
            v-model="editingDevice.manufacturer"
            label="Compañía"
            filled
            color="#F0EDFF"
            background-color="#555582"
          ></v-text-field>
        </v-flex>
        <!-- <v-flex xs10 md2>
          <v-select
            :items="rooms"
            v-model="editingDevice.room"
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
          <v-btn outlined block @click="updateDevice">
            <v-icon class="btn-icon">mdi-content-save-outline</v-icon>
            Guardar cambios
          </v-btn>
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
      typeDevices: [
        { text: 'Television', value: 'television' }, //1
        { text: 'Altavoz', value: 'speaker' }, //1
        { text: 'Refrigerador', value: 'fridge' }, //2
        { text: 'Ventilador', value: 'fan' }, //3
        { text: 'Iluminación', value: 'lightbulb' }, //4
        { text: 'Robot aspirador', value: 'robot-vacuum-variant' }, //4
        { text: 'Purificador de aire', value: 'air-filter' } //5
      ],
      rooms: [
        { text: 'Sala', value: 'lounge' },
        { text: 'Cuarto de juegos', value: 'game' },
        { text: 'Cocina', value: 'kitchen' },
        { text: 'Habitación 1', value: 'room 1' },
        { text: 'Habitación 2', value: 'room 2' },
        { text: 'Habitación 3', value: 'room 3' }
      ],
      editingDevice: {}
    };
  },
  methods: {
    updateDevice() {
      const newDeviceInfo = { ...this.editingDevice };
      console.log('%c⧭', 'color: #00bf00', this.editingDevice);
      const body = {
        newDeviceInfo
      };
      this.$axios
        .put('/back/device', body)
        .then(response => {
          this.$noty.success('Update device successfully');
          console.log(response);
          this.$router.push({
            path: '/devices'
          });
        })
        .catch(error => console.error(error));
    }
  },
  created() {
    this.editingDevice = { ...this.getOneDevice };
  }
};
</script>

<style scoped>
.container {
  background-color: #252850;
  height: 100%;
}
.btn-icon {
  padding-right: 5%;
}
</style>