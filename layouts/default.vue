<template>
  <div>
    <v-navigation-drawer
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
      class="main-app"
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
    </v-navigation-drawer>
    <v-app-bar color="#555582" :clipped-left="clipped" app>
      <v-toolbar class="main-toolbar" color="#555582">
        <v-btn icon @click.stop="drawer = !drawer">
          <v-icon color="#F0EDFF">mdi-{{ drawer ? 'close' : 'menu' }}</v-icon>
        </v-btn>
        <v-btn icon @click.stop="miniVariant = !miniVariant">
          <v-icon color="#F0EDFF"
            >mdi-{{
              miniVariant ? 'unfold-more-horizontal' : 'unfold-less-horizontal'
            }}</v-icon
          >
        </v-btn>
        <v-toolbar-title class="text" v-text="title" />
      </v-toolbar>
    </v-app-bar>
    <v-app>
      <v-container>
        <nuxt />
      </v-container>
    </v-app>
  </div>
</template>

<script>
import BtnIcon from '../components/BtnIcon.vue';
export default {
  components: {
    BtnIcon
  },
  data() {
    return {
      title: "Smart's",
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

<style scoped>
.main-app, header {
  padding: 0px 0px;
}
.main-toolbar {
  background-color: #252850;
  position: absolute;
  padding: 0;
  margin: 0;
  width: 100%;
  left: 0px;
}
.container {
  min-width: 100%;
}
.toolbar {
  margin: 0;
  padding: 0;
  width: 100%;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.0),
    0px 4px 5px 0px rgba(0, 0, 0, 0), 0px 1px 10px 0px rgba(0, 0, 0, 0) !important;
}
.link {
  text-decoration: none;
}

.label {
  color: #252850;
}

.text {
  color: #f0edff;
}
</style>