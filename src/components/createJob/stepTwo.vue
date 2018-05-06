<template>
  <div>
    <h2>STEP2: 设定基本参数</h2>
    <hr>
    <ul>
      <li>
        <p>请选择计算方法</p>
        <select v-model="basicValue.task" name="computeMethod" id="computeMethod">
          <option disabled value="">---请选择---</option>
          <option value="em">能量最小化</option>
          <option value="md">分子动力学</option>
        </select>
      </li>
      <li v-if="basicValue.task==='em'">
        <p>请选择能量最小化参数：</p>
      </li>
      <li v-if="basicValue.task==='md'">
        <p>请选择分子动力学参数：</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'StepTwo',
  data () {
    return {
      basicValue: {
        task: "",
        integrator: "",
        emtol: 0,
        emstep: 0,
        nsteps: 0,
        dt: 0
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
