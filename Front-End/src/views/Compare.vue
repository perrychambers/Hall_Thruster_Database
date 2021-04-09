<template>
    <div class="compare">
        <v-content>
            <div>
                <ToolbarGuest />
            </div>
        </v-content>
        <v-spacer>.</v-spacer>
        <h1 class="text-center">Compare Systems</h1>
        <p class="text-center">
            Select two thrusters to compare side by side.
        </p>

        <v-divider></v-divider>
        <v-container grid-list-md>

            <v-layout row>
                <v-flex>
                    <v-select
                            :items = "nameList"
                            item-text = "name"
                            item-value = "id"
                            v-model = "selectedItem"
                            @change = "update($event)"
                            label="Select 1st thruster"
                            segmented overflow editable
                            target="#target"
                    ></v-select>
                </v-flex>
                <v-flex>
                    <v-select
                            :items = "nameList"
                            item-text = "name"
                            item-value = "id"
                            v-model = "selectedItem2"
                            @change = "update2($event)"
                            label="Select 2nd thruster"
                            segmented overflow editable
                            target="#target"
                    ></v-select>
                </v-flex>
            </v-layout>
        </v-container>

        <v-container grid-list-md text-center align-content-space-around>
            <v-layout row>
                <v-flex v-for="item in system1" :key="item.name" text-md-left>
                    <v-card
                            class ="mx-auto"
                            max-width="200"
                            outlined
                            raised>
                        <v-card-text>
                            <div>{{item.name}}</div>
                            <div>{{item.man}}</div>
                            <div>{{item.si}}</div>
                            <div>{{item.thrust}}</div>
                            <div>{{item.syse}}</div>
                            <div>{{item.pro}}</div>
                            <div>{{item.w}}</div>
                            <div>{{item.ip}}</div>
                            <div>{{item.mn}}</div>
                            <div>{{item.md}}</div>
                            <div>{{item.dv}}</div>
                            <div>{{item.dimd}}</div>
                            <div>{{item.dimv}}</div>
                            <div>{{item.intn}}</div>
                            <div>{{item.intd}}</div>
                            <div>{{item.trl}}</div>
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex>
                    <v-card
                            class ="mx-auto"
                            max-width="300"
                            outlined
                            raised>
                        <v-card-text>
                            <div>{{system2.name}}</div>
                            <div>{{system2.manufacturer}}</div>
                            <div>{{system2["specific_impulse"] || "-"}}</div>
                            <div>{{system2.thrust || "-"}}</div>
                            <div>{{system2["system_efficiency"] || "-"}}</div>
                            <div>{{system2.propellant || "-"}}</div>
                            <div>{{system2.weight || "-"}}</div>
                            <div>{{system2["input_power"] || "-"}}</div>
                            <div>{{system2["mission_name"] || "-"}}</div>
                            <div>{{system2["mission_date"] || "-"}}</div>
                            <div>{{system2["delta_v"] || "-"}}</div>
                            <div>{{system2["dimension_description"] || "-"}}</div>
                            <div>{{system2["dimension_value"] || "-"}}</div>
                            <div>{{system2["interface_name"] || "-"}}</div>
                            <div>{{system2["interface_description"] || "-"}}</div>
                            <div>{{system3["trl"] || "-"}}</div>
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex>
                    <v-card
                            class ="mx-auto"
                            max-width="300"
                            outlined
                            raised>
                        <v-card-text>
                            <div>{{system3.name}}</div>
                            <div>{{system3.manufacturer}}</div>
                            <div>{{system3["specific_impulse"] || "-"}}</div>
                            <div>{{system3.thrust || "-"}}</div>
                            <div>{{system3["system_efficiency"] || "-"}}</div>
                            <div>{{system3.propellant || "-"}}</div>
                            <div>{{system3.weight || "-"}}</div>
                            <div>{{system3["input_power"] || "-"}}</div>
                            <div>{{system3["mission_name"] || "-"}}</div>
                            <div>{{system3["mission_date"] || "-"}}</div>
                            <div>{{system3["delta_v"] || "-"}}</div>
                            <div>{{system3["dimension_description"] || "-"}}</div>
                            <div>{{system3["dimension_value"] || "-"}}</div>
                            <div>{{system3["interface_name"] || "-"}}</div>
                            <div>{{system3["interface_description"] || "-"}}</div>
                            <div>{{system3["trl"] || "-"}}</div>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>

    </div>
</template>

