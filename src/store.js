import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router';

let api = axios.create({
  baseURL: 'https://battlecardz.herokuapp.com/api/games',
  timeout: 3000
})



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    games: [],
    game: {},
    playerCard: '',
    opponentCard: ''
  },
  mutations: {
    setGames(state, games) {
      state.games = games
    },
    setGame(state, game) {
      state.game = game
    },
    setPlayerCard(state, playerCard) {
      state.playerCard = playerCard
      console.log(state.playerCard)
    },
    setOpponentCard(state, opponentCard) {
      state.opponentCard = opponentCard
      console.log(state.opponentCard)
    }
  },
  actions: {
    getGames({ commit }) {
      api.get('')
        .then(res => {
          commit('setGames', res.data)
        })
    },
    getGameId({ commit }, gameId) {
      // debugger
      api.get('/' + gameId)
        .then(res => {
          console.log(res.data.data)
          commit('setGame', res.data.data)
        })
    },
    makeGame({ commit }, gameConfig) {
      api.post('', gameConfig)
        .then(res => {
          commit('setGame', res.data.game)
          router.push({ name: 'game', params: { gameId: res.data.game.id } })
        })
    },

    attack({ commit }, cardId) {
      api.put
    },
    playerCard({ commit }, playerCardId) {
      commit('setPlayerCard', playerCardId)
    },
    attackedCard({commit}, opponentCardId) {
      commit('setOpponentCard', opponentCardId)
    }
  }
})
