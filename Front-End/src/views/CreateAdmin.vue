<template>
  <div id="create">
    <v-content>
        <ToolbarAdmin/>
    </v-content>
    <v-spacer></v-spacer>
    <v-expansion-panels
      hover
      tile
    >
    <v-expansion-panel>
      <div>
        <v-expansion-panel-header>Help</v-expansion-panel-header>
      </div>
      <v-expansion-panel-content class="mx-auto">
        Insert information about the Thruster first by clicking the Create System Button.
        Name and Manufacturer are the only required fields.
        
      </v-expansion-panel-content>
      <v-expansion-panel-content>
        Any additional information can be added using the Dimensions, Missions and Interfaces sliders below. 
        If any sliders are enabled, fill out the respective form and hit the Insert Into other Tables Button.
      </v-expansion-panel-content>
    </v-expansion-panel>
    </v-expansion-panels>

    <div id="Textboxes">
      <v-row align="center">
        <v-row justify="space-around">
          <v-switch  v-model="dimensionsSlider" class="ma-4" label="Dimensions" value="true" append-icon="mdi-rocket"></v-switch>
         <!-- <v-switch v-model="availabilitySlider" class="ma-4" label="Availability" value="true" append-icon="mdi-calendar"></v-switch> -->
          <v-switch v-model="missionsSlider" class="ma-4" label="Missions" value="true" append-icon="mdi-clipboard-list-outline"></v-switch>
          <v-switch v-model="interfacesSlider" class="ma-4" label="Interfaces" value="true" append-icon="mdi-console"></v-switch>
        </v-row>
      </v-row>

    <!-- Card for Thruster input fields -->
      <v-card
        class="mx-auto"
        max-width="400"
        outlined
        raised
      >
        <v-form
          ref="form"
        >
        <v-container>
          <h5>Thruster</h5>

          <v-text-field
            v-model="newSystem.name"
            :rules="nameInputRules"
            label="Name"
            required
          >
          </v-text-field>

          <v-text-field
            v-model="newSystem.manufacturer"
            :rules="nameInputRules"
            label="Manufacturer"
            required
          >
          </v-text-field>

          <v-text-field
            v-model="newSystem.specific_impulse"
            :rules="numberInputRules"
            label="Specific Impulse (s)"
          >
          </v-text-field>

          <v-text-field
            v-model="newSystem.thrust"
            :rules="numberInputRules"
            label="Thrust (mN)"
            required
          >
          </v-text-field>

          <v-text-field
            v-model="newSystem.system_efficiency"
            label="System Efficiency (%)"
          >
          </v-text-field>

          <v-text-field
            v-model="newSystem.propellant"
            :rules="textInputRules"
            label="Propellant"
          >
          </v-text-field>

          <v-text-field
            v-model="newSystem.weight"
            :rules="numberInputRules"
            label="Mass (kg)"
          >
          </v-text-field>

          <v-text-field
            v-model="newSystem.input_power"
            :rules="numberInputRules"
            label="Input Power (W)"
          >
          </v-text-field>

          <v-text-field
            v-model="newSystem.trl"
            :rules="numInputRules"
            label="TRL"
          >
          </v-text-field>

          <v-container>
            <p
              class="mx-auto"
            >Reference Information</p>
          </v-container>

          <v-text-field
            v-model="newSystem.reference"
            :rules="textInputRules"
            label="Reference URL (http://)"
          >
          </v-text-field>

          <v-text-field
            v-model="newSystem.author"
            :rules="textInputRules"
            label="Author"
          >
          </v-text-field>

          <v-text-field
            v-model="newSystem.title"
            :rules="textInputRules"
            label="Title"
          >
          </v-text-field>

          <v-text-field
            v-model="newSystem.journal"
            :rules="textInputRules"
            label="Journal"
          >
          </v-text-field>


          </v-container>
        </v-form>
      </v-card>

      <!-- Card for dimensions -->
      <v-spacer>.</v-spacer>
      <v-card v-if="dimensionsSlider"
        class="mx-auto"
        max-width="400"
        outlined
        raised
      >
        <v-container>
        <h5>Dimensions</h5>

          <v-text-field
            v-model="newSystem.dimension_description"
            :rules="textInputRules"
            :counter="100"
            label="Description"
          >
          </v-text-field>

          <v-text-field
            v-model="newSystem.dimension_value"
            :rules="numberInputRules"
            label="Dimension Value (m)"
          >
          </v-text-field>
        </v-container>

      </v-card>

      <!-- Card for availability -->
      <v-spacer>.</v-spacer>
      <v-card v-if="availabilitySlider"
        class="mx-auto"
        max-width="400"
        outlined
        raised
      >
        <v-container>
        <h5>Availability</h5>

        <!-- Implement calendar date chooser -->
          <v-text-field
            v-model="newSystem.ReadyDate"
            label="Ready Date"
          >
          </v-text-field>

          <v-text-field
            v-model="newSystem.TRL"
            :rules="trlInputRules"
            label="TRL (1-9)"
          >
          </v-text-field>
        </v-container>
      </v-card>

      <!-- Card for missions -->
      <v-spacer>.</v-spacer>
      <v-card v-if="missionsSlider"
        class="mx-auto"
        max-width="400"
        outlined
        raised
      >
        <v-container>
        <h5>Missions</h5>

          <v-text-field
            v-model="newSystem.mission_name"
            :rules="nameInputRules"
            label="Mission Name"
          >
          </v-text-field>

          <!-- Add calendar date picker -->
          <p>
            Mission Date  
          </p> 
          <v-row justify="center">
            <v-date-picker 
              v-model="newSystem.mission_date"
              color='#a53f5b'
            > {{ newSystem.missionDate }} </v-date-picker>
          </v-row>
          <!--
          <v-text-field
            v-model="newSystem.MissionDate"
            label="Mission Date"
          >
          </v-text-field>
          -->

          <v-text-field
            v-model="newSystem.delta_v"
            :rules="numberInputRules"
            label="Delta V (m/s)"
          >
          </v-text-field>
        </v-container>

      </v-card>

      <!-- Card for interfaces -->
      <v-spacer>.</v-spacer>
      <v-card v-if="interfacesSlider"
        class="mx-auto"
        max-width="400"
        outlined

        raised
      >
        <v-container>
        <h5>Interfaces</h5>

          <v-text-field
            v-model="newSystem.interface_name"
            :rules="nameInputRules"
            label="Interface Name"
          >
          </v-text-field>

          <v-text-field
            v-model="newSystem.interface_description"
            :rules="textInputRules"
            :counter="100"
            label="Interface Description"
          >
          </v-text-field>

        </v-container>
        
      </v-card>



      <v-row align="center">       
        <v-col class="text-center">

         <!-- confirmation message upon creation -->
        <p v-if='Array.isArray(APIResult) === false'>Object inserted with ID: {{ APIResult }}</p>
        
        <v-btn 
            color='#a53f5b'
            dark 
            large
            v-on:click="create"
          >Create System
         </v-btn>

         <v-btn 
            v-if="dimensionSlider == 'true' || missionsSlider == 'true' || interfacesSlider == 'true'"
            color='#a53f5b'
            dark 
            large
            v-on:click="create2"
          >Insert Other Tables
         </v-btn>

        <v-btn
          @click="clear"
          light
          large
        >
          Clear
        </v-btn>

         <v-divider></v-divider>


        </v-col>
      </v-row>
        
      <v-divider></v-divider>

    </div>
  </div>
