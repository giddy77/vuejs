<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <LoginForm /> -->
  <!-- <SignUp /> -->
  <LifeCycle />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import LoginForm from './components/LoginForm'
// import SignUp from './components/SignUp.vue'
import LifeCycle from './components/LifeCycle'
export default {
  name: 'App',
  components: {
    // HelloWorld
    // LoginForm
    // SignUp
    LifeCycle
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
