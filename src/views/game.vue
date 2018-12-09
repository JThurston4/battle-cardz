<template>
  <div class="game container-fluid bg">
    <div class="row">
      <div class="col-12">
        <button type="button" class="btn btn-outline-secondary d-flex lefted" @click="home-page">Home</button>
      </div>
    </div>
    <opponentHand class="row"></opponentHand>
    <!-- <button :disabled="!ready()" :class="{'btn-success':ready()}" class="btn btn-primary" @click="playBall">Battle</button> -->
    <div v-if="ready()"><button v-if="!game.opponent.dead && !game.player.dead" class="btn btn-primary" @click="battle">Battle</button></div>
    <div v-if="game.opponent.dead && game.player.dead" class="hand-text">
      <h1><i class="fas fa-balance-scale"></i> Draw<i class="fas fa-balance-scale"></i> </h1>
    </div>
    <div class="hand-text" v-if="game.opponent.dead && !game.player.dead">
      <h1>Victory <i class="fas fa-fist-raised"></i></h1>
    </div>
    <div class="hand-text" v-if="!game.opponent.dead && game.player.dead">
      <h1><i class="fas fa-skull-crossbones"></i> Defeated <i class="fas fa-skull-crossbones"></i></h1>
    </div>
    <playerHand class="row"></playerHand>
  </div>
</template>

<script>
  import opponentHand from "@/components/opponentHand.vue"
  import playerHand from "@/components/playerHand.vue"

  export default {
    name: 'game',
    data() {
      return {
        tie: {

        }
      }
    },
    computed: {
      game() {
        return this.$store.state.game
      },
      cards() {
        return {
          playerCardId: this.$store.state.playerCardId,
          opponentCardId: this.$store.state.opponentCardId
        }
      }
    },
    methods: {
      playBall() {
        console.log(this.cards)
      },
      ready() {
        return this.cards.playerCardId.length > 1 && this.cards.opponentCardId.length > 1
      },
      battle() {
        this.$store.dispatch("battle", { gameId: this.$route.params.gameId, cardIds: this.cards })
      },
      home() {
        this.$store.dispatch("home")
      }
    },
    components: {
      opponentHand,
      playerHand
    },
    mounted() {
      if (!this.game.id) {
        this.$store.dispatch("getGameId", this.$route.params.gameId)
      }
    },
  }

</script>

<style>
  .bg {
    background-image: url("../assets/blue_body_repeat.jpg");
    height: 100vh;
    background-size: cover;
  }
</style>