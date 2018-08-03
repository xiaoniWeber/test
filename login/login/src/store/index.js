import Vue from 'vue'
import Vuex from 'vuex'
import GlobalInfo from './modules/global.js'
Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        globalInfo: GlobalInfo,
       
    }
})
export default store