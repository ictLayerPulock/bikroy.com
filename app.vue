<script setup lang="ts">
// You might choose this based on an API call or logged-in status
const layout = "desktop";
</script>
<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>
