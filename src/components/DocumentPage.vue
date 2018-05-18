<template>
  <div class="document">
      <p>{{msg}}</p>
      <h2>webMD简介</h2>
      <h3>输入分子坐标</h3>
      <h3>设定基本参数</h3>
      <h3>设定温度耦合</h3>
      <h3>设定压力耦合</h3>
      <h2>使用说明</h2>
      <h2>分子动力学</h2>
  </div>
</template>

<script>
import { foo } from './TestJobs.js';

export default {
  name: 'DocumentPage',
  data () {
    return {
      msg: 'Welcome to document page'
    }
  },
  methods: {
    test: function () {
      alert(foo.jobId);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
