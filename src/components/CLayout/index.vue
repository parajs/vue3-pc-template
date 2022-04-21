<template>
  <el-container>
    <el-aside :width="width">
      <div class="aside-top">
        <div @click="routerPush({ name: 'Home' })" class="title">
          {{ VITE_TITLE }}
        </div>
        <div class="user-box">
          <CAvatar size="45" :src="user.user.avatar" :color="user.user.userBackcolor" :text="user.user.userAbbr" />
          <div class="mt-1" style="font-size: 14px">{{
            user.user.nickName
          }}</div>
        </div>
        <div class="pl-2 pr-2 mt-3">
          <el-menu style="border: 0" :default-active="menuDefaultActive" :router="true" background-color="#f2f2f2">
            <el-menu-item index="/dashboard">
              <i-ep-expand height="20" width="20"></i-ep-expand>
              <span class="ml-2">dashboard</span>
            </el-menu-item>
            <el-menu-item index="/user">
              <i-ep-user height="20" width="20"></i-ep-user>
              <span class="ml-2">用户管理</span>
            </el-menu-item>
            <el-menu-item index="/wallpaper">
              <i-ep-files height="20" width="20"></i-ep-files>
              <span class="ml-2">壁纸管理</span>
            </el-menu-item>
            <el-menu-item index="/version">
              <i-ep-list height="20" width="20"></i-ep-list>
              <span class="ml-2">版本管理</span>
            </el-menu-item>
            <el-menu-item index="/notice">
              <i-ep-bell height="20" width="20"></i-ep-bell>
              <span class="ml-2">通知管理</span>
            </el-menu-item>
            <el-menu-item index="/system">
              <i-ep-document height="20" width="20"></i-ep-document>
              <span class="ml-2">系统管理</span>
            </el-menu-item>
          </el-menu>
        </div>
      </div>
      <div class="ml-2 mr-2">
        <el-button class="logout" size="large" type="info">退出登录</el-button>
      </div>
    </el-aside>
    <div class="section-left" :style="'width:' + width"></div>
    <div class="layout-main">
      <router-view v-slot="{ Component, route }">
        <keep-alive>
          <component v-if="route.meta && route.meta.keepAlive" :is="Component"
            :key="route.meta.usePathKey ? route.fullPath : undefined" />
        </keep-alive>
        <component v-if="!(route.meta && route.meta.keepAlive)" :is="Component"
          :key="route.meta.usePathKey ? route.fullPath : undefined" />
      </router-view>
    </div>
  </el-container>
</template>
<script lang="ts" setup>
import { routerPush } from '@/router';
const width = ref('180px');
const VITE_TITLE = import.meta.env.VITE_TITLE;
const path = useRoute().path;
const store = useStore();

const menuDefaultActive = ref(path);
const user = reactive({
  user: { avatar: '', userAbbr: '', userBackcolor: '' }
});

watchEffect(() => {
  user.user = store.state.user.user;
});
</script>

<style scoped>
.el-aside {
  color: var(--el-text-color-primary);
  height: 100vh;
  background-color: white;
  /* box-shadow: 2px 2px 10px rgba(19, 17, 24, 0.2); */
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: #f2f2f2;
}

.layout-main {
  overflow-x: hidden;
  flex: 1;
  overflow-y: auto;
}

.aside-top {
  height: calc(100vh - 60px);
  overflow-x: hidden;
  overflow-y: auto;
}

.user-box {
  background: #fff;
  padding: 20px 0;
  text-align: center;
  background-color: #aaaaaa;
}

.el-breadcrumb {
  margin-top: 20px;
}

.el-header {
  border-bottom: 1px solid #ddd;
}

.el-main {
  height: calc(100vh - 60px);
}

.title {
  font-weight: bold;
  font-size: 22px;
  color: black;
  text-decoration: none;
  cursor: pointer;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logout {
  width: 100%;
}

.is-active {
  background-color: rgba(215, 215, 215);
  color: #222;
  border-radius: 3px;
}
</style>
