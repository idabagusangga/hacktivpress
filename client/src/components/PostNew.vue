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
      <textarea class="form-control" id="exampleTextarea" rows="3"></textarea v-model="description">
    </div>
      <button type="button" class="btn btn-success">Post</button>
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
  }
}
</script>

<style lang="css">
</style>
