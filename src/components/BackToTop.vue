<script setup lang="ts">
import { onMounted, ref } from 'vue'

const backToTop = ref<HTMLElement | null>(null)

const onScroll = () => {
  // console.log('onScroll:', backToTop.value)
  if (!backToTop.value) return
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTop.value.style.display = 'block'
  } else {
    backToTop.value.style.display = 'none'
  }
}

function debounce<T extends (...args: unknown[]) => unknown>(fn: T, timeout = 250): (...args: Parameters<T>) => void {
  let timeoutID: ReturnType<typeof setTimeout>
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutID)
    timeoutID = setTimeout(() => fn(...args), timeout)
  }
}

onMounted(() => {
  // console.log('onMounted: window.addEventListener')
  window.addEventListener('scroll', debounce(onScroll))
})

const topClick = () => {
  if (window.location.hash) {
    window.location.hash = ''
  } else {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
}
</script>

<template>
  <button ref="backToTop" id="back-to-top" type="button" class="btn btn-outline-secondary" :onclick="topClick">
    <i class="fa-regular fa-square-caret-up"></i>
  </button>
</template>

<style scoped>
#back-to-top {
  position: fixed;
  bottom: 50px;
  right: 10px;
  display: none;
  z-index: 3;
}
</style>
