<script setup lang="ts">
defineProps<{
  fa: string
}>()
</script>

<template>
  <h1 class="animate__animated animate__zoomIn"><i :class="`${fa} me-2`"></i> <slot></slot></h1>
</template>

<!--<style scoped></style>-->
