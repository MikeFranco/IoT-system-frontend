<template>
  <v-app>
    <v-container fluid class="login-container">
      <v-layout align-center justify-center row>
        <v-flex xs10 md5>
          <v-tabs
            v-model="tab"
            background-color="#555582"
            color="#F0EDFF"
            centered
          >
            <v-tab>Login</v-tab>
            <v-tab-item class="tab-item">
              <Login />
            </v-tab-item>
            <v-tab>Sign up</v-tab>
            <v-tab-item>
              <SignUp
                :changeToLogin="changeToLogin"
               />
            </v-tab-item>
          </v-tabs>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import SignUp from './SignUp.vue';
import Login from './Login.vue';

export default {
  components: {
    SignUp,
    Login
  },
  computed: {
    ...mapGetters(['getCurrentTab']),
  },
  data() {
    return {
      tab: 0
    }
  },
  methods: {
    changeToLogin() {
      this.tab = 0;
    }
  },
};
</script>

<style scoped>
.container,
.tab-item {
  background-color: #252850;
  height: 100%;
  padding-top: 0;
}
.main-title {
  padding-top: 80px;
  text-align: center;
  font-size: 50px;
}
</style>