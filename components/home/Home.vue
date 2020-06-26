<template>
  <section>
    <v-app>
      <v-container fluid>
        <!-- <v-layout justify-space-between row class="nav-menu">
          <v-flex md12>
            <NavBar />
          </v-flex>
        </v-layout> -->
        <v-layout align-center justify-center row>
          <v-flex xs10 md5 class="main-title">
            <h1>Mi hogar</h1>
          </v-flex>
        </v-layout>
        <v-layout justify-space-between row class="mobile-menu">
          <v-flex xs1 md1>
            <btn-icon color="white" icon="menu" />
          </v-flex>
          <v-flex xs3 sm2 md1>
            <btn-icon color="white" icon="plus" />
            <btn-icon color="white" icon="dots-vertical" />
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
              :title="device.label"
              :subtitle="device.manufacturer"
              :type="device.type"
              :isOn="device.state.turnedOn"
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
              :title="device.label"
              :subtitle="device.manufacturer"
              :type="device.type"
              :isOn="device.state.turnedOn"
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
import NavBar from '../NavBar.vue';
export default {
  components: {
    Card,
    BtnIcon,
    NavBar
  },
  computed: {
    ...mapGetters(['getAllDevices']),
    devices() {
      return this.getAllDevices;
    }
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

/* .flex {
  background-color: red;
} */

.house-rooms {
  margin-top: 5vh;
  margin-left: 1vh;
}

.nav-menu {
  display: none;
}

.text {
  color: black;
}

.card-generic {
  margin: 15px 15px;
}

.mobile-menu {
  margin-left: 15px;
}

.cards-wrapper {
  max-height: 38vh;
  overflow-y: auto;
}

@media screen and (min-width: 768px) {
  .nav-menu {
    display: flex;
    margin-bottom: 10vh;
    position: sticky;
    top: 0;
    z-index: 1;
  }
  .mobile-menu {
    display: none;
  }
}
</style>