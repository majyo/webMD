import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import CreateJobPage from '@/components/CreateJobPage'
import DocumentPage from '@/components/DocumentPage'
import JobListPage from '@/components/JobListPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },

    {
      path: '/createJob',
      name: 'CreateJobPage',
      component: CreateJobPage
    },

    {
      path: '/document',
      name: 'DocumentPage',
      component: DocumentPage
    },

    {
      path: '/jobList',
      name: 'JobListPage',
      component: JobListPage
    }
  ]
})
