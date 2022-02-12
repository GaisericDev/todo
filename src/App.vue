<template>
  <v-app class="grey lighten-4">
    <Navbar />
    <v-main class="mx-4 mb-4"><router-view></router-view></v-main>
  </v-app>
</template>

<script lang="ts">
//https://www.youtube.com/watch?v=BIuQfQcptIU&list=PL4cUxeGkcC9g0MQZfHwKcuB0Yswgb3gA5&index=4
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
