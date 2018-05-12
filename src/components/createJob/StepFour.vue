<template>
  <div>
    <h2>STEP4: 设定压力耦合</h2>
    <hr>
    <ul>
      <li>
        <p>耦合方法</p>
        <select v-model="pressCoupl.pcoupl" name="pcoupl" id="pcoupl">
          <option disabled value="">---请选择---</option>
          <option value="">无耦合</option>
          <option value="Parrinello-Rahman">Parrinello-Rahman</option>
        </select>
      </li>
      <li v-if="pressCoupl.pcoupl">
        <p>耦合系数</p>
        <input v-model="pressCoupl.taup" type="text" name="taup" id="taup">
      </li>
      <li v-if="pressCoupl.pcoupl">
        <p>耦合压力</p>
        <input v-model="pressCoupl.refp" type="text" name="refp" id="refp">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'StepFour',
  data () {
    return {
      pressCoupl: {
        pcoupl: "",
        taup: 0,
        refp: 0
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
