<template>
  <div>
    <!-- <v-toolbar color="#555582" class="toolbar">
    <v-menu open-on-click bottom :nudge-width="100" nudge-bottom="40px">
      <template v-slot:activator="{ on }">
        <v-toolbar-title v-on="on">
          <span>Mi hogar</span>
          <v-icon>mdi-menu-down</v-icon>
        </v-toolbar-title>
      </template>
      <v-list color="#F0EDFF">
        <v-list-item-group>
          <v-list-item v-for="item in items" :key="item.label" color="success">
            <v-list-item-content>
                <v-icon class="label">mdi-{{item.icon}}</v-icon>
                <v-list-item-title
                  v-text="item.label"
                  class="label link"
                  :link="item.route"
                ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>
    <btn-icon
      color="white"
      icon="menu"
    />
  </v-toolbar> -->
    <v-navigation-drawer
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
      color="#F0EDFF"
    >
      <v-list>
        <v-list-item-group>
          <v-list-item v-for="item in items" :key="item.label" color="success">
            <v-list-item-content>
              <v-icon class="label">mdi-{{ item.icon }}</v-icon>
              <v-list-item-title
                v-text="item.label"
                class="label link"
                :to="item.route"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <!-- <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :to="item.to"
          :key="i"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>mdi-{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.label" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list> -->
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" app>
      <v-toolbar  fixed>
        <!-- <v-toolbar-side-icon @click.stop="drawer = !drawer" /> -->
        <v-btn icon @click.stop="miniVariant = !miniVariant">
          <v-icon>mid-{{ miniVariant ? 'unfold_more' : 'unfold_less' }}</v-icon>
        </v-btn>
        <v-toolbar-title v-text="title" />
      </v-toolbar>
    </v-app-bar>
  </div>
</template>

<script>
import BtnIcon from './BtnIcon.vue';
export default {
  components: {
    BtnIcon
  },
  data() {
    return {
      title: 'Mi hogar',
      items: [
        { label: 'Salas', route: '/rooms', icon: 'sofa' },
        { label: 'Dispositivos', route: '/devices', icon: 'cellphone' },
        { label: 'Historial', route: '/history', icon: 'history' }
      ],
      miniVariant: false,
      clipped: false,
      drawer: true
    };
  },
  methods: {
    goTo(route) {}
  }
};
</script>

<style>
.toolbar {
  margin: 0;
  padding: 0;
}
.link {
  text-decoration: none;
}

.label {
  color: #252850;
}
</style>