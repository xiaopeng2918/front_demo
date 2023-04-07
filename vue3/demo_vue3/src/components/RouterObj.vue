<template>
  <h1>{{ title }}</h1>
  <button @click="goToNewPage">GoToNewPage</button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'RouterObj',
  setup() {
    const title = ref('yxp2918')
    const router = useRouter()
    function goToNewPage() {
      router.push('/newpage')
    }
    return {
      title,
      goToNewPage
    }
  }
})
</script>

<style scoped>
</style>