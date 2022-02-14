<template>
  <div class="projects">
    <h1 class="subtitle-1 grey--text">
      Projects
    </h1>
    <v-container class="my-15">
      <v-expansion-panels >
      <v-expansion-panel class="brown--text" v-for="project in myProjects" :key="project.id">
        <v-expansion-panel-header>
            {{project.title}}
        </v-expansion-panel-header>
       
        <v-expansion-panel-content class="px-4">
          <div class="font-weight-bold">{{project.due}}</div>
          <div>{{project.content}} </div>
        </v-expansion-panel-content>

      </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Project from "@/types/Project"
import db from "@/fb"

export default Vue.extend({
  name: "projects",
  data(){
    return {
      projects: [] as Project[]
    }
  },
  computed: {
    myProjects(): Project[]{
      return (this.projects as Project[]).filter(project => {
        return project.person === 'Gaiseric'
      })
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
