<template>
  <div class="jobList">
      <p>{{msg}}</p>
      <ul v-if="jobs.length">
        <JobInfo v-for="job in jobs" v-bind:key="job.jobId" v-bind:jobInfo="job" v-on:delJob="deleteJob"></JobInfo>
      </ul>
  </div>
</template>

<script>
import JobInfo from './jobList/JobInfo.vue';

export default {
  name: 'JobListPage',
  components: {
    JobInfo
  },
  data () {
    return {
      msg: 'Welcome to job list page',
      jobs: [
        {
          jobId: 1,
          jobName: "test1",
          jobDetail: "test1 details"
        },
        {
          jobId: 2,
          jobName: "test2",
          jobDetail: "test1 details"
        },
        {
          jobId: 3,
          jobName: "test3",
          jobDetail: "test1 details"
        }
      ]
    }
  },
  methods: {
    deleteJob: function (idToDelete) {
      this.jobs = this.jobs.filter(
        job => {return job.jobId !== idToDelete}
        )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
