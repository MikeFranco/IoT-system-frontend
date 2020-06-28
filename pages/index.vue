<template>
  <section class="main-section">
    <v-tab>Login</v-tab>
    <v-tab>Sign up</v-tab>
    <Login />
    <!-- <SignUp /> -->
  </section>
</template>

<script>
import Login from '../components/logReg/Login.vue';
import SignUp from '../components/logReg/SignUp.vue';
export default {
  components: {
    Login,
    SignUp
  },
  data() {
    return {
      showLogin: true,
      showSignUp: false
    }
  },
};
</script>

<style scoped>
.main-section {
  position: fixed;
  padding-left: 2%;
  padding-top: 5%;
  height: 100%;
  width: 100%;
  background-color: #252850;
  left: 0;
}
</style>