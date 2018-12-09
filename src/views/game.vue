<template>
  <div class="game container-fluid bg">
    <opponentHand class="row"></opponentHand>
    <playerHand class="row"></playerHand>
    <div></div>
    {{cards}}
  </div>
</template>

<script>
  import opponentHand from "@/components/opponentHand.vue"
  import playerHand from "@/components/playerHand.vue"

  export default {
    name: 'game',
    data() {
      return {

      }
    },
    computed: {
      game() {
        return this.$store.state.game
      },
      cards() {
        return {
          playerCard: this.$store.state.playerCard,
          opponentCard: this.$store.state.opponentCard
        }
      }
    },
    methods: {
      playBall() {
        if (playerCard.length > 1) {
          console.log("play ball")
        }
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
  }
</style>