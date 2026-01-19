<script setup lang="ts">
import { SETTINGS } from '@/config/settings.ts'
import AppsView from '@/components/AppsView.vue'
import HeadingTitle from '@/components/HeadingTitle.vue'
</script>

<template>
  <div class="container-fluid">
    <HeadingTitle fa="fa-brands fa-github">{{ SETTINGS.title }}</HeadingTitle>
    <p class="lead">
      Website for
      <a
        :href="SETTINGS.github"
        class="link-body-emphasis link-offset-1 link-underline-opacity-50 link-underline-opacity-75-hover"
        target="_blank"
        rel="noopener"
      >
        CSSNR GitHub</a
      >
      projects.
    </p>
    <AppsView />
  </div>
</template>

<!--<style scoped></style>-->
