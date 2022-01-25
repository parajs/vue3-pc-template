<template>
  <el-container>
    <el-aside :width="width">
      <div class="pa-3">
        <div class="flex mb-4">
          <h2 @click="goHome" class="title flexItem">{{ VITE_TITLE }}</h2>
          <i-ep-bell height="40" width="40"></i-ep-bell>
        </div>

        <el-button type="primary" size="large" style="width: 100%"
          >创建Lab</el-button
        >
      </div>

      <el-menu :default-active="path" :router="true">
        <el-sub-menu index="1">
          <template #title>
            <i-ep-menu height="20" width="20"></i-ep-menu>
            <span class="ml-2">我的Lab</span>
          </template>
          <el-menu-item
            :route="{ name: 'Lab', params: { id: 1 } }"
            index="/lab/1"
            >Lab标题</el-menu-item
          >
          <el-menu-item
            :route="{ name: 'Lab', params: { id: 2 } }"
            index="/lab/2"
            >Lab标题</el-menu-item
          >
        </el-sub-menu>
        <el-sub-menu index="4">
          <template #title>
            <i-ep-document-copy height="20" width="20"></i-ep-document-copy>
            <span class="ml-2">我参与的Lab</span>
          </template>
          <el-menu-item
            :route="{ name: 'Lab', params: { id: 3 } }"
            index="/lab/3"
            >Lab标题</el-menu-item
          >
          <el-menu-item
            :route="{ name: 'Lab', params: { id: 4 } }"
            index="/lab/4"
            >Lab标题</el-menu-item
          >
        </el-sub-menu>
        <el-menu-item index="3">
          <i-ep-document height="20" width="20"></i-ep-document>
          <span class="ml-2">草稿箱</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container :style="{ marginLeft: width }">
      <el-header>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
          <el-breadcrumb-item
            ><a href="/">promotion management</a></el-breadcrumb-item
          >
          <el-breadcrumb-item>promotion list</el-breadcrumb-item>
          <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>
      <el-main>
        <router-view v-slot="{ Component, route }">
          <keep-alive>
            <component
              v-if="route.meta && route.meta.keepAlive"
              :is="Component"
              :key="route.meta.usePathKey ? route.fullPath : undefined"
            />
          </keep-alive>
          <component
            v-if="!(route.meta && route.meta.keepAlive)"
            :is="Component"
            :key="route.meta.usePathKey ? route.fullPath : undefined"
          />
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts" setup>
const width = ref('260px');
const VITE_TITLE = import.meta.env.VITE_TITLE;
const router = useRouter();
const path = useRoute().path;
const goHome = () => {
  router.push('/');
};
</script>

<style scoped>
.el-aside {
  color: var(--el-text-color-primary);
  height: 100vh;
  background-color: white;
  box-shadow: 2px 2px 10px rgba(19, 17, 24, 0.2);
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
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
  margin: 0;
  font-size: 22px;
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
