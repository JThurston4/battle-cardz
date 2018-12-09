<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div class="home">
      <h1>Battle Cardz</h1>
      <div><button type="button" class="btn btn-outline-primary btn-width" @click="makeGame" v-model="gameConfig.set = 2">DECK
          1 (easy)</button>
      </div>
      <div><button type="button" class="btn btn-outline-primary btn-width" @click="makeGame" v-model="gameConfig.set = 3">DECK
          2 (medium)</button>
      </div>
      <div><button type="button" class="btn btn-outline-primary btn-width" @click="makeGame" v-model="gameConfig.set = 4">DECK
          3 (medium)</button>
      </div>
      <div><button type="button" class="btn btn-outline-danger btn-width" @click="makeGame" v-model="gameConfig.set = 1">DECK
          4 (hard)</button>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src

  export default {
    name: 'home',
    data() {
      return {
        gameConfig: {
          playerName: 'player 1',
          set: ''
        }
      }
    },
    components: {


    },
    methods: {
      getGames() {
        this.$store.dispatch('getGames')
      },
      makeGame() {
        this.$store.dispatch("makeGame", this.gameConfig)
      }
    },
    computed: {
      games() {
        return this.$store.state.games
      },
      game() {
        return this.$store.state.game
      }
    }
  } 
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  .hard {
    color: red;
  }

  .btn-width {
    width: 200px;
  }
</style>