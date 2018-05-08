<template>
  <div>
    <h2>STEP3: 设定温度耦合</h2>
    <hr>
    <ul>
      <li>
        <p>耦合方法</p>
        <select v-model="tempCoupl.tcoupl" name="tcoupl" id="tcoupl">
          <option disabled value="">---请选择---</option>
          <option value="">无耦合</option>
          <option value="v-rescale">速度重标法</option>
        </select>
      </li>
      <li v-if="tempCoupl.tcoupl">
        <p>耦合系数</p>
        <input v-model="tempCoupl.taut" type="text" name="taut" id="taut">
      </li>
      <li v-if="tempCoupl.tcoupl">
        <p>耦合温度</p>
        <input v-model="tempCoupl.reft" type="text" name="reft" id="reft">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'StepThree',
  data () {
    return {
      tempCoupl: {
        tcoupl: "",
        taut: 0,
        reft: 0
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
