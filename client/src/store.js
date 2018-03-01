import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: [],
    errorMsg: '',
    isLogin: '',
    regisMsg: null,
    activeUser: null,
    activeArticle: null
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
    },
    SET_REGIS_MSG (state, payload) {
      state.regisMsg = payload
    },
    SET_ACTIVE_USER (state, payload) {
      state.activeUser = payload
    },
    NEW_ARTICLE (state, payload) {
      payload.author = state.activeUser.username
      // console.log(payload)
      state.articles.unshift(payload)
    },
    SET_ACTIVE_ARTICLE (state, payload) {
      state.activeArticle = payload
    },
    DELETE_ARTICLE (state, payload) {
      state.articles.forEach((article, index) => {
        if (article._id === payload) {
          state.articles.splice(index, 1)
        }
      })
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
          commit('SET_REGIS_MSG', response.data.msg)
        })
        .catch(err => {
          commit('SET_ERROR_MSG', err)
        })
    },
    getUserInfo ({ commit }) {
      let token = localStorage.getItem('token')
      axios.post('http://localhost:3000/users', {token: token})
        .then(response => {
          console.log(response.data.data)
          commit('SET_ACTIVE_USER', response.data.data)
          commit('SET_LOGIN_STATE', true)
        })
        .catch(err => {
          commit('SET_ERROR_MSG', err)
        })
    },
    postBlog ({ commit }, payload) {
      console.log(payload)
      axios.post('http://localhost:3000/articles', payload)
        .then(response => {
          commit('NEW_ARTICLE', response.data.data)
        })
        .catch(err => {
          commit('SET_ERROR_MSG', err)
        })
    },
    getOneArticle ({ commit }, payload) {
      axios.get(`http://localhost:3000/articles/search/${payload}`)
        .then(response => {
          console.log(response.data.data)
          commit('SET_ACTIVE_ARTICLE', response.data.data)
        })
        .catch(err => {
          commit('SET_ERROR_MSG', err)
        })
    },
    removeArticle ({ commit }, payload) {
      axios.delete(`http://localhost:3000/articles/${payload}`)
        .then(response => {
          commit('DELETE_ARTICLE', payload)
        })
        .catch(err => {
          commit('SET_ERROR_MSG', err)
        })
    },
    editArticle ({ commit }, payload) {
      axios.put(`http://localhost:3000/articles/${payload.id}`, payload)
        .then(response => {
          alert('article updated')
          this.$router.push({name: 'ArticleList'})
        })
        .catch(err => {
          commit('SET_ERROR_MSG', err)
        })
    },
    searchAuthor ({ commit }, payload) {
      axios.post(`http://localhost:3000/articles/author`, payload)
        .then(response => {
          commit('SET_ARTICLES', response.data.data)
        })
        .catch(err => {
          commit('SET_ERROR_MSG', err)
        })
    },
    searchCategories ({ commit }, payload) {
      console.log(payload)
      axios.post(`http://localhost:3000/articles/category`, payload)
        .then(response => {
          commit('SET_ARTICLES', response.data.data)
        })
        .catch(err => {
          commit('SET_ERROR_MSG', err)
        })
    }
  }
})
