<template lang="html">
  <div class="container">
    <div class="" v-if="loginState">
      <h5>{{registrationMsg}}</h5>
      <div class="form-group">
      <label for="exampleInputEmail1">Username</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" v-model="username">
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
    </div>
    
    <button type="button" class="btn btn-success" @click="loginButton">Login</button>
    or
  <button type="button" class="btn btn-info" @click="register">Register</button>
    </div>
    <div class="" v-else>
      <h4>Welcome {{activeUser.username}}</h4>
      
    </div>
    </div>


</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    loginButton () {
      this.$store.dispatch('login', {username: this.username, password: this.password})
    },
    register () {
      this.$store.dispatch('register', {username: this.username, password: this.password})
      this.username = ''
      this.password = ''
    },
    getInfo () {
      let token = localStorage.getItem('token')
      if (token) {
        console.log('masuk sini')
        this.$store.dispatch('getUserInfo')
      }
    }
  },
  computed: {
    registrationMsg () {
      return this.$store.state.regisMsg
    },
    loginState () {
      return this.$store.state.isLogin
    },
    activeUser () {
      return this.$store.state.activeUser
    }
  },
  created () {
    this.getInfo()
  }
}
</script>

<style lang="css">
</style>
