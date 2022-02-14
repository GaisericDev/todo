<template>
    <div class="text-center">
    <v-dialog v-model="dialog" max-width="600">
      <template v-slot:activator="{ on }">
        <v-btn class="success" dark v-on="on">Add New Project</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Add a New Project</v-card-title>
        <v-card-text>
            <v-form class="px-3">
                <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder"></v-text-field>
                <v-textarea label="Information" v-model="content" prepend-icon="mdi-pencil"></v-textarea>
                <v-btn class="success mx-0 mt-3" @click="submit">Add Project</v-btn>
            </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: "Popup",
    data(){
        return {
            title: "",
            content: ""
        }
    },
    methods: {
        submit(){
            console.log(this.title, this.content);
        }
    }
})
</script>

<style>
    .project-btn{
        background-color: #3cd1c2 !important;
    }
</style>