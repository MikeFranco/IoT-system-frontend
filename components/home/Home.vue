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
            <v-btn icon>
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </v-flex>
          <v-flex xs3 sm2 md1>
            <v-btn icon>
              <v-icon>mdi-plus</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
        <v-layout class="house-rooms" wrap align-center justify-center row>
          <v-flex xs11 sm11 md12>
            <h2
              >Sala de estar
              <v-btn icon> <v-icon>mdi-chevron-right</v-icon> </v-btn></h2
            >
          </v-flex>
          <v-flex xs11 sm11 md12>
            <v-card color="#F0EDFF">
              <v-card-text style="color: black;">
                No hay dispositivos
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </section>
</template>

<script>
export default {
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
        }
      ]
    };
  }
};
</script>

<style>
.main-title {
  text-align: center;
  font-size: 50px;
}

.flex {
  background-color: red;
}

.house-rooms {
  margin-top: 5vh;
}

.nav-menu {
  display: none;
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