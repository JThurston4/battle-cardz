<template>
  <div class="playerHand align-items-end justify-content-center" v-if="game.id">
    <div class="col-3 centered">
      <p>Cards in Deck: {{getPlayer.remainingCards}}</p>
    </div>
    <div class="col-6 centered2">
      <h3 class="hand-text" v-if="getPlayer.hand.length">Your Hand</h3>
    </div>
    <div class="col-3 centered ">
      <p>Cards in graveyard: {{getPlayer.deadCards.length}}</p>
    </div>
    <div v-for="card in getPlayer.hand" @click="testAttack(active.cardId)" class="col-2">
      <div @click="active.cardId=card.id" :class="{'border-success my-border': card.id == active.cardId}" class="card text-white bg-dark mb-3"
        style="max-width: 20rem;">
        <!-- <div class="card-header">{{card.name}}</div> -->
        <div class="card-body">
          <div class="card-text right">{{card.name}}</div>
          <img class="card-img" :src="card.img"></img>
          <div class="right d-flex justify-content-around align-items-center">
            <div class="card-text right"><i class="fas fa-heart"></i> {{card.health}}</div>
            <div class="card-text right"><i class="fas fa-shield-alt"></i> {{card.defense}}</div>
            <div class="card-text right"><img src="@/assets/gladius.png" class="pic"> {{card.attack}} </div>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'playerHand',
    data() {
      return {
        active: {
          cardId: ''
        }
      }
    },
    computed: {
      getPlayer() {
        console.log(this.$store.state.game.player.hand)
        return this.$store.state.game.player
      },
      game() {
        return this.$store.state.game
      }
    },
    methods: {
      testAttack(cardId) {
        this.$store.dispatch("playerCard", cardId)
      }
    }
  }

</script>

<style>
  .right {
    justify-content: end;
  }

  .pic {
    height: 20px;
  }

  /* .card-body {
    padding: 1.25rem 1.25rem 0rem 1.25rem;
  } */

  .my-border {
    border-width: 5px;
  }

  /* .border: {
    border-width: 50px
  } */

  .centered {
    justify-content: center;
    color: #516d86;
  }

  .centered2 {
    justify-content: center;
  }

  .lefted {
    justify-content: flex-start;
  }

  .righted {
    justify-content: flex-end;
  }
</style>