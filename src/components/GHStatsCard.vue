<script setup lang="ts">
defineProps<{
  href: string
  src: string
}>()
</script>

<template>
  <a :href="href" class="text-decoration-none" target="_blank" rel="noopener">
    <picture>
      <source
        :srcset="`${src}&theme=dark`"
        media="(prefers-color-scheme: dark), (prefers-color-scheme: no-preference)"
      />
      <source :srcset="`${src}&theme=default`" media="(prefers-color-scheme: light)" />
      <img alt="GitHub Stats Dynamic Display" class="img-fluid" :src="src" />
    </picture>
  </a>
</template>

<!--<style scoped></style>-->
