<template>

<div>
    <div class="row">
        <h1>ShoppingList.vue alpha 4 Vuex Basic</h1>
       <p>No user input here - it just displays the list</p>
        
    </div>
     <div class="row">
         <h1>Shopping List</h1>
         <p>Only shows items where supply.have == false</p>
         <ol>
            <li  
                v-for="supply in getSupplies"
                v-if="!supply.have">{{supply.item}}</li>
         </ol>
         
      
      </div>

</div>
</template>

<script>
import { mapGetters } from 'vuex';
import * as types from '../store/types.js';

export default {
    data: function(){
        return {};
    },
    computed: {
        ...mapGetters({
            getSupplies: types.GET_SUPPLIES
        })
    }//end computed


}
</script>

<style scoped>

</style>
