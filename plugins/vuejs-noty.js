import Vue from 'vue';
import VueNoty from 'vuejs-noty';
import 'vuejs-noty/dist/vuejs-noty.css';

Vue.use(VueNoty, {
    timeout: 5000,
    progressBar: true,
    layout: 'topCenter'
  });