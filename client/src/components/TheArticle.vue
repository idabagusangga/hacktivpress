<template lang="html">
  <div class="container">
      <h1>ini The Article</h1>
      <router-link :to="{ name: 'ArticleList', params: {} }"><< Back to List</router-link>
      <div class="card mb-3">
  <h3 class="card-header">{{getActiveArticle[0].title}}</h3>
  <div class="card-body">
    <h5 class="card-title">{{getActiveArticle[0].author[0].username}}</h5>
  </div>
  <img style="height: 200px; width: 100%; display: block;" src="https://www.google.co.id/search?q=blog+png&tbm=isch&source=iu&ictx=1&fir=cAxCVT4uI6Qu0M%253A%252Ce_oXvJidUqqncM%252C_&usg=__VmnL8K8sBqjDp9IVvA0RAc7ZXos%3D&sa=X&ved=0ahUKEwiVsIHB5crZAhWJgI8KHdytDv0Q9QEIKzAA#imgrc=cAxCVT4uI6Qu0M" alt="Card image">
  <div class="card-body">
    <p class="card-text">{{getActiveArticle[0].description}}</p>
  </div>
  <div class="card-body">
    <a href="#" class="card-link" v-if="auth" @click="removeArticle">Remove</a>
    <a href="#" class="card-link" v-if="auth">Edit</a>
  </div>
  <div class="card-footer text-muted">
    2 days ago
  </div>
</div>
<div class="container" v-if="isEditing">
  <h3>Editing</h3>
  <div class="form-group">
    <label for="exampleInputPassword1">Title</label>
    <input type="text" class="form-control" id="exampleInputTitle" placeholder="title" v-model="title">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Category</label>
    <input type="text" class="form-control" id="exampleInputCategory" placeholder="category" v-model="category">
  </div>
  <div class="form-group">
    <label for="exampleTextarea">Description</label>
    <textarea class="form-control" id="exampleTextarea" rows="3" v-model="description"></textarea >
  </div>
    <button type="button" class="btn btn-success" @click="postNewBlog">Post</button>
</div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      isEditing: false
    }
  },
  props: ['id'],
  methods: {
    findOneArticle () {
      this.$store.dispatch('getOneArticle', this.id)
    },
    removeArticle () {
      this.$store.dispatch('removeArticle', this.id)
      this.$router.push('/')
    }
  },
  created () {
    this.findOneArticle()
  },
  computed: {
    getActiveArticle () {
      return this.$store.state.activeArticle
    },
    auth () {
      if (this.getActiveArticle[0].author[0].username === this.$store.state.activeUser.username) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="css">
</style>
