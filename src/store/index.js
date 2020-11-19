import Vue from 'vue'

import Vuex from 'vuex'


Vue.use(Vuex)

const store = new Vuex.Store({
　　state:{
　　　　count:1,
        user:{

        },
        login_state:false
　　　　　　　　}
})
export default store

