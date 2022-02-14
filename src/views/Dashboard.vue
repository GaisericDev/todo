<template>
  <div class="dashboard">
    <h1  class="subtitle-1 grey--text">
      Dashboard
    </h1>
    <v-container class="my-15">
      <v-row wrap class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small depressed class="grey--text" @click="sortBy('title')" v-on="on">
              <v-icon left small>mdi-folder</v-icon>
              <span class="caption text-lowercase">By project name</span>
            </v-btn>
          </template>
          <span>Sorts projects by project name</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small depressed class="grey--text" @click="sortBy('person')" v-on="on">
              <v-icon left small>mdi-account</v-icon>
              <span class="caption text-lowercase">By person</span>
            </v-btn>
          </template>
          <span>Sorts projects by person</span>
        </v-tooltip>
        
      </v-row>
      <v-card  flat v-for="project in projects" :key="project.id">
        <v-row wrap :class="`pa-3 project ${project.status}`">
          <v-col cols="12" md="6">
            <div class="caption grey--text">Project title</div>
            <div>{{project.title}}</div>
          </v-col>
          <v-col cols="12" xs="6" sm="4" md="2">
            <div class="caption grey--text">Person</div>
            <div>{{project.person}}</div>
          </v-col>
          <v-col cols="12" xs="6" sm="4" md="2">
            <div class="caption grey--text">Due by</div>
            <div>{{project.due}}</div>
          </v-col>
          <v-col cols="12" xs="2" sm="4" md="2">
            <div class="text-right">
              <v-chip small :class="`${project.status} white--text caption my-2`">{{project.status}}</v-chip>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import db from "@/fb"
import Project from "@/types/Project"

export default Vue.extend({
  name: "Dashboard",
  data(){
    return {
      projects: [] as Project[]
    }
  },
  methods: {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    sortBy(prop:any){
      this.projects.sort((a:any, b:any)=> a[prop] < b[prop] ? -1 : 1);
    }
  },
  created(){
    //every time something gets added in db, we receive the changes from a snapshot taken from the db
    db.collection("projects").onSnapshot((res)=>{
      const changes = res.docChanges();
      changes.forEach(change => {
        //type can be added, removed, modified afaik
        if(change.type == "added"){
          this.projects.push({
            ...(change.doc.data() as Project), //using spread operator here because we also want the project id to be used as a unique identifier
            id: change.doc.id
          });
        }
      });
    })
  }
});
</script>

<style>
  .project.complete{
    border-left: 4px solid #3cd1c2;
  }
  .project.ongoing{
    border-left: 4px solid orange;
  }
   .project.overdue{
    border-left: 4px solid tomato;
  }
  .v-chip.ongoing {
    background: orange !important;
  }
  .v-chip.complete {
    background:  #3cd1c2 !important;
  }
  .v-chip.overdue {
    background: tomato !important;
  }
  .v-card{
    word-break: normal;
  }
</style>
