<template>
  <div class="opponentHand justify-content-center" v-if="game.id">
    <h3 class="col-12">Opponent's Hand</h3>
    <!-- {{hand}} -->
    <div v-for="card in getOpponentHand" class="col-2" @click="attackedCard(active.cardId)">
      <div @click="active.cardId=card.id" :class="{'border-success my-border': card.id == active.cardId}" class="card text-white bg-dark mb-3" style="max-width: 20rem;">
        <div class="card-body">
          <div class="card-text right">{{card.name}}</div>
          <img class="card-img" :src="card.img"></img>
          <div class="right d-flex justify-content-around align-items-center">
            <div class="card-text right"><i class="fas fa-heart"></i> {{card.health}}</div>
            <div class="card-text right"><i class="fas fa-shield-alt"></i> {{card.defense}}</div>
            <div class="card-text right"><img src="@/assets/gladius.png" class="pic"> {{card.attack}} </div>
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
      getOpponentHand() {
        console.log(this.$store.state.game.opponent.hand)
        return this.$store.state.game.opponent.hand
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
</style>