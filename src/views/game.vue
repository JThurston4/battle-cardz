<template>
  <div class="game container-fluid bg">
    <opponentHand class="row"></opponentHand>
    <playerHand class="row"></playerHand>
    <!-- {{getGame.opponent.hand}} -->
    <!-- {{getGame}} -->
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
      }
    },
    methods: {},
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
    height: 100vh
  }
</style>