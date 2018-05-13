<template>
  <div class="createJob">
    <p>{{msg}}</p>
    <StepOne></StepOne>
    <StepTwo></StepTwo>
    <StepThree></StepThree>
    <StepFour></StepFour>
    <MDButton bType="normal" v-on:click="submitJob">提交</MDButton>
    <MDButton bType="delete">重置</MDButton>
  </div>
</template>

<script>
import MDButton from './general/MDButton'
import StepOne from './createJob/StepOne'
import StepTwo from './createJob/StepTwo'
import StepThree from './createJob/StepThree'
import StepFour from './createJob/StepFour'

export default {
  name: 'CreateJobPage',
  components: {
    MDButton, StepOne, StepTwo, StepThree, StepFour
  },
  data () {
    return {
      msg: 'Welcome to create job page'
    }
  },
  methods: {
    submitJob: function () {
      this.$store.commit('addNewJob');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
