<template>
  <VueLayoutPage>
    <template #header>
      <CHeader />
    </template>
    <div class="text-center">
      <h2>{{ t('title') }}</h2>
      <i-ep-add-location />
    </div>
  </VueLayoutPage>
</template>
<script lang="ts" setup>
const { t } = useI18n({
  inheritLocale: true
});
</script>
