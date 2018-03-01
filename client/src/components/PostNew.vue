<template lang="html">
  <div class="container">
    <h3>Post New Blog</h3>
    <div class="form-group">
      <label for="exampleInputPassword1">Title</label>
      <input type="text" class="form-control" id="exampleInputTitle" placeholder="title">
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Category</label>
      <input type="text" class="form-control" id="exampleInputCategory" placeholder="category">
    </div>
    <div class="form-group">
      <label for="exampleTextarea">Description</label>
      <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
    </div>
      <button type="button" class="btn btn-success">Post</button>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
