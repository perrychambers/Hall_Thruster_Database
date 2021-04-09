<template>
  <div class="retrieveA">
    <v-content>
        <ToolbarAdmin/>
    </v-content>

    <h1 class="text-center">
      Retrieve System
    </h1>

    <v-card
        class="mx-auto"
        max-width="344"
        outlined
        raised
    >
      <p>
        {{ system }}
      </p>

    </v-card>

  </div>
</template>


<script lang="js">
import axios from 'axios'
import ToolbarAdmin from '../components/Admin.vue';
export default {
  // el: '#create',
  components: {
    ToolbarAdmin
  },
  data () {
    return {
      system: null
    }
  },
  mounted() {
    axios
      .get('https://oi9r1r09k6.execute-api.us-east-1.amazonaws.com/deploy-stage/retrieve')
      .then(response => (this.system = response.data.body))
  }
}

</script>

<!--
<script lang="js">
import Vue from 'vue'
import Axios from 'axios'
import ToolbarAdmin from '../components/ToolbarAdmin.vue';
export default Vue.extend({
  components: {
    ToolbarAdmin
  },
  data: () => {
    return {
      system: Object
    };
  }, 
  mounted: () => {
    Axios
      .get('https://oi9r1r09k6.execute-api.us-east-1.amazonaws.com/deploy-stage/retrieve')
      .then((getResponse) => {
        console.log(getResponse.data.body[0]);
        this.system = getResponse.data.body[0];
      })
      .catch(error => console.log(error));
  }
})
</script>
-->
