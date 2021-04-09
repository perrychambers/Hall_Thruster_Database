<template>
    <v-toolbar 
      light
      max-height='70'
      >
<!--      :src="require('../assets/magenta-pink.png')"-->
<!--    >-->
        <v-toolbar-title class="helvetica text-uppercase">
            <span>Hall Effect Thruster </span>
            <span class="font-weight-light">Database</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <!--        https://psyche.asu.edu/wp-content/themes/psyche/static/img/nasa.svg-->
        <v-btn text v-if="$store.getters.loggedIn === 'true'" href="#tab-1" >
            <router-link to="/retrieve">
                Records
            </router-link>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn text v-if="$store.getters.loggedIn === 'true'" href="#tab-5">
            <router-link to="/compare">
                Compare
            </router-link>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn text v-if="$store.getters.loggedIn === 'true' && $store.getters.userType === 'admin'" href="#tab-2">
            <router-link to="/create">
                Create
            </router-link>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn text v-if="$store.getters.loggedIn === 'true' && $store.getters.userType === 'admin'" href="#tab-3" >
            <router-link to="/edit">
                Modify
            </router-link>
        </v-btn>
        <v-spacer></v-spacer>
<!--        <v-btn text v-if="$store.getters.loggedIn === 'true' && $store.getters.userType === 'admin'" href="#tab-4">-->
<!--            <router-link to="/configure">-->
<!--                Configurations-->
<!--            </router-link>-->
<!--        </v-btn>-->
<!--        <v-spacer></v-spacer>-->

        <v-spacer></v-spacer>

        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>

        <!-- Home Button if wanted 
        <v-btn outlined light>
            <router-link to='/'>
                <v-icon>mdi-home</v-icon> 
            </router-link>
        </v-btn>
        -->
        <v-btn
            outlined
           href= 'https://psyche.asu.edu/'
            target="_blank"
            tag="Psyche"
        >PSYCHE
        </v-btn>
        <v-btn
            outlined
            href="https://nasa.gov"
            target="_blank"
            tag="NASA"

        >NASA
        </v-btn>
        <v-btn class="mx-2" fab dark small color="pink"
                v-if="$store.getters.loggedIn === 'false'"
                v-on:click="login('admin')"
                @click.stop="dialog = true"
        >
            <v-icon>mdi-rocket-outline</v-icon>
        </v-btn>

        <v-btn 
            v-if="$store.getters.loggedIn === 'true'"
            outlined
            class="ma-2"

            v-on:click="logout()"
        >
            <v-icon>mdi-logout</v-icon>
        </v-btn>

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
    </v-toolbar>
</template>

<script lang="js">
export default ({

  name: 'Toolbar',
    props: {
        userTypeProp: {
            default: "guest",
            type: String
        }
    },
    create(){
      this.userType = this.userTypeProp
    },
    data () {
      return{
          items: [
              {title: 'View System'},
              {title: 'Edit System'},
              {title: 'Create System'},
              {title: 'Compare Systems'}
          ],
          //hideTabs: "true",
          //disabledTab: true,
          userType: " ",
          dialog: false,
          password: '',
          passwordRules: [
              v => !!v || 'Password is required',
              v => (v && v.length <= 10) || 'Password must be less than 10 characters',
          ],
      }
  },

    methods: {
        logout() {
            this.$store.commit('logout')
            this.$router.push({name: 'home'})
        },
        checkPassword: function () {
            if (this.$refs.form.validate()){
                console.log(this.password)
                if(this.password === 'psyche') {
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

    },


});
</script>

