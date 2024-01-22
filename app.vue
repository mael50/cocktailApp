<script setup>

const isLoading = ref(true)

onMounted(async () => {
  await Promise.all([
  ])
  isLoading.value = false
})
</script>

<template>
  <Loader v-if="isLoading" />
  <div v-else>
    <AppHeader />
    <NuxtPage />
    <AppFooter />
  </div>
</template>
