import * as types from '../../store/types.js'

const state = {
    
        haveSwitch: null,
        supplies: [
            {item: 'Paper Towels', have: true},
            {item: 'Toilet Paper', have: false},
            {item: 'Dish Soap', have: false}
          ]
    
}; //END STATE

const getters = {
    [types.GET_HAVE_SWITCH]: state =>{
        return state.haveSwitch;
    },

    // getHaveSwitch: state =>{
    //     return state.haveSwitch;
    // },
    getSupplies: state =>{
        return state.supplies;
    }
}; //END GETTERS

const mutations = {
    addSupply: (state, supply) => {
        //expects a supply object {item:, have: }
        state.supplies.push(supply);
    },
    
    changeItemHaveStatus: (state, payload) =>{
        //expects a supply object {item:, have: }
        payload.have = !payload.have;
    },

    deleteItem: (state, index) => {
        //expects the array index of the item to be deleted
        //Deletes a supply object at that index
        state.supplies.splice(index, 1);
    },

    setHaveSwitch: (state, payloadBool) =>{
        //receives a boolean and sets central haveSwitch to that boolean
        state.haveSwitch = payloadBool;
    },

    switchAllHaveStatus: (state) => {
        //switches all the supply objects have bools to be the same
        state.haveSwitch = !state.haveSwitch;

        for(let i = 0; i < state.supplies.length; i++){
            state.supplies[i].have = state.haveSwitch;
        }
    },

    toggleHaveSwitch: (state) => {
        state.haveSwitch = !state.haveSwitch;
    }
};// END MUTATIONS

const actions = {
    addSupply: ( {commit}, supply) =>{
        //expects a supply object {item:, have: }
        commit('addSupply', supply);
    },
    changeItemHaveStatus: ({commit}, payload) => {
        //expects a supply object {item:, have: }
        commit('changeItemHaveStatus', payload);
    },

    deleteItem: ( {commit}, index ) =>{
        //expects the array index of the item to be deleted
            commit('deleteItem', index);
    },
    setHaveSwitch: ( {commit}, payloadBool )=>{
        //expects a boolean
        commit('setHaveSwitch', payloadBool);
    },

    switchAllHaveStatus: ( {commit} ) =>{
        //changes all the bools in the supply array to same
        commit('switchAllHaveStatus');
    },

    toggleHaveSwitch: ( {commit} ) => {
        //toggles the bool in a single supply object {item:, have: }
        commit('toggleHaveSwitch');
    }
}; // END ACTIONS

export default {
    state,
    mutations,
    actions,
    getters
}