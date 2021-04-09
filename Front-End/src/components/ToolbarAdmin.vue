<!--<template>-->
<!--    <v-toolbar -->
<!--      light-->
<!--      max-height='70'-->
<!--      >-->
<!--&lt;!&ndash;      :src="require('../assets/magenta-pink.png')"&ndash;&gt;-->
<!--&lt;!&ndash;    >&ndash;&gt;-->
<!--        <v-toolbar-title class="helvetica text-uppercase">-->
<!--            <span>Hall Effect Thruster </span>-->
<!--            <span class="font-weight-light">Database</span>-->
<!--        </v-toolbar-title>-->
<!--        <v-spacer></v-spacer>-->
<!--        &lt;!&ndash;        https://psyche.asu.edu/wp-content/themes/psyche/static/img/nasa.svg&ndash;&gt;-->
<!--        <v-tab href="#tab-1">-->
<!--            <router-link to="/retrieve">-->
<!--            Records-->
<!--            </router-link>-->
<!--        </v-tab>-->
<!--    -->
<!--        <v-tab href="#tab-2">-->
<!--            <router-link to="/create">-->
<!--            Create-->
<!--            </router-link>-->
<!--        </v-tab>-->
<!--    -->
<!--        <v-tab href="#tab-3" >-->
<!--            <router-link to="/edit">-->
<!--            Configurations-->
<!--            </router-link>-->
<!--        </v-tab>-->
<!--    -->
<!--        <v-tab href="#tab-4">-->
<!--            <router-link to="/configure">-->
<!--            Modify-->
<!--            </router-link>-->

<!--        </v-tab>-->

<!--        <v-tab href="#tab-5">-->
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

<!--<script lang="js">-->
<!--import Vue from 'vue';-->
<!--import eventBus from './Main.vue';-->
<!--export default ({-->

<!--  name: 'Toolbar',-->
<!--    props: {-->
<!--        userTypeProp: {-->
<!--            default: "guest",-->
<!--            type: String-->
<!--        }-->
<!--    },-->
<!--    create(){-->
<!--        this.userType =this.userTypeProp-->
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
<!--      userType: "guest"-->
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

