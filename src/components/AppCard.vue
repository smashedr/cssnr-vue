<script setup lang="ts">
import type { Application } from '../config/apps.ts'
import GHBadge from '@/components/GHBadge.vue'

defineProps<{
  app: Application
}>()
</script>

<template>
  <div class="col info-card aos-init aos-animate" data-aos="flip-up">
    <div class="card h-100">
      <div class="card-body">
        <div v-if="app.icon" class="float-end ps-2 pb-2">
          <a class="url-link" :href="app.url" :title="app.name" target="_blank" rel="noopener"
            ><img :src="app.icon" :alt="app.name" height="64" width="64" class="hvr-grow-lg"
          /></a>
        </div>
        <h4 class="card-title">
          <a
            :title="app.name"
            :href="app.url"
            target="_blank"
            rel="noopener"
            class="link-body-emphasis text-decoration-none url-link hvr-grow"
            >{{ app.name }}</a
          >
        </h4>
        <p class="card-text pe-2">{{ app.description }}</p>
      </div>
      <div class="card-footer d-flex">
        <div>
          <GHBadge
            :href="`https://github.com/${app.github}`"
            :src="`https://img.shields.io/github/stars/${app.github}?label=%20`"
            alt="GitHub"
            class="me-2"
          />
          <template v-if="app.links">
            <template v-for="([key, value], idx) in Object.entries(app.links)" :key="key">
              <a :href="value" target="_blank" rel="noopener" class="link-item">{{ key }}</a>
              <template v-if="idx < Object.keys(app.links).length - 1"> &bull; </template>
            </template>
          </template>
        </div>
        <div v-if="app.badges" class="ms-auto">
          <template v-for="badge in app.badges" :key="badge.src">
            <GHBadge :href="badge.href" :src="badge.src" alt="GitHub" class="me-2" />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<!--<style scoped></style>-->
