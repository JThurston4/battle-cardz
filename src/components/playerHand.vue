<template>
  <div class="playerHand align-items-end justify-content-center" v-if="game.id">
    <h3 class="col-12">Your Hand</h3>
    <div v-for="card in getPlayerHand" @click="active.cardId=card.id" class="col-2">
      <div :class="{'border-success my-border': card.id == active.cardId}" class="card text-white bg-dark mb-3"
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
      getPlayerHand() {
        console.log(this.$store.state.game.player.hand)
        return this.$store.state.game.player.hand
      },
      game() {
        return this.$store.state.game
      }
    },
    methods: {}
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
</style>