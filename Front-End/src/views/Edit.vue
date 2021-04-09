<template>
    <div class="edit">
        <v-content>
            <div>
                <ToolbarGuest />
            </div>
        </v-content>

<!--        Selecting thruster to edit and loading its data-->
<v-spacer>.</v-spacer>
        <h1 class="text-center">
            Edit a System
        </h1>

        <p class="text-center">
            Select a thruster from the database to edit.
        </p>
        <v-divider></v-divider>
        <v-container grid-list-sm >
            <v-col lg="6" >
                <v-flex>
                    <v-select
                            :items = "thrusterNames"
                            item-text = "name"
                            item-value = "id"
                            v-model = "selectedItem"
                            @change = "loadData($event)"
                            label="Select a thruster to modify"
                            segmented overflow editable
                            target="#target"

                    ></v-select>
                </v-flex>
            </v-col>
        </v-container>

        <v-dialog
                v-model="dialog"
                max-width="600"
        >
            <v-card>
                <v-card-title class="text-center"> Edit Thruster </v-card-title>

                <v-form ref="form" >
                    <v-text-field
                            v-model="name"
                            label="Name"
                            required
                    >
                    </v-text-field>

                </v-form>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                            color="error"
                            text
                            @click="dialog = false"
                    >
                        Cancel
                    </v-btn>

                    <v-btn
                            color="success"
                            text
                            @click="editRecord(name)"
                    >
                        Save
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>


        <v-card
                class="mx-auto"
                max-width="50%"
                outlined
                raised
                v-if="renderForm === 'true'"
        >

            <v-container>
                <form >
                    <v-text-field
                            v-model="system.name"
                            label="Name"
                            required
                    ></v-text-field>
                    <v-text-field
                            v-model="system.thrust"
                            label="Thrust (mN)"
                            required
                    > </v-text-field>
                    <v-text-field
                            v-model="system['specific_impulse']"
                            label="Specific Impulse (s)"
                    ></v-text-field>
                    <v-text-field
                            v-model="system['manufacturer']"
                            label="Manufacturer"
                            required
                    ></v-text-field>
                    <v-text-field
                            v-model="system['propellant']"
                            label="Propellant"
                    ></v-text-field>
                    <v-text-field
                            v-model="system.weight"
                            label="Mass (kg)"
                    ></v-text-field>
                    <v-text-field
                            v-model="system['input_power']"
                            label="Input Power (W)"
                    ></v-text-field>

                    <!--                    Add other tables w/ multiple query                     -->

<!--                    <v-text-field-->
<!--                            v-model="system['ready_date']"-->
<!--                            label="Ready Date"-->
<!--                    ></v-text-field>-->
<!--                    <v-text-field-->
<!--                            v-model="system.TRL"-->
<!--                            label="TRL"-->
<!--                    ></v-text-field>-->
                    <v-text-field
                            v-model="system['mission_name']"
                            label="Mission Name"
                    ></v-text-field>
                    <v-text-field
                            v-model="system['mission_date']"
                            label="Mission Date"
                    ></v-text-field>
                    <v-text-field
                            v-model="system['delta_v']"
                            label="Delta V"
                    ></v-text-field>
                    <v-text-field
                            v-model="system['dimension_description']"
                            label="Dimention Description"
                    ></v-text-field>
                    <v-text-field
                            v-model="system['dimension_value']"
                            label="Dimention Value"
                    ></v-text-field>
                    <v-text-field
                            v-model="system['interface_name']"
                            label="Interface Name"
                    ></v-text-field>
                    <v-text-field
                            v-model="system['interface_description']"
                            label="Interface Description"
                    ></v-text-field>

                    <v-btn class="mr-4" @click="updateRecord">Update</v-btn>
                </form>

            </v-container>


        </v-card>
        <v-spacer>.</v-spacer>
        <v-divider></v-divider>
    </div>
</template>

<script lang="js">
    import Vue from 'vue'
    import Axios from 'axios'
    import ToolbarGuest from '../components/Toolbar.vue';
    var x;
    export default Vue.extend({
        components: {
            ToolbarGuest
        },

        data() {
            return {
                renderForm: 'false',
                thrusterNames:[],
                selectedItem: 0,
                dialog: false,
                // nameInputRules: [
                //     v => v && !!v || 'Required',
                //     // Does not work on characters past first need to fix
                //     v => v && /[a-zA-Z0-9]/.test(v) || 'No special characters allowed.',
                //     v => v && v.length < 20 || 'Maximum length is 20 characters.'
                // ],
                // textInputRules: [
                //     // no special characters
                //     v => /[-_a-zA-Z]/.test(v) || 'No special characters allowed.',
                //     v => v.length < 20 || 'Maximum length is 20 characters.'
                // ],
                // numberInputRules: [
                //     v => /^[1-9]\d*(\.\d+)?$/.test(v) || 'Value must be a number.',
                // ],
                // trlInputRules: [
                //     v => v <= 9 || 'Value must be between 1 and 9.',
                //     v => v && v != 0 || 'Value must be non-zero.'
                // ],
                system: [],

            };
        },
        methods: {
            updateRecord() {
                 this.system = {
                    body: {
                        Thrust: {
                            id: this.system.id,
                            name: this.system.name,
                            thrust: this.system.thrust,
                            specific_impulse: this.system.specific_impulse,
                            manufacturer: this.system.manufacturer,
                            propellant: this.system.propellant,
                            weight: this.system.weight,
                            input_power: this.system.input_power
                        },
                        Dimensions: {
                            description: this.system.description,
                            dimension_value: this.system.dimension_value

                        },
                        // Availability: {
                        //     ReadyDate: this.system.ReadyDate,
                        //     TRL: this.system.TRL
                        // },
                        Missions: {
                            mission_name: this.system.mission_name,
                            mission_date: this.system.mission_date,
                            delta_v: this.system.DeltaV
                        },
                        Interfaces: {
                            interface_name: this.system.interface_name,
                            interface_description: this.system.interface_description
                        }
                    }

                }
                JSON.stringify(this.system)

                alert("Thruster: " + this.system.body.Thrust.name + " has been updated.")
                console.log("Updated system: ")
                console.log( this.system)
                Axios
                    // .put('https://oi9r1r09k6.execute-api.us-east-1.amazonaws.com/deploy-stage/edit', system)
                    .post('https://oi9r1r09k6.execute-api.us-east-1.amazonaws.com/deploy-stage/modify', this.system)
                    .catch(function(error) {
                        console.log(error);
                    })
                    .then(response => {
                        console.log("THIS ONE");
                        console.log(response);
                    })
                // this.$router.push({name: 'retrieve system'})
            },

            delete() {
                //do stuff
            },
            loadData(event){
                console.log(event);
                x = event;
                Axios.get(`https://oi9r1r09k6.execute-api.us-east-1.amazonaws.com/deploy-stage/getById?id=${x}`)
                    .then(response => {
                        this.system = response.data.body[0],
                            console.log("Getting Data");
                            console.log(this.system);
                    })
                    .catch(errors => console.log(errors));
                this.renderForm = 'true';

            },


        },
        mounted() {
            Axios
                .get('https://oi9r1r09k6.execute-api.us-east-1.amazonaws.com/deploy-stage/retrieve')
                .then(response => {this.thrusterNames = response.data.body})
                .catch(errors => console.log(errors));
        }
    })
</script>