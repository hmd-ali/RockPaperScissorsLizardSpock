<template>
  <Header 
    :score="score"
  />
  <Game 
    :moves="moves"
    :picked="picked"
    :computerChoice="choiceAI"
    :movePicked="movePicked"
    @play-again="playAgain"
    @chosen-id="myFunction"
    @retry="retry"
    :statement="statement"
  />
</template>

<script>
import Header from './components/Header.vue'
import Game from './components/Game.vue'

export default {
  name: 'App',
  data(){
    return{
      moves:[
        {
          id: 0,
          name: 'rock',
          losesTo: [4, 1],
          background: 'linear-gradient(180deg, hsl(349, 71%, 52%) 0%, hsl(349, 70%, 56%) 100%)'
        },
        {
          id: 1,
          name: 'paper',
          losesTo: [2, 3],
          background: 'linear-gradient(180deg, hsl(230, 89%, 62%) 0%, hsl(230, 89%, 65%) 100%)'
        },
        {
          id: 2,
          name: 'scissors',
          losesTo: [0, 4],
          background: 'linear-gradient(180deg, hsl(39, 89%, 49%) 0%, hsl(40, 84%, 53%) 100%)',
        },
        {
          id: 3,
          name: 'lizard',
          losesTo: [0, 2],
          background: 'linear-gradient(180deg, hsl(261, 73%, 60%) 0%, hsl(261, 72%, 63%) 100%)'
        },
        {
          id: 4,
          name: 'spock',
          losesTo: [1, 3],
          background: 'linear-gradient(180deg, hsl(189, 59%, 53%) 0%, hsl(189, 58%, 57%) 100%)'
        },
      ],
      score: {p1: 0, p2: 0},
      picked: false,
      movePicked: [],
      choiceAI: null,
      statement: ''
    }
  },
  components: {
    Header,
    Game
  },
  methods:{
    myFunction(id){
      this.picked = true
      this.getMove(id)
    },
    getMove(id){
      const move = this.moves.find(x => x.id === id)
      this.movePicked = move
      this.computerChoice()
    },
    computerChoice(){
      let random = Math.floor(Math.random() * this.moves.length)
      let move =  this.moves.find(x => x.id === random)
      this.choiceAI = move
      this.checkresults(this.movePicked, this.choiceAI)
    },
    checkresults(a,b){
      if(a.losesTo.includes(b.id)){
        this.statement = 'Computer Wins!'
        setTimeout(()=>{
          this.score.p2 += 1
        },3000)
      }
      else if(b.losesTo.includes(a.id)){
        this.statement = 'You win!'
        setTimeout(()=>{
          this.score.p1 += 1
        },3000)
      }
      else{
        this.statement = 'It\'s a draw!'
      }
    },
    playAgain(){
      this.picked = false
      this.movePicked = []
      this.choiceAI = []
    },
    retry(){
      this.score = {p1: 0, p2: 0}
      this.playAgain()
    }
  }
  
}
</script>

<style>
  :root{
    --bg-dark: #020024;
    --bg-light: #0035ff;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    font-size: 62.5%;
    font-family: 'Poppins', sans-serif;
  }
  body{
    background: rgb(2,0,36);
    background: radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(0,53,255,1) 50%, rgba(2,0,36,1) 100%);
    width: 100%;
    height: 100vh;
    padding: 2rem 4rem;
  }
</style>
