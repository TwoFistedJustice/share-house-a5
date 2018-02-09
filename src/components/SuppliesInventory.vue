<template>

<div>
    <div class="row">
        <h1>SuppliesInventory.vue alpha 4 Vuex Basic</h1>
        <p>Former NeedHave.vue functionality</p>
        <p>Round 1: Display the buttons - Complete</p>
        <p>Round 2: Buttons become functional</p>
    </div>
      <div class="row">
              <h2>Shared Supplies</h2>
          <span><button class="btn btn-primary" 
                        @click="switchAllHaveStatus">Switch all to {{haveNeedText}}</button></span>
          <ul>
              <li v-for="supply in getSupplies">
                  <span class="btn"
                        @click="changeItemHaveStatus(supply)"
                        v-bind:class="{'btn-success': supply.have, 'btn-danger': !supply.have}"
                        >{{supply.item}} : We {{itemNeedText(supply.have)}} this.
                        </span>
                  </li>
          </ul>
      </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';
import {mapActions} from 'vuex';

import * as types from '../store/types.js';

export default {
    data: function(){
        return {};
    },
    computed: {
         //Vuex namespacing require object syntax in map*
        ...mapGetters({
            getSupplies: types.GET_SUPPLIES,
            getHaveSwitch: types.GET_HAVE_SWITCH
        }),

        haveNeedText(){
            //changes the switch button text to match functionality
            //sets the central supply bool in vuex
            this.setHaveSwitch(this.checkArrayBools());

        if(this.getHaveSwitch == true){
                return 'Need';
            } else {
                return 'Have';
            }
           }


    },//end computed
    
    methods: {
        ...mapActions({
            changeItemHaveStatus: types.SUPPLY_CHANGE_ITEM_HAVE_STATUS,
            setHaveSwitch: types.SUPPLY_SET_HAVE_SWITCH,
            switchAllHaveStatus: types.SUPPLY_SWITCH_ALL_HAVE_STATUS
        }),
        itemNeedText(have){
                if(have){
                    return 'have';
                }else{
                    return 'need';
                }
           }, // END itemNeedText
        checkArrayBools(){
            //This fn sets the haveSwitch property to govern the switch-all button text
            //check boolean contents of getSupplies[], if all are same 
            //change the button value
            let holdingBool = false;

            //convert the have bools to zero or one and add them up
            //if the sum is equal to zero or to the length of the array
            //set the holding bool to false if zero, and true if length
            let sum = 0;
            //could use forEach
            for(let i = 0; i < this.getSupplies.length; i++){
                let val = this.getSupplies[i].have ? 1 : 0;
                sum += val;
            }
            if(sum === 0){
                holdingBool = false;
            }else if (sum === this.getSupplies.length){
                holdingBool = true;
            } else{
                holdingBool = this.haveSwitch;
            }
                return holdingBool;
                    }, //end checkArrayBools

    },
    
    


}
</script>
