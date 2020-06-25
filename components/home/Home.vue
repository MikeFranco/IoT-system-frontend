<template>
  <section>
    <v-app>
      <v-container fluid>
        <v-layout justify-space-between row class="nav-menu">
          <v-flex md12>
            <v-card>
              <v-card-text
                >Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aspernatur tempore libero architecto qui consectetur eveniet.
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout align-center justify-center row>
          <v-flex xs10 md5 class="main-title">
            <h1>Mi hogar</h1>
          </v-flex>
        </v-layout>
        <v-layout justify-space-between row class="mobile-menu">
          <v-flex xs1 md1>
            <btn-icon
              color="white"
              icon="menu"
            />
          </v-flex>
          <v-flex xs3 sm2 md1>
            <btn-icon
              color="white"
              icon="plus"
            />
            <btn-icon
              color="white"
              icon="dots-vertical"
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
            <h2>Sala de estar <btn-icon icon="chevron-right" color="white"/></h2>
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
        <v-layout align-center justify-center row wrap>
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
            />
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </section>
</template>

<script>
import Card from '../Card.vue';
import BtnIcon from '../BtnIcon.vue';
export default {
  components: {
    Card,
    BtnIcon
  },
  data() {
    return {
      devices: [
        {
          id: '001',
          type: 'fan',
          label: 'Ventilador sala',
          manufacturer: 'Philips',
          state: {
            turnedOn: true,
            speed: 2
          }
        },
        {
          id: '002',
          type: 'fridge',
          label: 'Refrigerador',
          manufacturer: 'Samsung',
          state: {
            turnedOn: true,
            temperature: 15
          }
        },
        {
          id: '003',
          type: 'television',
          label: 'Televisión sala',
          manufacturer: 'Samsung',
          state: {
            turnedOn: true,
            channel: 500,
            volumen: 50
          }
        },
        {
          id: '004',
          type: 'fan',
          label: 'Ventilador sala',
          manufacturer: 'Philips',
          state: {
            turnedOn: true,
            speed: 2
          }
        },
        {
          id: '005',
          type: 'fridge',
          label: 'Refrigerador',
          manufacturer: 'Samsung',
          state: {
            turnedOn: true,
            temperature: 15
          }
        },
        {
          id: '006',
          type: 'television',
          label: 'Televisión sala',
          manufacturer: 'Samsung',
          state: {
            turnedOn: true,
            channel: 500,
            volumen: 50
          }
        }
      ]
    };
  }
};
</script>

<style>
.container {
  background-color: #252850;
  height: 100%;
}
.main-title {
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

@media screen and (min-width: 768px) {
  .nav-menu {
    display: flex;
    margin-bottom: 15px;
  }
  .mobile-menu {
    display: none;
  }
}
</style>