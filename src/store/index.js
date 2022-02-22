import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    counter: 0,
    colorCode: 'blue'
  },
  getters: {

  },
  mutations: {
    increaseCounter(state, randomNumber) {
      state.counter += randomNumber
    },
    decreaseCounter(state, randomNumber) {
      state.counter -= randomNumber
    },
    setColorCode(state, newValue) {
      state.colorCode = newValue
    }
  },
  actions: {
    increaseCounter(context) {
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
        .then(response => {
          context.commit('increaseCounter', response.data)
        })
    },
    decreaseCounter(context) {
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
      .then(response => {
        context.commit('decreaseCounter', response.data)
      })
    },
    setColorCode(context, newValue) {
      context.commit('setColorCode', newValue)
    }
  },
  getters: {
    counterSquared(state) {
      return state.counter * state.counter
    }
  },
  modules: {

  }
})
