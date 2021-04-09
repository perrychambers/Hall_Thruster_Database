import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({

  state: {
      userType: '',
      loggedIn: 'false'
  },
    getters: {
        userType: state => state.userType,
        loggedIn: state => state.loggedIn
    },
    mutations: {
      changeUserType(state, userType){
          state.userType = userType
      },
      changeLoggedIn(state, loggedIn){
          state.loggedIn = loggedIn
      },
      logout(state) {
          state.loggedIn = 'false'
      }
  }

})
