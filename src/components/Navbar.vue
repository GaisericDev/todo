<template>
  <nav>
    <v-app-bar flat app class="text-uppercase grey--text">
      <!-- Logo -->
      <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <span class="font-weight-light">Todo</span>
        <span>Jack</span>
      </v-toolbar-title>
      <!-- Spacer -->
      <v-spacer></v-spacer>
      <!-- Menu -->
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn depressed class="grey--text" v-bind="attrs" v-on="on">
            <v-icon left>mdi-chevron-down</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- Sign out -->
      <v-btn text color="grey">
        <span>Sign out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>
    <!-- Hamburger -->
    <v-navigation-drawer temporary v-model="drawer" app class="indigo">
      <v-row>
        <v-col class="mt-5 text-center">
          <v-avatar size="100">
            <img src="/avatar-1.png" alt="" />
          </v-avatar>
          <p class="white--text text-subtitle-1 mt-1">Gaiseric</p>
        </v-col>
      </v-row >
      <v-row>
        <v-col class="mt-4 mb-3 text-center">
           <Popup/>
        </v-col>
      </v-row>
      <v-list dark>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-action><v-icon>{{link.icon}}</v-icon></v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{link.text}}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
import Popup from "./Popup.vue"
export default Vue.extend({
  name: "Navbar",
  components: {Popup},
  data() {
    return {
      drawer: false,
      links: [
        { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/' },
        { icon: 'mdi-folder', text: 'My Projects', route: '/projects' },
        { icon: 'mdi-account', text: 'Team', route: '/team' },
      ]
    }
  },
})
</script>

<style>
</style>