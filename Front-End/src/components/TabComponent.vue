<template>
    <v-card color="basil">
        <v-tabs
            v-model="tab"
            background-color="#a53f5b"
            centered
            dark
            icons-and-text 
            grow
        >

            <v-tab href="#tab-1">
                Retrieve System
            </v-tab>

            <v-tab href="#tab-2">
                Create System
            </v-tab>

            <v-tab href="#tab-3">
                Compare Systems
            </v-tab>

            <v-tab href="#tab-4">
                Edit System
            </v-tab>


        </v-tabs>

            <v-tabs-item>
                    <v-card flat>
                        <v-card-text>Text</v-card-text>
                    </v-card>
            </v-tabs-item>

    </v-card>
</template>


<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    
})
</script>