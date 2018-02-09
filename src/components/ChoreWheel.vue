<template>

<div>
    <div class="row">
        <h1>ChoreWheel.vue</h1>
       <h3>Features and Breakdown of this component</h3>
       <p>There should be one component to display the task list and one to edit it.</p>
       <p>A task should comprise:</p>
            <ul>
                <li v-for="feature in componentFeatures"><p><b>{{feature}}</b></p></li>
            </ul>

        
        <p><b>Anticipated:Techniques</b> </p>
        <ul v-for="tech in techExpected">
            <li><p>{{tech}}</p></li>
        </ul>
        
    </div>
      <div class="row">

      </div>
</div>
</template>

<script>

export default {
    props:[],
    data: function(){
        return {
            changesToMake:[],
            componentFeatures: [
                'a title',
                'description',
                'a few photos',
                'who is responsible this period',
                'a deadline to complete',
                'an option and way to confirm completion',
                ' one way might be anonymous confirmation and feedback'
            ],
            techExpected: [
                'will need to import data from profiles',
                'should mainly be a display page',
                'the only interactions should be (automated?) change rotation  and the option to confirm'
            ]
            
        };
        
    }


}
</script>

<style scoped>

</style>