</template>

<script>
  import ToolbarAdmin from '../components/Toolbar.vue';
  import CreateAlert from '../components/CreateAlert.vue'
  import { required, minLength, between } from 'vuelidate/lib/validators'
  import axios from 'axios'
  export default {
    components: {
      ToolbarAdmin,
      CreateAlert
    },
    data () {
      return {
        // variables for slider state
        dimensionsSlider: false,
        availabilitySlider: false,
        missionsSlider: false,
        interfacesSlider: false,
        picker: new Date(),
        newSystem: [],
        APIResult: [],
        thrusterId: null,
        nameInputRules: [
          v => v && !!v || 'Required',
          // Does not work on characters past first need to fix
          v => v && /[a-zA-Z0-9]/.test(v) || 'No special characters allowed.',
          v => v && v.length < 20 || 'Maximum length is 20 characters.'
        ],
        textInputRules: [
          // no special characters
          v => v && /[-_a-zA-Z]/.test(v) || 'No special characters allowed.',
          v => v.length < 45 || 'Maximum length is 45 characters.'
        ],
        numberInputRules: [
          v => /^[1-9]\d*(\.\d+)?$/.test(v) || 'Value must be a number.',
        ],
        trlInputRules: [
          v => v <= 9 || 'Value must be between 1 and 9.',
          v => v && v != 0 || 'Value must be non-zero.'
        ],
        newSystem:[]
      }
    },
    methods: {
      // method to create a system
      create() {
        // Parse data from text fields into newSystem object
          this.newSystem = {
            body: {
              thruster_id: [],  
              Thrust: {
                name: this.newSystem.name,
                thrust: this.newSystem.thrust,
                specific_impulse: this.newSystem.specific_impulse,
                manufacturer: this.newSystem.manufacturer,
                propellant: this.newSystem.propellant,
                system_efficiency: this.newSystem.system_efficiency,
                weight: this.newSystem.weight,
                input_power: this.newSystem.input_power,
                trl: this.newSystem.trl,
                reference: this.newSystem.reference,
                ref_author: this.newSystem.author,
                ref_title: this.newSystem.title,
                ref_journal: this.newSystem.journal
              },
              Missions: {
                mission_name: this.newSystem.mission_name,
                mission_date: this.newSystem.mission_date,
                delta_v: this.newSystem.delta_v
              },  
              Dimensions: {
                dimension_description: this.newSystem.dimension_description,
                dimension_value: this.newSystem.dimension_value
              },
              Interfaces: {
                interface_name: this.newSystem.interface_name,
                interface_description: this.newSystem.interface_description
              }   
          } 
      }
                
        // Encode system object to be sent to backend
        JSON.stringify(this.newSystem);

        // Insert into the thruster table to receive the ID for foreign key
        axios
          .post('https://oi9r1r09k6.execute-api.us-east-1.amazonaws.com/deploy-stage/create/', this.newSystem.body)
          .then((response) => {
            this.APIResult= response.data.body.insertId;
            this.newSystem.body.thruster_id = this.APIResult;
          })
          .catch(function(error) {
            console.log(error);
          });        
      }, 
      create2(){
        JSON.stringify(this.newSystem);
        axios
          .post(`https://oi9r1r09k6.execute-api.us-east-1.amazonaws.com/deploy-stage/createtwo/`, this.newSystem)
          .then((response) => {
            console.log("last thing");
            console.log(response.data);
            //console.log('inserted into other tables.')
          })
          .catch(function(error) {
            console.log(error.stack);
          });  
      },
      clear() {
        //this.$refs.form.reset()
      }
    }
  }
</script>
