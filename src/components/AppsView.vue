<script setup lang="ts">
import categories from '@/config/apps.ts'
import AppCard from '@/components/AppCard.vue'

import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

// const names = categories.map((x) => x.name)
// console.log('names:', names)
// console.log('categories:', categories)
</script>

<template>
  <div class="my-3">
    Jump to:
    <template v-for="(cat, idx) in categories" :key="cat.id">
      <a
        :href="`#${cat.id}`"
        class="link-body-emphasis link-offset-1 link-underline-opacity-50 link-underline-opacity-75-hover d-inline-block"
      >
        {{ cat.name }}</a
      >
      <template v-if="idx < categories.length - 1"> &bull; </template>
    </template>
  </div>

  <template v-for="cat in categories" :key="cat.id">
    <h2 :id="cat.id" class="aos-init aos-animate" data-aos="zoom-in">{{ cat.name }}</h2>
    <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3 mb-4">
      <template v-for="app in cat.apps" :key="app.name"><AppCard :app="app" /></template>
    </div>
  </template>
</template>

<!--<style scoped></style>-->
