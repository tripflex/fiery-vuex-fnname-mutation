import Account from '@/views/Account'
import Home from '@/views/account/Home'
import Settings from '@/views/account/Settings'
import Todos from '@/views/account/Todos'

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
      },
      {
        path: 'todos',
        name: 'Todos',
        component: Todos,
        meta: {
          title: 'Todos'
        },
				async beforeEnter(to, from, next) {
          await store.dispatch("todos/loadTodos")
          await store.dispatch("todos/loadActualTodos")
				  await store.dispatch("nottodos/loadTodos")
          await store.dispatch("nottodos/loadNotTodos")
				       
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
