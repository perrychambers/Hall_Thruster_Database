<template>
<!--
    <v-footer
        id="footer"
        padless
    >
    <v-card
        class="py-2 white--text text-center"
        dark
        tile
        :img="require('@/assets/magenta-pink.png')"
    >

    <v-container
    >
        <v-layout align-center justify-center>
            <v-flex xs6>
                <div class="text-xs-center">
                    <strong>PSYCHE / </strong> JOURNEY TO A METAL WORLD
                    <v-row>
                        <v-btn
                            v-for="icon in icons"
                            :key="icon"
                            class="mx-4 white--text"
                            icon
                        >
                            <v-icon size="24px">{{ icon }}</v-icon>
                        </v-btn>
                    </v-row>
                </div>
            </v-flex>
        </v-layout>
    </v-container>
    </v-card>

</v-footer> -->

<v-card max-height = "200px">
    <v-footer
        padless
        fixed
    >
        <v-card
            flat
            tile
            width="100%"
            :img="require('@/assets/magenta-pink.png')"
            class=" text-center"
        >
            <v-card-text
                v-if="$store.getters.loggedIn === 'false'"
                height="50px"
            >
                <v-btn
                    v-for="icon in icons"
                    :key="icon"
                    class="mx-4"
                    icon
                >
                    <v-icon size="24px">{{ icon }}</v-icon>
                </v-btn>
            </v-card-text>

            <v-card-text class="white--text">
                <strong> PSYCHE </strong> / Journey To A Metal World 

            </v-card-text>
        </v-card>

    </v-footer>

</v-card>


</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data: () => ({
        icons: [
            'mdi-facebook',
            'mdi-twitter',
            'mdi-instagram',
            'mdi-youtube'
        ]
    })
    
})
</script> 
