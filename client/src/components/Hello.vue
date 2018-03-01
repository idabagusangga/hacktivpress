<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="row">
      <div class="col-md-6" id="kiri">
        <h1>kiri</h1>
        <LoginForm></LoginForm>
        <br><br>
        <PostNew></PostNew>
        <br><br>
        <SearchBar></SearchBar>
      </div>
      <div class="col-md-6" id="kanan">
        <h1>kanan</h1>
        <div class="container">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar'
import LoginForm from '@/components/LoginForm'
import PostNew from '@/components/PostNew'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Simple Blog App'
    }
  },
  components: {
    LoginForm: LoginForm,
    PostNew: PostNew,
    SearchBar: SearchBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
