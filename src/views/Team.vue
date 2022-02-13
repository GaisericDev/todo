<template>
  <div class="team">
    <h1  class="subtitle-1 grey--text">
      
    </h1>
    <v-container class="my-15">
      <v-row wrap>
        <v-col cols="12" xs="12" sm="6" md="4" lg="3" xl="2" v-for="person in team" :key="person.name">
          <v-card flat class="text-center ma-3">
            <v-responsive class="pt-4">
              image goes here
            </v-responsive>
            <v-card-text>
              <div class="text-subtitle-1">{{person.name}}</div>
              <div class="grey--text">{{person.role}}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn depressed class="grey--text">
                <v-icon small left>mdi-message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "team",
  data(){
    return{
      team: [
        { name: 'The Net Ninja', role: 'Web developer' },
        { name: 'Ryu', role: 'Graphic designer' },
        { name: 'Chun Li', role: 'Web developer' },
        { name: 'Gouken', role: 'Social media maverick' },
        { name: 'Yoshi', role: 'Sales guru'}
      ]
    }
  }
});
</script>
