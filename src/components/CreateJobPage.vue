<template>
  <div class="createJob">
    <p>{{msg}}</p>
    <!--
    <MDButton bType="normal">提交</MDButton>
    <MDButton bType="execute">执行</MDButton>
    <MDButton bType="delete">删除</MDButton>
    -->
    <StepOne></StepOne>
    <StepTwo></StepTwo>
    <StepThree></StepThree>
    <StepFour></StepFour>
  </div>
</template>

<script>
import MDButton from './general/MDButton'
import StepOne from './createJob/stepOne'
import StepTwo from './createJob/stepTwo'
import StepThree from './createJob/stepThree'
import StepFour from './createJob/stepFour'

export default {
  name: 'CreateJobPage',
  components: {
    MDButton, StepOne, StepTwo, StepThree, StepFour
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
