<template>
  <div class="projects">
    <h1 class="subtitle-1 grey--text">
      Projects
    </h1>
    <v-container class="my-15">
      <v-expansion-panels >
      <v-expansion-panel class="brown--text" v-for="project in myProjects" :key="project.title">
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
type Project = {
  title:string,
  person: string,
  due: string,
  status:string,
  content:string
}
export default Vue.extend({
  name: "projects",
  data(){
    return {
      projects: [
        { title: 'Create smart contract', person: 'Gaiseric', due: '12th Mar 2022', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Code up the homepage', person: 'Chun Li', due: '15th Feb 2022', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Design video thumbnails', person: 'Ryu', due: '20th Feb 2022', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2021', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      ] as Project[]
    }
  },
  computed: {
    myProjects(): Project[]{
      return (this.projects as Project[]).filter(project => {
        return project.person === 'Gaiseric'
      })
    }
  }
});
</script>
