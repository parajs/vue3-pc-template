<template>
  <div> Lab{{ id }} </div>
</template>
<script lang="ts" setup>
const id = useRoute().params.id;
</script>
