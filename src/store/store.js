import Vue from 'vue';
import Vuex from 'vuex';

import suppliesModule from './modules/suppliesModule.js';


Vue.use(Vuex);

// Note the uppercase 'S' in .Store
export const store = new Vuex.Store({
    state:{},
    getters:{},
    mutations:{},
    actions:{},
    modules: {
        suppliesModule
    }
    
}); // END STORE