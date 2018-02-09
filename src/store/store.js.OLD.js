import Vue from 'vue';
import Vuex from 'vuex';

//Lecture 257
import { mapGetters } from 'vuex';

Vue.use(Vuex);

// Note the uppercase 'S' in .Store
export const store = new Vuex.Store({
    //this name is NOT arbitrary. It MUST be called 'state'
    state: {
        supplyObject:{
            haveSwitch: null,
            supplies: [
                {item: 'Paper Towels', have: true},
                {item: 'Toilet Paper', have: false},
                {item: 'Dish Soap', have: false}
              ]
        },
    },
    getters: {
        getSupplyHaveSwitch: state =>{
            return state.supplyObject.haveSwitch;
        },
        getSupplies: state =>{
            return state.supplyObject.supplies;
        }
    },

    mutations: {
        suppliesAddSupply: (state, supply) => {
            //expects a supply object {item:, have: }
            state.supplyObject.supplies.push(supply);
        },
        
        suppliesChangeItemHaveStatus: (state, payload) =>{
            //expects a supply object {item:, have: }
            payload.have = !payload.have;
        },

        suppliesDeleteItem: (state, index) => {
            //expects the array index of the item to be deleted
            //Deletes a supply object at that index
            state.supplyObject.supplies.splice(index, 1);
        },

        suppliesSetHaveSwitch: (state, payloadBool) =>{
            //receives a boolean and sets central haveSwitch to that boolean
            state.supplyObject.haveSwitch = payloadBool;
        },

        suppliesSwtichAllHaveStatus: (state) => {
            //switches all the supply objects have bools to be the same
            state.supplyObject.haveSwitch = !state.supplyObject.haveSwitch;

            for(let i = 0; i < state.supplyObject.supplies.length; i++){
                state.supplyObject.supplies[i].have = state.supplyObject.haveSwitch;
            }
        },

        suppliesToggleHaveSwitch: (state) => {
            state.supplyObject.haveSwitch = !state.supplyObject.haveSwitch;
        }

    }, //END MUTATIONS
    actions: {
        suppliesAddSupply: ( {commit}, supply) =>{
            //expects a supply object {item:, have: }
            commit('suppliesAddSupply', supply);
        },
        suppliesChangeItemHaveStatus: ({commit}, payload) => {
            //expects a supply object {item:, have: }
            commit('suppliesChangeItemHaveStatus', payload);
        },

        suppliesDeleteItem: ( {commit}, index ) =>{
            //expects the array index of the item to be deleted
                commit('suppliesDeleteItem', index);
        },
        suppliesSetHaveSwitch: ( {commit}, payloadBool )=>{
            //expects a boolean
            commit('suppliesSetHaveSwitch', payloadBool);
        },

        suppliesSwtichAllHaveStatus: ( {commit} ) =>{
            //changes all the bools in the supply array to same
            commit('suppliesSwtichAllHaveStatus');
        },

        suppliesToggleHaveSwitch: ( {commit} ) => {
            //toggles the bool in a single supply object {item:, have: }
            commit('suppliesToggleHaveSwitch');
        }
    } // END ACTIONS
    
}); // END STORE