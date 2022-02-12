<template>
  <div class="dashboard">
    <h1  class="subheading grey--text">
      Dashboard
    </h1>
    <v-container class="my-5">
      <v-card flat class="px-3">
        <v-row wrap>
          <v-col cols="12" md="6">
            <div class="caption grey--text">Project title</div>
            <div>Create a new website</div>
          </v-col>
          <v-col cols="12" xs="6" sm="4" md="2">
            <div class="caption grey--text">Person</div>
            <div>Gaiseric</div>
          </v-col>
          <v-col cols="12" xs="6" sm="4" md="2">
            <div class="caption grey--text">Due by</div>
            <div>1st March 2022</div>
          </v-col>
          <v-col cols="12" xs="2" sm="4" md="2">
            <div class="caption grey--text">Status</div>
            <div>Ongoing</div>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Dashboard",
});
</script>
