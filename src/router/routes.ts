import CLayout from '@/components/CLayout/index.vue';
import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    name: 'Home',
    path: '/',
    component: () => import('@/views/home/Home.vue'),
    meta: {
      keepAlive: true
    }
  },
  {
    name: 'Login',
    path: '/login',
    component: () => import('@/views/login/Login.vue'),
    meta: {
      keepAlive: true
    }
  },
  {
    name: 'Register',
    path: '/register',
    component: () => import('@/views/register/Register.vue'),
    meta: {
      keepAlive: true
    }
  },
  {
    name: 'Layout',
    path: '/layout',
    component: CLayout,
    children: [
      {
        name: 'Lab',
        path: '/lab/:id?',
        component: () => import('@/views/lab/Lab.vue'),
        meta: {
          usePathKey: true
        }
      }
    ]
  }
];

export default routes;
