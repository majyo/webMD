<template>
  <div>
    <table>
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
          <MDButton>执行计算</MDButton>
          <MDButton>导出作业</MDButton>
          <MDButton>删除作业</MDButton>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import MDButton from '../general/MDButton';
export default {
  name: 'JobInfo',
  components: {
    MDButton
  },
  data () {
    return {
      jobInfo: {
        jobId: 0,
        jobName: "",
        jobDetail: ""
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
