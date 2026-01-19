<script setup lang="ts">
import { RouterLink } from 'vue-router'
import router from '../router/index.ts'
import { SETTINGS } from '@/config/settings.ts'
</script>

<template>
  <div class="container-fluid py-2">
    <div class="d-flex flex-column-reverse flex-sm-column flex-md-row">
      <div class="me-md-auto mb-2 mb-md-0 d-flex flex-column flex-sm-row">
        <div class="me-3 mb-2 mb-sm-0">
          <a class="link-body-emphasis text-decoration-none" :href="SETTINGS.github" target="_blank" rel="noopener">
            <i class="fab fa-github"></i> GitHub</a
          >
        </div>
        <div>
          <a class="link-body-emphasis text-decoration-none" :href="SETTINGS.kofi" target="_blank" rel="noopener">
            <i class="fa-classic fa-solid fa-heart"></i> Ko-fi</a
          >
        </div>
      </div>
      <div class="ms-md-auto">
        <nav aria-label="Secondary Navigation">
          <ol class="list-inline mb-1 d-flex flex-column flex-sm-row">
            <li class="list-inline-item mb-2 mb-sm-0" v-for="{ meta, path } in router.options.routes" :key="path">
              <RouterLink :to="path" class="text-decoration-none link-body-emphasis" active-class="fw-bold">
                {{ meta?.name }}
              </RouterLink>
            </li>
            <li class="list-inline-item">
              <a class="text-decoration-none link-body-emphasis" :href="SETTINGS.discord" target="_blank">
                Discord <i class="fa-solid fa-arrow-up-right-from-square fa-xs"></i
              ></a>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
</template>

<!--<style scoped></style>-->
