<template>
    <div class="game-wrapper">
        <!-- <transition name="fade"> -->
            <div class="game" v-if="!picked">
                <div
                    class="move"
                    v-for="move in moves"
                    :key="move.id"
                    :data-id="move.id"
                    :data-name="move.name"
                    :style="`background: ${move.background}`"
                    @click="chosen(move.id)"
                >
                    <div class="icon"><img :src="require(`../assets/icon-${move.name}.svg`)" :alt="`${move.name.toUpperCase()} ICON`"></div>
                </div>
                <img src="../assets/bg-pentagon.svg" alt="">
            </div>
            <div
                class="after-game"
                v-else
            >
                <div class="game-after">
                    <div class="ongoing" v-show="isLoading">
                        <div class="you">
                            <h1>You Picked {{movePicked.name}}</h1>
                            <div
                                class="move"
                                :style="`background: ${movePicked.background}`"
                            >
                                <div class="icon"><img :src="require(`../assets/icon-${movePicked.name}.svg`)" :alt="`${movePicked.name.toUpperCase()} ICON`"></div>
                            </div>
                        </div>
                        <div class="computer">
                            <h1 v-if="computerPicking">The computer is picking....</h1>
                            <h1 v-if="!computerPicking">The computer picked {{computerChoice.name}}</h1>
                            <div
                                class="move"
                                :style="`background: ${computerChoice.background}`"
                                v-show="!computerPicking"
                            >
                                <div class="icon"><img :src="require(`../assets/icon-${computerChoice.name}.svg`)" :alt="`${computerChoice.name.toUpperCase()} ICON`"></div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="results"
                        v-show="!isLoading"
                    >
                        <div v-if="statement=='It\'s a draw!' || statement == 'You win!'">
                            <h1>{{ statement }}</h1>
                            <button @click="playAgain">Next</button>
                        </div>
                        <div v-else>
                            <h1>{{ statement }}</h1>
                            <button @click="retry"> Retry </button>
                        </div>
                    </div>
                </div>
            </div>
        <!-- </transition> -->
    </div>
</template>

<script>
    export default {
        name: 'Game',
        data(){
            return{
                isLoading: true,
                computerPicking: false
            }
        },
        props:{
            moves: Array,
            picked: Boolean,
            movePicked: Object,
            computerChoice: Object,
            statement: String,
        },
        emits:['chosen-id', 'play-again', 'retry'],
        methods:{
            chosen(e){
                this.isLoading = true
                this.computerPicking = true
                this.$emit('chosen-id', e)
                setTimeout(() =>{
                    this.computerPicking = false
                },1500 )
                setTimeout(() => {
                    this.isLoading = false

                },3000)
            },
            playAgain(){
                this.$emit('play-again')
            },
            retry(){
                this.$emit('retry')
            }
        },
    }
</script>

<style scoped>
    .game-wrapper{
        position: relative;
        width: 60rem;
        margin: 2rem auto;
    }
    .after-game{
        position: relative;
        width: 100%;
        margin-top: 5rem;
    }
    .game{
        position: relative;
        width: 35rem;
        height: 35rem;
        margin: 0 auto;
        margin-top: 10rem;
    }
    .game > img{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }
    .game .move{
        position: relative;
        border-radius: 50%;
        position: absolute;
        transform: translate(-50%, -50%);
        padding: 2rem;
        box-shadow: inset 2px -4px rgba(0, 0, 0, 0.5);
    }
    .game .move:hover{
        cursor: pointer;
    }
    .game .move .icon{
        position: relative;
        width: 9rem;
        height: 9rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: white;
        box-shadow: inset -2px 4px rgba(0, 0, 0, 0.2);
    }
    .game .move .icon img{
        width: 5rem;
        height: 5rem;
    }
    .game .move:nth-child(1){
        top: 100%;
        left: 82%;
    }
    .game .move:nth-child(2){
        top: 38%;
        left: 100%;
    }
    .game .move:nth-child(3){
        top: 0%;
        left: 50%;
    }
    .game .move:nth-child(4){
        top: 100%;
        left: 18%;
    }
    .game .move:nth-child(5){
        top: 38%;
        left: 0%;
    }
    .game-after{
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin: 10rem auto;
        padding: 1rem;
    }
    .game-after .ongoing{
        position: relative;
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
    }
    .game-after .you{
        position: relative;
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .game-after .you{
        color: white;
    }
    .game-after .you .move{
        position: relative;
        border-radius: 50%;
        box-shadow: inset 2px -4px rgba(0, 0, 0, 0.5);
        width: 12rem;
        height: 12rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 1rem;
    }
    .game-after .you .move .icon{
        position: relative;
        width: 9rem;
        height: 9rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: white;
        box-shadow: inset -2px 4px rgba(0, 0, 0, 0.2);
    }
    .game-after .computer{
        position: relative;
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .game-after .computer{
        color: white;
    }
    .game-after .computer .move{
        position: relative;
        border-radius: 50%;
        box-shadow: inset 2px -4px rgba(0, 0, 0, 0.5);
        width: 12rem;
        height: 12rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 1rem;
    }
    .game-after .computer .move .icon{
        position: relative;
        width: 9rem;
        height: 9rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: white;
        box-shadow: inset -2px 4px rgba(0, 0, 0, 0.2);
    }
    .results div{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .results h1{
        font-size: 3rem;
        color: white;
        font-weight: 500;
    }
    .results button{
        padding: 1rem 2rem;
        border-radius: 1rem;
        border: none;
        background: white;
        color: black;
        cursor: pointer;
    }
    .results button:hover{
        background:  black;
        color: white;
    }
    /* .fade-enter-active{
        transition:1s opacity .5s;
    }
    .fade-leave-active{
        transition:0s opacity .5s;
    }
    .fade-enter, .fade-leave-to{
        opacity: 0;
    } */
</style>