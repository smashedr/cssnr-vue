<script setup lang="ts">
defineProps<{
  href: string
  src: string
  alt: string
}>()
</script>

<template>
  <a :title="alt" :href="href" target="_blank" rel="noopener"><img :alt="alt" :src="src" class="mb-1 hvr-grow" /></a>
</template>

<!--<style scoped></style>-->
