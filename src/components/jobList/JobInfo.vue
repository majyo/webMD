<template>
  <table class="jobInfo">
    <tr>
      <th>作业序号</th>
      <th>作业名称</th>
      <th>作业信息</th>
      <th>操作</th>
    </tr>
    <tr>
      <td>{{jobInfo.jobId}}</td>
      <td>{{jobInfo.jobName}}</td>
      <td>{{jobInfo.jobDetail}}</td>
      <td>
        <MDButton bType="execute">执行计算</MDButton>
        <MDButton bType="normal">导出作业</MDButton>
        <MDButton bType="delete" v-on:click="$emit('delJob', jobInfo.jobId)">删除作业</MDButton>
      </td>
    </tr>
  </table>
</template>

<script>
import MDButton from '../general/MDButton';
export default {
  name: 'JobInfo',
  components: {
    MDButton
  },
  props : {
    jobInfo : {
      type: Object,
      required: true
    }
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jobInfo {
  margin-left: auto;
  margin-right: auto;
}
</style>
