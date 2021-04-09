<!--<template>-->
<!--    <v-toolbar -->
<!--      light-->
<!--      max-height='70'-->
<!--      >-->
<!--&lt;!&ndash;      :src="require('../assets/magenta-pink.png')"&ndash;&gt;-->
<!--&lt;!&ndash;    >&ndash;&gt;-->
<!--        <v-toolbar-title -->
<!--            class="helvetica text-uppercase"-->
<!--            width='300'-->
<!--        >-->
<!--            <span>Hall Effect Thruster </span>-->
<!--            <span class="font-weight-light">Database</span>-->
<!--        </v-toolbar-title>-->

<!--        &lt;!&ndash;        https://psyche.asu.edu/wp-content/themes/psyche/static/img/nasa.svg&ndash;&gt;-->
<!--        <v-tab href="#tab-1">-->
<!--            <router-link to="/retrieve">-->
<!--            Records-->
<!--            </router-link>-->
<!--        </v-tab>-->
<!--a    -->
<!--        <v-tab href="#tab-2" >-->
<!--            <router-link to="/create" :disabled="disabledTab">-->
<!--            Create-->
<!--            </router-link>-->
<!--        </v-tab>-->
<!--    -->
<!--        <v-tab href="#tab-3" >-->
<!--            Configurations-->
<!--        </v-tab>-->
<!--    -->
<!--        <v-tab href="#tab-4">-->
<!--            Modify-->
<!--        </v-tab>-->

<!--        <v-tab href="#tab-5" >-->
<!--            <router-link to="/compare">-->
<!--            Compare-->
<!--            </router-link>-->
<!--        </v-tab>-->

<!--        <v-spacer></v-spacer>-->
<!--        <v-spacer></v-spacer>-->
<!--        <v-spacer></v-spacer>-->


<!--        <v-btn-->
<!--            outlined-->
<!--           href= 'https://psyche.asu.edu/'-->
<!--            target="_blank"-->
<!--            tag="Psyche"-->


<!--        >-->
<!--        PSYCHE-->
<!--        </v-btn>-->
<!--        <v-spacer></v-spacer>-->
<!--        <v-btn-->
<!--            outlined-->
<!--            href="https://nasa.gov"-->
<!--            target="_blank"-->
<!--            tag="NASA"-->

<!--        >-->
<!--        NASA-->
<!--        </v-btn>-->
<!--    </v-toolbar>-->
<!--</template>-->

<!--<script lang="ts">-->
<!--import Vue from 'vue';-->
<!--import eventBus from './Main.vue';-->
<!--export default ({-->

<!--  name: 'Toolbar',-->
<!--    props: {-->
<!--        userType: {-->
<!--            type: String-->
<!--        }-->
<!--    },-->

<!--  data: () => ({-->
<!--    items: [-->
<!--      {title: 'View System'},-->
<!--      {title: 'Edit System'},-->
<!--      {title: 'Create System'},-->
<!--      {title: 'Compare Systems'}-->
<!--    ],-->
<!--      hideTabs: "true",-->
<!--      disabledTab: "true",-->
<!--      userType: " "-->
<!--  }),-->

<!--    methods: {-->

<!--    },-->
<!--    // &#45;&#45;&#45;&#45; Event Bus $on function not working? -&#45;&#45;&#45;&#45;-->
<!--    // created(){-->
<!--    //     eventBus.$on('userLoggedIn',(data) =>{-->
<!--    //         this.userType = data;-->
<!--    //         this.hideTab = "false"-->
<!--    //         if(this.userType == "admin"){-->
<!--    //             this.disabledTab = "false"-->
<!--    //         }-->
<!--    //     })-->
<!--    // }-->

<!--});-->
<!--</script>-->

