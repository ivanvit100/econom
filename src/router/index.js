import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import More from '@/components/More'
import Story from '@/components/story'
import Start from '@/components/Start'
import Second from '@/components/Second'
import Third from '@/components/Third'
import Fourth from '@/components/Fourth'
import Fifth from '@/components/Fifth'
import Sixth from '@/components/Sixth'
import Story2 from '@/components/story2'
import FinalQuest from '@/components/FinalQuest'
import FinalStory from '@/components/FinalStory'
import Game from '@/components/Game'

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
      path: '/third',
      name: 'Third',
      component: Third
    },
    {
      path: '/fourth',
      name: 'Fourth',
      component: Fourth
    },
    {
      path: '/fifth',
      name: 'Fifth',
      component: Fifth
    },
    {
      path: '/sixth',
      name: 'Sixth',
      component: Sixth
    },
    {
      path: '/story2',
      name: 'Story2',
      component: Story2
    },
    {
      path: '/finalquest',
      name: 'FinalQuest',
      component: FinalQuest
    },
    {
      path: '/finalstory',
      name: 'FinalStory',
      component: FinalStory
    },
    {
      path: '/game/:gameID',
      name: 'Game',
      component: Game,
      props: true
    },
    {
		path: '*',
		redirect: '/',
	},
  ]
})
