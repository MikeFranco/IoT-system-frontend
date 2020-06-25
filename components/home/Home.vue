<template>
  <section>
    <v-app>
      <v-container fluid>
        <v-layout align-center justify-center row>
          <v-flex xs10 md5 class="main-title">
            <h1>Mi hogar</h1>
          </v-flex>
        </v-layout>
        <v-layout justify-space-between row>
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
            <v-card>
              <v-card-text>
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
export default {};
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
</style>