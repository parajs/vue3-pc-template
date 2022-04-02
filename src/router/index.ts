import store from '@/store';
import { useTitle } from '@vueuse/core';
import { useCookies } from '@vueuse/integrations/useCookies';
import {
  createRouter,
  createWebHistory,
  RouteLocationNormalized,
  RouteLocationNormalizedLoaded,
  Router
} from 'vue-router';
import routes from './routes';

const { VITE_TOKEN_KEY, VITE_TITLE } = import.meta.env;

// scrollBehavior:
// - only available in html5 history mode
// - defaults to no scroll behavior
// - return false to prevent scroll
const scrollBehavior = function (
  to: RouteLocationNormalized,
  from: RouteLocationNormalizedLoaded,
  savedPosition: Record<string, any> | null
) {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition;
  } else {
    const position: Record<string, any> = {};

    // scroll to anchor by returning the selector
    if (to.hash) {
      position.el = to.hash;
      position.behavior = 'smooth';

      if (to.name == 'Item') {
        position.top = 200;
      }

      if (/^#\w/.test(to.hash) || document.querySelector(to.hash)) {
        return position;
      }

      // if the returned position is falsy or an empty object,
      // will retain current scroll position.
      return false;
    }

    return new Promise((resolve) => {
      // check if any matched route config has meta that requires scrolling to top
      if (to.matched.some((m) => m.meta.scrollToTop)) {
        // coords will be used if no selector is provided,
        // or if the selector didn't match any element.
        position.left = 0;
        position.top = 0;
      }

      resolve(position);
    });
  }
};

const router: Router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior
});

// authList
const authList: Array<string> = [
  'My',
  'MsgList',
  'FollowList',
  'Profile',
  'ModifyPwd',
  'MyResetPwd'
];

router.beforeEach(async (to, from, next) => {
  // set title
  useTitle((to.meta?.title as string) || (VITE_TITLE as string));

  // determine whether the user has logged in
  const hasToken = useCookies().get(VITE_TOKEN_KEY as string);
  if (hasToken) {
    // 已登录后访问登录页，重定向首页
    to.name == 'Login' ? next('/') : null;
    const hasId = store.state.user.user.id;
    if (!hasId) {
      // 刷新
      try {
        // get user info
        await store.dispatch('user/userGet');
      } catch (error) {
        // remove token and go to home
        await store.dispatch('user/userLogout');
      }
    }
    next();
  } else {
    // has no token
    if (authList.indexOf(to.name as string) == -1) {
      //public page  go directly
      next();
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next({ name: 'Login', query: { redirect: to.fullPath } });
    }
  }
});

export default router;
