<template>
  <v-app> 
<!--      <Toolbar/>-->
      <router-view/>
      <Footer/>
  </v-app>
</template>

<script>

// Global imports
// import Vue from 'vue';
import Main from './components/Main.vue';
import Toolbar from './components/Toolbar.vue';
import Footer from './components/Footer.vue';
import { store } from './store/store'



export default ({
  name: 'App',
    store,
  components: {
    Toolbar,
    Main,
    Footer,
  },

  data(){
    return {

    };
  },
    methods: {

    }
});
</script>

