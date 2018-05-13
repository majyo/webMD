import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jobs: [
      {
        jobId: 1,
        jobName: "test1",
        jobDetail: "test1 details"
      },
      {
        jobId: 2,
        jobName: "test2",
        jobDetail: "test2 details"
      },
      {
        jobId: 3,
        jobName: "test3",
        jobDetail: "test3 details"
      },
      {
        jobId: 4,
        jobName: "test4",
        jobDetail: "test4 details"
      },
      {
        jobId: 5,
        jobName: "test5",
        jobDetail: "test5 details"
      }
    ],
    newJob: {
      jobId: 0,
      jobName: "",
      jobDetail: ""
    }
  },
  mutations: {
    deleteJob (state, id) {
      state.jobs = state.jobs.filter(
        job => {return job.jobId !== id}
      );
    }
  }
})
