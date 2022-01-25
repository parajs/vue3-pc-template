<template>
  <ElConfigProvider :locale="zhCn">
    <Suspense>
      <template #default>
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
      </template>
      <template #fallback> Loading... </template>
    </Suspense>
  </ElConfigProvider>
</template>
<script lang="ts" setup>
import zhCn from 'element-plus/lib/locale/lang/zh-cn';
import './App.css';
</script>
