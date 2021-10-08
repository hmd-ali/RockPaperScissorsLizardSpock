<template>
    <div class="score" id="score">
        <h1>score</h1>
        <p> {{ score.p1 }} - {{ score.p2 }}</p>
    </div>
</template>

<script>
    export default {
        name: 'Score',
        props:{
            score: Object
        }
    }
</script>

<style scoped>
    .score{
        padding: 1rem 1rem;
        background: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 1rem;
        height: 100%;
        width: 10rem;
    }
    .score h1{
        font-size: 1.5rem;
        color: blue;
        text-transform: uppercase;
    }
    .score p{
        font-size: 3rem;
        color: black;
    }
</style>