<template>
  <div>
    <h2>STEP2: 设定基本参数</h2>
    <hr>
    <ul>
      <li>
        <p>任务名</p>
        <input v-model="newJob.jobName" type="text" name="jobName" id="jobName">
      </li>
      <li>
        <p>任务描述</p>
        <input v-model="newJob.jobDetail" type="text" name="jobDetail" id="jobDetail">
      </li>
      <li>
        <p>计算方法</p>
        <select v-model="newJob.task" name="computeMethod" id="computeMethod">
          <option disabled value="">---请选择---</option>
          <option value="em">能量最小化</option>
          <option value="md">分子动力学</option>
        </select>
      </li>
      <li v-if="newJob.task==='em'">
        <p>能量最小化参数：</p>
        <ul>
          <li>
            <p>最小化算法</p>
            <select v-model="newJob.integrator" name="integrator" id="integrator">
              <option disabled value="">---请选择---</option>
              <option value="steep">最陡下降法</option>
              <option value="cg">共额梯度法</option>
            </select>
          </li>
          <li>
            <p>收敛条件</p>
            <input v-model="newJob.emtol" type="text" name="emtol" id="emtol">
          </li>
          <li>
            <p>最大步数</p>
            <input v-model="newJob.nsteps" type="text" name="nsteps-em" id="nsteps-em">
          </li>
        </ul>
      </li>
      <li v-if="newJob.task==='md'">
        <p>分子动力学参数：</p>
        <ul>
          <li>
            <p>步长</p>
            <input v-model="newJob.dt" type="text" name="dt" id="dt">
          </li>
          <li>
            <p>模拟步数</p>
            <input v-model="newJob.nsteps" type="text" name="nsteps-md" id="nsteps-md">
          </li>
          <li>
            <p>输出间隔</p>
            <input v-model="newJob.nout" type="text" name="nout" id="nout">
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import MDButton from '../general/MDButton';
export default {
  name: 'StepTwo',
  components: {
    MDButton
  },
  data () {
    return {
      basicValue: {
        task: "",
        integrator: "",
        emtol: 0,
        nsteps: 0,
        dt: 0,
        nout: 0
      }
    }
  },
  computed: {
    newJob: function () {
      return this.$store.state.newJob
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
