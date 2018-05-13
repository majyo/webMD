<template>
  <div class="jobList">
      <p>{{msg}}</p>
      <ul v-if="testJobs.length">
        <JobInfo v-for="job in testJobs" v-bind:key="job.jobId" v-bind:jobInfo="job" v-on:delJob="deleteJob"></JobInfo>
      </ul>
  </div>
</template>

<script>
import JobInfo from './jobList/JobInfo.vue';
import { mapState } from 'vuex';

export default {
  name: 'JobListPage',
  components: {
    JobInfo
  },
  data () {
    return {
      msg: 'Welcome to job list page'
    }
  },
  computed: {
    testJobs: function () {
      return this.$store.state.jobs;
    }
  },
  methods: {
    deleteJob: function (id) {
      this.$store.commit('deleteJob', id);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
