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
        <ul>
          <li>
            <p>最小化算法</p>
            <select v-model="basicValue.integrator" name="integrator" id="integrator">
              <option disabled value="">---请选择---</option>
              <option value="steep">最陡下降法</option>
              <option value="cg">共额梯度法</option>
            </select>
          </li>
          <li>
            <p>收敛条件</p>
            <input v-model="basicValue.emtol" type="text" name="emtol" id="emtol">
          </li>
          <li>
            <p>最大步数</p>
            <input v-model="basicValue.nsteps" type="text" name="nsteps-em" id="nsteps-em">
          </li>
        </ul>
      </li>
      <li v-if="basicValue.task==='md'">
        <p>请选择分子动力学参数：</p>
        <ul>
          <li>
            <p>步长</p>
            <input v-model="basicValue.dt" type="text" name="dt" id="dt">
          </li>
          <li>
            <p>模拟步数</p>
            <input v-model="basicValue.nsteps" type="text" name="nsteps-md" id="nsteps-md">
          </li>
          <li>
            <p>输出间隔</p>
            <input v-model="basicValue.nout" type="text" name="nout" id="nout">
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
