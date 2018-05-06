<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>
      <router-link to="/">Home</router-link>
      <router-link to="/createJob">New Job</router-link>
      <router-link to="/document">Document</router-link>
      <router-link to="/jobList">Job List</router-link>
    </p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
