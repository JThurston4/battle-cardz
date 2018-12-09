<template>
  <div class="opponentHand justify-content-center" v-if="game.id">
    <div class="col-3 centered">
      <p>Cards in Deck: {{getOpponent.remainingCards}}</p>
    </div>
    <div class="col-6 centered2">
      <h3 class="hand-text" v-if="getOpponent.hand.length">Opponent's Hand</h3>
    </div>
    <div class="col-3 centered">
      <p>Cards in graveyard: {{getOpponent.deadCards.length}}</p>
    </div>
    <!-- {{hand}} -->
    <div v-for="card in getOpponent.hand" class="col-2" @click="attackedCard(active.cardId)">
      <div @click="active.cardId=card.id" :class="{'border-success my-border': card.id == active.cardId}" class="card text-white bg-dark mb-3"
        style="max-width: 20rem;">
        <div class="card-body">
          <div v-if="card.visible" class="card-text right">{{card.name}}</div>
          <img v-if="!card.visible" class="card-img" src="../assets/7fdf9b_5461819.jpg"></img>
          <img v-if="card.visible" class="card-img" :src="card.img"></img>
          <div class="right d-flex justify-content-around align-items-center">
            <div v-if="card.visible" class="card-text right"><i class="fas fa-heart"></i> {{card.health}}</div>
            <div v-if="card.visible" class="card-text right"><i class="fas fa-shield-alt"></i> {{card.defense}}</div>
            <div v-if="card.visible" class="card-text right"><img src="@/assets/gladius.png" class="pic">
              {{card.attack}} </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'opponentHand',
    data() {
      return {
        active: {
          cardId: ''
        }
      }
    },
    props: ['hand'],
    computed: {
      getOpponent() {
        console.log(this.$store.state.game.opponent.hand)
        return this.$store.state.game.opponent
      },
      game() {
        return this.$store.state.game
      }
    },
    methods: {
      attackedCard(cardId) {
        // console.log(cardId)
        this.$store.dispatch('attackedCard', cardId)
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

  .card-body {
    padding: 0.50rem 1.25rem 0rem 1.25rem;
  }

  .hand-text {
    text-shadow: 0px 0px 3px #b6c1cf;
  }
</style>