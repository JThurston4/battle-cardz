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
    playerCardId: '',
    opponentCardId: ''
  },
  mutations: {
    setGames(state, games) {
      state.games = games
    },
    setGame(state, game) {
      state.game = game
      console.log(state.game)
    },
    setPlayerCard(state, playerCardId) {
      state.playerCardId = playerCardId
      // console.log(state.playerCardId)
    },
    setOpponentCard(state, opponentCardId) {
      state.opponentCardId = opponentCardId
      // console.log(state.opponentCardId)
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
          // console.log(res.data.data)
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

    battle({ commit }, payload) {
      api.put('/' + payload.gameId, payload.cardIds)
        .then(res => {
          // debugger
          commit("setGame", res.data.game)
        })
    },

    playerCard({ commit }, playerCardId) {
      commit('setPlayerCard', playerCardId)
    },

    attackedCard({ commit }, opponentCardId) {
      commit('setOpponentCard', opponentCardId)
    },

    home() {
      router.push({ name: 'home' })
    }
  }
})
