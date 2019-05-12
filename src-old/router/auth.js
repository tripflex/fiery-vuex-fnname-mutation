import Auth from '@/views/Auth'
import Login from '@/views/auth/Login'
import SignUp from '@/views/auth/SignUp'
import PasswordRecovery from '@/views/auth/PasswordRecovery'

export default [
  {
    path: '/',
    component: Auth,
    meta: {
      requiresGuest: true
    },
    children: [
      {
        path: 'login',
        name: 'Login',
        component: Login,
        meta: {
          title: 'Login'
        }
      },
      {
        path: 'signup',
        name: 'SignUp',
        component: SignUp,
        meta: {
          title: 'Sign Up'
        }
      },
      {
        path: 'recovery',
        name: 'PasswordRecovery',
        component: PasswordRecovery,
        meta: {
          title: 'PasswordRecovery'
        }
      }
    ]
  }
]
