<template>
  <section>
    <v-app>
      <v-container fluid>
        <v-layout align-center justify-center row>
          <v-flex xs10 md5 class="main-title">
            <h1>{{ getUserName}}'s home</h1>
          </v-flex>
        </v-layout>
        <v-layout align-center justify-center row>
          <v-flex xs10 sm10 md5 class="card-generic">
            <Card
              title="Devices"
              subtitle="Go to devices"
              icon="arrow-right"
              to="/devices"
            />
          </v-flex>
          <v-flex xs10 sm10 md5 class="card-generic">
            <Card
              title="History"
              subtitle="Go to history"
              icon="arrow-right"
              to="/history"
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

export default {
  components: {
    Card,
    BtnIcon
  },
  computed: {
    ...mapGetters(['getAllDevices', 'getUserName'])
  },
  data() {
    return {
      devices: []
    };
  },
  methods: {
    addNewDevice() {
      this.$router.push({
        path: '/new-device'
      });
    }
  },
  created() {
    this.devices = this.getAllDevices;
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
}
</style>