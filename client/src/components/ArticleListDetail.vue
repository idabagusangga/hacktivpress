<template lang="html">
  <router-link :to="{ name: 'Article', params: {id: article._id} }" class="list-group-item list-group-item-action flex-column align-items-start">  <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">{{article.title}}</h5>
      <small class="text-muted">{{article.category}}</small>
    </div>
    <p class="mb-1">{{article.description}}</p>
    <small class="text-muted">{{article.author[0].username}}</small>
  </router-link>
</template>

<script>
export default {
  props: ['article']
}
</script>

<style lang="css">
</style>
