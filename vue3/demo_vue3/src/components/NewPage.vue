<template>
  <h1>{{ title }}</h1>
  <p>{{ JSON.stringify(route) }}</p>
  <p>path:{{ route.path }}</p>
  <p>name:{{ route.name }}</p>
  <p>hash:{{ route.hash }}</p>
  <p>params:{{ route.params }}</p>
  <p>query:{{ route.query }}</p>
  <p>fullPath:{{ route.fullPath }}</p>
  <p>meta:{{ route.meta }}</p>
  <button @click="toBack">ToBack</button>
  <button @click="goIndex">goIndex</button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  name: 'NewPage',
  setup() {
    const title = ref('新页面')
    const route = useRoute()
    const router = useRouter()
    function toBack(){
      router.back()
    }
    function goIndex(){
      router.replace('/')
    }
    return {
      title,
      route,
      toBack,
      goIndex
    }
  }
})
</script>

<style scoped>
</style>