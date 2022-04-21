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
    component: () => import('@/views/login/Login.vue')
  },
  {
    name: 'Register',
    path: '/register',
    component: () => import('@/views/register/Register.vue')
  },
  {
    name: 'Layout',
    path: '/',
    component: CLayout,
    meta: {
      keepAlive: true
    },
    redirect: {
      path: '/dashboard'
    },
    children: [
      {
        name: 'Dashboard',
        path: '/dashboard',
        component: () => import('@/views/dashboard/dashboard.vue')
      },
      {
        name: 'User',
        path: '/user',
        component: () => import('@/views/user/user.vue')
      },
      {
        name: 'System',
        path: '/system',
        component: () => import('@/views/system/system.vue')
      },
      {
        name: 'Notice',
        path: '/notice',
        component: () => import('@/views/notice/notice.vue')
      },
      {
        name: 'Version',
        path: '/version',
        component: () => import('@/views/version/version.vue')
      },
      {
        name: 'Wallpaper',
        path: '/wallpaper',
        component: () => import('@/views/wallpaper/wallpaper.vue')
      }
    ]
  }
];

export default routes;
