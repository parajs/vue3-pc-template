
import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
      name: 'Home',
      path:"/",
      component: ()=> import("@/views/home/Home.vue"),
      meta: {
        keepAlive: true
      }
    },
    {
      name: 'Login',
      path:"/login",
      component: ()=> import("@/views/login/Login.vue"),
      meta: {
        keepAlive: true
      }
    },
    {
      name: 'Register',
      path:"/register",
      component: ()=> import("@/views/register/Register.vue"),
      meta: {
        keepAlive: true
      }
    },
  ];


  export default routes