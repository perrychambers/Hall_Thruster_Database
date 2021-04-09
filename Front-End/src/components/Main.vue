<template>
<v-content>

    <div>
      <Button-Group />
<!--        <Tab-Component /> -->
    </div>
</v-content> 
</template>



<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
//import TabComponent from './TabComponent.vue';
import ButtonGroup from './ButtonGroup.vue';
import Toolbar from '../components/Toolbar.vue';


export const eventBus = new Vue();

export default Vue.extend({
    name: 'Main',
    components: {
        // TabComponent,
        Toolbar,
        ButtonGroup
    }, data() {
        return {
            thrusterInfo: null
        }
    }, mounted() {
        axios
            .get('https://oi9r1r09k6.execute-api.us-east-1.amazonaws.com/deploy-stage/retrieve')
            //.then(response => (this.thrusterInfo = response))     Need to figure out requests w/ typescript
    }
})
</script>

<style scoped>
    .loginButtonGroup {
        align-items: center;
        justify-content: center;
    }
</style>
