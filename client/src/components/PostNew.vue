<template lang="html">
  <div class="container">
    <h3>Post New Blog</h3>
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
</template>

<script>
export default {
  data () {
    return {
      title: '',
      category: '',
      description: ''
    }
  },
  methods: {
    postNewBlog () {
      let payload = {
        title: this.title,
        category: this.category,
        description: this.description,
        author: this.userInfo.id,
        token: localStorage.getItem('token')
      }
      this.$store.dispatch('postBlog', payload)
    }
  },
  computed: {
    userInfo () {
      return this.$store.state.activeUser
    }
  }
}
</script>

<style lang="css">
</style>
