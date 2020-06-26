<template>
  <section>
    <nuxt-link :to="to">
      <v-card color="#F0EDFF">
        <v-card-title class="text card-title">
          {{ title }}
          <btn-icon color="#252850" :icon="icon" />
        </v-card-title>
        <v-card-text>
          <p class="text">
            {{ subtitle }}
          </p>
        </v-card-text>

        <v-card-actions> </v-card-actions>
      </v-card>
    </nuxt-link>
  </section>
</template>

<script>
import BtnIcon from './BtnIcon.vue';
export default {
  props: ['title', 'subtitle', 'icon', 'to'],
  components: {
    BtnIcon
  }
};
</script>

<style scoped>
.card-title {
  font-size: 30px;
}
.text {
  color: #252850;
}
.card-text-container {
  background-color: #f0edff;
}
a {
  text-decoration: none;
  color: #252850;
}
</style>