<template>
    <div class="text-center">
    <v-dialog max-width="600" v-model="dialog">
      <template v-slot:activator="{ on }">
        <v-btn class="success" dark v-on="on">Add New Project</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Add a New Project</v-card-title>
        <v-card-text>
            <v-form class="px-3" ref="form">
                <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder" :rules="inputRules"></v-text-field>
                <v-textarea label="Information" v-model="content" prepend-icon="mdi-pencil" :rules="inputRules"></v-textarea>
                <v-menu>
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                            label="Due date"
                            prepend-icon="mdi-calendar"
                            v-bind="attrs"
                            v-on="on"
                            :value="formattedDate"
                            :rules="inputRules"
                        ></v-text-field>
                    </template>
                    <v-date-picker v-model="due"></v-date-picker>
                </v-menu>
                <v-spacer></v-spacer>
                <v-btn class="success mx-0 mt-3" @click="submit" :loading="loading">Add Project</v-btn>
            </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import moment from 'moment'
import db from "@/fb"
import { addDoc, collection, setDoc } from '@firebase/firestore/dist/lite'

type VForm = Vue & {
    validate: () => boolean
}
export default Vue.extend({
    name: "Popup",
    data(){
        return {
            title: "",
            content: "",
            due: null as null | string,
            inputRules: [
                (v:string) => v && v.length >= 3 || 'Minimum length is 3 characters'
            ],
            loading: false,
            dialog: false
        }
    },
    methods: {
        async submit():Promise<void>{
            if((this.$refs.form as VForm).validate()){
                this.loading = true;
                const project = {
                    title: this.title,
                    content: this.content,
                    due: moment(this.due).format("Do MMMM YYYY"),
                    person: "Gaiseric",
                    status: "ongoing"
                }
                db.collection("projects").add(project).then(()=>{
                    this.loading = false;
                    this.dialog = false;
                    this.$emit("projectAdded");
                })
            }
        }
    },
    computed: {
        formattedDate():string{
            return this.due ? moment(this.due).format("Do MMMM YYYY") : "";
        }
    }
})
</script>

<style>
    .project-btn{
        background-color: #3cd1c2 !important;
    }
</style>