<template>
  <section>
    <v-app>
      <v-container fluid>
        <v-layout align-center justify-center row>
          <v-flex xs10 md5 class="main-title">
            <h1>Usage history</h1>
          </v-flex>
        </v-layout>
        <v-layout align-center justify-center row wrap class="cards-wrapper">
          <v-flex xs11 sm11 md4 v-if="historyDevices.length == 0">
            <v-card color="#F0EDFF">
              <v-card-text>
                <p class="text">
                  There are no devices
                </p>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex
            xs12
            sm5
            md2
            v-for="device in historyDevices"
            :key="device.id"
            class="card-generic"
          >
            <CardDevice :device="device" :isOn="device.state.turnedOn" />
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import CardDevice from '../CardDevice';
export default {
  components: {
    CardDevice
  },
  computed: {
    ...mapGetters(['getAllDevices']),
    historyDevices() {
      return this.getAllDevices
        .map(device => device)
        .sort((a, b) =>
          a.updatedAt < b.updatedAt ? 1 : a.updatedAt > b.updatedAt ? -1 : 0
        );
    }
  }
};
</script>

<style scoped>
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
  overflow-y: auto;
  max-height: 45vh;
}

@media (min-height: 1000px) {
  .cards-wrapper {
  overflow-y: auto;
  max-height: 35vh;
}
}

</style>