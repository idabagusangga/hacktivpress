<template lang="html">
  <div class="container">
    <h1>Ini Article List</h1>
    <div class="list-group">
      <ArticleListDetail v-for="a in allArticles" :key="a._id" :article="a"></ArticleListDetail>
  </div>
  </div>

</template>

<script>
  import ArticleListDetail from '@/components/ArticleListDetail'
export default {
    components: {
      ArticleListDetail: ArticleListDetail
    },
    methods: {
      getArticles () {
        this.$store.dispatch('getAllArticles')
      }
    },
    computed: {
      allArticles () {
        return this.$store.state.articles
      }
    },
    created () {
      this.getArticles()
    }
  }
</script>

<style lang="css">
</style>
