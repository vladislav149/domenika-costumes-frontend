import {createRouter, createWebHashHistory} from 'vue-router'
import store from '@/store'
import Home from '@/views/Home.vue'
import Place from '@/views/Place.vue'
import Guest from '@/views/Guest.vue'
import Invite from '@/views/Invite.vue'
import E404 from '@/views/E404.vue'

const authGuard = function (to, from, next) {
  if (!localStorage.getItem('token') && !to.params.idInvite) {
    next({name: 'guest'})
  } else if (!localStorage.getItem('token')) {
    store
      .dispatch('employee/login', to.params.idInvite)
      .then(() => next())
      .catch(() => {
        store.dispatch('employee/logout')
        next({name: 'guest'})
      })
  } else if (to.params.idInvite) {
    store
      .dispatch('employee/login', to.params.idInvite)
      .then(() => next())
      .catch(() => {
        store.dispatch('employee/logout')
        next({name: 'guest'})
      })
  } else {
    const token = localStorage.getItem('token')
    store
      .dispatch('employee/isAuth', token)
      .then(() => next())
      .catch(() => {
        store.dispatch('employee/logout')
        next({name: 'guest'})
      })
  }
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    beforeEnter: authGuard
  },
  {
    path: '/guest',
    name: 'guest',
    component: Guest
  },
  {
    path: '/place/:id',
    name: 'place',
    component: Place,
    beforeEnter: authGuard
  },
  {
    path: '/invite/:idInvite',
    name: 'invite',
    component: Invite,
    beforeEnter: authGuard
  },
  {
    path: '/:any(.*)',
    name: 'E404',
    component: E404,
    beforeEnter: authGuard
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
