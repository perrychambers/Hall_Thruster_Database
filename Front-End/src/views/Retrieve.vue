<template>
  <div class="retrieve">
    <v-content>
      <div>
        <ToolbarGuest />
      </div>
    </v-content>


    <v-container></v-container>
    <v-card
      class="mx-auto"
      max-width="1900"
      outlined
      raised>

        <v-spacer>.</v-spacer>
        <h1 class="text-center">
            Electric Propulsion Systems
        </h1>

        <p class="text-center">
            Thruster records are below. Filter, sort, compare, or export them to excel spreadsheets.
        </p>


      <v-divider></v-divider>
      <v-container>
        <v-text-field
          v-model="search"
          label="Search"
          single-line
          hide-details>
        </v-text-field>
      </v-container>

      <v-divider></v-divider>

      <v-data-table
        :items="system" 
        :headers="headers"
        show-select
        show-expand
        single-expand
        :search="search"
        @input="enterSelect($event)">
        <template v-slot:body.append>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <v-text-field v-model="system.specific_impulse_max" type="number" label="Less Than"></v-text-field>
              <v-text-field v-model="system.specific_impulse_min" type="number" label="Greater Than"></v-text-field>
            </td>
            <td>
              <v-text-field v-model="system.thrust_max" type="number" label="Less than"></v-text-field>
              <v-text-field v-model="system.thrust_min" type="number" label="Greater than"></v-text-field>
            </td>
            <td>
              <v-text-field v-model="system.system_efficiency_max" type="number" label="Less than"></v-text-field>
              <v-text-field v-model="system.system_efficiency_min" type="number" label="Greater than"></v-text-field>
            </td>
            <td></td>
            <td>
              <v-text-field v-model="system.weight_max" type="number" label="Less than"></v-text-field>
              <v-text-field v-model="system.weight_min" type="number" label="Greater than"></v-text-field>
            </td>
            <td>
              <v-text-field v-model="system.input_power_max" type="number" label="Less than"></v-text-field>
              <v-text-field v-model="system.input_power_min" type="number" label="Greater than"></v-text-field>
            </td>
            <td></td>
            <td></td>
            <td>
              <v-text-field v-model="system.delta_v_max" type="number" label="Less than"></v-text-field>
              <v-text-field v-model="system.delta_v_min" type="number" label="Greater than"></v-text-field>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <v-text-field v-model="system.trl_max" type="number" label="Less than"></v-text-field>
              <v-text-field v-model="system.trl_min" type="number" label="Greater than"></v-text-field>
            </td>
          </tr>
          <tr>
          </tr>
        </template>
        <template #expanded-item="{headers, item}"><!--accordian-->
          <p>Author: {{item.ref_author}}</p>
          <p>Title: {{item.ref_title}}</p>
          <p>Journal: {{item.ref_journal}}</p>
          <a v-bind:href=item.reference target="_blank">Link to original source</a>
        </template>
    
      </v-data-table>
      <p>
        <v-btn 
          :disabled="!isCompareEnabled" 
          v-on:click=goToCompare()
          dark
          raised
          ripple
          class="ma-2 mt-lg-9"
          color='#a53f5b'>
          Compare
        </v-btn>

        <v-btn
          v-on:click="exportSystem()"
          dark
          raised
          ripple
          class="ma-2 mt-lg-9"
          color='#a53f5b'>
          Export to Excel
        </v-btn>
        Select 2 thrusters to compare, or unlimited thrusters to export
      </p>
      

    </v-card>
    <v-spacer>.</v-spacer>
    <v-divider></v-divider>
    <!-- added spacers here so that footer doesnt cover up compare/export button. probably a better way to do this but this works for now -->
    <v-container>
      <v-spacer></v-spacer>
    </v-container>
    <v-container>
      <v-spacer></v-spacer>
    </v-container>
    <v-container>
      <v-spacer></v-spacer>
    </v-container>
    <v-container>
      <v-spacer></v-spacer>
    </v-container>
  </div> 
</template>


