<template>
    <div class="score" id="score">
        <h1>score</h1>
        <p> {{ score }}</p>
    </div>
</template>

<script>
    export default {
        name: 'Score',
        props:{
            score: Number
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