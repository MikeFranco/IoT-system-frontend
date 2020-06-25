<template>
  <v-btn icon>
    <v-icon :color="color">mdi-{{icon}}</v-icon>
  </v-btn>
</template>

<script>
export default {
  props:['icon', 'color']
}
</script>

<style>

</style>