<script lang="js">
  import Vue from 'vue'
  import Axios from 'axios'
  import VueRouter from '../router/index.ts'
  import ToolbarGuest from '../components/Toolbar.vue';
  import XLSX from 'xlsx'

  var x;
  export default Vue.extend({
    components: {
      ToolbarGuest
    },
    methods:{
      goToCompare(){
        VueRouter.push({ name: 'compare', params: { id1: this.selected[0].id, id2: this.selected[1].id }})
      },
      enterSelect(event){
        this.selected = event;
      },
      exportSystem(){
        //Test
        // console.log(this.Datas.animals)
        // console.log(JSON.stringify(this.Datas.animals))
        // var animalWS = XLSX.utils.json_to_sheet(this.Datas.animals)
        // var pokemonWS = XLSX.utils.json_to_sheet(this.Datas.pokemons)
        // var wb = XLSX.utils.book_new()
        // XLSX.utils.book_append_sheet(wb, animalWS, 'animals')
        // XLSX.utils.book_append_sheet(wb, pokemonWS, 'pokemons')
        // XLSX.writeFile(wb, 'book.xlsx')

        console.log("Selected length is: " + this.selected.length);

          for(var i = 0; i < this.selected.length; i++) {
            console.log("Export requests are: " + this.selected[i].name);
            this.systemsToExport.push(this.selected[i])

          }
        console.log(this.systemsToExport);
        console.log(JSON.stringify(this.systemsToExport));



        //json convert to excel sheet
        var expSys = XLSX.utils.json_to_sheet(this.systemsToExport);

        //creating a workbook
        var multipleSys = XLSX.utils.book_new();

        //adding sheets to workbook
        XLSX.utils.book_append_sheet(multipleSys, expSys, 'Thrusters');

          //download file
          XLSX.writeFile(multipleSys, 'Systems.xlsx');

        alert("exporting");
      }
    },
    computed:{
      isCompareEnabled:function(){
        console.log(this.selected.length)
        if (this.selected.length == 2)
        {
          return true;
        }
        return false;
        //return this.selected.length=2

      },
      filter:function(){
        // console.log(one);
        // console.log(two);
      }
    }, 
    data() {
      return {
        selected: [],
        search:'',
        headers: [
          { 
            text: 'Thruster Name',
            value: 'name'
          },
          { 
            text: 'Manufacturer', 
            value: 'manufacturer'
          },
          { 
            text: 'Specific Impulse (s)', 
            value: 'specific_impulse', 
            filter: value => {
              const rawMax = this.system.specific_impulse_max;
              const rawMin = this.system.specific_impulse_min;
              if (value == null && !rawMax && !rawMin) return true;

              const max = parseInt(rawMax, 10) || Infinity;
              const min = parseInt(rawMin, 10) || 0;
              
              return (value < max) && (value > min);
            }
          },
          { 
            text: 'Thrust (mN)', 
            value: 'thrust', 
            filter: value => {
              const rawMax = this.system.thrust_max;
              const rawMin = this.system.thrust_min;
              if (value == null && !rawMax && !rawMin) return true;

              const max = parseInt(rawMax, 10) || Infinity;
              const min = parseInt(rawMin, 10) || 0;
              
              return (value < max) && (value > min);
            }
          },
          { 
            text: 'System Efficiency (%)', 
            value: 'system_efficiency', 
            filter: value => {
              const rawMax = this.system.system_efficiency_max;
              const rawMin = this.system.system_efficiency_min;
              if (value == null && !rawMax && !rawMin) return true;

              const max = parseInt(rawMax, 10) || Infinity;
              const min = parseInt(rawMin, 10) || 0;
              
              return (value < max) && (value > min);
            }
          },
          { 
            text: 'Propellant', 
            value: 'propellant'
          },
          { 
            text: 'Mass (kg)', 
            value: 'weight', 
            filter: value => {
              const rawMax = this.system.weight_max;
              const rawMin = this.system.weight_min;
              if (value == null && !rawMax && !rawMin) return true;

              const max = parseInt(rawMax, 10) || Infinity;
              const min = parseInt(rawMin, 10) || 0;
              
              return (value < max) && (value > min);
            }
          },
          { 
            text: 'Input Power (W)', 
            value: 'input_power', 
            filter: value => {
              const rawMax = this.system.input_power_max;
              const rawMin = this.system.input_power_min;
              if (value == null && !rawMax && !rawMin) return true;

              const max = parseInt(rawMax, 10) || Infinity;
              const min = parseInt(rawMin, 10) || 0;
              
              return (value < max) && (value > min);
            }
          },
          { 
            text: 'Mission Name', 
            value: 'mission_name'
          },
          { 
            text: 'Mission Date', 
            value: 'mission_date'
          },
          { 
            text: 'DeltaV (m/s)', 
            value: 'delta_v', 
            filter: value => {
              const rawMax = this.system.delta_v_max;
              const rawMin = this.system.delta_v_min;
              if (value == null && !rawMax && !rawMin) return true;

              const max = parseInt(rawMax, 10) || Infinity;
              const min = parseInt(rawMin, 10) || 0;
              
              return (value < max) && (value > min);
            }
          },
          { 
            text: 'Dimension Description', 
            value: 'dimension_description'
          },
          { 
            text: 'Dimension Value (m)', 
            value: 'dimension_value'
          },
          { 
            text: 'Interface Name', 
            value: 'interface_name'
          },
          { 
            text: 'Interface Description', 
            value: 'interface_description'
          },
          { 
            text: 'TRL (1-9)', 
            value: 'trl', 
            filter: value => {
              const rawMax = this.system.trl_max;
              const rawMin = this.system.trl_min;
              if (value == null && !rawMax && !rawMin) return true;

              const max = parseInt(rawMax, 10) || Infinity;
              const min = parseInt(rawMin, 10) || 0;
              
              return (value < max) && (value > min);
            }
          },
        ],
        system: [],
        systemsToExport: [],
        Datas: {
          // Sample test data
          'animals': [
            {"name": "cat", "category": "animal"}
            ,{"name": "dog", "category": "animal"}
            ,{"name": "pig", "category": "animal"}
          ],
          'pokemons': [
            {"name": "pikachu", "category": "pokemon"}
            ,{"name": "Arbok", "category": "pokemon"}
            ,{"name": "Eevee", "category": "pokemon"}
          ]
        },

      };
    }, 
    mounted() {
      Axios
        .get('https://oi9r1r09k6.execute-api.us-east-1.amazonaws.com/deploy-stage/retrieve')
        .then((response) => {
          console.log(response.data.body);
          this.system = response.data.body;
        })
        .catch(error => console.log(error));
    }
  })
