import * as types from '../../store/types.js'

const state = {
    
        haveSwitch: null,
        supplies: [
            //*******CHANGE CHANGE CHANGE NEEDED */
            //*******CHANGE CHANGE CHANGE NEEDED */
            //*******CHANGE CHANGE CHANGE NEEDED */
            //load this from a file the way Max does in project 18 follow along
            {item: 'Paper Towels', have: true},
            {item: 'Toilet Paper', have: false},
            {item: 'Dish Soap', have: false}
          ]
    
}; //END STATE

const getters = {
    [types.GET_HAVE_SWITCH]: state =>{
        return state.haveSwitch;
    },

    [types.GET_SUPPLIES]: state =>{
        return state.supplies;
    }

}; //END GETTERS


const mutations = {
    [types.MUTATE_ADD_SUPPLY]: (state, supply) => {
        //expects a supply object {item:, have: }
                
         // Capitalize each word of input
            //this makes it easier to read and helps to prevent duplicates
        
        supply.item = supply.item.replace(/\b\w/g, (l) => {
             return l.toUpperCase()
            });
        
        //If TF is false, add the item
            //prevents exact duplicates
        let TF = true;
        // state.supplies.forEach((arrayMember)=> {
        //     if(arrayMember.item  === supply.item){
        //         TF = false;
        //     }
        // });
        
        for(let i = 0, n = state.supplies.length; i < n; i++){
            if(supply.item === state.supplies[i].item){
                TF = false;
            }
        }

            if(TF === true){state.supplies.push(supply);}
        
    },
    
    [types.MUTATE_CHANGE_ITEM_HAVE_STATUS]: (state, payload) =>{
        //expects a supply object {item:, have: }
        payload.have = !payload.have;
    },

    [types.MUTATE_DELETE_ITEM]: (state, index) => {
        //expects the array index of the item to be deleted
        //Deletes a supply object at that index
        state.supplies.splice(index, 1);
    },

    [types.MUTATE_SET_HAVE_SWITCH]: (state, payloadBool) =>{
        //receives a boolean and sets central haveSwitch to that boolean
        state.haveSwitch = payloadBool;
    },

    [types.MUTATE_SWITCH_ALL_HAVE_STATUS]: (state) => {
        //switches all the supply objects have bools to be the same
        state.haveSwitch = !state.haveSwitch;

        // for(let i = 0; i < state.supplies.length; i++){
        //     state.supplies[i].have = state.haveSwitch;
        // }

        state.supplies.forEach((arrayMember) =>{
            arrayMember.have = state.haveSwitch;
        })

    },

    [types.MUTATE_TOGGLE_HAVE_SWITCH]: (state) => {
        state.haveSwitch = !state.haveSwitch;
    }
};// END MUTATIONS



const actions = {
    [types.SUPPLY_ADD_SUPPLY]: ( {commit}, supply) =>{
        //expects a supply object {item:, have: }
        commit(types.MUTATE_ADD_SUPPLY, supply);
    },
    [types.SUPPLY_CHANGE_ITEM_HAVE_STATUS]: ({commit}, payload) => {
        //expects a supply object {item:, have: }
        commit(types.MUTATE_CHANGE_ITEM_HAVE_STATUS, payload);
    },

    [types.SUPPLY_DELETE_ITEM]: ( {commit}, index ) =>{
        //expects the array index of the item to be deleted
            commit(types.MUTATE_DELETE_ITEM, index);
    },
    [types.SUPPLY_SET_HAVE_SWITCH]: ( {commit}, payloadBool )=>{
        //expects a boolean
        commit(types.MUTATE_SET_HAVE_SWITCH, payloadBool);
    },

    [types.SUPPLY_SWITCH_ALL_HAVE_STATUS]: ( {commit} ) =>{
        //changes all the bools in the supply array to same
        commit(types.MUTATE_SWITCH_ALL_HAVE_STATUS);
    },

    [types.SUPPLY_TOGGLE_HAVE_SWITCH]: ( {commit} ) => {
        //toggles the bool in a single supply object {item:, have: }
        commit(types.MUTATE_TOGGLE_HAVE_SWITCH);
    }
}; // END ACTIONS

// const actions = {
//     addSupply: ( {commit}, supply) =>{
//         //expects a supply object {item:, have: }
//         commit('addSupply', supply);
//     },
//     changeItemHaveStatus: ({commit}, payload) => {
//         //expects a supply object {item:, have: }
//         commit('changeItemHaveStatus', payload);
//     },

//     deleteItem: ( {commit}, index ) =>{
//         //expects the array index of the item to be deleted
//             commit('deleteItem', index);
//     },
//     setHaveSwitch: ( {commit}, payloadBool )=>{
//         //expects a boolean
//         commit('setHaveSwitch', payloadBool);
//     },

//     switchAllHaveStatus: ( {commit} ) =>{
//         //changes all the bools in the supply array to same
//         commit('switchAllHaveStatus');
//     },

//     toggleHaveSwitch: ( {commit} ) => {
//         //toggles the bool in a single supply object {item:, have: }
//         commit('toggleHaveSwitch');
//     }
// }; // END ACTIONS



export default {
    state,
    mutations,
    actions,
    getters
}