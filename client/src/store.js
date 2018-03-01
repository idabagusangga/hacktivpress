import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: [],
    errorMsg: '',
    isLogin: null,
    regisMsg: null
  },
  mutations: {
    SET_ARTICLES (state, payload) {
      state.articles = payload
    },
    SET_ERROR_MSG (state, payload) {
      state.errorMsg = payload
    },
    SET_LOGIN_STATE (state, payload) {
      state.isLogin = payload
    }
  },
  actions: {
    getAllArticles ({ commit }) {
      axios.get('http://localhost:3000/articles')
        .then(response => {
          commit('SET_ARTICLES', response.data.data)
        })
        .catch(err => {
          commit('SET_ERROR_MSG', err)
        })
    },
    login ({ commit }, payload) {
      console.log(payload)
      axios.post('http://localhost:3000/users/login', payload)
        .then(response => {
          localStorage.setItem('token', response.data.token)
          commit('SET_LOGIN_STATE', true)
        })
        .catch(err => {
          commit('SET_ERROR_MSG', err)
        })
    },
    register ({ commit }, payload) {
      axios.post('http://localhost:3000/users/register', payload)
        .then(response => {
        })
        .catch()
    }
  }
})
