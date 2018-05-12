<template>
  <div class="document">
      <p>{{msg}}</p>
      <button v-on:click="test">test</button>
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
