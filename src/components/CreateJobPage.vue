<template>
  <div class="createJob">
    <p>{{msg}}</p>
    <MDButton bType="normal">提交</MDButton>
    <MDButton bType="execute">执行</MDButton>
    <MDButton bType="delete">删除</MDButton>
  </div>
</template>

<script>
import MDButton from './general/MDButton'

export default {
  name: 'CreateJobPage',
  components: {
    MDButton
  },
  data () {
    return {
      msg: 'Welcome to create job page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