</script>

<style scoped>
/*  see https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Styling_tables */
.v-data-table__wrapper table {
  table-layout: fixed;
  
}

.v-data-table__wrapper thead th:nth-child(1) {
  width: 3rem;
}

.v-data-table__wrapper thead th:nth-child(2) {
  width: 3rem;
}

.v-data-table__wrapper thead th:nth-child(3) {
  width: 3rem;
}

.v-data-table__wrapperthead th:nth-child(4) {
  width: 3rem;
}
.v-data-table__wrapper thead th:nth-child(5) {
  width: 3rem;
}

.v-data-table__wrapper thead th:nth-child(6) {
  width: 3rem;
}

.v-data-table__wrapper thead th:nth-child(7) {
  width: 3rem;
}

.v-data-table__wrapperthead th:nth-child(8) {
  width: 3rem;
}
.v-data-table__wrapper thead th:nth-child(9) {
  width: 3rem;
}

.v-data-table__wrapper thead th:nth-child(10) {
  width: 3rem;
}

.v-data-table__wrapper thead th:nth-child(11) {
  width: 3rem;
}

.v-data-table__wrapperthead th:nth-child(12) {
  width: 3rem;
}
.v-data-table__wrapper thead th:nth-child(13) {
  width: 3rem;
}

.v-data-table__wrapper thead th:nth-child(14) {
  width: 3rem;
}

.v-data-table__wrapper thead th:nth-child(15) {
  width: 3rem;
}

.v-data-table__wrapperthead th:nth-child(16) {
  width: 3rem;
}
</style>