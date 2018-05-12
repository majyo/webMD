<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>well</p>
    <p>
      <router-link to="/">webMD</router-link>
      <router-link to="/createJob">新建任务</router-link>
      <router-link to="/document">说明文档</router-link>
      <router-link to="/jobList">任务列表</router-link>
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
