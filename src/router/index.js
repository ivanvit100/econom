import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import More from '@/components/More'
import Story from '@/components/story'
import Start from '@/components/Start'
import Second from '@/components/Second'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/more',
      name: 'More',
      component: More
    },
    {
      path: '/story',
      name: 'Story',
      component: Story
    },
    {
      path: '/start',
      name: 'Start',
      component: Start
    },
    {
      path: '/second',
      name: 'Second',
      component: Second
    },
    {
		path: '*',
		redirect: '/',
	},
  ]
})
