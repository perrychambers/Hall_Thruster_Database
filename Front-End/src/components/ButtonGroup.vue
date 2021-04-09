<template>

    <div class="text-xs-center">
        <v-content>
            <div>
                <Toolbar/>
            </div>
        </v-content>

<v-card
    outlined
>
    <h1 class="font-weight-bold text-center">Welcome to the Hall-Effect Thruster Database</h1>
    <v-img
        contain
        behind
        position="center"
        height="150px"
        src="@/assets/Psyche_BadgeOutline_Color-PNG.png" 
    >
    </v-img>

        <p class="text-md-center">Enter the database to view and compare systems in the database.</p>
    <v-spacer></v-spacer>
</v-card>

        <v-row>
            <v-img
                    max-height="250px"
                    max-width="250px"
                    class="mx-auto"
                    src="https://psyche.asu.edu/wp-content/uploads/2017/12/asteroid-story.png"
            >
            </v-img>
        </v-row>
        <v-row
                class="mx-auto"
                align="center"
                justify="center"
        >


            <v-btn
                    v-on:click="login('guest')"
                    dark
                    raised
                    center
                    ripple
                    class="ma-2 mt-lg-9"
                    width="200"
                    height="50"
                    color='#a53f5b'

            >View Database
            </v-btn>

<!--            <v-img-->
<!--                max-height="250px"-->
<!--                max-width="250px"-->
<!--                class="mx-auto"-->
<!--                src="https://psyche.asu.edu/wp-content/uploads/2017/12/asteroid-story.png"-->
<!--            >-->
<!--            </v-img>-->

<!--            <v-btn-->
<!--                    v-on:click="login('admin')"-->
<!--                    @click.stop="dialog = true"-->
<!--                    dark-->
<!--                    raised-->
<!--                    ripple-->
<!--                    class="ma-2 mt-lg-9"-->
<!--                    width="200"-->
<!--                    height="150"-->
<!--                    color='#a53f5b'-->
<!--            >Administrator-->
<!--            </v-btn>-->

            <v-dialog
                    v-model="dialog"
                    max-width="500"
            >
                <v-card>
                    <v-card-title>Enter admin password: </v-card-title>
                    <v-container>
                        <v-form ref="form" >
                        <v-text-field
                                v-model="password"
                                type="password"
                                label="Password"
                                :rules="passwordRules"
                                required
                        >
                        </v-text-field>

                    </v-form>
                    </v-container>

                    <v-card-actions>
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
                                @click="checkPassword"
                        >
                            Enter
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>

        <v-row
            class="text-center"
        >
            <v-card
                min-height="300px"
            >
            <v-card-text
                outlined
                absolute
            >
                This work was created in partial fulfillment of Penn State Erie, The Behrend College Capstone
            Course “SWENG 480/CPMSC 481″. The work is a result of the Psyche Student Collaborations component
            of NASA’s Psyche Mission (https://psyche.asu.edu). “Psyche: A Journey to a Metal World”
            [Contract number NNM16AA09C] is part of the NASA Discovery Program mission to solar system targets.
            Trade names and trademarks of ASU and NASA are used in this work for identification only.
            Their usage does not constitute an official endorsement, either expressed or implied, by Arizona
            State University or National Aeronautics and Space Administration. The content is solely the
            responsibility of the authors and does not necessarily represent the official views of ASU or NASA.
            </v-card-text>            
            </v-card>
        </v-row>





     

<!--        <v-row class="text-center" align="start">-->
<!--            <v-card-text>-->
<!--                This work was created in partial fulfillment of Penn State Erie, The Behrend College Capstone-->
<!--                Course “SWENG 480/CPMSC 481″. The work is a result of the Psyche Student Collaborations component-->
<!--                of NASA’s Psyche Mission (https://psyche.asu.edu). “Psyche: A Journey to a Metal World”-->
<!--                [Contract number NNM16AA09C] is part of the NASA Discovery Program mission to solar system targets.-->
<!--                Trade names and trademarks of ASU and NASA are used in this work for identification only.-->
<!--                Their usage does not constitute an official endorsement, either expressed or implied, by Arizona-->
<!--                State University or National Aeronautics and Space Administration. The content is solely the-->
<!--                responsibility of the authors and does not necessarily represent the official views of ASU or NASA.-->
<!--            </v-card-text>-->
<!--        </v-row>-->
    </div>
</template>


<script>
    import Toolbar from '../components/Toolbar.vue';
    export default {
        props: {

        },
        components: {
            Toolbar
        },
        created() {
            this.userType = this.userTypeProp
        },
        data () {
            return {
                dialog: false,
                password: '',
                passwordRules: [
                    v => !!v || 'Password is required',
                    v => (v && v.length <= 10) || 'Password must be less than 10 characters',
                ],
                disclaimer: ''
            }
        },
        methods: {
            checkPassword: function () {
                if (this.$refs.form.validate()){
                        console.log(this.password)
                    if(this.password === 'abcd') {
                        this.$store.commit('changeLoggedIn', 'true')
                        this.$router.push({name: 'retrieve system'})
                    } else{
                        alert('Incorrect password, try again!')
                    }
                }

                    },

            login: function(type) {
                if (type === 'admin' || type === 'guest'){
                    this.$store.commit('changeUserType', type)

                    if (type === 'admin'){
                        //sysLock?
                    }

                    if(type === 'guest') {
                        this.$store.commit('changeLoggedIn', 'true')
                        this.$router.push({name: 'retrieve system'})
                    }
                }
                console.log('Logging in as ' + this.$store.getters.userType)
            }
        }
    }
</script>
