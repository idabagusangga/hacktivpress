import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import ArticleList from '@/components/ArticleList'
import TheArticle from '@/components/TheArticle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      children: [{
        path: '',
        name: 'ArticleList',
        component: ArticleList
      }, {
        path: ':id',
        name: 'Article',
        component: TheArticle,
        props: true
      }]
    }
  ]
})
