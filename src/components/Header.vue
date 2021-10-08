<template>
    <div class="header" id="header">
        <div class="title">
            <h1>
                rock <br>
                paper <br>
                scissors <br>
                lizard <br>
                spock
            </h1>
        </div>
        <Score 
            :score="score"
        />
    </div>
</template>

<script>
    import Score from './Score.vue'

    export default {
        name: 'Header',
        components:{
            Score
        },
        props:{
            score: Object
        }
    }
</script>

<style scoped>
    .header{
        position: relative;
        width: 50rem;
        max-width: 100rem;
        padding: 2rem 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 2rem;
        border: 2px solid rgba(255, 255, 255, .5);
        margin: auto;
    }
    .title h1{
        font-size: 1.5rem;
        text-transform: uppercase;
        color: white;
        line-height: 1;
    }
</style>