<script>
    import ToolbarGuest from '../components/Toolbar.vue';
    import Axios from 'axios'
    import Vue from 'vue'
    import VueRouter from '../router/index.ts'
    var x = 1111, y = 2222;
    let three = 'https://oi9r1r09k6.execute-api.us-east-1.amazonaws.com/deploy-stage/retrieve'
    // let one = `https://oi9r1r09k6.execute-api.us-east-1.amazonaws.com/deploy-stage/getById?id=${x}`
    // let two = `https://oi9r1r09k6.execute-api.us-east-1.amazonaws.com/deploy-stage/getById?id=${y}`
    // let three = 'https://oi9r1r09k6.execute-api.us-east-1.amazonaws.com/deploy-stage/retrieve'
    // const request1 = Axios.get(one);
    // const request2 = Axios.get(two);
    // const request3 = Axios.get(three);
    export default{
        components: {
            ToolbarGuest
        },
        // computed: {
        //   test(){
        //     return this.nameList.map((item) => {
        //       return item.name;console.log(item);
        //     })
        //   }
        // },
        methods:{
            update(event){
                console.log(event);
                x = event;
                let one = `https://oi9r1r09k6.execute-api.us-east-1.amazonaws.com/deploy-stage/getById?id=${x}`
                Axios.get(one)
                    .then(res => {
                        console.log(res.data.body);
                        this.system2 = res.data.body[0]
                        //console.log(res);
                    })
                    .catch(errors => console.log(errors));
            },

            update2(event){
                console.log(event);
                y = event;
                let two = `https://oi9r1r09k6.execute-api.us-east-1.amazonaws.com/deploy-stage/getById?id=${y}`
                Axios.get(two)
                    .then(res => {this.system3 = res.data.body[0]})
                    .catch(errors => console.log(errors));
            }
        },
        data(){
            return{
                system1: [
                    { name: 'Name', man: 'Manufacturer', si: 'Specific Impulse (s)', thrust: 'Thrust (mN)', syse: 'System Efficiency', pro: 'Propellant', w: 'Weight (kg)',
                        ip: 'Input Power (W)', mn: 'Mission Name', md: 'Mission Date', dv: 'DeltaV (m/s)', dimd: 'Dimension Description', dimv: 'Dimension Value (m)',
                        intn: 'Interface Name', intd: 'Description', trl: 'TRL' },
                ],
                system2:[
                    { text: 'Thruster Name',value: 'name' },
                    { text: 'Manufacturer', value: 'manufacturer' },
                    { text: 'Specific Impulse', value: 'specific_impulse' },
                    { text: 'Thrust', value: 'thrust' },
                    { text: 'System Efficiency', value: 'system_efficiency' },
                    { text: 'Propellant', value: 'propellant' },
                    { text: 'Weight', value: 'weight' },
                    { text: 'Input Power', value: 'input_power' },
                    { text: 'Mission Name', value: 'mission_name' },
                    { text: 'Mission Date', value: 'mission_date' },
                    { text: 'DeltaV', value: 'delta_v' },
                    { text: 'Dimension Description', value: 'dimension_description' },
                    { text: 'Dimension Value', value: 'dimension_value' },
                    { text: 'Interface Name', value: 'interface_name' },
                    { text: 'Description', value: 'interface_description' },
                    { text: 'TRL', value: 'trl' },
                ],
                system3:[
                    { text: 'Thruster Name',value: 'name' },
                    { text: 'Manufacturer', value: 'manufacturer' },
                    { text: 'Specific Impulse', value: 'specific_impulse' },
                    { text: 'Thrust', value: 'thrust' },
                    { text: 'System Efficiency', value: 'system_efficiency' },
                    { text: 'Propellant', value: 'propellant' },
                    { text: 'Weight', value: 'weight' },
                    { text: 'Input Power', value: 'input_power' },
                    { text: 'Mission Name', value: 'mission_name' },
                    { text: 'Mission Date', value: 'mission_date' },
                    { text: 'DeltaV', value: 'delta_v' },
                    { text: 'Dimension Description', value: 'dimension_description' },
                    { text: 'Dimension Value', value: 'dimension_value' },
                    { text: 'Interface Name', value: 'interface_name' },
                    { text: 'Description', value: 'interface_description' },
                    { text: 'TRL', value: 'trl' },
                ],
                nameList:[],
                selectedItem: 0,
                selectedItem2: 0
            }
        },
        beforeMount(){
            //update(this.$route.query)

            //console.log(this.$route.query);
        },
        mounted() {
            // const request1 = Axios.get(one);
            // const request2 = Axios.get(two);
            const request3 = 'https://oi9r1r09k6.execute-api.us-east-1.amazonaws.com/deploy-stage/retrieve';
            Axios.get(request3)
                .then(res => {console.log(res);this.nameList = res.data.body})
                .catch(errors => console.log(errors));
            //console.log(this.$route.params.id1);
            if (this.$route.params.id1 != null)
            {
                x = this.$route.params.id1;
                y = this.$route.params.id2;
                console.log(x);
                console.log(y);
                this.update(x);
                this.update2(y);
            }

            //x = this.$route.query
            // Axios.all([request1, request2, request3]).then(Axios.spread((...responses) => {
            // const response1 = responses[0].data.body[0]
            // console.log(response1);
            // this.system2 = response1;
            // const response2 = responses[1].data.body[0]
            // console.log(response2);
            // this.system3 = response2;
            // const response3 = responses[2].data.body
            // console.log(response3);
            // this.nameList = response3;
            // })).catch(errors => console.log(errors));
            // Axios
            //   .get(`https://oi9r1r09k6.execute-api.us-east-1.amazonaws.com/deploy-stage/getById?id=${x}`)
            //   .then((response) => {
            //     console.log(response.data.body);
            //     this.system2 = response.data.body;
            //   })
            //   .catch(error => console.log(error));
        }
    }

</script>