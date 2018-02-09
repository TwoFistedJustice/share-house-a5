<template>

<div>
    <div class="row">
        <h1>Home page</h1>
       <h3>Features and Breakdown of this Alpha Version 5</h3>
        <p>This version contains Routing from Alpha 3</p>
        <p>It has <b>Advanced</b> Vuex state management between the following components</p>
        <ul>
            <li>ShoppingList</li>
            <li>SuppliesInventory</li>
            <li>AdministrateLists</li>
        </ul>
        <hr>
        <p>The following components are deprecated</p>
            <ul>
            <li>NeedHave- removed and replaced by SuppliesInventory - as of Alpha 4</li>
        </ul>
        <h3>What this code is built on</h3>
        <p>Vue.js, Vue-Router, Vuex</p>
        <p>A5 incorporates vuex modules to distribute actions, mutations, getters across multiple file </p>
        <p>Refactored all supply properties and methods to shorter syntax</p>
        <p>Added Vuex namespacing - manually configured - see types.js</p>
        <p></p>
        <h3>Changes to make in Alpha 6</h3>
        <ul>
            <li>load object from file instead of data()</li>
            <li>defineProperty on objects?</li>
            <li>Add simple animation/transitions - see Vue 18 Project App.vue</li>
            <li></li>
        </ul>
        
        <p></p>
       
            

</div></div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>
