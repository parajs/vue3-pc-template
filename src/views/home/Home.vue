
<template>
    <CPage>
         <template #header>
            <CHeader />
        </template>
    </CPage>
</template>
<script lang="ts" setup>
import {
  Search,
  Edit,
  Check,
  Message,
  Star,
  Delete,
} from '@element-plus/icons-vue'

const { t } = useI18n({
    inheritLocale: true
})

</script>


