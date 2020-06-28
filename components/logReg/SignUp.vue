<template>
  <section>
    <v-app>
      <v-container fluid>
        <v-layout align-center justify-center row>
          <v-flex xs10 md5 class="main-title">
            <h1>Sign Up</h1>
          </v-flex>
        </v-layout>
        <v-layout align-center justify-center row wrap class="cards-wrapper">
          <v-flex xs10 md5>
            <v-card color="#555582">
              <v-card-subtitle>
                <v-form v-model="valid">
                  <v-text-field
                    v-model="username"
                    :rules="[rules.required]"
                    label="Username"
                    background-color="#555582"
                    color="#F0EDFF"
                  ></v-text-field>
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
                  <v-text-field
                    v-model="confirmPassword"
                    :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.min]"
                    :type="show2 ? 'text' : 'password'"
                    label="Confirm password"
                    hint="At least 8 characters"
                    counter
                    @click:append="show2 = !show2"
                  ></v-text-field>
                </v-form>
              </v-card-subtitle>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout align-center justify-center justify-space-around row>
          <v-flex xs10 md2>
            <v-btn outlined block @click="signUp">
              Sign Up
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </section>
</template>

<script>
export default {
  props:['changeToLogin'],
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
        min: v => v.length >= 8 || 'Min 8 characters'
      }
    };
  },
  methods: {
    signUp() {
      if (this.password != this.confirmPassword) {
        this.$noty.error('Passwords didnt match');
        return;
      }
      if (this.valid) {
        const body = {
          username: this.username,
          email: this.email,
          password: this.password
        };
        this.$axios
          .post('/back/sign-up', body)
          .then(response => {
            this.$noty.success('Account created successfully');
            this.changeToLogin();
          })
          .catch(error => {
            this.$noty.error('An error has ocurred');
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