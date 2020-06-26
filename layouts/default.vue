<template>
  <div>
    <v-navigation-drawer
      :mini-variant="miniVariant"
      v-model="drawer"
      fixed
      app
      color="#F0EDFF"
      hide-overlay
    >
      <v-list>
        <v-list-item-group>
          <v-list-item
            active-class="active"
            v-for="item in items"
            :key="item.label"
            :to="item.route"
          >
            <v-list-item-icon>
              <v-icon class="list-icon" color="#555582">
                mdi-{{ item.icon }}
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title
                v-text="item.label"
                class="label"
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
              miniVariant ? 'unfold-more-vertical' : 'unfold-less-vertical'
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
        { label: 'Mi hogar', route: '/', icon: 'home' },
        /* { label: 'Salas', route: '/rooms', icon: 'sofa' }, */
        { label: 'Dispositivos', route: '/devices', icon: 'cellphone' },
        { label: 'Historial', route: '/history', icon: 'history' }
      ],
      miniVariant: true,
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

.label {
  color: #252850;
}

.text {
  color: #f0edff;
}

.active {
  background-color: #252850;
  color: #f0edff;
}

.list-icon {
  padding-right: 50%;
}
</style>