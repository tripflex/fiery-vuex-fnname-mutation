
import Account from '@/views/Account'
import Home from '@/views/account/Home'
import Settings from '@/views/account/Settings'

import store from '@/vuex/store'

export default [
  {
    path: '/account',
    component: Account,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
        meta: {
          title: 'Home'
        },
				async beforeEnter(to, from, next) {
				  await store.dispatch("todos/loadTodos")
				  await store.dispatch("nottodos/loadTodos")
				  next()
				}
      },
      {
        path: 'settings',
        name: 'Settings',
        component: Settings,
        meta: {
          title: 'Settings'
        }
      }
    ]
  }
]
