<template>
  <section>
    <v-app>
      <v-container fluid>
        <v-layout align-center justify-center row>
          <v-flex xs10 md5 class="main-title">
            <h1>Login</h1>
          </v-flex>
        </v-layout>
        <v-layout align-center justify-center row wrap class="cards-wrapper">
          <v-flex xs10 md5>
            <v-card color="#555582">
              <!-- <v-card-title class="text card-title">
                User name:
              </v-card-title> -->
              <v-card-subtitle>
                <v-form v-model="valid">
                  <v-text-field
                    v-model="email"
                    :rules="[rules.required, rules.email]"
                    label="E-mail"
                    background-color="#555582"
                    color="#F0EDFF"
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.min]"
                    :type="show1 ? 'text' : 'password'"
                    label="Password"
                    hint="At least 8 characters"
                    counter
                    @click:append="show1 = !show1"
                  ></v-text-field>
                </v-form>
              </v-card-subtitle>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout align-center justify-center justify-space-around row>
          <v-flex xs10 md2>
            <v-btn outlined block @click="login">
              Login
            </v-btn>
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
      show1: false,
      valid: false,
      show2: true,
      password: '',
      confirmPassword: '',
      email: '',
      username: '',
      rules: {
        required: value => !!value || 'Required.',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || 'Invalid e-mail.';
        },
        min: v => v.length >= 5 || 'Min 5 characters'
      }
    };
  },
  methods: {
    login() {
      if (this.valid) {
        const body = {
          email: this.email,
          password: this.password
        };
        this.$axios
          .post('/back/login', body)
          .then(response => {
            this.$store.commit(
              'setUserName',
              response.data.currentUser.username
            );
            this.$router.push({
              path: '/home'
            });
          })
          .catch(error => {
            console.error(error);
            this.$noty.error('An error was ocurred');
          });
      }
    }
  }
};
</script>

<style scoped>
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
  max-height: 45vh;
}
.card-title {
  font-size: 30px;
}
.text {
  color: #252850;
}
@media (min-height: 1000px) {
  .cards-wrapper {
    overflow-y: auto;
    max-height: 35vh;
  }
}
</style>