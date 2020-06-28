<template>
  <section>
    <Home />
  </section>
</template>

<script>
import Home from '../components/home/Home';
export default {
  middleware: ['isLogged'],
  components: {
    Home
  }
};
</script>
