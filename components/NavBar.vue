<template>
  <v-toolbar color="#555582" class="toolbar">
    <v-menu :nudge-width="100">
      <template v-slot:activator="{ on }">
        <v-toolbar-title v-on="on">
          <span>Mi hogar</span>
          <v-icon dark>mdi-menu-down</v-icon>
        </v-toolbar-title>
      </template>
      <v-list>
        <v-list-item-group>
          <v-list-item v-for="item in items" :key="item">
            <v-list-item-content>
              <v-list-item-title v-text="item"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script>
import BtnIcon from './BtnIcon.vue';
export default {
  components: {
    BtnIcon
  },
  data() {
    return {
      items: [
        'Salas',
        'Dispositivos',
        'Historial'
      ]
    };
  }
};
</script>

<style>
.toolbar {
  margin: 0;
  padding: 0;
}
</style>