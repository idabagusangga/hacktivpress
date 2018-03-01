<template lang="html">
  <div class="container">
    <h4>Search Categories or Author</h4>
    <ul class="nav nav-tabs">
    <li class="nav-item">
      <a class="nav-link active" data-toggle="tab" href="#home" @click="authorMode">Author</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-toggle="tab" href="#profile" @click="catMode">Categories</a>
    </li>
  </ul>
  <div class="form-group" v-if="!author">
  <label for="exampleInputEmail1">Search by Categories</label>
  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search your categories" v-model="searchCategories">
  <br><br>
  <button type="button" class="btn btn-success" @click="getCategory">Search Category</button>
</div>
<div class="form-group" v-if="author">
  <label for="exampleInputEmail1">Search by Author</label>
  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search author..." v-model="searchAuthor">
  <br><br>
  <button type="button" class="btn btn-success" @click="getAuthor">Search Author</button>
</div>
  </div>
  
</template>

<script>
export default {
  data () {
    return {
      author: false,
      searchAuthor: '',
      searchCategories: ''
    }
  },
  methods: {
    authorMode () {
      this.author = true
    },
    catMode () {
      this.author = false
    },
    getAuthor () {
      this.$store.dispatch('searchAuthor', {author: this.searchAuthor})
    },
    getCategory () {
      this.$store.dispatch('searchCategories', {category: this.searchCategories})
    }
  }
}
</script>

<style lang="css">
</style>
