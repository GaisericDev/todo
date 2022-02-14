<template>
  <v-app class="grey lighten-4">
    <Navbar />
    <v-main class="mx-4 mb-4"><router-view></router-view></v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Navbar from "./components/Navbar.vue";
export default Vue.extend({
  name: "App",
  components: { Navbar },
  data: () => ({
    //
  }),
});
</script>

<style>
  .theme--light.v-application {
    background: #f5f5f5 !important;
  }
</style>
